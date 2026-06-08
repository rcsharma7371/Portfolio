const { v4: uuidv4 } = require("uuid");

const createSession = () => {
  return uuidv4();
};

module.exports = {
  createSession,
};
