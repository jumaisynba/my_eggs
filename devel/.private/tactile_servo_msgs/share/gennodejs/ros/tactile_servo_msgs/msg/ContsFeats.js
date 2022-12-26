// Auto-generated. Do not edit!

// (in-package tactile_servo_msgs.msg)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;
let OneContFeats = require('./OneContFeats.js');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class ContsFeats {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.header = null;
      this.control_features = null;
    }
    else {
      if (initObj.hasOwnProperty('header')) {
        this.header = initObj.header
      }
      else {
        this.header = new std_msgs.msg.Header();
      }
      if (initObj.hasOwnProperty('control_features')) {
        this.control_features = initObj.control_features
      }
      else {
        this.control_features = [];
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type ContsFeats
    // Serialize message field [header]
    bufferOffset = std_msgs.msg.Header.serialize(obj.header, buffer, bufferOffset);
    // Serialize message field [control_features]
    // Serialize the length for message field [control_features]
    bufferOffset = _serializer.uint32(obj.control_features.length, buffer, bufferOffset);
    obj.control_features.forEach((val) => {
      bufferOffset = OneContFeats.serialize(val, buffer, bufferOffset);
    });
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type ContsFeats
    let len;
    let data = new ContsFeats(null);
    // Deserialize message field [header]
    data.header = std_msgs.msg.Header.deserialize(buffer, bufferOffset);
    // Deserialize message field [control_features]
    // Deserialize array length for message field [control_features]
    len = _deserializer.uint32(buffer, bufferOffset);
    data.control_features = new Array(len);
    for (let i = 0; i < len; ++i) {
      data.control_features[i] = OneContFeats.deserialize(buffer, bufferOffset)
    }
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += std_msgs.msg.Header.getMessageSize(object.header);
    length += 85 * object.control_features.length;
    return length + 4;
  }

  static datatype() {
    // Returns string type for a message object
    return 'tactile_servo_msgs/ContsFeats';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '44c38b3dcf679267b4ec9aa49b84b60d';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Header header                                   # stamp
    tactile_servo_msgs/OneContFeats[] control_features           # array of contacts
    
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
    
    ================================================================================
    MSG: tactile_servo_msgs/OneContFeats
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
    const resolved = new ContsFeats(null);
    if (msg.header !== undefined) {
      resolved.header = std_msgs.msg.Header.Resolve(msg.header)
    }
    else {
      resolved.header = new std_msgs.msg.Header()
    }

    if (msg.control_features !== undefined) {
      resolved.control_features = new Array(msg.control_features.length);
      for (let i = 0; i < resolved.control_features.length; ++i) {
        resolved.control_features[i] = OneContFeats.Resolve(msg.control_features[i]);
      }
    }
    else {
      resolved.control_features = []
    }

    return resolved;
    }
};

module.exports = ContsFeats;
