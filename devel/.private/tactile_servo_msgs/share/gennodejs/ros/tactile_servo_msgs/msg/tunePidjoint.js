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

class tunePidjoint {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.header = null;
      this.err_in = null;
      this.err_out = null;
      this.dt = null;
      this.val_now = null;
      this.val_new = null;
    }
    else {
      if (initObj.hasOwnProperty('header')) {
        this.header = initObj.header
      }
      else {
        this.header = new std_msgs.msg.Header();
      }
      if (initObj.hasOwnProperty('err_in')) {
        this.err_in = initObj.err_in
      }
      else {
        this.err_in = 0.0;
      }
      if (initObj.hasOwnProperty('err_out')) {
        this.err_out = initObj.err_out
      }
      else {
        this.err_out = 0.0;
      }
      if (initObj.hasOwnProperty('dt')) {
        this.dt = initObj.dt
      }
      else {
        this.dt = 0.0;
      }
      if (initObj.hasOwnProperty('val_now')) {
        this.val_now = initObj.val_now
      }
      else {
        this.val_now = 0.0;
      }
      if (initObj.hasOwnProperty('val_new')) {
        this.val_new = initObj.val_new
      }
      else {
        this.val_new = 0.0;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type tunePidjoint
    // Serialize message field [header]
    bufferOffset = std_msgs.msg.Header.serialize(obj.header, buffer, bufferOffset);
    // Serialize message field [err_in]
    bufferOffset = _serializer.float64(obj.err_in, buffer, bufferOffset);
    // Serialize message field [err_out]
    bufferOffset = _serializer.float64(obj.err_out, buffer, bufferOffset);
    // Serialize message field [dt]
    bufferOffset = _serializer.float64(obj.dt, buffer, bufferOffset);
    // Serialize message field [val_now]
    bufferOffset = _serializer.float64(obj.val_now, buffer, bufferOffset);
    // Serialize message field [val_new]
    bufferOffset = _serializer.float64(obj.val_new, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type tunePidjoint
    let len;
    let data = new tunePidjoint(null);
    // Deserialize message field [header]
    data.header = std_msgs.msg.Header.deserialize(buffer, bufferOffset);
    // Deserialize message field [err_in]
    data.err_in = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [err_out]
    data.err_out = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [dt]
    data.dt = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [val_now]
    data.val_now = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [val_new]
    data.val_new = _deserializer.float64(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += std_msgs.msg.Header.getMessageSize(object.header);
    return length + 40;
  }

  static datatype() {
    // Returns string type for a message object
    return 'tactile_servo_msgs/tunePidjoint';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'a172d7f24dc9bff9c3c39d757afa54e8';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Header header
    float64 err_in
    float64 err_out
    float64 dt
    float64 val_now
    float64 val_new
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
    const resolved = new tunePidjoint(null);
    if (msg.header !== undefined) {
      resolved.header = std_msgs.msg.Header.Resolve(msg.header)
    }
    else {
      resolved.header = new std_msgs.msg.Header()
    }

    if (msg.err_in !== undefined) {
      resolved.err_in = msg.err_in;
    }
    else {
      resolved.err_in = 0.0
    }

    if (msg.err_out !== undefined) {
      resolved.err_out = msg.err_out;
    }
    else {
      resolved.err_out = 0.0
    }

    if (msg.dt !== undefined) {
      resolved.dt = msg.dt;
    }
    else {
      resolved.dt = 0.0
    }

    if (msg.val_now !== undefined) {
      resolved.val_now = msg.val_now;
    }
    else {
      resolved.val_now = 0.0
    }

    if (msg.val_new !== undefined) {
      resolved.val_new = msg.val_new;
    }
    else {
      resolved.val_new = 0.0
    }

    return resolved;
    }
};

module.exports = tunePidjoint;
