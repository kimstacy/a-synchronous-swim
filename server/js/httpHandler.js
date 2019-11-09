const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const messagequeue = require('./messageQueue');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  res.writeHead(200, headers);

  const swimCommand = ['left', 'right', 'up', 'down'];
  let index = Math.floor(Math.random() * 4);

  if (req.method === 'GET') {
    //res.write(swimCommand[index]);
    var tryThis = messagequeue.dequeue();
    console.log(`tryThis = ${tryThis}`);
    var newCommand = 'down';
    res.write(newCommand);
  }
  res.end();
  next(); // invoke next() at the end of a request to help with testing!
};

