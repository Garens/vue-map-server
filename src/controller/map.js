const BaseRest = require('./rest.js');
import { get } from "../utils/index"

module.exports = class extends BaseRest {


  indexAction() {
    return this.display();
  }

  //获取疫情数据
  async getInfoListAction() {
    try {
      const url = "https://c.m.163.com/ug/api/wuhan/app/data/list-total"
      let data = await get(url);
      return this.json({
        data,
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
   * 获取组织列表
   * 地图中间部分信息
   */
  async getAllOrgBranchListAction() {
    try {
      let list = await think.model('map').getOrgList()
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
