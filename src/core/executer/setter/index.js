/**
 * Increment the index of the element of the pathOfLocation.
 * */
exports.indexIncrement = sessionId => __store[sessionId].pathOfLocation = `${getter.parentObjectPath(sessionId)}[${getter.index(sessionId) + 1}]`;

/**
 * Upgrade the pathOfLocation.
 * */
exports.upgrade = (sessionId, typeOfInnerObject) => __store[sessionId].pathOfLocation += `.${typeOfInnerObject}[0]`;

/**
 * Downgrade the pathOfLocation.
 * */
exports.downgrade = sessionId => {
  let lastObjectIndex = getter.pathOfLocation(sessionId).lastIndexOf('.');
  __store[sessionId].pathOfLocation = getter.pathOfLocation(sessionId).substring(0, lastObjectIndex);
};

/**
 * Sets the last output.
 * All outputs in once.
 * */
exports.output = function (sessionId, status, output) {
  if (status === 'success' && output) {
    __store[sessionId].output += `${output}\n`;
  }

  __store[sessionId].status = status;
};

/**
 * Sets list of variables for current application.
 * Use case: to check for undefined variable.
 * */
exports.variables = (sessionId, variables) => __store[sessionId].variables = variables;

/**
 * Initialize the session time start.
 * Use case: to check for timeout.
 * */
exports.sessionTime = sessionId => __store[sessionId].time = new Date();

/**
 * Sets input text.
 * Input text receives from client.
 * */
exports.input = (sessionId, input) => __store[sessionId].input = input;

/**
 * Sets session language.
 * Standard: ISO 639-1.
 * */
exports.language = (sessionId, language) => __language[sessionId] = language;

let getter = require('../getter');