const BaseRest = require('./rest.js');
import { get } from "../utils/index"

module.exports = class extends BaseRest {


  indexAction() {
    return this.display();
  }


  /**
   * 添加流量数据
   */
  async ihaveseeAction() {
    try {
      let resultObject = await think.model('stream').addItem(this.ctx)

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
