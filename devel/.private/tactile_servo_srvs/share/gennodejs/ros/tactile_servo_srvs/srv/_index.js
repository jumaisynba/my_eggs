
"use strict";

let begin_control = require('./begin_control.js')
let set_external_motion = require('./set_external_motion.js')
let set_des_feats_srv = require('./set_des_feats_srv.js')
let start_servo_controller = require('./start_servo_controller.js')
let pose_arm_init = require('./pose_arm_init.js')
let choose_configuration_singularity = require('./choose_configuration_singularity.js')
let select_matrix = require('./select_matrix.js')

module.exports = {
  begin_control: begin_control,
  set_external_motion: set_external_motion,
  set_des_feats_srv: set_des_feats_srv,
  start_servo_controller: start_servo_controller,
  pose_arm_init: pose_arm_init,
  choose_configuration_singularity: choose_configuration_singularity,
  select_matrix: select_matrix,
};
