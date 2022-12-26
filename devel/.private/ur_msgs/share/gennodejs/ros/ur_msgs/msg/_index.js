
"use strict";

let Digital = require('./Digital.js');
let ToolDataMsg = require('./ToolDataMsg.js');
let MasterboardDataMsg = require('./MasterboardDataMsg.js');
let Analog = require('./Analog.js');
let IOStates = require('./IOStates.js');
let RobotStateRTMsg = require('./RobotStateRTMsg.js');
let RobotModeDataMsg = require('./RobotModeDataMsg.js');

module.exports = {
  Digital: Digital,
  ToolDataMsg: ToolDataMsg,
  MasterboardDataMsg: MasterboardDataMsg,
  Analog: Analog,
  IOStates: IOStates,
  RobotStateRTMsg: RobotStateRTMsg,
  RobotModeDataMsg: RobotModeDataMsg,
};
