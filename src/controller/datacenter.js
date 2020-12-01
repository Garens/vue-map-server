const BaseRest = require('./rest.js');

module.exports = class extends BaseRest {


  indexAction() {
    return this.display();
  }

  /**
   * 获取组织列表
   * 地图中间部分信息
   */
  async getAllOrgBranchListAction() {
    try {
      let list = await think.model('datacenter').getOrgList()
      let resultObject = list

      return this.json({
        resultObject,
        msg: "请求成功",
        code: 200
      });
    } catch (err) {
      console.log(err)
      return this.json({
        err,
        msg: "请求失败",
        code: 500
      });
    }

  }
  /**
     * 获取实时流量数据
     * 地图中间下部分信息
     */
  async getPassengerFlowVosAction() {
    try {
      let list = await think.model('datacenter').getStreemList()
      let resultObject = list
      return this.json({
        resultObject,
        msg: "请求成功",
        code: 200
      });
    } catch (err) {
      console.log(err)
      return this.json({
        err,
        msg: "请求失败",
        code: 500
      });
    }
  }
  //获取地图边上统计数据
  async getShowIndexStatisticsAction() {
    try {
      let list = await think.model('datacenter').getShowIndex()
      let resultObject = list
      return this.json({
        resultObject,
        msg: "请求成功",
        code: 200
      });
    } catch (err) {
      console.log(err)
      return this.json({
        err,
        msg: "请求失败",
        code: 500
      });
    }
  }

  //获取数据节点分布统计
  async getOrgDistributionAction() {
    try {
      let list = await think.model('datacenter').getOrgDist()
      let resultObject = list
      return this.json({
        resultObject,
        msg: "请求成功",
        code: 200
      });
    } catch (err) {
      console.log(err)
      return this.json({
        err,
        msg: "请求失败",
        code: 500
      });
    }
  }

  //获取设备分类统计
  async getDeviceStatisticsAction() {
    try {
      let list = await think.model('datacenter').getDeviceTypeCount()
      let resultObject = list
      return this.json({
        resultObject,
        msg: "请求成功",
        code: 200
      });
    } catch (err) {
      console.log(err)
      return this.json({
        err,
        msg: "请求失败",
        code: 500
      });
    }
  }

  //获取人员岗位信息
  async getStaffStatisticsAction() {
    try {
      let list = await think.model('datacenter').getPeopleTypeCount()
      let resultObject = list
      return this.json({
        resultObject,
        msg: "请求成功",
        code: 200
      });
    } catch (err) {
      console.log(err)
      return this.json({
        err,
        msg: "请求失败",
        code: 500
      });
    }
  }

  //获取访问量排行榜
  async getTopStreamAction() {
    try {
      let list = await think.model('datacenter').getTopStream()
      let resultObject = list
      return this.json({
        resultObject,
        msg: "请求成功",
        code: 200
      });
    } catch (err) {
      console.log(err)
      return this.json({
        err,
        msg: "请求失败",
        code: 500
      });
    }
  }

  //获取最新访问信息
  async getAwardsAction() {
    try {
      let list = await think.model('datacenter').getNewStream()
      let resultObject = list
      return this.json({
        resultObject,
        msg: "请求成功",
        code: 200
      });
    } catch (err) {
      console.log(err)
      return this.json({
        err,
        msg: "请求失败",
        code: 500
      });
    }
  }

  //获取运行情况
  async getOperationAction() {
    try {
      let list = await think.model('datacenter').getOperation()
      let resultObject = list
      return this.json({
        resultObject,
        msg: "请求成功",
        code: 200
      });
    } catch (err) {
      console.log(err)
      return this.json({
        err,
        msg: "请求失败",
        code: 500
      });
    }
  }

  //获取设备异常排行
  async getDeviceWarningAction() {
    try {
      let list = await think.model('datacenter').getDeviceWarning()
      let resultObject = list
      return this.json({
        resultObject,
        msg: "请求成功",
        code: 200
      });
    } catch (err) {
      console.log(err)
      return this.json({
        err,
        msg: "请求失败",
        code: 500
      });
    }
  }

  //获取最新消息列表
  async getShowMessageListAction() {
    try {
      let list = await think.model('datacenter').getMsgList()
      let resultObject = list
      return this.json({
        resultObject,
        msg: "请求成功",
        code: 200
      });
    } catch (err) {
      console.log(err)
      return this.json({
        err,
        msg: "请求失败",
        code: 500
      });
    }
  }


};

