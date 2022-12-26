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

class ErrProp {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.header = null;
      this.centerpressure_x = null;
      this.centerpressure_y = null;
      this.contactForce = null;
      this.centerContact_x = null;
      this.centerContact_y = null;
      this.contactOrientation = null;
      this.zmp_x = null;
      this.zmp_y = null;
    }
    else {
      if (initObj.hasOwnProperty('header')) {
        this.header = initObj.header
      }
      else {
        this.header = new std_msgs.msg.Header();
      }
      if (initObj.hasOwnProperty('centerpressure_x')) {
        this.centerpressure_x = initObj.centerpressure_x
      }
      else {
        this.centerpressure_x = 0.0;
      }
      if (initObj.hasOwnProperty('centerpressure_y')) {
        this.centerpressure_y = initObj.centerpressure_y
      }
      else {
        this.centerpressure_y = 0.0;
      }
      if (initObj.hasOwnProperty('contactForce')) {
        this.contactForce = initObj.contactForce
      }
      else {
        this.contactForce = 0.0;
      }
      if (initObj.hasOwnProperty('centerContact_x')) {
        this.centerContact_x = initObj.centerContact_x
      }
      else {
        this.centerContact_x = 0.0;
      }
      if (initObj.hasOwnProperty('centerContact_y')) {
        this.centerContact_y = initObj.centerContact_y
      }
      else {
        this.centerContact_y = 0.0;
      }
      if (initObj.hasOwnProperty('contactOrientation')) {
        this.contactOrientation = initObj.contactOrientation
      }
      else {
        this.contactOrientation = 0.0;
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
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type ErrProp
    // Serialize message field [header]
    bufferOffset = std_msgs.msg.Header.serialize(obj.header, buffer, bufferOffset);
    // Serialize message field [centerpressure_x]
    bufferOffset = _serializer.float64(obj.centerpressure_x, buffer, bufferOffset);
    // Serialize message field [centerpressure_y]
    bufferOffset = _serializer.float64(obj.centerpressure_y, buffer, bufferOffset);
    // Serialize message field [contactForce]
    bufferOffset = _serializer.float64(obj.contactForce, buffer, bufferOffset);
    // Serialize message field [centerContact_x]
    bufferOffset = _serializer.float64(obj.centerContact_x, buffer, bufferOffset);
    // Serialize message field [centerContact_y]
    bufferOffset = _serializer.float64(obj.centerContact_y, buffer, bufferOffset);
    // Serialize message field [contactOrientation]
    bufferOffset = _serializer.float64(obj.contactOrientation, buffer, bufferOffset);
    // Serialize message field [zmp_x]
    bufferOffset = _serializer.float64(obj.zmp_x, buffer, bufferOffset);
    // Serialize message field [zmp_y]
    bufferOffset = _serializer.float64(obj.zmp_y, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type ErrProp
    let len;
    let data = new ErrProp(null);
    // Deserialize message field [header]
    data.header = std_msgs.msg.Header.deserialize(buffer, bufferOffset);
    // Deserialize message field [centerpressure_x]
    data.centerpressure_x = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [centerpressure_y]
    data.centerpressure_y = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [contactForce]
    data.contactForce = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [centerContact_x]
    data.centerContact_x = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [centerContact_y]
    data.centerContact_y = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [contactOrientation]
    data.contactOrientation = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [zmp_x]
    data.zmp_x = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [zmp_y]
    data.zmp_y = _deserializer.float64(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += std_msgs.msg.Header.getMessageSize(object.header);
    return length + 64;
  }

  static datatype() {
    // Returns string type for a message object
    return 'tactile_servo_msgs/ErrProp';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '4e6507bf7c9706a62d8c8389f7cfcdbc';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Header header
    float64 centerpressure_x
    float64 centerpressure_y
    float64 contactForce
    float64 centerContact_x
    float64 centerContact_y
    float64 contactOrientation
    float64 zmp_x
    float64 zmp_y
    
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
    const resolved = new ErrProp(null);
    if (msg.header !== undefined) {
      resolved.header = std_msgs.msg.Header.Resolve(msg.header)
    }
    else {
      resolved.header = new std_msgs.msg.Header()
    }

    if (msg.centerpressure_x !== undefined) {
      resolved.centerpressure_x = msg.centerpressure_x;
    }
    else {
      resolved.centerpressure_x = 0.0
    }

    if (msg.centerpressure_y !== undefined) {
      resolved.centerpressure_y = msg.centerpressure_y;
    }
    else {
      resolved.centerpressure_y = 0.0
    }

    if (msg.contactForce !== undefined) {
      resolved.contactForce = msg.contactForce;
    }
    else {
      resolved.contactForce = 0.0
    }

    if (msg.centerContact_x !== undefined) {
      resolved.centerContact_x = msg.centerContact_x;
    }
    else {
      resolved.centerContact_x = 0.0
    }

    if (msg.centerContact_y !== undefined) {
      resolved.centerContact_y = msg.centerContact_y;
    }
    else {
      resolved.centerContact_y = 0.0
    }

    if (msg.contactOrientation !== undefined) {
      resolved.contactOrientation = msg.contactOrientation;
    }
    else {
      resolved.contactOrientation = 0.0
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

    return resolved;
    }
};

module.exports = ErrProp;
