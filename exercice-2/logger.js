import fs from "fs";
//  MODULE TO READ AND WRITE ON LOG FILE

const LOG_FILE = "./logs.txt";

/**
 * Read the logs
 * @returns the current log file content
 */
function readLog() {
  let content = fs.readFileSync(LOG_FILE).toString();
  return content;
}

//  Write a cleaner version of writeLog() function, in  logger.js file
//    - You will need to use  appendFilesync() from fs module  - instead of writeFileSync()
//    - You can check the docuement :   https://www.geeksforgeeks.org/node-js-fs-appendfilesync-function/

/**
 * Add a new log to the file
 * @param {string} newLog - the log to add to the file
 */
function writeLog(newLog) {
  let content = readLog();
  content += "\n" + newLog + " - at " + new Date().toLocaleTimeString();
  fs.appendFilesync(LOG_FILE, content);
}

export { LOG_FILE, readLog, writeLog };