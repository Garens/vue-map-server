const BaseRest = require('./rest.js');
import { get } from "../utils/index"

module.exports = class extends BaseRest {


  indexAction() {
    return this.display();
  }
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
};
