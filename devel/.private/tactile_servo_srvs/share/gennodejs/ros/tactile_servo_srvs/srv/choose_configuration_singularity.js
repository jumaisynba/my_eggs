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

class choose_configuration_singularityRequest {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.choose_configuration = null;
    }
    else {
      if (initObj.hasOwnProperty('choose_configuration')) {
        this.choose_configuration = initObj.choose_configuration
      }
      else {
        this.choose_configuration = 0;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type choose_configuration_singularityRequest
    // Serialize message field [choose_configuration]
    bufferOffset = _serializer.int64(obj.choose_configuration, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type choose_configuration_singularityRequest
    let len;
    let data = new choose_configuration_singularityRequest(null);
    // Deserialize message field [choose_configuration]
    data.choose_configuration = _deserializer.int64(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    return 8;
  }

  static datatype() {
    // Returns string type for a service object
    return 'tactile_servo_srvs/choose_configuration_singularityRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '9b87213b7248742e892d124acb32c142';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int64 choose_configuration
    
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new choose_configuration_singularityRequest(null);
    if (msg.choose_configuration !== undefined) {
      resolved.choose_configuration = msg.choose_configuration;
    }
    else {
      resolved.choose_configuration = 0
    }

    return resolved;
    }
};

class choose_configuration_singularityResponse {
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
    // Serializes a message object of type choose_configuration_singularityResponse
    // Serialize message field [success]
    bufferOffset = _serializer.int64(obj.success, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type choose_configuration_singularityResponse
    let len;
    let data = new choose_configuration_singularityResponse(null);
    // Deserialize message field [success]
    data.success = _deserializer.int64(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    return 8;
  }

  static datatype() {
    // Returns string type for a service object
    return 'tactile_servo_srvs/choose_configuration_singularityResponse';
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
    const resolved = new choose_configuration_singularityResponse(null);
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
  Request: choose_configuration_singularityRequest,
  Response: choose_configuration_singularityResponse,
  md5sum() { return '10ee8dd987888b1b0dd9111a4eae0a74'; },
  datatype() { return 'tactile_servo_srvs/choose_configuration_singularity'; }
};
