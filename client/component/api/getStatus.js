import openSocket from 'socket.io-client';
const  socket = openSocket('https://parkingbackend4.herokuapp.com/');

function getStatus(cb) {
  socket.on('timer', timestamp => cb(null, timestamp));
  socket.emit('getData', 2000);
}

export default getStatus;