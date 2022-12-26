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

class set_des_feats_srvRequest {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.copx = null;
      this.copy = null;
      this.force = null;
      this.cocx = null;
      this.cocy = null;
      this.orient = null;
      this.zmp_x = null;
      this.zmp_y = null;
    }
    else {
      if (initObj.hasOwnProperty('copx')) {
        this.copx = initObj.copx
      }
      else {
        this.copx = 0.0;
      }
      if (initObj.hasOwnProperty('copy')) {
        this.copy = initObj.copy
      }
      else {
        this.copy = 0.0;
      }
      if (initObj.hasOwnProperty('force')) {
        this.force = initObj.force
      }
      else {
        this.force = 0.0;
      }
      if (initObj.hasOwnProperty('cocx')) {
        this.cocx = initObj.cocx
      }
      else {
        this.cocx = 0.0;
      }
      if (initObj.hasOwnProperty('cocy')) {
        this.cocy = initObj.cocy
      }
      else {
        this.cocy = 0.0;
      }
      if (initObj.hasOwnProperty('orient')) {
        this.orient = initObj.orient
      }
      else {
        this.orient = 0.0;
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
    // Serializes a message object of type set_des_feats_srvRequest
    // Serialize message field [copx]
    bufferOffset = _serializer.float64(obj.copx, buffer, bufferOffset);
    // Serialize message field [copy]
    bufferOffset = _serializer.float64(obj.copy, buffer, bufferOffset);
    // Serialize message field [force]
    bufferOffset = _serializer.float64(obj.force, buffer, bufferOffset);
    // Serialize message field [cocx]
    bufferOffset = _serializer.float64(obj.cocx, buffer, bufferOffset);
    // Serialize message field [cocy]
    bufferOffset = _serializer.float64(obj.cocy, buffer, bufferOffset);
    // Serialize message field [orient]
    bufferOffset = _serializer.float64(obj.orient, buffer, bufferOffset);
    // Serialize message field [zmp_x]
    bufferOffset = _serializer.float64(obj.zmp_x, buffer, bufferOffset);
    // Serialize message field [zmp_y]
    bufferOffset = _serializer.float64(obj.zmp_y, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type set_des_feats_srvRequest
    let len;
    let data = new set_des_feats_srvRequest(null);
    // Deserialize message field [copx]
    data.copx = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [copy]
    data.copy = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [force]
    data.force = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [cocx]
    data.cocx = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [cocy]
    data.cocy = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [orient]
    data.orient = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [zmp_x]
    data.zmp_x = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [zmp_y]
    data.zmp_y = _deserializer.float64(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    return 64;
  }

  static datatype() {
    // Returns string type for a service object
    return 'tactile_servo_srvs/set_des_feats_srvRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '4c072a9801d7384f931d0acc226254b8';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    float64 copx
    float64 copy
    float64 force
    float64 cocx
    float64 cocy
    float64 orient
    float64 zmp_x
    float64 zmp_y
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new set_des_feats_srvRequest(null);
    if (msg.copx !== undefined) {
      resolved.copx = msg.copx;
    }
    else {
      resolved.copx = 0.0
    }

    if (msg.copy !== undefined) {
      resolved.copy = msg.copy;
    }
    else {
      resolved.copy = 0.0
    }

    if (msg.force !== undefined) {
      resolved.force = msg.force;
    }
    else {
      resolved.force = 0.0
    }

    if (msg.cocx !== undefined) {
      resolved.cocx = msg.cocx;
    }
    else {
      resolved.cocx = 0.0
    }

    if (msg.cocy !== undefined) {
      resolved.cocy = msg.cocy;
    }
    else {
      resolved.cocy = 0.0
    }

    if (msg.orient !== undefined) {
      resolved.orient = msg.orient;
    }
    else {
      resolved.orient = 0.0
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

class set_des_feats_srvResponse {
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
    // Serializes a message object of type set_des_feats_srvResponse
    // Serialize message field [success]
    bufferOffset = _serializer.int64(obj.success, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type set_des_feats_srvResponse
    let len;
    let data = new set_des_feats_srvResponse(null);
    // Deserialize message field [success]
    data.success = _deserializer.int64(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    return 8;
  }

  static datatype() {
    // Returns string type for a service object
    return 'tactile_servo_srvs/set_des_feats_srvResponse';
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
    const resolved = new set_des_feats_srvResponse(null);
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
  Request: set_des_feats_srvRequest,
  Response: set_des_feats_srvResponse,
  md5sum() { return 'a9f79bb34d45b76c6fd0a8b06fb9504b'; },
  datatype() { return 'tactile_servo_srvs/set_des_feats_srv'; }
};
