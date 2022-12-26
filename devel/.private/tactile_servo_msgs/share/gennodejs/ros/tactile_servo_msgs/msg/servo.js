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

class servo {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.header = null;
      this.desired_orientation = null;
      this.actual_orientation = null;
      this.desired_force = null;
      this.actual_force = null;
      this.desired_pressure = null;
      this.actual_pressure = null;
      this.desired_offset_x = null;
      this.actual_offset_x = null;
      this.desired_offset_y = null;
      this.actual_offset_y = null;
      this.actual_pressure2 = null;
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
      if (initObj.hasOwnProperty('desired_force')) {
        this.desired_force = initObj.desired_force
      }
      else {
        this.desired_force = 0.0;
      }
      if (initObj.hasOwnProperty('actual_force')) {
        this.actual_force = initObj.actual_force
      }
      else {
        this.actual_force = 0.0;
      }
      if (initObj.hasOwnProperty('desired_pressure')) {
        this.desired_pressure = initObj.desired_pressure
      }
      else {
        this.desired_pressure = 0.0;
      }
      if (initObj.hasOwnProperty('actual_pressure')) {
        this.actual_pressure = initObj.actual_pressure
      }
      else {
        this.actual_pressure = 0.0;
      }
      if (initObj.hasOwnProperty('desired_offset_x')) {
        this.desired_offset_x = initObj.desired_offset_x
      }
      else {
        this.desired_offset_x = 0.0;
      }
      if (initObj.hasOwnProperty('actual_offset_x')) {
        this.actual_offset_x = initObj.actual_offset_x
      }
      else {
        this.actual_offset_x = 0.0;
      }
      if (initObj.hasOwnProperty('desired_offset_y')) {
        this.desired_offset_y = initObj.desired_offset_y
      }
      else {
        this.desired_offset_y = 0.0;
      }
      if (initObj.hasOwnProperty('actual_offset_y')) {
        this.actual_offset_y = initObj.actual_offset_y
      }
      else {
        this.actual_offset_y = 0.0;
      }
      if (initObj.hasOwnProperty('actual_pressure2')) {
        this.actual_pressure2 = initObj.actual_pressure2
      }
      else {
        this.actual_pressure2 = 0.0;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type servo
    // Serialize message field [header]
    bufferOffset = std_msgs.msg.Header.serialize(obj.header, buffer, bufferOffset);
    // Serialize message field [desired_orientation]
    bufferOffset = _serializer.float64(obj.desired_orientation, buffer, bufferOffset);
    // Serialize message field [actual_orientation]
    bufferOffset = _serializer.float64(obj.actual_orientation, buffer, bufferOffset);
    // Serialize message field [desired_force]
    bufferOffset = _serializer.float64(obj.desired_force, buffer, bufferOffset);
    // Serialize message field [actual_force]
    bufferOffset = _serializer.float64(obj.actual_force, buffer, bufferOffset);
    // Serialize message field [desired_pressure]
    bufferOffset = _serializer.float64(obj.desired_pressure, buffer, bufferOffset);
    // Serialize message field [actual_pressure]
    bufferOffset = _serializer.float64(obj.actual_pressure, buffer, bufferOffset);
    // Serialize message field [desired_offset_x]
    bufferOffset = _serializer.float64(obj.desired_offset_x, buffer, bufferOffset);
    // Serialize message field [actual_offset_x]
    bufferOffset = _serializer.float64(obj.actual_offset_x, buffer, bufferOffset);
    // Serialize message field [desired_offset_y]
    bufferOffset = _serializer.float64(obj.desired_offset_y, buffer, bufferOffset);
    // Serialize message field [actual_offset_y]
    bufferOffset = _serializer.float64(obj.actual_offset_y, buffer, bufferOffset);
    // Serialize message field [actual_pressure2]
    bufferOffset = _serializer.float64(obj.actual_pressure2, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type servo
    let len;
    let data = new servo(null);
    // Deserialize message field [header]
    data.header = std_msgs.msg.Header.deserialize(buffer, bufferOffset);
    // Deserialize message field [desired_orientation]
    data.desired_orientation = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [actual_orientation]
    data.actual_orientation = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [desired_force]
    data.desired_force = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [actual_force]
    data.actual_force = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [desired_pressure]
    data.desired_pressure = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [actual_pressure]
    data.actual_pressure = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [desired_offset_x]
    data.desired_offset_x = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [actual_offset_x]
    data.actual_offset_x = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [desired_offset_y]
    data.desired_offset_y = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [actual_offset_y]
    data.actual_offset_y = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [actual_pressure2]
    data.actual_pressure2 = _deserializer.float64(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += std_msgs.msg.Header.getMessageSize(object.header);
    return length + 88;
  }

  static datatype() {
    // Returns string type for a message object
    return 'tactile_servo_msgs/servo';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '41a31713cf8f35c335c8794979f147d5';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Header header
    float64 desired_orientation 
    float64 actual_orientation
    float64 desired_force 
    float64 actual_force
    float64 desired_pressure
    float64 actual_pressure
    float64 desired_offset_x
    float64 actual_offset_x
    float64 desired_offset_y
    float64 actual_offset_y
    float64 actual_pressure2
    
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
    const resolved = new servo(null);
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

    if (msg.desired_force !== undefined) {
      resolved.desired_force = msg.desired_force;
    }
    else {
      resolved.desired_force = 0.0
    }

    if (msg.actual_force !== undefined) {
      resolved.actual_force = msg.actual_force;
    }
    else {
      resolved.actual_force = 0.0
    }

    if (msg.desired_pressure !== undefined) {
      resolved.desired_pressure = msg.desired_pressure;
    }
    else {
      resolved.desired_pressure = 0.0
    }

    if (msg.actual_pressure !== undefined) {
      resolved.actual_pressure = msg.actual_pressure;
    }
    else {
      resolved.actual_pressure = 0.0
    }

    if (msg.desired_offset_x !== undefined) {
      resolved.desired_offset_x = msg.desired_offset_x;
    }
    else {
      resolved.desired_offset_x = 0.0
    }

    if (msg.actual_offset_x !== undefined) {
      resolved.actual_offset_x = msg.actual_offset_x;
    }
    else {
      resolved.actual_offset_x = 0.0
    }

    if (msg.desired_offset_y !== undefined) {
      resolved.desired_offset_y = msg.desired_offset_y;
    }
    else {
      resolved.desired_offset_y = 0.0
    }

    if (msg.actual_offset_y !== undefined) {
      resolved.actual_offset_y = msg.actual_offset_y;
    }
    else {
      resolved.actual_offset_y = 0.0
    }

    if (msg.actual_pressure2 !== undefined) {
      resolved.actual_pressure2 = msg.actual_pressure2;
    }
    else {
      resolved.actual_pressure2 = 0.0
    }

    return resolved;
    }
};

module.exports = servo;
