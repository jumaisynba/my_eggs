// Auto-generated. Do not edit!

// (in-package tactile_servo_msgs.msg)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;
let geometry_msgs = _finder('geometry_msgs');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class CalibWeissNano {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.header = null;
      this.contactForce = null;
      this.zmp_x = null;
      this.zmp_y = null;
      this.cop_x = null;
      this.cop_y = null;
      this.orient_z = null;
      this.coc_x = null;
      this.coc_y = null;
      this.nano = null;
    }
    else {
      if (initObj.hasOwnProperty('header')) {
        this.header = initObj.header
      }
      else {
        this.header = new std_msgs.msg.Header();
      }
      if (initObj.hasOwnProperty('contactForce')) {
        this.contactForce = initObj.contactForce
      }
      else {
        this.contactForce = 0.0;
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
      if (initObj.hasOwnProperty('cop_x')) {
        this.cop_x = initObj.cop_x
      }
      else {
        this.cop_x = 0.0;
      }
      if (initObj.hasOwnProperty('cop_y')) {
        this.cop_y = initObj.cop_y
      }
      else {
        this.cop_y = 0.0;
      }
      if (initObj.hasOwnProperty('orient_z')) {
        this.orient_z = initObj.orient_z
      }
      else {
        this.orient_z = 0.0;
      }
      if (initObj.hasOwnProperty('coc_x')) {
        this.coc_x = initObj.coc_x
      }
      else {
        this.coc_x = 0.0;
      }
      if (initObj.hasOwnProperty('coc_y')) {
        this.coc_y = initObj.coc_y
      }
      else {
        this.coc_y = 0.0;
      }
      if (initObj.hasOwnProperty('nano')) {
        this.nano = initObj.nano
      }
      else {
        this.nano = new geometry_msgs.msg.Wrench();
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type CalibWeissNano
    // Serialize message field [header]
    bufferOffset = std_msgs.msg.Header.serialize(obj.header, buffer, bufferOffset);
    // Serialize message field [contactForce]
    bufferOffset = _serializer.float64(obj.contactForce, buffer, bufferOffset);
    // Serialize message field [zmp_x]
    bufferOffset = _serializer.float64(obj.zmp_x, buffer, bufferOffset);
    // Serialize message field [zmp_y]
    bufferOffset = _serializer.float64(obj.zmp_y, buffer, bufferOffset);
    // Serialize message field [cop_x]
    bufferOffset = _serializer.float64(obj.cop_x, buffer, bufferOffset);
    // Serialize message field [cop_y]
    bufferOffset = _serializer.float64(obj.cop_y, buffer, bufferOffset);
    // Serialize message field [orient_z]
    bufferOffset = _serializer.float64(obj.orient_z, buffer, bufferOffset);
    // Serialize message field [coc_x]
    bufferOffset = _serializer.float64(obj.coc_x, buffer, bufferOffset);
    // Serialize message field [coc_y]
    bufferOffset = _serializer.float64(obj.coc_y, buffer, bufferOffset);
    // Serialize message field [nano]
    bufferOffset = geometry_msgs.msg.Wrench.serialize(obj.nano, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type CalibWeissNano
    let len;
    let data = new CalibWeissNano(null);
    // Deserialize message field [header]
    data.header = std_msgs.msg.Header.deserialize(buffer, bufferOffset);
    // Deserialize message field [contactForce]
    data.contactForce = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [zmp_x]
    data.zmp_x = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [zmp_y]
    data.zmp_y = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [cop_x]
    data.cop_x = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [cop_y]
    data.cop_y = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [orient_z]
    data.orient_z = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [coc_x]
    data.coc_x = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [coc_y]
    data.coc_y = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [nano]
    data.nano = geometry_msgs.msg.Wrench.deserialize(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += std_msgs.msg.Header.getMessageSize(object.header);
    return length + 112;
  }

  static datatype() {
    // Returns string type for a message object
    return 'tactile_servo_msgs/CalibWeissNano';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '427d9e81487d12d71f0577b073eb48de';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Header header
    float64 contactForce
    float64 zmp_x
    float64 zmp_y
    float64 cop_x
    float64 cop_y
    float64 orient_z
    float64 coc_x
    float64 coc_y
    geometry_msgs/Wrench nano
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
    MSG: geometry_msgs/Wrench
    # This represents force in free space, separated into
    # its linear and angular parts.
    Vector3  force
    Vector3  torque
    
    ================================================================================
    MSG: geometry_msgs/Vector3
    # This represents a vector in free space. 
    # It is only meant to represent a direction. Therefore, it does not
    # make sense to apply a translation to it (e.g., when applying a 
    # generic rigid transformation to a Vector3, tf2 will only apply the
    # rotation). If you want your data to be translatable too, use the
    # geometry_msgs/Point message instead.
    
    float64 x
    float64 y
    float64 z
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new CalibWeissNano(null);
    if (msg.header !== undefined) {
      resolved.header = std_msgs.msg.Header.Resolve(msg.header)
    }
    else {
      resolved.header = new std_msgs.msg.Header()
    }

    if (msg.contactForce !== undefined) {
      resolved.contactForce = msg.contactForce;
    }
    else {
      resolved.contactForce = 0.0
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

    if (msg.cop_x !== undefined) {
      resolved.cop_x = msg.cop_x;
    }
    else {
      resolved.cop_x = 0.0
    }

    if (msg.cop_y !== undefined) {
      resolved.cop_y = msg.cop_y;
    }
    else {
      resolved.cop_y = 0.0
    }

    if (msg.orient_z !== undefined) {
      resolved.orient_z = msg.orient_z;
    }
    else {
      resolved.orient_z = 0.0
    }

    if (msg.coc_x !== undefined) {
      resolved.coc_x = msg.coc_x;
    }
    else {
      resolved.coc_x = 0.0
    }

    if (msg.coc_y !== undefined) {
      resolved.coc_y = msg.coc_y;
    }
    else {
      resolved.coc_y = 0.0
    }

    if (msg.nano !== undefined) {
      resolved.nano = geometry_msgs.msg.Wrench.Resolve(msg.nano)
    }
    else {
      resolved.nano = new geometry_msgs.msg.Wrench()
    }

    return resolved;
    }
};

module.exports = CalibWeissNano;
