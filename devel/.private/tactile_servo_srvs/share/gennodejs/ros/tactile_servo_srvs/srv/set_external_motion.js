// Auto-generated. Do not edit!

// (in-package tactile_servo_srvs.srv)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;

//-----------------------------------------------------------


//-----------------------------------------------------------

class set_external_motionRequest {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.delta_x = null;
      this.delta_y = null;
      this.delta_z = null;
      this.delta_wx = null;
      this.delta_wy = null;
      this.delta_wz = null;
    }
    else {
      if (initObj.hasOwnProperty('delta_x')) {
        this.delta_x = initObj.delta_x
      }
      else {
        this.delta_x = 0.0;
      }
      if (initObj.hasOwnProperty('delta_y')) {
        this.delta_y = initObj.delta_y
      }
      else {
        this.delta_y = 0.0;
      }
      if (initObj.hasOwnProperty('delta_z')) {
        this.delta_z = initObj.delta_z
      }
      else {
        this.delta_z = 0.0;
      }
      if (initObj.hasOwnProperty('delta_wx')) {
        this.delta_wx = initObj.delta_wx
      }
      else {
        this.delta_wx = 0.0;
      }
      if (initObj.hasOwnProperty('delta_wy')) {
        this.delta_wy = initObj.delta_wy
      }
      else {
        this.delta_wy = 0.0;
      }
      if (initObj.hasOwnProperty('delta_wz')) {
        this.delta_wz = initObj.delta_wz
      }
      else {
        this.delta_wz = 0.0;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type set_external_motionRequest
    // Serialize message field [delta_x]
    bufferOffset = _serializer.float64(obj.delta_x, buffer, bufferOffset);
    // Serialize message field [delta_y]
    bufferOffset = _serializer.float64(obj.delta_y, buffer, bufferOffset);
    // Serialize message field [delta_z]
    bufferOffset = _serializer.float64(obj.delta_z, buffer, bufferOffset);
    // Serialize message field [delta_wx]
    bufferOffset = _serializer.float64(obj.delta_wx, buffer, bufferOffset);
    // Serialize message field [delta_wy]
    bufferOffset = _serializer.float64(obj.delta_wy, buffer, bufferOffset);
    // Serialize message field [delta_wz]
    bufferOffset = _serializer.float64(obj.delta_wz, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type set_external_motionRequest
    let len;
    let data = new set_external_motionRequest(null);
    // Deserialize message field [delta_x]
    data.delta_x = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [delta_y]
    data.delta_y = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [delta_z]
    data.delta_z = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [delta_wx]
    data.delta_wx = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [delta_wy]
    data.delta_wy = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [delta_wz]
    data.delta_wz = _deserializer.float64(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    return 48;
  }

  static datatype() {
    // Returns string type for a service object
    return 'tactile_servo_srvs/set_external_motionRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '69dd10fc61d44b5c035de881c7b9fa3f';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    float64 delta_x
    float64 delta_y
    float64 delta_z
    float64 delta_wx
    float64 delta_wy
    float64 delta_wz
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new set_external_motionRequest(null);
    if (msg.delta_x !== undefined) {
      resolved.delta_x = msg.delta_x;
    }
    else {
      resolved.delta_x = 0.0
    }

    if (msg.delta_y !== undefined) {
      resolved.delta_y = msg.delta_y;
    }
    else {
      resolved.delta_y = 0.0
    }

    if (msg.delta_z !== undefined) {
      resolved.delta_z = msg.delta_z;
    }
    else {
      resolved.delta_z = 0.0
    }

    if (msg.delta_wx !== undefined) {
      resolved.delta_wx = msg.delta_wx;
    }
    else {
      resolved.delta_wx = 0.0
    }

    if (msg.delta_wy !== undefined) {
      resolved.delta_wy = msg.delta_wy;
    }
    else {
      resolved.delta_wy = 0.0
    }

    if (msg.delta_wz !== undefined) {
      resolved.delta_wz = msg.delta_wz;
    }
    else {
      resolved.delta_wz = 0.0
    }

    return resolved;
    }
};

class set_external_motionResponse {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.success = null;
    }
    else {
      if (initObj.hasOwnProperty('success')) {
        this.success = initObj.success
      }
      else {
        this.success = 0;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type set_external_motionResponse
    // Serialize message field [success]
    bufferOffset = _serializer.int64(obj.success, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type set_external_motionResponse
    let len;
    let data = new set_external_motionResponse(null);
    // Deserialize message field [success]
    data.success = _deserializer.int64(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    return 8;
  }

  static datatype() {
    // Returns string type for a service object
    return 'tactile_servo_srvs/set_external_motionResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '0f26af2399fbfbc8170d9a60ed7b9846';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    int64 success
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new set_external_motionResponse(null);
    if (msg.success !== undefined) {
      resolved.success = msg.success;
    }
    else {
      resolved.success = 0
    }

    return resolved;
    }
};

module.exports = {
  Request: set_external_motionRequest,
  Response: set_external_motionResponse,
  md5sum() { return '5c15389ffcd541f6f1a1a5287c03261c'; },
  datatype() { return 'tactile_servo_srvs/set_external_motion'; }
};
