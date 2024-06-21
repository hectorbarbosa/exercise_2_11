// import { getUsers } from '../../postgres-data';
const data = require('../../postgres-data');

module.exports = async (req, res) => {
  const users = await data.getUsers();
  if (users === null) {
    res.writeHead(404);
    res.end(JSON.stringify({ message: 'Resource not found' }));
  } else {
    res.writeHead(200);
    res.end(JSON.stringify(users));
  }
}
