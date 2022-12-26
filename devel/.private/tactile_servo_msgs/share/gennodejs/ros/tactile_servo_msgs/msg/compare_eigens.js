// Auto-generated. Do not edit!

// (in-package tactile_servo_msgs.msg)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;

//-----------------------------------------------------------

class compare_eigens {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.vec_eigen1_x = null;
      this.vec_eigen1_y = null;
      this.val_eigen1 = null;
      this.vec_eigen2_x = null;
      this.vec_eigen2_y = null;
      this.val_eigen2 = null;
    }
    else {
      if (initObj.hasOwnProperty('vec_eigen1_x')) {
        this.vec_eigen1_x = initObj.vec_eigen1_x
      }
      else {
        this.vec_eigen1_x = 0.0;
      }
      if (initObj.hasOwnProperty('vec_eigen1_y')) {
        this.vec_eigen1_y = initObj.vec_eigen1_y
      }
      else {
        this.vec_eigen1_y = 0.0;
      }
      if (initObj.hasOwnProperty('val_eigen1')) {
        this.val_eigen1 = initObj.val_eigen1
      }
      else {
        this.val_eigen1 = 0.0;
      }
      if (initObj.hasOwnProperty('vec_eigen2_x')) {
        this.vec_eigen2_x = initObj.vec_eigen2_x
      }
      else {
        this.vec_eigen2_x = 0.0;
      }
      if (initObj.hasOwnProperty('vec_eigen2_y')) {
        this.vec_eigen2_y = initObj.vec_eigen2_y
      }
      else {
        this.vec_eigen2_y = 0.0;
      }
      if (initObj.hasOwnProperty('val_eigen2')) {
        this.val_eigen2 = initObj.val_eigen2
      }
      else {
        this.val_eigen2 = 0.0;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type compare_eigens
    // Serialize message field [vec_eigen1_x]
    bufferOffset = _serializer.float64(obj.vec_eigen1_x, buffer, bufferOffset);
    // Serialize message field [vec_eigen1_y]
    bufferOffset = _serializer.float64(obj.vec_eigen1_y, buffer, bufferOffset);
    // Serialize message field [val_eigen1]
    bufferOffset = _serializer.float64(obj.val_eigen1, buffer, bufferOffset);
    // Serialize message field [vec_eigen2_x]
    bufferOffset = _serializer.float64(obj.vec_eigen2_x, buffer, bufferOffset);
    // Serialize message field [vec_eigen2_y]
    bufferOffset = _serializer.float64(obj.vec_eigen2_y, buffer, bufferOffset);
    // Serialize message field [val_eigen2]
    bufferOffset = _serializer.float64(obj.val_eigen2, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type compare_eigens
    let len;
    let data = new compare_eigens(null);
    // Deserialize message field [vec_eigen1_x]
    data.vec_eigen1_x = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [vec_eigen1_y]
    data.vec_eigen1_y = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [val_eigen1]
    data.val_eigen1 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [vec_eigen2_x]
    data.vec_eigen2_x = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [vec_eigen2_y]
    data.vec_eigen2_y = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [val_eigen2]
    data.val_eigen2 = _deserializer.float64(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    return 48;
  }

  static datatype() {
    // Returns string type for a message object
    return 'tactile_servo_msgs/compare_eigens';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '67c049bbb4b73b3b423f74d38f657f1e';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    float64 vec_eigen1_x
    float64 vec_eigen1_y
    float64 val_eigen1
    float64 vec_eigen2_x
    float64 vec_eigen2_y
    float64 val_eigen2
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new compare_eigens(null);
    if (msg.vec_eigen1_x !== undefined) {
      resolved.vec_eigen1_x = msg.vec_eigen1_x;
    }
    else {
      resolved.vec_eigen1_x = 0.0
    }

    if (msg.vec_eigen1_y !== undefined) {
      resolved.vec_eigen1_y = msg.vec_eigen1_y;
    }
    else {
      resolved.vec_eigen1_y = 0.0
    }

    if (msg.val_eigen1 !== undefined) {
      resolved.val_eigen1 = msg.val_eigen1;
    }
    else {
      resolved.val_eigen1 = 0.0
    }

    if (msg.vec_eigen2_x !== undefined) {
      resolved.vec_eigen2_x = msg.vec_eigen2_x;
    }
    else {
      resolved.vec_eigen2_x = 0.0
    }

    if (msg.vec_eigen2_y !== undefined) {
      resolved.vec_eigen2_y = msg.vec_eigen2_y;
    }
    else {
      resolved.vec_eigen2_y = 0.0
    }

    if (msg.val_eigen2 !== undefined) {
      resolved.val_eigen2 = msg.val_eigen2;
    }
    else {
      resolved.val_eigen2 = 0.0
    }

    return resolved;
    }
};

module.exports = compare_eigens;
