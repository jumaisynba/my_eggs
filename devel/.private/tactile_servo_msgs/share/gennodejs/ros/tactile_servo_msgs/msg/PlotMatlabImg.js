// Auto-generated. Do not edit!

// (in-package tactile_servo_msgs.msg)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class PlotMatlabImg {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.header = null;
      this.fx = null;
      this.fy = null;
      this.fz = null;
      this.fwx = null;
      this.fwy = null;
      this.fwz = null;
      this.coc_x = null;
      this.coc_y = null;
      this.f = null;
      this.zmp_x = null;
      this.zmp_y = null;
      this.orient_z = null;
      this.cop_x = null;
      this.cop_y = null;
      this.coc_xd = null;
      this.coc_yd = null;
      this.fd = null;
      this.zmp_xd = null;
      this.zmp_yd = null;
      this.orient_zd = null;
      this.cop_xd = null;
      this.cop_yd = null;
      this.num_contours = null;
      this.x_now = null;
      this.y_now = null;
      this.z_now = null;
      this.wx_now = null;
      this.wy_now = null;
      this.wz_now = null;
      this.ww_now = null;
      this.x_des = null;
      this.y_des = null;
      this.z_des = null;
      this.wx_des = null;
      this.wy_des = null;
      this.wz_des = null;
      this.ww_des = null;
      this.x_c = null;
      this.y_c = null;
      this.z_c = null;
      this.dt = null;
      this.time = null;
      this.test_time2 = null;
      this.img = null;
      this.is_in_contact_ur = null;
      this.pixels_in_contact_ur = null;
      this.highest_force_cell_ur = null;
      this.real_total_force_ur = null;
      this.current_state_ur = null;
      this.joint_angles = null;
      this.joint_efforts = null;
      this.x_c1 = null;
      this.y_c1 = null;
      this.z_c1 = null;
      this.x_c2 = null;
      this.y_c2 = null;
      this.z_c2 = null;
      this.x_c3 = null;
      this.y_c3 = null;
      this.z_c3 = null;
      this.x_c4 = null;
      this.y_c4 = null;
      this.z_c4 = null;
      this.x_c5 = null;
      this.y_c5 = null;
      this.z_c5 = null;
      this.x_c6 = null;
      this.y_c6 = null;
      this.z_c6 = null;
      this.x_c7 = null;
      this.y_c7 = null;
      this.z_c7 = null;
      this.x_c8 = null;
      this.y_c8 = null;
      this.z_c8 = null;
      this.x_c9 = null;
      this.y_c9 = null;
      this.z_c9 = null;
      this.x_c10 = null;
      this.y_c10 = null;
      this.z_c10 = null;
      this.x_c11 = null;
      this.y_c11 = null;
      this.z_c11 = null;
      this.x_c12 = null;
      this.y_c12 = null;
      this.z_c12 = null;
      this.x_c13 = null;
      this.y_c13 = null;
      this.z_c13 = null;
      this.x_c14 = null;
      this.y_c14 = null;
      this.z_c14 = null;
      this.x_c15 = null;
      this.y_c15 = null;
      this.z_c15 = null;
    }
    else {
      if (initObj.hasOwnProperty('header')) {
        this.header = initObj.header
      }
      else {
        this.header = new std_msgs.msg.Header();
      }
      if (initObj.hasOwnProperty('fx')) {
        this.fx = initObj.fx
      }
      else {
        this.fx = 0.0;
      }
      if (initObj.hasOwnProperty('fy')) {
        this.fy = initObj.fy
      }
      else {
        this.fy = 0.0;
      }
      if (initObj.hasOwnProperty('fz')) {
        this.fz = initObj.fz
      }
      else {
        this.fz = 0.0;
      }
      if (initObj.hasOwnProperty('fwx')) {
        this.fwx = initObj.fwx
      }
      else {
        this.fwx = 0.0;
      }
      if (initObj.hasOwnProperty('fwy')) {
        this.fwy = initObj.fwy
      }
      else {
        this.fwy = 0.0;
      }
      if (initObj.hasOwnProperty('fwz')) {
        this.fwz = initObj.fwz
      }
      else {
        this.fwz = 0.0;
      }
      if (initObj.hasOwnProperty('coc_x')) {
        this.coc_x = initObj.coc_x
      }
      else {
        this.coc_x = 0.0;
      }
      if (initObj.hasOwnProperty('coc_y')) {
        this.coc_y = initObj.coc_y
      }
      else {
        this.coc_y = 0.0;
      }
      if (initObj.hasOwnProperty('f')) {
        this.f = initObj.f
      }
      else {
        this.f = 0.0;
      }
      if (initObj.hasOwnProperty('zmp_x')) {
        this.zmp_x = initObj.zmp_x
      }
      else {
        this.zmp_x = 0.0;
      }
      if (initObj.hasOwnProperty('zmp_y')) {
        this.zmp_y = initObj.zmp_y
      }
      else {
        this.zmp_y = 0.0;
      }
      if (initObj.hasOwnProperty('orient_z')) {
        this.orient_z = initObj.orient_z
      }
      else {
        this.orient_z = 0.0;
      }
      if (initObj.hasOwnProperty('cop_x')) {
        this.cop_x = initObj.cop_x
      }
      else {
        this.cop_x = 0.0;
      }
      if (initObj.hasOwnProperty('cop_y')) {
        this.cop_y = initObj.cop_y
      }
      else {
        this.cop_y = 0.0;
      }
      if (initObj.hasOwnProperty('coc_xd')) {
        this.coc_xd = initObj.coc_xd
      }
      else {
        this.coc_xd = 0.0;
      }
      if (initObj.hasOwnProperty('coc_yd')) {
        this.coc_yd = initObj.coc_yd
      }
      else {
        this.coc_yd = 0.0;
      }
      if (initObj.hasOwnProperty('fd')) {
        this.fd = initObj.fd
      }
      else {
        this.fd = 0.0;
      }
      if (initObj.hasOwnProperty('zmp_xd')) {
        this.zmp_xd = initObj.zmp_xd
      }
      else {
        this.zmp_xd = 0.0;
      }
      if (initObj.hasOwnProperty('zmp_yd')) {
        this.zmp_yd = initObj.zmp_yd
      }
      else {
        this.zmp_yd = 0.0;
      }
      if (initObj.hasOwnProperty('orient_zd')) {
        this.orient_zd = initObj.orient_zd
      }
      else {
        this.orient_zd = 0.0;
      }
      if (initObj.hasOwnProperty('cop_xd')) {
        this.cop_xd = initObj.cop_xd
      }
      else {
        this.cop_xd = 0.0;
      }
      if (initObj.hasOwnProperty('cop_yd')) {
        this.cop_yd = initObj.cop_yd
      }
      else {
        this.cop_yd = 0.0;
      }
      if (initObj.hasOwnProperty('num_contours')) {
        this.num_contours = initObj.num_contours
      }
      else {
        this.num_contours = 0;
      }
      if (initObj.hasOwnProperty('x_now')) {
        this.x_now = initObj.x_now
      }
      else {
        this.x_now = 0.0;
      }
      if (initObj.hasOwnProperty('y_now')) {
        this.y_now = initObj.y_now
      }
      else {
        this.y_now = 0.0;
      }
      if (initObj.hasOwnProperty('z_now')) {
        this.z_now = initObj.z_now
      }
      else {
        this.z_now = 0.0;
      }
      if (initObj.hasOwnProperty('wx_now')) {
        this.wx_now = initObj.wx_now
      }
      else {
        this.wx_now = 0.0;
      }
      if (initObj.hasOwnProperty('wy_now')) {
        this.wy_now = initObj.wy_now
      }
      else {
        this.wy_now = 0.0;
      }
      if (initObj.hasOwnProperty('wz_now')) {
        this.wz_now = initObj.wz_now
      }
      else {
        this.wz_now = 0.0;
      }
      if (initObj.hasOwnProperty('ww_now')) {
        this.ww_now = initObj.ww_now
      }
      else {
        this.ww_now = 0.0;
      }
      if (initObj.hasOwnProperty('x_des')) {
        this.x_des = initObj.x_des
      }
      else {
        this.x_des = 0.0;
      }
      if (initObj.hasOwnProperty('y_des')) {
        this.y_des = initObj.y_des
      }
      else {
        this.y_des = 0.0;
      }
      if (initObj.hasOwnProperty('z_des')) {
        this.z_des = initObj.z_des
      }
      else {
        this.z_des = 0.0;
      }
      if (initObj.hasOwnProperty('wx_des')) {
        this.wx_des = initObj.wx_des
      }
      else {
        this.wx_des = 0.0;
      }
      if (initObj.hasOwnProperty('wy_des')) {
        this.wy_des = initObj.wy_des
      }
      else {
        this.wy_des = 0.0;
      }
      if (initObj.hasOwnProperty('wz_des')) {
        this.wz_des = initObj.wz_des
      }
      else {
        this.wz_des = 0.0;
      }
      if (initObj.hasOwnProperty('ww_des')) {
        this.ww_des = initObj.ww_des
      }
      else {
        this.ww_des = 0.0;
      }
      if (initObj.hasOwnProperty('x_c')) {
        this.x_c = initObj.x_c
      }
      else {
        this.x_c = 0.0;
      }
      if (initObj.hasOwnProperty('y_c')) {
        this.y_c = initObj.y_c
      }
      else {
        this.y_c = 0.0;
      }
      if (initObj.hasOwnProperty('z_c')) {
        this.z_c = initObj.z_c
      }
      else {
        this.z_c = 0.0;
      }
      if (initObj.hasOwnProperty('dt')) {
        this.dt = initObj.dt
      }
      else {
        this.dt = 0.0;
      }
      if (initObj.hasOwnProperty('time')) {
        this.time = initObj.time
      }
      else {
        this.time = 0.0;
      }
      if (initObj.hasOwnProperty('test_time2')) {
        this.test_time2 = initObj.test_time2
      }
      else {
        this.test_time2 = 0.0;
      }
      if (initObj.hasOwnProperty('img')) {
        this.img = initObj.img
      }
      else {
        this.img = [];
      }
      if (initObj.hasOwnProperty('is_in_contact_ur')) {
        this.is_in_contact_ur = initObj.is_in_contact_ur
      }
      else {
        this.is_in_contact_ur = false;
      }
      if (initObj.hasOwnProperty('pixels_in_contact_ur')) {
        this.pixels_in_contact_ur = initObj.pixels_in_contact_ur
      }
      else {
        this.pixels_in_contact_ur = 0;
      }
      if (initObj.hasOwnProperty('highest_force_cell_ur')) {
        this.highest_force_cell_ur = initObj.highest_force_cell_ur
      }
      else {
        this.highest_force_cell_ur = 0.0;
      }
      if (initObj.hasOwnProperty('real_total_force_ur')) {
        this.real_total_force_ur = initObj.real_total_force_ur
      }
      else {
        this.real_total_force_ur = 0.0;
      }
      if (initObj.hasOwnProperty('current_state_ur')) {
        this.current_state_ur = initObj.current_state_ur
      }
      else {
        this.current_state_ur = 0.0;
      }
      if (initObj.hasOwnProperty('joint_angles')) {
        this.joint_angles = initObj.joint_angles
      }
      else {
        this.joint_angles = [];
      }
      if (initObj.hasOwnProperty('joint_efforts')) {
        this.joint_efforts = initObj.joint_efforts
      }
      else {
        this.joint_efforts = [];
      }
      if (initObj.hasOwnProperty('x_c1')) {
        this.x_c1 = initObj.x_c1
      }
      else {
        this.x_c1 = 0.0;
      }
      if (initObj.hasOwnProperty('y_c1')) {
        this.y_c1 = initObj.y_c1
      }
      else {
        this.y_c1 = 0.0;
      }
      if (initObj.hasOwnProperty('z_c1')) {
        this.z_c1 = initObj.z_c1
      }
      else {
        this.z_c1 = 0.0;
      }
      if (initObj.hasOwnProperty('x_c2')) {
        this.x_c2 = initObj.x_c2
      }
      else {
        this.x_c2 = 0.0;
      }
      if (initObj.hasOwnProperty('y_c2')) {
        this.y_c2 = initObj.y_c2
      }
      else {
        this.y_c2 = 0.0;
      }
      if (initObj.hasOwnProperty('z_c2')) {
        this.z_c2 = initObj.z_c2
      }
      else {
        this.z_c2 = 0.0;
      }
      if (initObj.hasOwnProperty('x_c3')) {
        this.x_c3 = initObj.x_c3
      }
      else {
        this.x_c3 = 0.0;
      }
      if (initObj.hasOwnProperty('y_c3')) {
        this.y_c3 = initObj.y_c3
      }
      else {
        this.y_c3 = 0.0;
      }
      if (initObj.hasOwnProperty('z_c3')) {
        this.z_c3 = initObj.z_c3
      }
      else {
        this.z_c3 = 0.0;
      }
      if (initObj.hasOwnProperty('x_c4')) {
        this.x_c4 = initObj.x_c4
      }
      else {
        this.x_c4 = 0.0;
      }
      if (initObj.hasOwnProperty('y_c4')) {
        this.y_c4 = initObj.y_c4
      }
      else {
        this.y_c4 = 0.0;
      }
      if (initObj.hasOwnProperty('z_c4')) {
        this.z_c4 = initObj.z_c4
      }
      else {
        this.z_c4 = 0.0;
      }
      if (initObj.hasOwnProperty('x_c5')) {
        this.x_c5 = initObj.x_c5
      }
      else {
        this.x_c5 = 0.0;
      }
      if (initObj.hasOwnProperty('y_c5')) {
        this.y_c5 = initObj.y_c5
      }
      else {
        this.y_c5 = 0.0;
      }
      if (initObj.hasOwnProperty('z_c5')) {
        this.z_c5 = initObj.z_c5
      }
      else {
        this.z_c5 = 0.0;
      }
      if (initObj.hasOwnProperty('x_c6')) {
        this.x_c6 = initObj.x_c6
      }
      else {
        this.x_c6 = 0.0;
      }
      if (initObj.hasOwnProperty('y_c6')) {
        this.y_c6 = initObj.y_c6
      }
      else {
        this.y_c6 = 0.0;
      }
      if (initObj.hasOwnProperty('z_c6')) {
        this.z_c6 = initObj.z_c6
      }
      else {
        this.z_c6 = 0.0;
      }
      if (initObj.hasOwnProperty('x_c7')) {
        this.x_c7 = initObj.x_c7
      }
      else {
        this.x_c7 = 0.0;
      }
      if (initObj.hasOwnProperty('y_c7')) {
        this.y_c7 = initObj.y_c7
      }
      else {
        this.y_c7 = 0.0;
      }
      if (initObj.hasOwnProperty('z_c7')) {
        this.z_c7 = initObj.z_c7
      }
      else {
        this.z_c7 = 0.0;
      }
      if (initObj.hasOwnProperty('x_c8')) {
        this.x_c8 = initObj.x_c8
      }
      else {
        this.x_c8 = 0.0;
      }
      if (initObj.hasOwnProperty('y_c8')) {
        this.y_c8 = initObj.y_c8
      }
      else {
        this.y_c8 = 0.0;
      }
      if (initObj.hasOwnProperty('z_c8')) {
        this.z_c8 = initObj.z_c8
      }
      else {
        this.z_c8 = 0.0;
      }
      if (initObj.hasOwnProperty('x_c9')) {
        this.x_c9 = initObj.x_c9
      }
      else {
        this.x_c9 = 0.0;
      }
      if (initObj.hasOwnProperty('y_c9')) {
        this.y_c9 = initObj.y_c9
      }
      else {
        this.y_c9 = 0.0;
      }
      if (initObj.hasOwnProperty('z_c9')) {
        this.z_c9 = initObj.z_c9
      }
      else {
        this.z_c9 = 0.0;
      }
      if (initObj.hasOwnProperty('x_c10')) {
        this.x_c10 = initObj.x_c10
      }
      else {
        this.x_c10 = 0.0;
      }
      if (initObj.hasOwnProperty('y_c10')) {
        this.y_c10 = initObj.y_c10
      }
      else {
        this.y_c10 = 0.0;
      }
      if (initObj.hasOwnProperty('z_c10')) {
        this.z_c10 = initObj.z_c10
      }
      else {
        this.z_c10 = 0.0;
      }
      if (initObj.hasOwnProperty('x_c11')) {
        this.x_c11 = initObj.x_c11
      }
      else {
        this.x_c11 = 0.0;
      }
      if (initObj.hasOwnProperty('y_c11')) {
        this.y_c11 = initObj.y_c11
      }
      else {
        this.y_c11 = 0.0;
      }
      if (initObj.hasOwnProperty('z_c11')) {
        this.z_c11 = initObj.z_c11
      }
      else {
        this.z_c11 = 0.0;
      }
      if (initObj.hasOwnProperty('x_c12')) {
        this.x_c12 = initObj.x_c12
      }
      else {
        this.x_c12 = 0.0;
      }
      if (initObj.hasOwnProperty('y_c12')) {
        this.y_c12 = initObj.y_c12
      }
      else {
        this.y_c12 = 0.0;
      }
      if (initObj.hasOwnProperty('z_c12')) {
        this.z_c12 = initObj.z_c12
      }
      else {
        this.z_c12 = 0.0;
      }
      if (initObj.hasOwnProperty('x_c13')) {
        this.x_c13 = initObj.x_c13
      }
      else {
        this.x_c13 = 0.0;
      }
      if (initObj.hasOwnProperty('y_c13')) {
        this.y_c13 = initObj.y_c13
      }
      else {
        this.y_c13 = 0.0;
      }
      if (initObj.hasOwnProperty('z_c13')) {
        this.z_c13 = initObj.z_c13
      }
      else {
        this.z_c13 = 0.0;
      }
      if (initObj.hasOwnProperty('x_c14')) {
        this.x_c14 = initObj.x_c14
      }
      else {
        this.x_c14 = 0.0;
      }
      if (initObj.hasOwnProperty('y_c14')) {
        this.y_c14 = initObj.y_c14
      }
      else {
        this.y_c14 = 0.0;
      }
      if (initObj.hasOwnProperty('z_c14')) {
        this.z_c14 = initObj.z_c14
      }
      else {
        this.z_c14 = 0.0;
      }
      if (initObj.hasOwnProperty('x_c15')) {
        this.x_c15 = initObj.x_c15
      }
      else {
        this.x_c15 = 0.0;
      }
      if (initObj.hasOwnProperty('y_c15')) {
        this.y_c15 = initObj.y_c15
      }
      else {
        this.y_c15 = 0.0;
      }
      if (initObj.hasOwnProperty('z_c15')) {
        this.z_c15 = initObj.z_c15
      }
      else {
        this.z_c15 = 0.0;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type PlotMatlabImg
    // Serialize message field [header]
    bufferOffset = std_msgs.msg.Header.serialize(obj.header, buffer, bufferOffset);
    // Serialize message field [fx]
    bufferOffset = _serializer.float64(obj.fx, buffer, bufferOffset);
    // Serialize message field [fy]
    bufferOffset = _serializer.float64(obj.fy, buffer, bufferOffset);
    // Serialize message field [fz]
    bufferOffset = _serializer.float64(obj.fz, buffer, bufferOffset);
    // Serialize message field [fwx]
    bufferOffset = _serializer.float64(obj.fwx, buffer, bufferOffset);
    // Serialize message field [fwy]
    bufferOffset = _serializer.float64(obj.fwy, buffer, bufferOffset);
    // Serialize message field [fwz]
    bufferOffset = _serializer.float64(obj.fwz, buffer, bufferOffset);
    // Serialize message field [coc_x]
    bufferOffset = _serializer.float64(obj.coc_x, buffer, bufferOffset);
    // Serialize message field [coc_y]
    bufferOffset = _serializer.float64(obj.coc_y, buffer, bufferOffset);
    // Serialize message field [f]
    bufferOffset = _serializer.float64(obj.f, buffer, bufferOffset);
    // Serialize message field [zmp_x]
    bufferOffset = _serializer.float64(obj.zmp_x, buffer, bufferOffset);
    // Serialize message field [zmp_y]
    bufferOffset = _serializer.float64(obj.zmp_y, buffer, bufferOffset);
    // Serialize message field [orient_z]
    bufferOffset = _serializer.float64(obj.orient_z, buffer, bufferOffset);
    // Serialize message field [cop_x]
    bufferOffset = _serializer.float64(obj.cop_x, buffer, bufferOffset);
    // Serialize message field [cop_y]
    bufferOffset = _serializer.float64(obj.cop_y, buffer, bufferOffset);
    // Serialize message field [coc_xd]
    bufferOffset = _serializer.float64(obj.coc_xd, buffer, bufferOffset);
    // Serialize message field [coc_yd]
    bufferOffset = _serializer.float64(obj.coc_yd, buffer, bufferOffset);
    // Serialize message field [fd]
    bufferOffset = _serializer.float64(obj.fd, buffer, bufferOffset);
    // Serialize message field [zmp_xd]
    bufferOffset = _serializer.float64(obj.zmp_xd, buffer, bufferOffset);
    // Serialize message field [zmp_yd]
    bufferOffset = _serializer.float64(obj.zmp_yd, buffer, bufferOffset);
    // Serialize message field [orient_zd]
    bufferOffset = _serializer.float64(obj.orient_zd, buffer, bufferOffset);
    // Serialize message field [cop_xd]
    bufferOffset = _serializer.float64(obj.cop_xd, buffer, bufferOffset);
    // Serialize message field [cop_yd]
    bufferOffset = _serializer.float64(obj.cop_yd, buffer, bufferOffset);
    // Serialize message field [num_contours]
    bufferOffset = _serializer.int32(obj.num_contours, buffer, bufferOffset);
    // Serialize message field [x_now]
    bufferOffset = _serializer.float64(obj.x_now, buffer, bufferOffset);
    // Serialize message field [y_now]
    bufferOffset = _serializer.float64(obj.y_now, buffer, bufferOffset);
    // Serialize message field [z_now]
    bufferOffset = _serializer.float64(obj.z_now, buffer, bufferOffset);
    // Serialize message field [wx_now]
    bufferOffset = _serializer.float64(obj.wx_now, buffer, bufferOffset);
    // Serialize message field [wy_now]
    bufferOffset = _serializer.float64(obj.wy_now, buffer, bufferOffset);
    // Serialize message field [wz_now]
    bufferOffset = _serializer.float64(obj.wz_now, buffer, bufferOffset);
    // Serialize message field [ww_now]
    bufferOffset = _serializer.float64(obj.ww_now, buffer, bufferOffset);
    // Serialize message field [x_des]
    bufferOffset = _serializer.float64(obj.x_des, buffer, bufferOffset);
    // Serialize message field [y_des]
    bufferOffset = _serializer.float64(obj.y_des, buffer, bufferOffset);
    // Serialize message field [z_des]
    bufferOffset = _serializer.float64(obj.z_des, buffer, bufferOffset);
    // Serialize message field [wx_des]
    bufferOffset = _serializer.float64(obj.wx_des, buffer, bufferOffset);
    // Serialize message field [wy_des]
    bufferOffset = _serializer.float64(obj.wy_des, buffer, bufferOffset);
    // Serialize message field [wz_des]
    bufferOffset = _serializer.float64(obj.wz_des, buffer, bufferOffset);
    // Serialize message field [ww_des]
    bufferOffset = _serializer.float64(obj.ww_des, buffer, bufferOffset);
    // Serialize message field [x_c]
    bufferOffset = _serializer.float64(obj.x_c, buffer, bufferOffset);
    // Serialize message field [y_c]
    bufferOffset = _serializer.float64(obj.y_c, buffer, bufferOffset);
    // Serialize message field [z_c]
    bufferOffset = _serializer.float64(obj.z_c, buffer, bufferOffset);
    // Serialize message field [dt]
    bufferOffset = _serializer.float64(obj.dt, buffer, bufferOffset);
    // Serialize message field [time]
    bufferOffset = _serializer.float64(obj.time, buffer, bufferOffset);
    // Serialize message field [test_time2]
    bufferOffset = _serializer.float64(obj.test_time2, buffer, bufferOffset);
    // Serialize message field [img]
    bufferOffset = _arraySerializer.float64(obj.img, buffer, bufferOffset, null);
    // Serialize message field [is_in_contact_ur]
    bufferOffset = _serializer.bool(obj.is_in_contact_ur, buffer, bufferOffset);
    // Serialize message field [pixels_in_contact_ur]
    bufferOffset = _serializer.int32(obj.pixels_in_contact_ur, buffer, bufferOffset);
    // Serialize message field [highest_force_cell_ur]
    bufferOffset = _serializer.float64(obj.highest_force_cell_ur, buffer, bufferOffset);
    // Serialize message field [real_total_force_ur]
    bufferOffset = _serializer.float64(obj.real_total_force_ur, buffer, bufferOffset);
    // Serialize message field [current_state_ur]
    bufferOffset = _serializer.float64(obj.current_state_ur, buffer, bufferOffset);
    // Serialize message field [joint_angles]
    bufferOffset = _arraySerializer.float64(obj.joint_angles, buffer, bufferOffset, null);
    // Serialize message field [joint_efforts]
    bufferOffset = _arraySerializer.float64(obj.joint_efforts, buffer, bufferOffset, null);
    // Serialize message field [x_c1]
    bufferOffset = _serializer.float64(obj.x_c1, buffer, bufferOffset);
    // Serialize message field [y_c1]
    bufferOffset = _serializer.float64(obj.y_c1, buffer, bufferOffset);
    // Serialize message field [z_c1]
    bufferOffset = _serializer.float64(obj.z_c1, buffer, bufferOffset);
    // Serialize message field [x_c2]
    bufferOffset = _serializer.float64(obj.x_c2, buffer, bufferOffset);
    // Serialize message field [y_c2]
    bufferOffset = _serializer.float64(obj.y_c2, buffer, bufferOffset);
    // Serialize message field [z_c2]
    bufferOffset = _serializer.float64(obj.z_c2, buffer, bufferOffset);
    // Serialize message field [x_c3]
    bufferOffset = _serializer.float64(obj.x_c3, buffer, bufferOffset);
    // Serialize message field [y_c3]
    bufferOffset = _serializer.float64(obj.y_c3, buffer, bufferOffset);
    // Serialize message field [z_c3]
    bufferOffset = _serializer.float64(obj.z_c3, buffer, bufferOffset);
    // Serialize message field [x_c4]
    bufferOffset = _serializer.float64(obj.x_c4, buffer, bufferOffset);
    // Serialize message field [y_c4]
    bufferOffset = _serializer.float64(obj.y_c4, buffer, bufferOffset);
    // Serialize message field [z_c4]
    bufferOffset = _serializer.float64(obj.z_c4, buffer, bufferOffset);
    // Serialize message field [x_c5]
    bufferOffset = _serializer.float64(obj.x_c5, buffer, bufferOffset);
    // Serialize message field [y_c5]
    bufferOffset = _serializer.float64(obj.y_c5, buffer, bufferOffset);
    // Serialize message field [z_c5]
    bufferOffset = _serializer.float64(obj.z_c5, buffer, bufferOffset);
    // Serialize message field [x_c6]
    bufferOffset = _serializer.float64(obj.x_c6, buffer, bufferOffset);
    // Serialize message field [y_c6]
    bufferOffset = _serializer.float64(obj.y_c6, buffer, bufferOffset);
    // Serialize message field [z_c6]
    bufferOffset = _serializer.float64(obj.z_c6, buffer, bufferOffset);
    // Serialize message field [x_c7]
    bufferOffset = _serializer.float64(obj.x_c7, buffer, bufferOffset);
    // Serialize message field [y_c7]
    bufferOffset = _serializer.float64(obj.y_c7, buffer, bufferOffset);
    // Serialize message field [z_c7]
    bufferOffset = _serializer.float64(obj.z_c7, buffer, bufferOffset);
    // Serialize message field [x_c8]
    bufferOffset = _serializer.float64(obj.x_c8, buffer, bufferOffset);
    // Serialize message field [y_c8]
    bufferOffset = _serializer.float64(obj.y_c8, buffer, bufferOffset);
    // Serialize message field [z_c8]
    bufferOffset = _serializer.float64(obj.z_c8, buffer, bufferOffset);
    // Serialize message field [x_c9]
    bufferOffset = _serializer.float64(obj.x_c9, buffer, bufferOffset);
    // Serialize message field [y_c9]
    bufferOffset = _serializer.float64(obj.y_c9, buffer, bufferOffset);
    // Serialize message field [z_c9]
    bufferOffset = _serializer.float64(obj.z_c9, buffer, bufferOffset);
    // Serialize message field [x_c10]
    bufferOffset = _serializer.float64(obj.x_c10, buffer, bufferOffset);
    // Serialize message field [y_c10]
    bufferOffset = _serializer.float64(obj.y_c10, buffer, bufferOffset);
    // Serialize message field [z_c10]
    bufferOffset = _serializer.float64(obj.z_c10, buffer, bufferOffset);
    // Serialize message field [x_c11]
    bufferOffset = _serializer.float64(obj.x_c11, buffer, bufferOffset);
    // Serialize message field [y_c11]
    bufferOffset = _serializer.float64(obj.y_c11, buffer, bufferOffset);
    // Serialize message field [z_c11]
    bufferOffset = _serializer.float64(obj.z_c11, buffer, bufferOffset);
    // Serialize message field [x_c12]
    bufferOffset = _serializer.float64(obj.x_c12, buffer, bufferOffset);
    // Serialize message field [y_c12]
    bufferOffset = _serializer.float64(obj.y_c12, buffer, bufferOffset);
    // Serialize message field [z_c12]
    bufferOffset = _serializer.float64(obj.z_c12, buffer, bufferOffset);
    // Serialize message field [x_c13]
    bufferOffset = _serializer.float64(obj.x_c13, buffer, bufferOffset);
    // Serialize message field [y_c13]
    bufferOffset = _serializer.float64(obj.y_c13, buffer, bufferOffset);
    // Serialize message field [z_c13]
    bufferOffset = _serializer.float64(obj.z_c13, buffer, bufferOffset);
    // Serialize message field [x_c14]
    bufferOffset = _serializer.float64(obj.x_c14, buffer, bufferOffset);
    // Serialize message field [y_c14]
    bufferOffset = _serializer.float64(obj.y_c14, buffer, bufferOffset);
    // Serialize message field [z_c14]
    bufferOffset = _serializer.float64(obj.z_c14, buffer, bufferOffset);
    // Serialize message field [x_c15]
    bufferOffset = _serializer.float64(obj.x_c15, buffer, bufferOffset);
    // Serialize message field [y_c15]
    bufferOffset = _serializer.float64(obj.y_c15, buffer, bufferOffset);
    // Serialize message field [z_c15]
    bufferOffset = _serializer.float64(obj.z_c15, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type PlotMatlabImg
    let len;
    let data = new PlotMatlabImg(null);
    // Deserialize message field [header]
    data.header = std_msgs.msg.Header.deserialize(buffer, bufferOffset);
    // Deserialize message field [fx]
    data.fx = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [fy]
    data.fy = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [fz]
    data.fz = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [fwx]
    data.fwx = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [fwy]
    data.fwy = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [fwz]
    data.fwz = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [coc_x]
    data.coc_x = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [coc_y]
    data.coc_y = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [f]
    data.f = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [zmp_x]
    data.zmp_x = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [zmp_y]
    data.zmp_y = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [orient_z]
    data.orient_z = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [cop_x]
    data.cop_x = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [cop_y]
    data.cop_y = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [coc_xd]
    data.coc_xd = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [coc_yd]
    data.coc_yd = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [fd]
    data.fd = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [zmp_xd]
    data.zmp_xd = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [zmp_yd]
    data.zmp_yd = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [orient_zd]
    data.orient_zd = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [cop_xd]
    data.cop_xd = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [cop_yd]
    data.cop_yd = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [num_contours]
    data.num_contours = _deserializer.int32(buffer, bufferOffset);
    // Deserialize message field [x_now]
    data.x_now = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [y_now]
    data.y_now = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [z_now]
    data.z_now = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [wx_now]
    data.wx_now = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [wy_now]
    data.wy_now = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [wz_now]
    data.wz_now = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [ww_now]
    data.ww_now = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [x_des]
    data.x_des = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [y_des]
    data.y_des = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [z_des]
    data.z_des = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [wx_des]
    data.wx_des = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [wy_des]
    data.wy_des = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [wz_des]
    data.wz_des = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [ww_des]
    data.ww_des = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [x_c]
    data.x_c = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [y_c]
    data.y_c = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [z_c]
    data.z_c = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [dt]
    data.dt = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [time]
    data.time = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [test_time2]
    data.test_time2 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [img]
    data.img = _arrayDeserializer.float64(buffer, bufferOffset, null)
    // Deserialize message field [is_in_contact_ur]
    data.is_in_contact_ur = _deserializer.bool(buffer, bufferOffset);
    // Deserialize message field [pixels_in_contact_ur]
    data.pixels_in_contact_ur = _deserializer.int32(buffer, bufferOffset);
    // Deserialize message field [highest_force_cell_ur]
    data.highest_force_cell_ur = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [real_total_force_ur]
    data.real_total_force_ur = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [current_state_ur]
    data.current_state_ur = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [joint_angles]
    data.joint_angles = _arrayDeserializer.float64(buffer, bufferOffset, null)
    // Deserialize message field [joint_efforts]
    data.joint_efforts = _arrayDeserializer.float64(buffer, bufferOffset, null)
    // Deserialize message field [x_c1]
    data.x_c1 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [y_c1]
    data.y_c1 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [z_c1]
    data.z_c1 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [x_c2]
    data.x_c2 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [y_c2]
    data.y_c2 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [z_c2]
    data.z_c2 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [x_c3]
    data.x_c3 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [y_c3]
    data.y_c3 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [z_c3]
    data.z_c3 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [x_c4]
    data.x_c4 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [y_c4]
    data.y_c4 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [z_c4]
    data.z_c4 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [x_c5]
    data.x_c5 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [y_c5]
    data.y_c5 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [z_c5]
    data.z_c5 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [x_c6]
    data.x_c6 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [y_c6]
    data.y_c6 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [z_c6]
    data.z_c6 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [x_c7]
    data.x_c7 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [y_c7]
    data.y_c7 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [z_c7]
    data.z_c7 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [x_c8]
    data.x_c8 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [y_c8]
    data.y_c8 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [z_c8]
    data.z_c8 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [x_c9]
    data.x_c9 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [y_c9]
    data.y_c9 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [z_c9]
    data.z_c9 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [x_c10]
    data.x_c10 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [y_c10]
    data.y_c10 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [z_c10]
    data.z_c10 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [x_c11]
    data.x_c11 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [y_c11]
    data.y_c11 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [z_c11]
    data.z_c11 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [x_c12]
    data.x_c12 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [y_c12]
    data.y_c12 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [z_c12]
    data.z_c12 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [x_c13]
    data.x_c13 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [y_c13]
    data.y_c13 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [z_c13]
    data.z_c13 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [x_c14]
    data.x_c14 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [y_c14]
    data.y_c14 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [z_c14]
    data.z_c14 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [x_c15]
    data.x_c15 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [y_c15]
    data.y_c15 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [z_c15]
    data.z_c15 = _deserializer.float64(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += std_msgs.msg.Header.getMessageSize(object.header);
    length += 8 * object.img.length;
    length += 8 * object.joint_angles.length;
    length += 8 * object.joint_efforts.length;
    return length + 741;
  }

  static datatype() {
    // Returns string type for a message object
    return 'tactile_servo_msgs/PlotMatlabImg';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '4ee7a297cb920cbf51bd3172311d37db';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Header header
    float64 fx
    float64 fy
    float64 fz
    float64 fwx
    float64 fwy
    float64 fwz
    float64 coc_x
    float64 coc_y
    float64 f
    float64 zmp_x
    float64 zmp_y
    float64 orient_z
    float64 cop_x
    float64 cop_y
    float64 coc_xd
    float64 coc_yd
    float64 fd
    float64 zmp_xd
    float64 zmp_yd
    float64 orient_zd
    float64 cop_xd
    float64 cop_yd
    int32 num_contours
    float64 x_now
    float64 y_now
    float64 z_now
    float64 wx_now
    float64 wy_now
    float64 wz_now
    float64 ww_now
    float64 x_des
    float64 y_des
    float64 z_des
    float64 wx_des
    float64 wy_des
    float64 wz_des
    float64 ww_des
    float64 x_c
    float64 y_c
    float64 z_c
    float64 dt
    float64 time
    float64 test_time2
    float64[] img # actual matrix data, size is (step * rows)
    bool    is_in_contact_ur 
    int32    pixels_in_contact_ur
    float64    highest_force_cell_ur 
    float64    real_total_force_ur
    float64    current_state_ur
    float64[] joint_angles
    float64[] joint_efforts
    float64 x_c1
    float64 y_c1
    float64 z_c1
    float64 x_c2
    float64 y_c2
    float64 z_c2
    float64 x_c3
    float64 y_c3
    float64 z_c3
    float64 x_c4
    float64 y_c4
    float64 z_c4
    float64 x_c5
    float64 y_c5
    float64 z_c5
    float64 x_c6
    float64 y_c6
    float64 z_c6
    float64 x_c7
    float64 y_c7
    float64 z_c7
    float64 x_c8
    float64 y_c8
    float64 z_c8
    float64 x_c9
    float64 y_c9
    float64 z_c9
    float64 x_c10
    float64 y_c10
    float64 z_c10
    float64 x_c11
    float64 y_c11
    float64 z_c11
    float64 x_c12
    float64 y_c12
    float64 z_c12
    float64 x_c13
    float64 y_c13
    float64 z_c13
    float64 x_c14
    float64 y_c14
    float64 z_c14
    float64 x_c15
    float64 y_c15
    float64 z_c15
    
    ================================================================================
    MSG: std_msgs/Header
    # Standard metadata for higher-level stamped data types.
    # This is generally used to communicate timestamped data 
    # in a particular coordinate frame.
    # 
    # sequence ID: consecutively increasing ID 
    uint32 seq
    #Two-integer timestamp that is expressed as:
    # * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')
    # * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')
    # time-handling sugar is provided by the client library
    time stamp
    #Frame this data is associated with
    string frame_id
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new PlotMatlabImg(null);
    if (msg.header !== undefined) {
      resolved.header = std_msgs.msg.Header.Resolve(msg.header)
    }
    else {
      resolved.header = new std_msgs.msg.Header()
    }

    if (msg.fx !== undefined) {
      resolved.fx = msg.fx;
    }
    else {
      resolved.fx = 0.0
    }

    if (msg.fy !== undefined) {
      resolved.fy = msg.fy;
    }
    else {
      resolved.fy = 0.0
    }

    if (msg.fz !== undefined) {
      resolved.fz = msg.fz;
    }
    else {
      resolved.fz = 0.0
    }

    if (msg.fwx !== undefined) {
      resolved.fwx = msg.fwx;
    }
    else {
      resolved.fwx = 0.0
    }

    if (msg.fwy !== undefined) {
      resolved.fwy = msg.fwy;
    }
    else {
      resolved.fwy = 0.0
    }

    if (msg.fwz !== undefined) {
      resolved.fwz = msg.fwz;
    }
    else {
      resolved.fwz = 0.0
    }

    if (msg.coc_x !== undefined) {
      resolved.coc_x = msg.coc_x;
    }
    else {
      resolved.coc_x = 0.0
    }

    if (msg.coc_y !== undefined) {
      resolved.coc_y = msg.coc_y;
    }
    else {
      resolved.coc_y = 0.0
    }

    if (msg.f !== undefined) {
      resolved.f = msg.f;
    }
    else {
      resolved.f = 0.0
    }

    if (msg.zmp_x !== undefined) {
      resolved.zmp_x = msg.zmp_x;
    }
    else {
      resolved.zmp_x = 0.0
    }

    if (msg.zmp_y !== undefined) {
      resolved.zmp_y = msg.zmp_y;
    }
    else {
      resolved.zmp_y = 0.0
    }

    if (msg.orient_z !== undefined) {
      resolved.orient_z = msg.orient_z;
    }
    else {
      resolved.orient_z = 0.0
    }

    if (msg.cop_x !== undefined) {
      resolved.cop_x = msg.cop_x;
    }
    else {
      resolved.cop_x = 0.0
    }

    if (msg.cop_y !== undefined) {
      resolved.cop_y = msg.cop_y;
    }
    else {
      resolved.cop_y = 0.0
    }

    if (msg.coc_xd !== undefined) {
      resolved.coc_xd = msg.coc_xd;
    }
    else {
      resolved.coc_xd = 0.0
    }

    if (msg.coc_yd !== undefined) {
      resolved.coc_yd = msg.coc_yd;
    }
    else {
      resolved.coc_yd = 0.0
    }

    if (msg.fd !== undefined) {
      resolved.fd = msg.fd;
    }
    else {
      resolved.fd = 0.0
    }

    if (msg.zmp_xd !== undefined) {
      resolved.zmp_xd = msg.zmp_xd;
    }
    else {
      resolved.zmp_xd = 0.0
    }

    if (msg.zmp_yd !== undefined) {
      resolved.zmp_yd = msg.zmp_yd;
    }
    else {
      resolved.zmp_yd = 0.0
    }

    if (msg.orient_zd !== undefined) {
      resolved.orient_zd = msg.orient_zd;
    }
    else {
      resolved.orient_zd = 0.0
    }

    if (msg.cop_xd !== undefined) {
      resolved.cop_xd = msg.cop_xd;
    }
    else {
      resolved.cop_xd = 0.0
    }

    if (msg.cop_yd !== undefined) {
      resolved.cop_yd = msg.cop_yd;
    }
    else {
      resolved.cop_yd = 0.0
    }

    if (msg.num_contours !== undefined) {
      resolved.num_contours = msg.num_contours;
    }
    else {
      resolved.num_contours = 0
    }

    if (msg.x_now !== undefined) {
      resolved.x_now = msg.x_now;
    }
    else {
      resolved.x_now = 0.0
    }

    if (msg.y_now !== undefined) {
      resolved.y_now = msg.y_now;
    }
    else {
      resolved.y_now = 0.0
    }

    if (msg.z_now !== undefined) {
      resolved.z_now = msg.z_now;
    }
    else {
      resolved.z_now = 0.0
    }

    if (msg.wx_now !== undefined) {
      resolved.wx_now = msg.wx_now;
    }
    else {
      resolved.wx_now = 0.0
    }

    if (msg.wy_now !== undefined) {
      resolved.wy_now = msg.wy_now;
    }
    else {
      resolved.wy_now = 0.0
    }

    if (msg.wz_now !== undefined) {
      resolved.wz_now = msg.wz_now;
    }
    else {
      resolved.wz_now = 0.0
    }

    if (msg.ww_now !== undefined) {
      resolved.ww_now = msg.ww_now;
    }
    else {
      resolved.ww_now = 0.0
    }

    if (msg.x_des !== undefined) {
      resolved.x_des = msg.x_des;
    }
    else {
      resolved.x_des = 0.0
    }

    if (msg.y_des !== undefined) {
      resolved.y_des = msg.y_des;
    }
    else {
      resolved.y_des = 0.0
    }

    if (msg.z_des !== undefined) {
      resolved.z_des = msg.z_des;
    }
    else {
      resolved.z_des = 0.0
    }

    if (msg.wx_des !== undefined) {
      resolved.wx_des = msg.wx_des;
    }
    else {
      resolved.wx_des = 0.0
    }

    if (msg.wy_des !== undefined) {
      resolved.wy_des = msg.wy_des;
    }
    else {
      resolved.wy_des = 0.0
    }

    if (msg.wz_des !== undefined) {
      resolved.wz_des = msg.wz_des;
    }
    else {
      resolved.wz_des = 0.0
    }

    if (msg.ww_des !== undefined) {
      resolved.ww_des = msg.ww_des;
    }
    else {
      resolved.ww_des = 0.0
    }

    if (msg.x_c !== undefined) {
      resolved.x_c = msg.x_c;
    }
    else {
      resolved.x_c = 0.0
    }

    if (msg.y_c !== undefined) {
      resolved.y_c = msg.y_c;
    }
    else {
      resolved.y_c = 0.0
    }

    if (msg.z_c !== undefined) {
      resolved.z_c = msg.z_c;
    }
    else {
      resolved.z_c = 0.0
    }

    if (msg.dt !== undefined) {
      resolved.dt = msg.dt;
    }
    else {
      resolved.dt = 0.0
    }

    if (msg.time !== undefined) {
      resolved.time = msg.time;
    }
    else {
      resolved.time = 0.0
    }

    if (msg.test_time2 !== undefined) {
      resolved.test_time2 = msg.test_time2;
    }
    else {
      resolved.test_time2 = 0.0
    }

    if (msg.img !== undefined) {
      resolved.img = msg.img;
    }
    else {
      resolved.img = []
    }

    if (msg.is_in_contact_ur !== undefined) {
      resolved.is_in_contact_ur = msg.is_in_contact_ur;
    }
    else {
      resolved.is_in_contact_ur = false
    }

    if (msg.pixels_in_contact_ur !== undefined) {
      resolved.pixels_in_contact_ur = msg.pixels_in_contact_ur;
    }
    else {
      resolved.pixels_in_contact_ur = 0
    }

    if (msg.highest_force_cell_ur !== undefined) {
      resolved.highest_force_cell_ur = msg.highest_force_cell_ur;
    }
    else {
      resolved.highest_force_cell_ur = 0.0
    }

    if (msg.real_total_force_ur !== undefined) {
      resolved.real_total_force_ur = msg.real_total_force_ur;
    }
    else {
      resolved.real_total_force_ur = 0.0
    }

    if (msg.current_state_ur !== undefined) {
      resolved.current_state_ur = msg.current_state_ur;
    }
    else {
      resolved.current_state_ur = 0.0
    }

    if (msg.joint_angles !== undefined) {
      resolved.joint_angles = msg.joint_angles;
    }
    else {
      resolved.joint_angles = []
    }

    if (msg.joint_efforts !== undefined) {
      resolved.joint_efforts = msg.joint_efforts;
    }
    else {
      resolved.joint_efforts = []
    }

    if (msg.x_c1 !== undefined) {
      resolved.x_c1 = msg.x_c1;
    }
    else {
      resolved.x_c1 = 0.0
    }

    if (msg.y_c1 !== undefined) {
      resolved.y_c1 = msg.y_c1;
    }
    else {
      resolved.y_c1 = 0.0
    }

    if (msg.z_c1 !== undefined) {
      resolved.z_c1 = msg.z_c1;
    }
    else {
      resolved.z_c1 = 0.0
    }

    if (msg.x_c2 !== undefined) {
      resolved.x_c2 = msg.x_c2;
    }
    else {
      resolved.x_c2 = 0.0
    }

    if (msg.y_c2 !== undefined) {
      resolved.y_c2 = msg.y_c2;
    }
    else {
      resolved.y_c2 = 0.0
    }

    if (msg.z_c2 !== undefined) {
      resolved.z_c2 = msg.z_c2;
    }
    else {
      resolved.z_c2 = 0.0
    }

    if (msg.x_c3 !== undefined) {
      resolved.x_c3 = msg.x_c3;
    }
    else {
      resolved.x_c3 = 0.0
    }

    if (msg.y_c3 !== undefined) {
      resolved.y_c3 = msg.y_c3;
    }
    else {
      resolved.y_c3 = 0.0
    }

    if (msg.z_c3 !== undefined) {
      resolved.z_c3 = msg.z_c3;
    }
    else {
      resolved.z_c3 = 0.0
    }

    if (msg.x_c4 !== undefined) {
      resolved.x_c4 = msg.x_c4;
    }
    else {
      resolved.x_c4 = 0.0
    }

    if (msg.y_c4 !== undefined) {
      resolved.y_c4 = msg.y_c4;
    }
    else {
      resolved.y_c4 = 0.0
    }

    if (msg.z_c4 !== undefined) {
      resolved.z_c4 = msg.z_c4;
    }
    else {
      resolved.z_c4 = 0.0
    }

    if (msg.x_c5 !== undefined) {
      resolved.x_c5 = msg.x_c5;
    }
    else {
      resolved.x_c5 = 0.0
    }

    if (msg.y_c5 !== undefined) {
      resolved.y_c5 = msg.y_c5;
    }
    else {
      resolved.y_c5 = 0.0
    }

    if (msg.z_c5 !== undefined) {
      resolved.z_c5 = msg.z_c5;
    }
    else {
      resolved.z_c5 = 0.0
    }

    if (msg.x_c6 !== undefined) {
      resolved.x_c6 = msg.x_c6;
    }
    else {
      resolved.x_c6 = 0.0
    }

    if (msg.y_c6 !== undefined) {
      resolved.y_c6 = msg.y_c6;
    }
    else {
      resolved.y_c6 = 0.0
    }

    if (msg.z_c6 !== undefined) {
      resolved.z_c6 = msg.z_c6;
    }
    else {
      resolved.z_c6 = 0.0
    }

    if (msg.x_c7 !== undefined) {
      resolved.x_c7 = msg.x_c7;
    }
    else {
      resolved.x_c7 = 0.0
    }

    if (msg.y_c7 !== undefined) {
      resolved.y_c7 = msg.y_c7;
    }
    else {
      resolved.y_c7 = 0.0
    }

    if (msg.z_c7 !== undefined) {
      resolved.z_c7 = msg.z_c7;
    }
    else {
      resolved.z_c7 = 0.0
    }

    if (msg.x_c8 !== undefined) {
      resolved.x_c8 = msg.x_c8;
    }
    else {
      resolved.x_c8 = 0.0
    }

    if (msg.y_c8 !== undefined) {
      resolved.y_c8 = msg.y_c8;
    }
    else {
      resolved.y_c8 = 0.0
    }

    if (msg.z_c8 !== undefined) {
      resolved.z_c8 = msg.z_c8;
    }
    else {
      resolved.z_c8 = 0.0
    }

    if (msg.x_c9 !== undefined) {
      resolved.x_c9 = msg.x_c9;
    }
    else {
      resolved.x_c9 = 0.0
    }

    if (msg.y_c9 !== undefined) {
      resolved.y_c9 = msg.y_c9;
    }
    else {
      resolved.y_c9 = 0.0
    }

    if (msg.z_c9 !== undefined) {
      resolved.z_c9 = msg.z_c9;
    }
    else {
      resolved.z_c9 = 0.0
    }

    if (msg.x_c10 !== undefined) {
      resolved.x_c10 = msg.x_c10;
    }
    else {
      resolved.x_c10 = 0.0
    }

    if (msg.y_c10 !== undefined) {
      resolved.y_c10 = msg.y_c10;
    }
    else {
      resolved.y_c10 = 0.0
    }

    if (msg.z_c10 !== undefined) {
      resolved.z_c10 = msg.z_c10;
    }
    else {
      resolved.z_c10 = 0.0
    }

    if (msg.x_c11 !== undefined) {
      resolved.x_c11 = msg.x_c11;
    }
    else {
      resolved.x_c11 = 0.0
    }

    if (msg.y_c11 !== undefined) {
      resolved.y_c11 = msg.y_c11;
    }
    else {
      resolved.y_c11 = 0.0
    }

    if (msg.z_c11 !== undefined) {
      resolved.z_c11 = msg.z_c11;
    }
    else {
      resolved.z_c11 = 0.0
    }

    if (msg.x_c12 !== undefined) {
      resolved.x_c12 = msg.x_c12;
    }
    else {
      resolved.x_c12 = 0.0
    }

    if (msg.y_c12 !== undefined) {
      resolved.y_c12 = msg.y_c12;
    }
    else {
      resolved.y_c12 = 0.0
    }

    if (msg.z_c12 !== undefined) {
      resolved.z_c12 = msg.z_c12;
    }
    else {
      resolved.z_c12 = 0.0
    }

    if (msg.x_c13 !== undefined) {
      resolved.x_c13 = msg.x_c13;
    }
    else {
      resolved.x_c13 = 0.0
    }

    if (msg.y_c13 !== undefined) {
      resolved.y_c13 = msg.y_c13;
    }
    else {
      resolved.y_c13 = 0.0
    }

    if (msg.z_c13 !== undefined) {
      resolved.z_c13 = msg.z_c13;
    }
    else {
      resolved.z_c13 = 0.0
    }

    if (msg.x_c14 !== undefined) {
      resolved.x_c14 = msg.x_c14;
    }
    else {
      resolved.x_c14 = 0.0
    }

    if (msg.y_c14 !== undefined) {
      resolved.y_c14 = msg.y_c14;
    }
    else {
      resolved.y_c14 = 0.0
    }

    if (msg.z_c14 !== undefined) {
      resolved.z_c14 = msg.z_c14;
    }
    else {
      resolved.z_c14 = 0.0
    }

    if (msg.x_c15 !== undefined) {
      resolved.x_c15 = msg.x_c15;
    }
    else {
      resolved.x_c15 = 0.0
    }

    if (msg.y_c15 !== undefined) {
      resolved.y_c15 = msg.y_c15;
    }
    else {
      resolved.y_c15 = 0.0
    }

    if (msg.z_c15 !== undefined) {
      resolved.z_c15 = msg.z_c15;
    }
    else {
      resolved.z_c15 = 0.0
    }

    return resolved;
    }
};

module.exports = PlotMatlabImg;
