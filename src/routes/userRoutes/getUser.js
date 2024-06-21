const data = require('../../postgres-data');

module.exports = async (req, res) => {
  const id = parseInt(req.url.split('/')[2]);
  const result = await data.getUserById(id);

  if (result) {
    res.writeHead(200);
    res.end(JSON.stringify(result));
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ message: 'User not found' }));
  }
}
