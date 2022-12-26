// Auto-generated. Do not edit!

// (in-package tactile_servo_msgs.msg)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class COCtoZMP {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.header = null;
      this.num_pixels_contact = null;
      this.coc_to_zmp_smooth = null;
    }
    else {
      if (initObj.hasOwnProperty('header')) {
        this.header = initObj.header
      }
      else {
        this.header = new std_msgs.msg.Header();
      }
      if (initObj.hasOwnProperty('num_pixels_contact')) {
        this.num_pixels_contact = initObj.num_pixels_contact
      }
      else {
        this.num_pixels_contact = 0;
      }
      if (initObj.hasOwnProperty('coc_to_zmp_smooth')) {
        this.coc_to_zmp_smooth = initObj.coc_to_zmp_smooth
      }
      else {
        this.coc_to_zmp_smooth = 0.0;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type COCtoZMP
    // Serialize message field [header]
    bufferOffset = std_msgs.msg.Header.serialize(obj.header, buffer, bufferOffset);
    // Serialize message field [num_pixels_contact]
    bufferOffset = _serializer.int32(obj.num_pixels_contact, buffer, bufferOffset);
    // Serialize message field [coc_to_zmp_smooth]
    bufferOffset = _serializer.float64(obj.coc_to_zmp_smooth, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type COCtoZMP
    let len;
    let data = new COCtoZMP(null);
    // Deserialize message field [header]
    data.header = std_msgs.msg.Header.deserialize(buffer, bufferOffset);
    // Deserialize message field [num_pixels_contact]
    data.num_pixels_contact = _deserializer.int32(buffer, bufferOffset);
    // Deserialize message field [coc_to_zmp_smooth]
    data.coc_to_zmp_smooth = _deserializer.float64(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += std_msgs.msg.Header.getMessageSize(object.header);
    return length + 12;
  }

  static datatype() {
    // Returns string type for a message object
    return 'tactile_servo_msgs/COCtoZMP';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '0d817ec84cd3c8d3b73bcf52114de648';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Header header
    int32 num_pixels_contact
    float64 coc_to_zmp_smooth
    
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
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new COCtoZMP(null);
    if (msg.header !== undefined) {
      resolved.header = std_msgs.msg.Header.Resolve(msg.header)
    }
    else {
      resolved.header = new std_msgs.msg.Header()
    }

    if (msg.num_pixels_contact !== undefined) {
      resolved.num_pixels_contact = msg.num_pixels_contact;
    }
    else {
      resolved.num_pixels_contact = 0
    }

    if (msg.coc_to_zmp_smooth !== undefined) {
      resolved.coc_to_zmp_smooth = msg.coc_to_zmp_smooth;
    }
    else {
      resolved.coc_to_zmp_smooth = 0.0
    }

    return resolved;
    }
};

module.exports = COCtoZMP;
