const Base = require('./base.js');

module.exports = class extends Base {
  indexAction() {
    return this.display();
  }
  apiAction() {
    console.log(11111111);
  }
};
