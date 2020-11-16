
const request = require('request');

export function get(url, params) {
  return new Promise((resolve, reject) => {
    request.get({
      url: url
    },
      function (error, response, body) {
        if (!error && response.statusCode == 200) {
          let data = JSON.parse(body)
          resolve(data)
        } else {
          reject(error)
        }
      });
  })
  
}