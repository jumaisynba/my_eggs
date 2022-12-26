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

class begin_controlRequest {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.begin_control = null;
    }
    else {
      if (initObj.hasOwnProperty('begin_control')) {
        this.begin_control = initObj.begin_control
      }
      else {
        this.begin_control = 0;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type begin_controlRequest
    // Serialize message field [begin_control]
    bufferOffset = _serializer.int64(obj.begin_control, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type begin_controlRequest
    let len;
    let data = new begin_controlRequest(null);
    // Deserialize message field [begin_control]
    data.begin_control = _deserializer.int64(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    return 8;
  }

  static datatype() {
    // Returns string type for a service object
    return 'tactile_servo_srvs/begin_controlRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'c92b9ccb7f477a560d2f95b4cc11d5d8';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int64 begin_control
    
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new begin_controlRequest(null);
    if (msg.begin_control !== undefined) {
      resolved.begin_control = msg.begin_control;
    }
    else {
      resolved.begin_control = 0
    }

    return resolved;
    }
};

class begin_controlResponse {
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
    // Serializes a message object of type begin_controlResponse
    // Serialize message field [success]
    bufferOffset = _serializer.int64(obj.success, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type begin_controlResponse
    let len;
    let data = new begin_controlResponse(null);
    // Deserialize message field [success]
    data.success = _deserializer.int64(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    return 8;
  }

  static datatype() {
    // Returns string type for a service object
    return 'tactile_servo_srvs/begin_controlResponse';
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
    const resolved = new begin_controlResponse(null);
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
  Request: begin_controlRequest,
  Response: begin_controlResponse,
  md5sum() { return 'f8510db0e51054ee9f4d5a55ab97ee71'; },
  datatype() { return 'tactile_servo_srvs/begin_control'; }
};
