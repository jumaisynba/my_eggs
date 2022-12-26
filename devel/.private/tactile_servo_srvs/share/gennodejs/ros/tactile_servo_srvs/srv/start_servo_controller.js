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

class start_servo_controllerRequest {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.begin_controller = null;
    }
    else {
      if (initObj.hasOwnProperty('begin_controller')) {
        this.begin_controller = initObj.begin_controller
      }
      else {
        this.begin_controller = false;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type start_servo_controllerRequest
    // Serialize message field [begin_controller]
    bufferOffset = _serializer.bool(obj.begin_controller, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type start_servo_controllerRequest
    let len;
    let data = new start_servo_controllerRequest(null);
    // Deserialize message field [begin_controller]
    data.begin_controller = _deserializer.bool(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    return 1;
  }

  static datatype() {
    // Returns string type for a service object
    return 'tactile_servo_srvs/start_servo_controllerRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '87b616c79208197b3869826e5ab2e1f9';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    bool begin_controller
    
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new start_servo_controllerRequest(null);
    if (msg.begin_controller !== undefined) {
      resolved.begin_controller = msg.begin_controller;
    }
    else {
      resolved.begin_controller = false
    }

    return resolved;
    }
};

class start_servo_controllerResponse {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.controller_runs = null;
    }
    else {
      if (initObj.hasOwnProperty('controller_runs')) {
        this.controller_runs = initObj.controller_runs
      }
      else {
        this.controller_runs = false;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type start_servo_controllerResponse
    // Serialize message field [controller_runs]
    bufferOffset = _serializer.bool(obj.controller_runs, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type start_servo_controllerResponse
    let len;
    let data = new start_servo_controllerResponse(null);
    // Deserialize message field [controller_runs]
    data.controller_runs = _deserializer.bool(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    return 1;
  }

  static datatype() {
    // Returns string type for a service object
    return 'tactile_servo_srvs/start_servo_controllerResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '8004741410349902f6ca73329f6a93b2';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    bool controller_runs
    
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new start_servo_controllerResponse(null);
    if (msg.controller_runs !== undefined) {
      resolved.controller_runs = msg.controller_runs;
    }
    else {
      resolved.controller_runs = false
    }

    return resolved;
    }
};

module.exports = {
  Request: start_servo_controllerRequest,
  Response: start_servo_controllerResponse,
  md5sum() { return 'e2e21116f5b5b751861cd4a451d33268'; },
  datatype() { return 'tactile_servo_srvs/start_servo_controller'; }
};
