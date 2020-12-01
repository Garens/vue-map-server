module.exports = class extends think.Model {
  async getOrgList() {
    let model = think.model('sys_org');
    let data = await model.select();
    //data returns [{name: 'thinkjs', email: 'admin@thinkjs.org'}, ...]
    return data;
  }
};
