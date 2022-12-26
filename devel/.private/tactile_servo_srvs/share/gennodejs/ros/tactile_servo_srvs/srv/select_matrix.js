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

class select_matrixRequest {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.copx = null;
      this.copy = null;
      this.force = null;
      this.cocx = null;
      this.cocy = null;
      this.orient = null;
    }
    else {
      if (initObj.hasOwnProperty('copx')) {
        this.copx = initObj.copx
      }
      else {
        this.copx = 0;
      }
      if (initObj.hasOwnProperty('copy')) {
        this.copy = initObj.copy
      }
      else {
        this.copy = 0;
      }
      if (initObj.hasOwnProperty('force')) {
        this.force = initObj.force
      }
      else {
        this.force = 0;
      }
      if (initObj.hasOwnProperty('cocx')) {
        this.cocx = initObj.cocx
      }
      else {
        this.cocx = 0;
      }
      if (initObj.hasOwnProperty('cocy')) {
        this.cocy = initObj.cocy
      }
      else {
        this.cocy = 0;
      }
      if (initObj.hasOwnProperty('orient')) {
        this.orient = initObj.orient
      }
      else {
        this.orient = 0;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type select_matrixRequest
    // Serialize message field [copx]
    bufferOffset = _serializer.int64(obj.copx, buffer, bufferOffset);
    // Serialize message field [copy]
    bufferOffset = _serializer.int64(obj.copy, buffer, bufferOffset);
    // Serialize message field [force]
    bufferOffset = _serializer.int64(obj.force, buffer, bufferOffset);
    // Serialize message field [cocx]
    bufferOffset = _serializer.int64(obj.cocx, buffer, bufferOffset);
    // Serialize message field [cocy]
    bufferOffset = _serializer.int64(obj.cocy, buffer, bufferOffset);
    // Serialize message field [orient]
    bufferOffset = _serializer.int64(obj.orient, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type select_matrixRequest
    let len;
    let data = new select_matrixRequest(null);
    // Deserialize message field [copx]
    data.copx = _deserializer.int64(buffer, bufferOffset);
    // Deserialize message field [copy]
    data.copy = _deserializer.int64(buffer, bufferOffset);
    // Deserialize message field [force]
    data.force = _deserializer.int64(buffer, bufferOffset);
    // Deserialize message field [cocx]
    data.cocx = _deserializer.int64(buffer, bufferOffset);
    // Deserialize message field [cocy]
    data.cocy = _deserializer.int64(buffer, bufferOffset);
    // Deserialize message field [orient]
    data.orient = _deserializer.int64(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    return 48;
  }

  static datatype() {
    // Returns string type for a service object
    return 'tactile_servo_srvs/select_matrixRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '82ccbe8ea8a90c6e89f74c41c4d77e19';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int64 copx
    int64 copy
    int64 force
    int64 cocx
    int64 cocy
    int64 orient
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new select_matrixRequest(null);
    if (msg.copx !== undefined) {
      resolved.copx = msg.copx;
    }
    else {
      resolved.copx = 0
    }

    if (msg.copy !== undefined) {
      resolved.copy = msg.copy;
    }
    else {
      resolved.copy = 0
    }

    if (msg.force !== undefined) {
      resolved.force = msg.force;
    }
    else {
      resolved.force = 0
    }

    if (msg.cocx !== undefined) {
      resolved.cocx = msg.cocx;
    }
    else {
      resolved.cocx = 0
    }

    if (msg.cocy !== undefined) {
      resolved.cocy = msg.cocy;
    }
    else {
      resolved.cocy = 0
    }

    if (msg.orient !== undefined) {
      resolved.orient = msg.orient;
    }
    else {
      resolved.orient = 0
    }

    return resolved;
    }
};

class select_matrixResponse {
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
    // Serializes a message object of type select_matrixResponse
    // Serialize message field [success]
    bufferOffset = _serializer.int64(obj.success, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type select_matrixResponse
    let len;
    let data = new select_matrixResponse(null);
    // Deserialize message field [success]
    data.success = _deserializer.int64(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    return 8;
  }

  static datatype() {
    // Returns string type for a service object
    return 'tactile_servo_srvs/select_matrixResponse';
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
    const resolved = new select_matrixResponse(null);
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
  Request: select_matrixRequest,
  Response: select_matrixResponse,
  md5sum() { return '477eddf35d1c9126254cd3a55ca19343'; },
  datatype() { return 'tactile_servo_srvs/select_matrix'; }
};
