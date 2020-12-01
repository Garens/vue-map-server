module.exports = class extends think.Model {
  async getOrgList() {
    let model = think.model('sys_org');
    let data = await model.select();
    //data returns [{name: 'thinkjs', email: 'admin@thinkjs.org'}, ...]
    return data;
  }

  async getStreemList() {
    const sql = `select DATE_FORMAT(datetime,'%Y-%m-%d') days,count(id) count from sys_stream group by days ORDER BY days; `
    // let model = think.model('sys_stream');
    let data = await this.query(sql);

    return data;
  }

  /**
   * @datacenter
   */
  async getShowIndex() {
    let model = think.model('sys_org');
    let sModel = think.model('sys_stream');
    let onlineDevice = await model.where({
      status: '1000'
    }).count()
    let useDevice = await model.where({
      status: ['1000', '2000']
    }).count()
    let allDevice = await model.count();
    const sql = `SELECT max(s.count) as max FROM ( SELECT DATE_FORMAT(datetime, '%Y-%m-%d') days, count(id) count FROM sys_stream GROUP BY days ORDER BY days ) s;`
    let sqlRes = await this.query(sql);
    let maxStream = sqlRes[0].max;
    const sql1 = `SELECT min(s.count) as min FROM ( SELECT DATE_FORMAT(datetime, '%Y-%m-%d') days, count(id) count FROM sys_stream GROUP BY days ORDER BY days ) s;`
    let sqlRes1 = await this.query(sql1);
    let minStream = sqlRes1[0].min;
    const sql2 = `SELECT avg(s.count) as avg FROM ( SELECT DATE_FORMAT(datetime, '%Y-%m-%d') days, count(id) count FROM sys_stream GROUP BY days ORDER BY days ) s;`
    let sqlRes2 = await this.query(sql2);
    let avgStream = sqlRes2[0].avg;
    let allStream = await sModel.count();
    let obj = {
      onlineDevice,
      allDevice,
      useDevice,
      maxStream,
      minStream,
      avgStream,
      allStream
    }
    return obj;
  }

  /**
   * 获取节点分布统计
   */
  async getOrgDist() {
    let model = think.model('sys_org');
    let res = await model.select();
    let list = [];
    res.forEach(item => {
      if (item.pid == 0) {
        list.push(item);
      }
    });
    list.forEach(item => {
      let count = 1;
      res.forEach(_item => {
        if (item.id == _item.pid) {
          count++;
        }
      })
      item.value = count;
      return item;
    })
    return list;
  }

  /**
   * 获取设备分类统计
   */
  async getDeviceTypeCount() {
    let sql = `select count(1) as value from sys_org s GROUP BY s.type ORDER BY s.type;`;
    let res = await this.query(sql);
    let data = [];
    res.forEach(item => {
      data.push(item.value)
    })
    let dicSql = `SELECT a.value FROM sys_dic a WHERE pid = (SELECT id FROM sys_dic b WHERE type = 'deviceType') ORDER BY a.key;`;
    let res2 = await this.query(dicSql);
    let types = [];
    res2.forEach(item => {
      types.push(item.value)
    })
    return { data, types };
  }

  /**
   * 获取人员分类信息
   */
  async getPeopleTypeCount() {
    let sql = `SELECT bb.sVal AS name, count(1) AS count FROM sys_people aa LEFT JOIN ( SELECT a.KEY AS sKey, a. VALUE AS sVal FROM sys_dic a WHERE pid = ( SELECT id FROM sys_dic b WHERE type = 'peopleType' )) bb ON aa.type = bb.sKey GROUP BY aa.type;`;
    let res = await this.query(sql);
    return res;
  }

  /**
   * 获取访问量排行榜
   */
  async getTopStream() {
    let sql = `SELECT DATE_FORMAT(datetime, '%Y-%m-%d') days, count(id) count FROM sys_stream GROUP BY days ORDER BY count DESC;`;
    let res = await this.query(sql);
    return res;
  }

  /**
   * 获取最新访问信息
   */
  async getNewStream() {
    let sql = `SELECT * from sys_stream ORDER BY datetime DESC  LIMIT 10;`;
    let res = await this.query(sql);
    return res;
  }

  /**
   * 获取运行情况
   */
  async getOperation() {
    let sql = `SELECT s.status,count(1) as count from sys_org s GROUP BY s.status;`;
    let res = await this.query(sql);
    let obj = {};
    res.forEach(item => {
      obj[item.status] = item.count
    })
    return obj;
  }

  /**
   * 获取设备异常排行
   */
  async getDeviceWarning() {
    let sql = `SELECT a.name as name, a.id as deviceId, IFNULL(c.count, 0) as count FROM sys_org a LEFT JOIN ( SELECT b.deviceId, count(1) AS count FROM sys_log b WHERE b. STATUS = '2' GROUP BY b.deviceId ) c ON a.id = c.deviceId ORDER BY count DESC;`;
    let res = await this.query(sql);
    return res;
  }

  /**
   * 获取最新消息列表
   */
  async getMsgList() {
    let sql = `SELECT a.*,b.name from sys_log a LEFT JOIN sys_org b on a.deviceId = b.id ORDER BY a.time  desc LIMIT 20;`;
    let res = await this.query(sql);
    return res;
  }
};
