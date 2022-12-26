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

class servo_hand {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.header = null;
      this.desired_orientation = null;
      this.actual_orientation = null;
      this.error_orientation = null;
      this.hand_orientation = null;
      this.obj_real_orientation = null;
    }
    else {
      if (initObj.hasOwnProperty('header')) {
        this.header = initObj.header
      }
      else {
        this.header = new std_msgs.msg.Header();
      }
      if (initObj.hasOwnProperty('desired_orientation')) {
        this.desired_orientation = initObj.desired_orientation
      }
      else {
        this.desired_orientation = 0.0;
      }
      if (initObj.hasOwnProperty('actual_orientation')) {
        this.actual_orientation = initObj.actual_orientation
      }
      else {
        this.actual_orientation = 0.0;
      }
      if (initObj.hasOwnProperty('error_orientation')) {
        this.error_orientation = initObj.error_orientation
      }
      else {
        this.error_orientation = 0.0;
      }
      if (initObj.hasOwnProperty('hand_orientation')) {
        this.hand_orientation = initObj.hand_orientation
      }
      else {
        this.hand_orientation = 0.0;
      }
      if (initObj.hasOwnProperty('obj_real_orientation')) {
        this.obj_real_orientation = initObj.obj_real_orientation
      }
      else {
        this.obj_real_orientation = 0.0;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type servo_hand
    // Serialize message field [header]
    bufferOffset = std_msgs.msg.Header.serialize(obj.header, buffer, bufferOffset);
    // Serialize message field [desired_orientation]
    bufferOffset = _serializer.float64(obj.desired_orientation, buffer, bufferOffset);
    // Serialize message field [actual_orientation]
    bufferOffset = _serializer.float64(obj.actual_orientation, buffer, bufferOffset);
    // Serialize message field [error_orientation]
    bufferOffset = _serializer.float64(obj.error_orientation, buffer, bufferOffset);
    // Serialize message field [hand_orientation]
    bufferOffset = _serializer.float64(obj.hand_orientation, buffer, bufferOffset);
    // Serialize message field [obj_real_orientation]
    bufferOffset = _serializer.float64(obj.obj_real_orientation, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type servo_hand
    let len;
    let data = new servo_hand(null);
    // Deserialize message field [header]
    data.header = std_msgs.msg.Header.deserialize(buffer, bufferOffset);
    // Deserialize message field [desired_orientation]
    data.desired_orientation = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [actual_orientation]
    data.actual_orientation = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [error_orientation]
    data.error_orientation = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [hand_orientation]
    data.hand_orientation = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [obj_real_orientation]
    data.obj_real_orientation = _deserializer.float64(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += std_msgs.msg.Header.getMessageSize(object.header);
    return length + 40;
  }

  static datatype() {
    // Returns string type for a message object
    return 'tactile_servo_msgs/servo_hand';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'f82b6c4144eb7bb105c70c012b82576a';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Header header
    float64 desired_orientation
    float64 actual_orientation
    float64 error_orientation
    float64 hand_orientation
    float64 obj_real_orientation
    
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
    const resolved = new servo_hand(null);
    if (msg.header !== undefined) {
      resolved.header = std_msgs.msg.Header.Resolve(msg.header)
    }
    else {
      resolved.header = new std_msgs.msg.Header()
    }

    if (msg.desired_orientation !== undefined) {
      resolved.desired_orientation = msg.desired_orientation;
    }
    else {
      resolved.desired_orientation = 0.0
    }

    if (msg.actual_orientation !== undefined) {
      resolved.actual_orientation = msg.actual_orientation;
    }
    else {
      resolved.actual_orientation = 0.0
    }

    if (msg.error_orientation !== undefined) {
      resolved.error_orientation = msg.error_orientation;
    }
    else {
      resolved.error_orientation = 0.0
    }

    if (msg.hand_orientation !== undefined) {
      resolved.hand_orientation = msg.hand_orientation;
    }
    else {
      resolved.hand_orientation = 0.0
    }

    if (msg.obj_real_orientation !== undefined) {
      resolved.obj_real_orientation = msg.obj_real_orientation;
    }
    else {
      resolved.obj_real_orientation = 0.0
    }

    return resolved;
    }
};

module.exports = servo_hand;
