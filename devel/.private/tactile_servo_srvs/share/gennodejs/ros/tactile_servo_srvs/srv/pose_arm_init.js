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

class pose_arm_initRequest {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.init = null;
    }
    else {
      if (initObj.hasOwnProperty('init')) {
        this.init = initObj.init
      }
      else {
        this.init = false;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type pose_arm_initRequest
    // Serialize message field [init]
    bufferOffset = _serializer.bool(obj.init, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type pose_arm_initRequest
    let len;
    let data = new pose_arm_initRequest(null);
    // Deserialize message field [init]
    data.init = _deserializer.bool(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    return 1;
  }

  static datatype() {
    // Returns string type for a service object
    return 'tactile_servo_srvs/pose_arm_initRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '7d4dfd2ecc8e1df89b8c57312822d6f7';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    bool init
    
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new pose_arm_initRequest(null);
    if (msg.init !== undefined) {
      resolved.init = msg.init;
    }
    else {
      resolved.init = false
    }

    return resolved;
    }
};

class pose_arm_initResponse {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.initialized = null;
    }
    else {
      if (initObj.hasOwnProperty('initialized')) {
        this.initialized = initObj.initialized
      }
      else {
        this.initialized = false;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type pose_arm_initResponse
    // Serialize message field [initialized]
    bufferOffset = _serializer.bool(obj.initialized, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type pose_arm_initResponse
    let len;
    let data = new pose_arm_initResponse(null);
    // Deserialize message field [initialized]
    data.initialized = _deserializer.bool(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    return 1;
  }

  static datatype() {
    // Returns string type for a service object
    return 'tactile_servo_srvs/pose_arm_initResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '02c180b526010e14bcf346a656b3133c';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    bool initialized
    
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new pose_arm_initResponse(null);
    if (msg.initialized !== undefined) {
      resolved.initialized = msg.initialized;
    }
    else {
      resolved.initialized = false
    }

    return resolved;
    }
};

module.exports = {
  Request: pose_arm_initRequest,
  Response: pose_arm_initResponse,
  md5sum() { return '46241584f8d15752cfaafef65fb4333e'; },
  datatype() { return 'tactile_servo_srvs/pose_arm_init'; }
};
