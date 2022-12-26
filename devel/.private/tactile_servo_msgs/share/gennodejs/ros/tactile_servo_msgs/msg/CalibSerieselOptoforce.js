// Auto-generated. Do not edit!

// (in-package tactile_servo_msgs.msg)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;
let geometry_msgs = _finder('geometry_msgs');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class CalibSerieselOptoforce {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.header = null;
      this.adc0 = null;
      this.adc1 = null;
      this.adc2 = null;
      this.adc3 = null;
      this.adc4 = null;
      this.adc5 = null;
      this.adc6 = null;
      this.adc7 = null;
      this.adc8 = null;
      this.adc9 = null;
      this.adc10 = null;
      this.adc11 = null;
      this.adc12 = null;
      this.adc13 = null;
      this.adc14 = null;
      this.adc15 = null;
      this.nano = null;
    }
    else {
      if (initObj.hasOwnProperty('header')) {
        this.header = initObj.header
      }
      else {
        this.header = new std_msgs.msg.Header();
      }
      if (initObj.hasOwnProperty('adc0')) {
        this.adc0 = initObj.adc0
      }
      else {
        this.adc0 = 0;
      }
      if (initObj.hasOwnProperty('adc1')) {
        this.adc1 = initObj.adc1
      }
      else {
        this.adc1 = 0;
      }
      if (initObj.hasOwnProperty('adc2')) {
        this.adc2 = initObj.adc2
      }
      else {
        this.adc2 = 0;
      }
      if (initObj.hasOwnProperty('adc3')) {
        this.adc3 = initObj.adc3
      }
      else {
        this.adc3 = 0;
      }
      if (initObj.hasOwnProperty('adc4')) {
        this.adc4 = initObj.adc4
      }
      else {
        this.adc4 = 0;
      }
      if (initObj.hasOwnProperty('adc5')) {
        this.adc5 = initObj.adc5
      }
      else {
        this.adc5 = 0;
      }
      if (initObj.hasOwnProperty('adc6')) {
        this.adc6 = initObj.adc6
      }
      else {
        this.adc6 = 0;
      }
      if (initObj.hasOwnProperty('adc7')) {
        this.adc7 = initObj.adc7
      }
      else {
        this.adc7 = 0;
      }
      if (initObj.hasOwnProperty('adc8')) {
        this.adc8 = initObj.adc8
      }
      else {
        this.adc8 = 0;
      }
      if (initObj.hasOwnProperty('adc9')) {
        this.adc9 = initObj.adc9
      }
      else {
        this.adc9 = 0;
      }
      if (initObj.hasOwnProperty('adc10')) {
        this.adc10 = initObj.adc10
      }
      else {
        this.adc10 = 0;
      }
      if (initObj.hasOwnProperty('adc11')) {
        this.adc11 = initObj.adc11
      }
      else {
        this.adc11 = 0;
      }
      if (initObj.hasOwnProperty('adc12')) {
        this.adc12 = initObj.adc12
      }
      else {
        this.adc12 = 0;
      }
      if (initObj.hasOwnProperty('adc13')) {
        this.adc13 = initObj.adc13
      }
      else {
        this.adc13 = 0;
      }
      if (initObj.hasOwnProperty('adc14')) {
        this.adc14 = initObj.adc14
      }
      else {
        this.adc14 = 0;
      }
      if (initObj.hasOwnProperty('adc15')) {
        this.adc15 = initObj.adc15
      }
      else {
        this.adc15 = 0;
      }
      if (initObj.hasOwnProperty('nano')) {
        this.nano = initObj.nano
      }
      else {
        this.nano = new geometry_msgs.msg.Wrench();
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type CalibSerieselOptoforce
    // Serialize message field [header]
    bufferOffset = std_msgs.msg.Header.serialize(obj.header, buffer, bufferOffset);
    // Serialize message field [adc0]
    bufferOffset = _serializer.uint16(obj.adc0, buffer, bufferOffset);
    // Serialize message field [adc1]
    bufferOffset = _serializer.uint16(obj.adc1, buffer, bufferOffset);
    // Serialize message field [adc2]
    bufferOffset = _serializer.uint16(obj.adc2, buffer, bufferOffset);
    // Serialize message field [adc3]
    bufferOffset = _serializer.uint16(obj.adc3, buffer, bufferOffset);
    // Serialize message field [adc4]
    bufferOffset = _serializer.uint16(obj.adc4, buffer, bufferOffset);
    // Serialize message field [adc5]
    bufferOffset = _serializer.uint16(obj.adc5, buffer, bufferOffset);
    // Serialize message field [adc6]
    bufferOffset = _serializer.uint16(obj.adc6, buffer, bufferOffset);
    // Serialize message field [adc7]
    bufferOffset = _serializer.uint16(obj.adc7, buffer, bufferOffset);
    // Serialize message field [adc8]
    bufferOffset = _serializer.uint16(obj.adc8, buffer, bufferOffset);
    // Serialize message field [adc9]
    bufferOffset = _serializer.uint16(obj.adc9, buffer, bufferOffset);
    // Serialize message field [adc10]
    bufferOffset = _serializer.uint16(obj.adc10, buffer, bufferOffset);
    // Serialize message field [adc11]
    bufferOffset = _serializer.uint16(obj.adc11, buffer, bufferOffset);
    // Serialize message field [adc12]
    bufferOffset = _serializer.uint16(obj.adc12, buffer, bufferOffset);
    // Serialize message field [adc13]
    bufferOffset = _serializer.uint16(obj.adc13, buffer, bufferOffset);
    // Serialize message field [adc14]
    bufferOffset = _serializer.uint16(obj.adc14, buffer, bufferOffset);
    // Serialize message field [adc15]
    bufferOffset = _serializer.uint16(obj.adc15, buffer, bufferOffset);
    // Serialize message field [nano]
    bufferOffset = geometry_msgs.msg.Wrench.serialize(obj.nano, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type CalibSerieselOptoforce
    let len;
    let data = new CalibSerieselOptoforce(null);
    // Deserialize message field [header]
    data.header = std_msgs.msg.Header.deserialize(buffer, bufferOffset);
    // Deserialize message field [adc0]
    data.adc0 = _deserializer.uint16(buffer, bufferOffset);
    // Deserialize message field [adc1]
    data.adc1 = _deserializer.uint16(buffer, bufferOffset);
    // Deserialize message field [adc2]
    data.adc2 = _deserializer.uint16(buffer, bufferOffset);
    // Deserialize message field [adc3]
    data.adc3 = _deserializer.uint16(buffer, bufferOffset);
    // Deserialize message field [adc4]
    data.adc4 = _deserializer.uint16(buffer, bufferOffset);
    // Deserialize message field [adc5]
    data.adc5 = _deserializer.uint16(buffer, bufferOffset);
    // Deserialize message field [adc6]
    data.adc6 = _deserializer.uint16(buffer, bufferOffset);
    // Deserialize message field [adc7]
    data.adc7 = _deserializer.uint16(buffer, bufferOffset);
    // Deserialize message field [adc8]
    data.adc8 = _deserializer.uint16(buffer, bufferOffset);
    // Deserialize message field [adc9]
    data.adc9 = _deserializer.uint16(buffer, bufferOffset);
    // Deserialize message field [adc10]
    data.adc10 = _deserializer.uint16(buffer, bufferOffset);
    // Deserialize message field [adc11]
    data.adc11 = _deserializer.uint16(buffer, bufferOffset);
    // Deserialize message field [adc12]
    data.adc12 = _deserializer.uint16(buffer, bufferOffset);
    // Deserialize message field [adc13]
    data.adc13 = _deserializer.uint16(buffer, bufferOffset);
    // Deserialize message field [adc14]
    data.adc14 = _deserializer.uint16(buffer, bufferOffset);
    // Deserialize message field [adc15]
    data.adc15 = _deserializer.uint16(buffer, bufferOffset);
    // Deserialize message field [nano]
    data.nano = geometry_msgs.msg.Wrench.deserialize(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += std_msgs.msg.Header.getMessageSize(object.header);
    return length + 80;
  }

  static datatype() {
    // Returns string type for a message object
    return 'tactile_servo_msgs/CalibSerieselOptoforce';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '89487ec7fb2ca7040c7708621b61dd21';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Header header
    uint16 adc0
    uint16 adc1
    uint16 adc2
    uint16 adc3
    uint16 adc4
    uint16 adc5
    uint16 adc6
    uint16 adc7
    uint16 adc8
    uint16 adc9
    uint16 adc10
    uint16 adc11
    uint16 adc12
    uint16 adc13
    uint16 adc14
    uint16 adc15
    geometry_msgs/Wrench nano
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
    
    ================================================================================
    MSG: geometry_msgs/Wrench
    # This represents force in free space, separated into
    # its linear and angular parts.
    Vector3  force
    Vector3  torque
    
    ================================================================================
    MSG: geometry_msgs/Vector3
    # This represents a vector in free space. 
    # It is only meant to represent a direction. Therefore, it does not
    # make sense to apply a translation to it (e.g., when applying a 
    # generic rigid transformation to a Vector3, tf2 will only apply the
    # rotation). If you want your data to be translatable too, use the
    # geometry_msgs/Point message instead.
    
    float64 x
    float64 y
    float64 z
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new CalibSerieselOptoforce(null);
    if (msg.header !== undefined) {
      resolved.header = std_msgs.msg.Header.Resolve(msg.header)
    }
    else {
      resolved.header = new std_msgs.msg.Header()
    }

    if (msg.adc0 !== undefined) {
      resolved.adc0 = msg.adc0;
    }
    else {
      resolved.adc0 = 0
    }

    if (msg.adc1 !== undefined) {
      resolved.adc1 = msg.adc1;
    }
    else {
      resolved.adc1 = 0
    }

    if (msg.adc2 !== undefined) {
      resolved.adc2 = msg.adc2;
    }
    else {
      resolved.adc2 = 0
    }

    if (msg.adc3 !== undefined) {
      resolved.adc3 = msg.adc3;
    }
    else {
      resolved.adc3 = 0
    }

    if (msg.adc4 !== undefined) {
      resolved.adc4 = msg.adc4;
    }
    else {
      resolved.adc4 = 0
    }

    if (msg.adc5 !== undefined) {
      resolved.adc5 = msg.adc5;
    }
    else {
      resolved.adc5 = 0
    }

    if (msg.adc6 !== undefined) {
      resolved.adc6 = msg.adc6;
    }
    else {
      resolved.adc6 = 0
    }

    if (msg.adc7 !== undefined) {
      resolved.adc7 = msg.adc7;
    }
    else {
      resolved.adc7 = 0
    }

    if (msg.adc8 !== undefined) {
      resolved.adc8 = msg.adc8;
    }
    else {
      resolved.adc8 = 0
    }

    if (msg.adc9 !== undefined) {
      resolved.adc9 = msg.adc9;
    }
    else {
      resolved.adc9 = 0
    }

    if (msg.adc10 !== undefined) {
      resolved.adc10 = msg.adc10;
    }
    else {
      resolved.adc10 = 0
    }

    if (msg.adc11 !== undefined) {
      resolved.adc11 = msg.adc11;
    }
    else {
      resolved.adc11 = 0
    }

    if (msg.adc12 !== undefined) {
      resolved.adc12 = msg.adc12;
    }
    else {
      resolved.adc12 = 0
    }

    if (msg.adc13 !== undefined) {
      resolved.adc13 = msg.adc13;
    }
    else {
      resolved.adc13 = 0
    }

    if (msg.adc14 !== undefined) {
      resolved.adc14 = msg.adc14;
    }
    else {
      resolved.adc14 = 0
    }

    if (msg.adc15 !== undefined) {
      resolved.adc15 = msg.adc15;
    }
    else {
      resolved.adc15 = 0
    }

    if (msg.nano !== undefined) {
      resolved.nano = geometry_msgs.msg.Wrench.Resolve(msg.nano)
    }
    else {
      resolved.nano = new geometry_msgs.msg.Wrench()
    }

    return resolved;
    }
};

module.exports = CalibSerieselOptoforce;
