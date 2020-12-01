const BaseRest = require('./rest.js');

module.exports = class extends BaseRest {

  indexAction() {
    return this.display();
  }

  /**
   * 添加日志信息
   */
  async addAction() {
    try {
      console.log('=======111=======', this.isPost)
      if (this.isPost) {
        let resultObject = await think.model('log').addItem(this.post())

        return this.json({
          resultObject,
          msg: "请求成功",
          code: 200
        });
      } else {
        return this.json({
          err: '请求类型错误',
          msg: "请求类型错误",
          code: 500
        });
      }

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
