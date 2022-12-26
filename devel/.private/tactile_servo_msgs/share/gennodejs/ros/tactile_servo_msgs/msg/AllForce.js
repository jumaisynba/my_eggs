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

class AllForce {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.header = null;
      this.real = null;
      this.desired = null;
      this.weiss = null;
    }
    else {
      if (initObj.hasOwnProperty('header')) {
        this.header = initObj.header
      }
      else {
        this.header = new std_msgs.msg.Header();
      }
      if (initObj.hasOwnProperty('real')) {
        this.real = initObj.real
      }
      else {
        this.real = 0.0;
      }
      if (initObj.hasOwnProperty('desired')) {
        this.desired = initObj.desired
      }
      else {
        this.desired = 0.0;
      }
      if (initObj.hasOwnProperty('weiss')) {
        this.weiss = initObj.weiss
      }
      else {
        this.weiss = 0.0;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type AllForce
    // Serialize message field [header]
    bufferOffset = std_msgs.msg.Header.serialize(obj.header, buffer, bufferOffset);
    // Serialize message field [real]
    bufferOffset = _serializer.float64(obj.real, buffer, bufferOffset);
    // Serialize message field [desired]
    bufferOffset = _serializer.float64(obj.desired, buffer, bufferOffset);
    // Serialize message field [weiss]
    bufferOffset = _serializer.float64(obj.weiss, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type AllForce
    let len;
    let data = new AllForce(null);
    // Deserialize message field [header]
    data.header = std_msgs.msg.Header.deserialize(buffer, bufferOffset);
    // Deserialize message field [real]
    data.real = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [desired]
    data.desired = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [weiss]
    data.weiss = _deserializer.float64(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += std_msgs.msg.Header.getMessageSize(object.header);
    return length + 24;
  }

  static datatype() {
    // Returns string type for a message object
    return 'tactile_servo_msgs/AllForce';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'ef1fc02563dc2cf330e05b255f81bf87';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Header header
    float64 real
    float64 desired
    float64 weiss
    
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
    const resolved = new AllForce(null);
    if (msg.header !== undefined) {
      resolved.header = std_msgs.msg.Header.Resolve(msg.header)
    }
    else {
      resolved.header = new std_msgs.msg.Header()
    }

    if (msg.real !== undefined) {
      resolved.real = msg.real;
    }
    else {
      resolved.real = 0.0
    }

    if (msg.desired !== undefined) {
      resolved.desired = msg.desired;
    }
    else {
      resolved.desired = 0.0
    }

    if (msg.weiss !== undefined) {
      resolved.weiss = msg.weiss;
    }
    else {
      resolved.weiss = 0.0
    }

    return resolved;
    }
};

module.exports = AllForce;
