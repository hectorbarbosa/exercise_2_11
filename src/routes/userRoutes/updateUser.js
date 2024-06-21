const data = require('../../postgres-data');

module.exports = (req, res) => {
  const id = parseInt(req.url.split('/')[2]);

  let body = '';

  req.on('data', chunk => {
  body += chunk;
  });

  req.on('end', async () => {
    const parsedBody = new URLSearchParams(body);
    const updatedParams = {}
    // console.log(parsedBody);

    parsedBody.forEach((value, key) => updatedParams[key] = value);
    updatedParams.id = id;
    // console.log(updatedParams);
    const result = await data.updateUserById(id, updatedParams);

    if (result) {
      res.writeHead(200);
      res.end(JSON.stringify(result));
    } else {
      res.writeHead(404);
      res.end(JSON.stringify({ message: 'Resource not found' }));
    }
  });
}
