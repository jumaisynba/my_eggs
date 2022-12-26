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

class PlotMatlabfarea {
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
      this.farea = null;
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
      if (initObj.hasOwnProperty('farea')) {
        this.farea = initObj.farea
      }
      else {
        this.farea = 0.0;
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
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type PlotMatlabfarea
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
    // Serialize message field [farea]
    bufferOffset = _serializer.float64(obj.farea, buffer, bufferOffset);
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
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type PlotMatlabfarea
    let len;
    let data = new PlotMatlabfarea(null);
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
    // Deserialize message field [farea]
    data.farea = _deserializer.float64(buffer, bufferOffset);
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
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += std_msgs.msg.Header.getMessageSize(object.header);
    return length + 348;
  }

  static datatype() {
    // Returns string type for a message object
    return 'tactile_servo_msgs/PlotMatlabfarea';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'b57380546f3f285844e4524ecda29892';
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
    float64 farea
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
    const resolved = new PlotMatlabfarea(null);
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

    if (msg.farea !== undefined) {
      resolved.farea = msg.farea;
    }
    else {
      resolved.farea = 0.0
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

    return resolved;
    }
};

module.exports = PlotMatlabfarea;
