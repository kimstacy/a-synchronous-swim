const messages = []; // the storage unit for messages

module.exports.enqueue = (message) => {
  console.log(`MQ: Enqueing message: ${message}`);
  messages.push(message);
};

module.exports.dequeue = () => {
  console.log(`MQ: Dequeing message`);
  // returns undefined if messages array is empty
  return messages.shift();
};