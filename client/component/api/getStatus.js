import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:8000');

function getStatus(cb) {
  socket.on('timer', timestamp => cb(null, timestamp));
  socket.emit('getData', 2000);
}

export default getStatus;