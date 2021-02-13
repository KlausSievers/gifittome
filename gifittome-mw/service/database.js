var mysql = require('mysql');


let dbConfig = null;
if (process.env.NODE_ENV === 'production') {
  dbConfig = {
    host: 'localhost',
    user: 'gifittome',
    password: 'Jbh033f%',
    database:
      'gifittome'
  };
} else {
  dbConfig = {
    host: '192.168.178.52',
    user: 'root',
    password: 'root',
    database:
      'gifittome'
  };
}

let connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
  if (err) throw err;

  console.log('Connected!');
});

function handleDisconnect(conn) {
  conn.on('error', function (err) {
    if (!err.fatal) {
      return;
    }

    if (err.code !== 'PROTOCOL_CONNECTION_LOST') {
      throw err;
    }

    console.log('Re-connecting lost connection: ' + err.stack);

    connection = mysql.createConnection(dbConfig);
    handleDisconnect(connection);
    connection.connect();
  });
}

handleDisconnect(connection);


module.exports = connection;