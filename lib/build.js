const http = require('http');

const getIndexPage = (app) => {
  return new Promise((resolve, reject) => {
    const server = app.listen(0, () => {
      const url = `http://127.0.0.1:${server.address().port}/`;

      try {
        http.get(url, res => {
          const chunks = [];

          res.on('data', chunk => chunks.push(chunk))
          .on('end', () => resolve(Buffer.concat(chunks).toString()))
          .on('error', () => reject(`Error building features`))
        })
      } catch(err) {
        reject(`Error building features. Is not possible to get features to generate a build`);
      }
    });
  });
}

module.exports = {
  getIndexPage,
};

