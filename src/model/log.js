module.exports = class extends think.Model {
  async addItem(params) {
    let model = think.model('sys_log');

    let item = {
      ...params,
      time: think.datetime(),
    }
    // console.log(111111, item)
    let insertId = await model.add(item);
    return insertId;
  }
};
