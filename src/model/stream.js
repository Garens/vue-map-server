module.exports = class extends think.Model {
  async addItem(ctx) {
    let model = think.model('sys_stream');
    let ip = ctx.ip;
    ip = ip.replace('::ffff:', '')
    if (ip == '::1') {
      ip = 'localhost'
    }
    let typeStr = ctx.req.headers['user-agent'];
    let type = ""
    if (typeStr.indexOf('Windows NT') > -1) {
      type = "Windows"
    } else if (typeStr.indexOf('Mac OS') > -1) {
      type = "iPhone"
    } else {
      type = "others"
    }
    let status = ctx.res.statusCode || "";

    let item = {
      ip: ip,
      datetime: think.datetime(),
      type,
      status
    }
    // console.log(111111, item)
    let insertId = await model.add(item);
    return insertId;
  }
};
