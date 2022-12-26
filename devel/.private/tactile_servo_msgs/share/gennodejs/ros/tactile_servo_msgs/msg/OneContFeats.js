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

class OneContFeats {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.centerpressure_x = null;
      this.centerpressure_y = null;
      this.contactForce = null;
      this.centerContact_x = null;
      this.centerContact_y = null;
      this.contactOrientation = null;
      this.zmp_x = null;
      this.zmp_y = null;
      this.is_contact = null;
      this.num_pixels_contact = null;
      this.highest_force_cell = null;
      this.real_total_force = null;
    }
    else {
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
      if (initObj.hasOwnProperty('is_contact')) {
        this.is_contact = initObj.is_contact
      }
      else {
        this.is_contact = false;
      }
      if (initObj.hasOwnProperty('num_pixels_contact')) {
        this.num_pixels_contact = initObj.num_pixels_contact
      }
      else {
        this.num_pixels_contact = 0;
      }
      if (initObj.hasOwnProperty('highest_force_cell')) {
        this.highest_force_cell = initObj.highest_force_cell
      }
      else {
        this.highest_force_cell = 0.0;
      }
      if (initObj.hasOwnProperty('real_total_force')) {
        this.real_total_force = initObj.real_total_force
      }
      else {
        this.real_total_force = 0.0;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type OneContFeats
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
    // Serialize message field [is_contact]
    bufferOffset = _serializer.bool(obj.is_contact, buffer, bufferOffset);
    // Serialize message field [num_pixels_contact]
    bufferOffset = _serializer.int32(obj.num_pixels_contact, buffer, bufferOffset);
    // Serialize message field [highest_force_cell]
    bufferOffset = _serializer.float64(obj.highest_force_cell, buffer, bufferOffset);
    // Serialize message field [real_total_force]
    bufferOffset = _serializer.float64(obj.real_total_force, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type OneContFeats
    let len;
    let data = new OneContFeats(null);
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
    // Deserialize message field [is_contact]
    data.is_contact = _deserializer.bool(buffer, bufferOffset);
    // Deserialize message field [num_pixels_contact]
    data.num_pixels_contact = _deserializer.int32(buffer, bufferOffset);
    // Deserialize message field [highest_force_cell]
    data.highest_force_cell = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [real_total_force]
    data.real_total_force = _deserializer.float64(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    return 85;
  }

  static datatype() {
    // Returns string type for a message object
    return 'tactile_servo_msgs/OneContFeats';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'fdece2a38b99c6197914e4ea70b8fffb';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    float64 centerpressure_x
    float64 centerpressure_y
    float64 contactForce
    float64 centerContact_x
    float64 centerContact_y
    float64 contactOrientation
    float64 zmp_x
    float64 zmp_y
    bool is_contact
    int32 num_pixels_contact
    float64 highest_force_cell
    float64 real_total_force
    
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new OneContFeats(null);
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

    if (msg.is_contact !== undefined) {
      resolved.is_contact = msg.is_contact;
    }
    else {
      resolved.is_contact = false
    }

    if (msg.num_pixels_contact !== undefined) {
      resolved.num_pixels_contact = msg.num_pixels_contact;
    }
    else {
      resolved.num_pixels_contact = 0
    }

    if (msg.highest_force_cell !== undefined) {
      resolved.highest_force_cell = msg.highest_force_cell;
    }
    else {
      resolved.highest_force_cell = 0.0
    }

    if (msg.real_total_force !== undefined) {
      resolved.real_total_force = msg.real_total_force;
    }
    else {
      resolved.real_total_force = 0.0
    }

    return resolved;
    }
};

module.exports = OneContFeats;
