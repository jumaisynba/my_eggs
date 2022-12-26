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

class PlanFeats {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.header = null;
      this.TypeContact = null;
      this.numContours = null;
      this.isCorner = null;
      this.contactArea = null;
    }
    else {
      if (initObj.hasOwnProperty('header')) {
        this.header = initObj.header
      }
      else {
        this.header = new std_msgs.msg.Header();
      }
      if (initObj.hasOwnProperty('TypeContact')) {
        this.TypeContact = initObj.TypeContact
      }
      else {
        this.TypeContact = '';
      }
      if (initObj.hasOwnProperty('numContours')) {
        this.numContours = initObj.numContours
      }
      else {
        this.numContours = 0;
      }
      if (initObj.hasOwnProperty('isCorner')) {
        this.isCorner = initObj.isCorner
      }
      else {
        this.isCorner = false;
      }
      if (initObj.hasOwnProperty('contactArea')) {
        this.contactArea = initObj.contactArea
      }
      else {
        this.contactArea = 0.0;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type PlanFeats
    // Serialize message field [header]
    bufferOffset = std_msgs.msg.Header.serialize(obj.header, buffer, bufferOffset);
    // Serialize message field [TypeContact]
    bufferOffset = _serializer.string(obj.TypeContact, buffer, bufferOffset);
    // Serialize message field [numContours]
    bufferOffset = _serializer.int32(obj.numContours, buffer, bufferOffset);
    // Serialize message field [isCorner]
    bufferOffset = _serializer.bool(obj.isCorner, buffer, bufferOffset);
    // Serialize message field [contactArea]
    bufferOffset = _serializer.float64(obj.contactArea, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type PlanFeats
    let len;
    let data = new PlanFeats(null);
    // Deserialize message field [header]
    data.header = std_msgs.msg.Header.deserialize(buffer, bufferOffset);
    // Deserialize message field [TypeContact]
    data.TypeContact = _deserializer.string(buffer, bufferOffset);
    // Deserialize message field [numContours]
    data.numContours = _deserializer.int32(buffer, bufferOffset);
    // Deserialize message field [isCorner]
    data.isCorner = _deserializer.bool(buffer, bufferOffset);
    // Deserialize message field [contactArea]
    data.contactArea = _deserializer.float64(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += std_msgs.msg.Header.getMessageSize(object.header);
    length += object.TypeContact.length;
    return length + 17;
  }

  static datatype() {
    // Returns string type for a message object
    return 'tactile_servo_msgs/PlanFeats';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'f6ba0ac762b3ea36a8d1c92ae7084acf';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Header header
    string TypeContact
    int32 numContours
    bool isCorner  
    float64 contactArea
    
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
    const resolved = new PlanFeats(null);
    if (msg.header !== undefined) {
      resolved.header = std_msgs.msg.Header.Resolve(msg.header)
    }
    else {
      resolved.header = new std_msgs.msg.Header()
    }

    if (msg.TypeContact !== undefined) {
      resolved.TypeContact = msg.TypeContact;
    }
    else {
      resolved.TypeContact = ''
    }

    if (msg.numContours !== undefined) {
      resolved.numContours = msg.numContours;
    }
    else {
      resolved.numContours = 0
    }

    if (msg.isCorner !== undefined) {
      resolved.isCorner = msg.isCorner;
    }
    else {
      resolved.isCorner = false
    }

    if (msg.contactArea !== undefined) {
      resolved.contactArea = msg.contactArea;
    }
    else {
      resolved.contactArea = 0.0
    }

    return resolved;
    }
};

module.exports = PlanFeats;
