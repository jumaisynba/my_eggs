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

class touch_sensor_read {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.header = null;
      this.a0 = null;
      this.a1 = null;
      this.a2 = null;
      this.a3 = null;
      this.a4 = null;
      this.a5 = null;
      this.a6 = null;
      this.a7 = null;
      this.a8 = null;
      this.a9 = null;
      this.a10 = null;
      this.a11 = null;
      this.a12 = null;
      this.a13 = null;
      this.a14 = null;
      this.a15 = null;
    }
    else {
      if (initObj.hasOwnProperty('header')) {
        this.header = initObj.header
      }
      else {
        this.header = new std_msgs.msg.Header();
      }
      if (initObj.hasOwnProperty('a0')) {
        this.a0 = initObj.a0
      }
      else {
        this.a0 = 0.0;
      }
      if (initObj.hasOwnProperty('a1')) {
        this.a1 = initObj.a1
      }
      else {
        this.a1 = 0.0;
      }
      if (initObj.hasOwnProperty('a2')) {
        this.a2 = initObj.a2
      }
      else {
        this.a2 = 0.0;
      }
      if (initObj.hasOwnProperty('a3')) {
        this.a3 = initObj.a3
      }
      else {
        this.a3 = 0.0;
      }
      if (initObj.hasOwnProperty('a4')) {
        this.a4 = initObj.a4
      }
      else {
        this.a4 = 0.0;
      }
      if (initObj.hasOwnProperty('a5')) {
        this.a5 = initObj.a5
      }
      else {
        this.a5 = 0.0;
      }
      if (initObj.hasOwnProperty('a6')) {
        this.a6 = initObj.a6
      }
      else {
        this.a6 = 0.0;
      }
      if (initObj.hasOwnProperty('a7')) {
        this.a7 = initObj.a7
      }
      else {
        this.a7 = 0.0;
      }
      if (initObj.hasOwnProperty('a8')) {
        this.a8 = initObj.a8
      }
      else {
        this.a8 = 0.0;
      }
      if (initObj.hasOwnProperty('a9')) {
        this.a9 = initObj.a9
      }
      else {
        this.a9 = 0.0;
      }
      if (initObj.hasOwnProperty('a10')) {
        this.a10 = initObj.a10
      }
      else {
        this.a10 = 0.0;
      }
      if (initObj.hasOwnProperty('a11')) {
        this.a11 = initObj.a11
      }
      else {
        this.a11 = 0.0;
      }
      if (initObj.hasOwnProperty('a12')) {
        this.a12 = initObj.a12
      }
      else {
        this.a12 = 0.0;
      }
      if (initObj.hasOwnProperty('a13')) {
        this.a13 = initObj.a13
      }
      else {
        this.a13 = 0.0;
      }
      if (initObj.hasOwnProperty('a14')) {
        this.a14 = initObj.a14
      }
      else {
        this.a14 = 0.0;
      }
      if (initObj.hasOwnProperty('a15')) {
        this.a15 = initObj.a15
      }
      else {
        this.a15 = 0.0;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type touch_sensor_read
    // Serialize message field [header]
    bufferOffset = std_msgs.msg.Header.serialize(obj.header, buffer, bufferOffset);
    // Serialize message field [a0]
    bufferOffset = _serializer.float32(obj.a0, buffer, bufferOffset);
    // Serialize message field [a1]
    bufferOffset = _serializer.float32(obj.a1, buffer, bufferOffset);
    // Serialize message field [a2]
    bufferOffset = _serializer.float32(obj.a2, buffer, bufferOffset);
    // Serialize message field [a3]
    bufferOffset = _serializer.float32(obj.a3, buffer, bufferOffset);
    // Serialize message field [a4]
    bufferOffset = _serializer.float32(obj.a4, buffer, bufferOffset);
    // Serialize message field [a5]
    bufferOffset = _serializer.float32(obj.a5, buffer, bufferOffset);
    // Serialize message field [a6]
    bufferOffset = _serializer.float32(obj.a6, buffer, bufferOffset);
    // Serialize message field [a7]
    bufferOffset = _serializer.float32(obj.a7, buffer, bufferOffset);
    // Serialize message field [a8]
    bufferOffset = _serializer.float32(obj.a8, buffer, bufferOffset);
    // Serialize message field [a9]
    bufferOffset = _serializer.float32(obj.a9, buffer, bufferOffset);
    // Serialize message field [a10]
    bufferOffset = _serializer.float32(obj.a10, buffer, bufferOffset);
    // Serialize message field [a11]
    bufferOffset = _serializer.float32(obj.a11, buffer, bufferOffset);
    // Serialize message field [a12]
    bufferOffset = _serializer.float32(obj.a12, buffer, bufferOffset);
    // Serialize message field [a13]
    bufferOffset = _serializer.float32(obj.a13, buffer, bufferOffset);
    // Serialize message field [a14]
    bufferOffset = _serializer.float32(obj.a14, buffer, bufferOffset);
    // Serialize message field [a15]
    bufferOffset = _serializer.float32(obj.a15, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type touch_sensor_read
    let len;
    let data = new touch_sensor_read(null);
    // Deserialize message field [header]
    data.header = std_msgs.msg.Header.deserialize(buffer, bufferOffset);
    // Deserialize message field [a0]
    data.a0 = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [a1]
    data.a1 = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [a2]
    data.a2 = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [a3]
    data.a3 = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [a4]
    data.a4 = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [a5]
    data.a5 = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [a6]
    data.a6 = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [a7]
    data.a7 = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [a8]
    data.a8 = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [a9]
    data.a9 = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [a10]
    data.a10 = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [a11]
    data.a11 = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [a12]
    data.a12 = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [a13]
    data.a13 = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [a14]
    data.a14 = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [a15]
    data.a15 = _deserializer.float32(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += std_msgs.msg.Header.getMessageSize(object.header);
    return length + 64;
  }

  static datatype() {
    // Returns string type for a message object
    return 'tactile_servo_msgs/touch_sensor_read';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '4df8b4ab4ecaf13d960bd76650e851a5';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # Custome Analog input message
    Header header
    float32 a0
    float32 a1
    float32 a2
    float32 a3
    float32 a4
    float32 a5
    float32 a6
    float32 a7
    float32 a8
    float32 a9
    float32 a10
    float32 a11
    float32 a12
    float32 a13
    float32 a14
    float32 a15
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
    const resolved = new touch_sensor_read(null);
    if (msg.header !== undefined) {
      resolved.header = std_msgs.msg.Header.Resolve(msg.header)
    }
    else {
      resolved.header = new std_msgs.msg.Header()
    }

    if (msg.a0 !== undefined) {
      resolved.a0 = msg.a0;
    }
    else {
      resolved.a0 = 0.0
    }

    if (msg.a1 !== undefined) {
      resolved.a1 = msg.a1;
    }
    else {
      resolved.a1 = 0.0
    }

    if (msg.a2 !== undefined) {
      resolved.a2 = msg.a2;
    }
    else {
      resolved.a2 = 0.0
    }

    if (msg.a3 !== undefined) {
      resolved.a3 = msg.a3;
    }
    else {
      resolved.a3 = 0.0
    }

    if (msg.a4 !== undefined) {
      resolved.a4 = msg.a4;
    }
    else {
      resolved.a4 = 0.0
    }

    if (msg.a5 !== undefined) {
      resolved.a5 = msg.a5;
    }
    else {
      resolved.a5 = 0.0
    }

    if (msg.a6 !== undefined) {
      resolved.a6 = msg.a6;
    }
    else {
      resolved.a6 = 0.0
    }

    if (msg.a7 !== undefined) {
      resolved.a7 = msg.a7;
    }
    else {
      resolved.a7 = 0.0
    }

    if (msg.a8 !== undefined) {
      resolved.a8 = msg.a8;
    }
    else {
      resolved.a8 = 0.0
    }

    if (msg.a9 !== undefined) {
      resolved.a9 = msg.a9;
    }
    else {
      resolved.a9 = 0.0
    }

    if (msg.a10 !== undefined) {
      resolved.a10 = msg.a10;
    }
    else {
      resolved.a10 = 0.0
    }

    if (msg.a11 !== undefined) {
      resolved.a11 = msg.a11;
    }
    else {
      resolved.a11 = 0.0
    }

    if (msg.a12 !== undefined) {
      resolved.a12 = msg.a12;
    }
    else {
      resolved.a12 = 0.0
    }

    if (msg.a13 !== undefined) {
      resolved.a13 = msg.a13;
    }
    else {
      resolved.a13 = 0.0
    }

    if (msg.a14 !== undefined) {
      resolved.a14 = msg.a14;
    }
    else {
      resolved.a14 = 0.0
    }

    if (msg.a15 !== undefined) {
      resolved.a15 = msg.a15;
    }
    else {
      resolved.a15 = 0.0
    }

    return resolved;
    }
};

module.exports = touch_sensor_read;
