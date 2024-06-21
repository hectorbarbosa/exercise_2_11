// import { deleteUserById } from '../../postgres-data';
const data = require('../../postgres-data');

module.exports = async (req, res) => {
  const id = parseInt(req.url.split('/')[2]);
  const result = await data.deleteUserById(id);

  if (result.affected) {
    res.writeHead(200);
    res.end(JSON.stringify(result.affected));
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ message: 'Resource not found' }));
  }
}
