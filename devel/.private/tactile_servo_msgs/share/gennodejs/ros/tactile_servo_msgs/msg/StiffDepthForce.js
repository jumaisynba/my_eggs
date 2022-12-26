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

class StiffDepthForce {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.header = null;
      this.force = null;
      this.depth = null;
      this.stiffness_force = null;
      this.image = null;
      this.stiffness_image = null;
      this.forces32 = null;
      this.depth32 = null;
      this.stiffness32 = null;
      this.index_in_array32 = null;
      this.ind_max_force32 = null;
      this.max_force32 = null;
      this.depth_at_max_force32 = null;
      this.stiffness_at_max_force32 = null;
      this.ind_min_force32 = null;
      this.min_force32 = null;
      this.depth_at_min_force32 = null;
      this.stiffness_at_min_force32 = null;
      this.ind_max_depth32 = null;
      this.max_depth32 = null;
      this.force_at_max_depth32 = null;
      this.stiffness_at_max_depth32 = null;
      this.ind_min_depth32 = null;
      this.min_depth32 = null;
      this.force_at_min_depth32 = null;
      this.stiffness_at_min_depth32 = null;
      this.ind_max_stiffness32 = null;
      this.max_stiffness32 = null;
      this.force_at_max_stiffness32 = null;
      this.depth_at_max_stiffness32 = null;
      this.ind_min_stiffness32 = null;
      this.min_stiffness32 = null;
      this.force_at_min_stiffness32 = null;
      this.depth_at_min_stiffness32 = null;
      this.total_force = null;
      this.avg_force = null;
      this.avg_depth = null;
    }
    else {
      if (initObj.hasOwnProperty('header')) {
        this.header = initObj.header
      }
      else {
        this.header = new std_msgs.msg.Header();
      }
      if (initObj.hasOwnProperty('force')) {
        this.force = initObj.force
      }
      else {
        this.force = [];
      }
      if (initObj.hasOwnProperty('depth')) {
        this.depth = initObj.depth
      }
      else {
        this.depth = [];
      }
      if (initObj.hasOwnProperty('stiffness_force')) {
        this.stiffness_force = initObj.stiffness_force
      }
      else {
        this.stiffness_force = [];
      }
      if (initObj.hasOwnProperty('image')) {
        this.image = initObj.image
      }
      else {
        this.image = [];
      }
      if (initObj.hasOwnProperty('stiffness_image')) {
        this.stiffness_image = initObj.stiffness_image
      }
      else {
        this.stiffness_image = [];
      }
      if (initObj.hasOwnProperty('forces32')) {
        this.forces32 = initObj.forces32
      }
      else {
        this.forces32 = [];
      }
      if (initObj.hasOwnProperty('depth32')) {
        this.depth32 = initObj.depth32
      }
      else {
        this.depth32 = [];
      }
      if (initObj.hasOwnProperty('stiffness32')) {
        this.stiffness32 = initObj.stiffness32
      }
      else {
        this.stiffness32 = [];
      }
      if (initObj.hasOwnProperty('index_in_array32')) {
        this.index_in_array32 = initObj.index_in_array32
      }
      else {
        this.index_in_array32 = [];
      }
      if (initObj.hasOwnProperty('ind_max_force32')) {
        this.ind_max_force32 = initObj.ind_max_force32
      }
      else {
        this.ind_max_force32 = 0.0;
      }
      if (initObj.hasOwnProperty('max_force32')) {
        this.max_force32 = initObj.max_force32
      }
      else {
        this.max_force32 = 0.0;
      }
      if (initObj.hasOwnProperty('depth_at_max_force32')) {
        this.depth_at_max_force32 = initObj.depth_at_max_force32
      }
      else {
        this.depth_at_max_force32 = 0.0;
      }
      if (initObj.hasOwnProperty('stiffness_at_max_force32')) {
        this.stiffness_at_max_force32 = initObj.stiffness_at_max_force32
      }
      else {
        this.stiffness_at_max_force32 = 0.0;
      }
      if (initObj.hasOwnProperty('ind_min_force32')) {
        this.ind_min_force32 = initObj.ind_min_force32
      }
      else {
        this.ind_min_force32 = 0.0;
      }
      if (initObj.hasOwnProperty('min_force32')) {
        this.min_force32 = initObj.min_force32
      }
      else {
        this.min_force32 = 0.0;
      }
      if (initObj.hasOwnProperty('depth_at_min_force32')) {
        this.depth_at_min_force32 = initObj.depth_at_min_force32
      }
      else {
        this.depth_at_min_force32 = 0.0;
      }
      if (initObj.hasOwnProperty('stiffness_at_min_force32')) {
        this.stiffness_at_min_force32 = initObj.stiffness_at_min_force32
      }
      else {
        this.stiffness_at_min_force32 = 0.0;
      }
      if (initObj.hasOwnProperty('ind_max_depth32')) {
        this.ind_max_depth32 = initObj.ind_max_depth32
      }
      else {
        this.ind_max_depth32 = 0.0;
      }
      if (initObj.hasOwnProperty('max_depth32')) {
        this.max_depth32 = initObj.max_depth32
      }
      else {
        this.max_depth32 = 0.0;
      }
      if (initObj.hasOwnProperty('force_at_max_depth32')) {
        this.force_at_max_depth32 = initObj.force_at_max_depth32
      }
      else {
        this.force_at_max_depth32 = 0.0;
      }
      if (initObj.hasOwnProperty('stiffness_at_max_depth32')) {
        this.stiffness_at_max_depth32 = initObj.stiffness_at_max_depth32
      }
      else {
        this.stiffness_at_max_depth32 = 0.0;
      }
      if (initObj.hasOwnProperty('ind_min_depth32')) {
        this.ind_min_depth32 = initObj.ind_min_depth32
      }
      else {
        this.ind_min_depth32 = 0.0;
      }
      if (initObj.hasOwnProperty('min_depth32')) {
        this.min_depth32 = initObj.min_depth32
      }
      else {
        this.min_depth32 = 0.0;
      }
      if (initObj.hasOwnProperty('force_at_min_depth32')) {
        this.force_at_min_depth32 = initObj.force_at_min_depth32
      }
      else {
        this.force_at_min_depth32 = 0.0;
      }
      if (initObj.hasOwnProperty('stiffness_at_min_depth32')) {
        this.stiffness_at_min_depth32 = initObj.stiffness_at_min_depth32
      }
      else {
        this.stiffness_at_min_depth32 = 0.0;
      }
      if (initObj.hasOwnProperty('ind_max_stiffness32')) {
        this.ind_max_stiffness32 = initObj.ind_max_stiffness32
      }
      else {
        this.ind_max_stiffness32 = 0.0;
      }
      if (initObj.hasOwnProperty('max_stiffness32')) {
        this.max_stiffness32 = initObj.max_stiffness32
      }
      else {
        this.max_stiffness32 = 0.0;
      }
      if (initObj.hasOwnProperty('force_at_max_stiffness32')) {
        this.force_at_max_stiffness32 = initObj.force_at_max_stiffness32
      }
      else {
        this.force_at_max_stiffness32 = 0.0;
      }
      if (initObj.hasOwnProperty('depth_at_max_stiffness32')) {
        this.depth_at_max_stiffness32 = initObj.depth_at_max_stiffness32
      }
      else {
        this.depth_at_max_stiffness32 = 0.0;
      }
      if (initObj.hasOwnProperty('ind_min_stiffness32')) {
        this.ind_min_stiffness32 = initObj.ind_min_stiffness32
      }
      else {
        this.ind_min_stiffness32 = 0.0;
      }
      if (initObj.hasOwnProperty('min_stiffness32')) {
        this.min_stiffness32 = initObj.min_stiffness32
      }
      else {
        this.min_stiffness32 = 0.0;
      }
      if (initObj.hasOwnProperty('force_at_min_stiffness32')) {
        this.force_at_min_stiffness32 = initObj.force_at_min_stiffness32
      }
      else {
        this.force_at_min_stiffness32 = 0.0;
      }
      if (initObj.hasOwnProperty('depth_at_min_stiffness32')) {
        this.depth_at_min_stiffness32 = initObj.depth_at_min_stiffness32
      }
      else {
        this.depth_at_min_stiffness32 = 0.0;
      }
      if (initObj.hasOwnProperty('total_force')) {
        this.total_force = initObj.total_force
      }
      else {
        this.total_force = 0.0;
      }
      if (initObj.hasOwnProperty('avg_force')) {
        this.avg_force = initObj.avg_force
      }
      else {
        this.avg_force = 0.0;
      }
      if (initObj.hasOwnProperty('avg_depth')) {
        this.avg_depth = initObj.avg_depth
      }
      else {
        this.avg_depth = 0.0;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type StiffDepthForce
    // Serialize message field [header]
    bufferOffset = std_msgs.msg.Header.serialize(obj.header, buffer, bufferOffset);
    // Serialize message field [force]
    bufferOffset = _arraySerializer.float64(obj.force, buffer, bufferOffset, null);
    // Serialize message field [depth]
    bufferOffset = _arraySerializer.float64(obj.depth, buffer, bufferOffset, null);
    // Serialize message field [stiffness_force]
    bufferOffset = _arraySerializer.float64(obj.stiffness_force, buffer, bufferOffset, null);
    // Serialize message field [image]
    bufferOffset = _arraySerializer.float64(obj.image, buffer, bufferOffset, null);
    // Serialize message field [stiffness_image]
    bufferOffset = _arraySerializer.float64(obj.stiffness_image, buffer, bufferOffset, null);
    // Serialize message field [forces32]
    bufferOffset = _arraySerializer.float64(obj.forces32, buffer, bufferOffset, null);
    // Serialize message field [depth32]
    bufferOffset = _arraySerializer.float64(obj.depth32, buffer, bufferOffset, null);
    // Serialize message field [stiffness32]
    bufferOffset = _arraySerializer.float64(obj.stiffness32, buffer, bufferOffset, null);
    // Serialize message field [index_in_array32]
    bufferOffset = _arraySerializer.uint32(obj.index_in_array32, buffer, bufferOffset, null);
    // Serialize message field [ind_max_force32]
    bufferOffset = _serializer.float64(obj.ind_max_force32, buffer, bufferOffset);
    // Serialize message field [max_force32]
    bufferOffset = _serializer.float64(obj.max_force32, buffer, bufferOffset);
    // Serialize message field [depth_at_max_force32]
    bufferOffset = _serializer.float64(obj.depth_at_max_force32, buffer, bufferOffset);
    // Serialize message field [stiffness_at_max_force32]
    bufferOffset = _serializer.float64(obj.stiffness_at_max_force32, buffer, bufferOffset);
    // Serialize message field [ind_min_force32]
    bufferOffset = _serializer.float64(obj.ind_min_force32, buffer, bufferOffset);
    // Serialize message field [min_force32]
    bufferOffset = _serializer.float64(obj.min_force32, buffer, bufferOffset);
    // Serialize message field [depth_at_min_force32]
    bufferOffset = _serializer.float64(obj.depth_at_min_force32, buffer, bufferOffset);
    // Serialize message field [stiffness_at_min_force32]
    bufferOffset = _serializer.float64(obj.stiffness_at_min_force32, buffer, bufferOffset);
    // Serialize message field [ind_max_depth32]
    bufferOffset = _serializer.float64(obj.ind_max_depth32, buffer, bufferOffset);
    // Serialize message field [max_depth32]
    bufferOffset = _serializer.float64(obj.max_depth32, buffer, bufferOffset);
    // Serialize message field [force_at_max_depth32]
    bufferOffset = _serializer.float64(obj.force_at_max_depth32, buffer, bufferOffset);
    // Serialize message field [stiffness_at_max_depth32]
    bufferOffset = _serializer.float64(obj.stiffness_at_max_depth32, buffer, bufferOffset);
    // Serialize message field [ind_min_depth32]
    bufferOffset = _serializer.float64(obj.ind_min_depth32, buffer, bufferOffset);
    // Serialize message field [min_depth32]
    bufferOffset = _serializer.float64(obj.min_depth32, buffer, bufferOffset);
    // Serialize message field [force_at_min_depth32]
    bufferOffset = _serializer.float64(obj.force_at_min_depth32, buffer, bufferOffset);
    // Serialize message field [stiffness_at_min_depth32]
    bufferOffset = _serializer.float64(obj.stiffness_at_min_depth32, buffer, bufferOffset);
    // Serialize message field [ind_max_stiffness32]
    bufferOffset = _serializer.float64(obj.ind_max_stiffness32, buffer, bufferOffset);
    // Serialize message field [max_stiffness32]
    bufferOffset = _serializer.float64(obj.max_stiffness32, buffer, bufferOffset);
    // Serialize message field [force_at_max_stiffness32]
    bufferOffset = _serializer.float64(obj.force_at_max_stiffness32, buffer, bufferOffset);
    // Serialize message field [depth_at_max_stiffness32]
    bufferOffset = _serializer.float64(obj.depth_at_max_stiffness32, buffer, bufferOffset);
    // Serialize message field [ind_min_stiffness32]
    bufferOffset = _serializer.float64(obj.ind_min_stiffness32, buffer, bufferOffset);
    // Serialize message field [min_stiffness32]
    bufferOffset = _serializer.float64(obj.min_stiffness32, buffer, bufferOffset);
    // Serialize message field [force_at_min_stiffness32]
    bufferOffset = _serializer.float64(obj.force_at_min_stiffness32, buffer, bufferOffset);
    // Serialize message field [depth_at_min_stiffness32]
    bufferOffset = _serializer.float64(obj.depth_at_min_stiffness32, buffer, bufferOffset);
    // Serialize message field [total_force]
    bufferOffset = _serializer.float64(obj.total_force, buffer, bufferOffset);
    // Serialize message field [avg_force]
    bufferOffset = _serializer.float64(obj.avg_force, buffer, bufferOffset);
    // Serialize message field [avg_depth]
    bufferOffset = _serializer.float64(obj.avg_depth, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type StiffDepthForce
    let len;
    let data = new StiffDepthForce(null);
    // Deserialize message field [header]
    data.header = std_msgs.msg.Header.deserialize(buffer, bufferOffset);
    // Deserialize message field [force]
    data.force = _arrayDeserializer.float64(buffer, bufferOffset, null)
    // Deserialize message field [depth]
    data.depth = _arrayDeserializer.float64(buffer, bufferOffset, null)
    // Deserialize message field [stiffness_force]
    data.stiffness_force = _arrayDeserializer.float64(buffer, bufferOffset, null)
    // Deserialize message field [image]
    data.image = _arrayDeserializer.float64(buffer, bufferOffset, null)
    // Deserialize message field [stiffness_image]
    data.stiffness_image = _arrayDeserializer.float64(buffer, bufferOffset, null)
    // Deserialize message field [forces32]
    data.forces32 = _arrayDeserializer.float64(buffer, bufferOffset, null)
    // Deserialize message field [depth32]
    data.depth32 = _arrayDeserializer.float64(buffer, bufferOffset, null)
    // Deserialize message field [stiffness32]
    data.stiffness32 = _arrayDeserializer.float64(buffer, bufferOffset, null)
    // Deserialize message field [index_in_array32]
    data.index_in_array32 = _arrayDeserializer.uint32(buffer, bufferOffset, null)
    // Deserialize message field [ind_max_force32]
    data.ind_max_force32 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [max_force32]
    data.max_force32 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [depth_at_max_force32]
    data.depth_at_max_force32 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [stiffness_at_max_force32]
    data.stiffness_at_max_force32 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [ind_min_force32]
    data.ind_min_force32 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [min_force32]
    data.min_force32 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [depth_at_min_force32]
    data.depth_at_min_force32 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [stiffness_at_min_force32]
    data.stiffness_at_min_force32 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [ind_max_depth32]
    data.ind_max_depth32 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [max_depth32]
    data.max_depth32 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [force_at_max_depth32]
    data.force_at_max_depth32 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [stiffness_at_max_depth32]
    data.stiffness_at_max_depth32 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [ind_min_depth32]
    data.ind_min_depth32 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [min_depth32]
    data.min_depth32 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [force_at_min_depth32]
    data.force_at_min_depth32 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [stiffness_at_min_depth32]
    data.stiffness_at_min_depth32 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [ind_max_stiffness32]
    data.ind_max_stiffness32 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [max_stiffness32]
    data.max_stiffness32 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [force_at_max_stiffness32]
    data.force_at_max_stiffness32 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [depth_at_max_stiffness32]
    data.depth_at_max_stiffness32 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [ind_min_stiffness32]
    data.ind_min_stiffness32 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [min_stiffness32]
    data.min_stiffness32 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [force_at_min_stiffness32]
    data.force_at_min_stiffness32 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [depth_at_min_stiffness32]
    data.depth_at_min_stiffness32 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [total_force]
    data.total_force = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [avg_force]
    data.avg_force = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [avg_depth]
    data.avg_depth = _deserializer.float64(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += std_msgs.msg.Header.getMessageSize(object.header);
    length += 8 * object.force.length;
    length += 8 * object.depth.length;
    length += 8 * object.stiffness_force.length;
    length += 8 * object.image.length;
    length += 8 * object.stiffness_image.length;
    length += 8 * object.forces32.length;
    length += 8 * object.depth32.length;
    length += 8 * object.stiffness32.length;
    length += 4 * object.index_in_array32.length;
    return length + 252;
  }

  static datatype() {
    // Returns string type for a message object
    return 'tactile_servo_msgs/StiffDepthForce';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '7e64db6a34b90e4652b9e7e2cf58e65a';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # This message force penetration depth and stifness of the simulated sensor in Gazebo ODE
    
    Header header        # Header timestamp should be acquisition time of image
    
    float64[] force          # forces
    float64[] depth          # penetrations
    float64[] stiffness_force      # stiffness based on force (gazebo)
    float64[] image          # sensor outputs
    float64[] stiffness_image      # stiffness based on the tactile image. actual (gazebo) force is multyplied by sensitivity value
    ###
    float64[] forces32
    float64[] depth32
    float64[] stiffness32
    uint32[] index_in_array32
    float64 ind_max_force32
    float64 max_force32
    float64 depth_at_max_force32
    float64 stiffness_at_max_force32
    float64 ind_min_force32
    float64 min_force32
    float64 depth_at_min_force32
    float64 stiffness_at_min_force32
    float64 ind_max_depth32
    float64 max_depth32
    float64 force_at_max_depth32
    float64 stiffness_at_max_depth32
    float64 ind_min_depth32
    float64 min_depth32
    float64 force_at_min_depth32
    float64 stiffness_at_min_depth32
    float64 ind_max_stiffness32
    float64 max_stiffness32
    float64 force_at_max_stiffness32
    float64 depth_at_max_stiffness32
    float64 ind_min_stiffness32
    float64 min_stiffness32
    float64 force_at_min_stiffness32
    float64 depth_at_min_stiffness32
    float64 total_force
    float64 avg_force
    float64 avg_depth
    
    
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
    const resolved = new StiffDepthForce(null);
    if (msg.header !== undefined) {
      resolved.header = std_msgs.msg.Header.Resolve(msg.header)
    }
    else {
      resolved.header = new std_msgs.msg.Header()
    }

    if (msg.force !== undefined) {
      resolved.force = msg.force;
    }
    else {
      resolved.force = []
    }

    if (msg.depth !== undefined) {
      resolved.depth = msg.depth;
    }
    else {
      resolved.depth = []
    }

    if (msg.stiffness_force !== undefined) {
      resolved.stiffness_force = msg.stiffness_force;
    }
    else {
      resolved.stiffness_force = []
    }

    if (msg.image !== undefined) {
      resolved.image = msg.image;
    }
    else {
      resolved.image = []
    }

    if (msg.stiffness_image !== undefined) {
      resolved.stiffness_image = msg.stiffness_image;
    }
    else {
      resolved.stiffness_image = []
    }

    if (msg.forces32 !== undefined) {
      resolved.forces32 = msg.forces32;
    }
    else {
      resolved.forces32 = []
    }

    if (msg.depth32 !== undefined) {
      resolved.depth32 = msg.depth32;
    }
    else {
      resolved.depth32 = []
    }

    if (msg.stiffness32 !== undefined) {
      resolved.stiffness32 = msg.stiffness32;
    }
    else {
      resolved.stiffness32 = []
    }

    if (msg.index_in_array32 !== undefined) {
      resolved.index_in_array32 = msg.index_in_array32;
    }
    else {
      resolved.index_in_array32 = []
    }

    if (msg.ind_max_force32 !== undefined) {
      resolved.ind_max_force32 = msg.ind_max_force32;
    }
    else {
      resolved.ind_max_force32 = 0.0
    }

    if (msg.max_force32 !== undefined) {
      resolved.max_force32 = msg.max_force32;
    }
    else {
      resolved.max_force32 = 0.0
    }

    if (msg.depth_at_max_force32 !== undefined) {
      resolved.depth_at_max_force32 = msg.depth_at_max_force32;
    }
    else {
      resolved.depth_at_max_force32 = 0.0
    }

    if (msg.stiffness_at_max_force32 !== undefined) {
      resolved.stiffness_at_max_force32 = msg.stiffness_at_max_force32;
    }
    else {
      resolved.stiffness_at_max_force32 = 0.0
    }

    if (msg.ind_min_force32 !== undefined) {
      resolved.ind_min_force32 = msg.ind_min_force32;
    }
    else {
      resolved.ind_min_force32 = 0.0
    }

    if (msg.min_force32 !== undefined) {
      resolved.min_force32 = msg.min_force32;
    }
    else {
      resolved.min_force32 = 0.0
    }

    if (msg.depth_at_min_force32 !== undefined) {
      resolved.depth_at_min_force32 = msg.depth_at_min_force32;
    }
    else {
      resolved.depth_at_min_force32 = 0.0
    }

    if (msg.stiffness_at_min_force32 !== undefined) {
      resolved.stiffness_at_min_force32 = msg.stiffness_at_min_force32;
    }
    else {
      resolved.stiffness_at_min_force32 = 0.0
    }

    if (msg.ind_max_depth32 !== undefined) {
      resolved.ind_max_depth32 = msg.ind_max_depth32;
    }
    else {
      resolved.ind_max_depth32 = 0.0
    }

    if (msg.max_depth32 !== undefined) {
      resolved.max_depth32 = msg.max_depth32;
    }
    else {
      resolved.max_depth32 = 0.0
    }

    if (msg.force_at_max_depth32 !== undefined) {
      resolved.force_at_max_depth32 = msg.force_at_max_depth32;
    }
    else {
      resolved.force_at_max_depth32 = 0.0
    }

    if (msg.stiffness_at_max_depth32 !== undefined) {
      resolved.stiffness_at_max_depth32 = msg.stiffness_at_max_depth32;
    }
    else {
      resolved.stiffness_at_max_depth32 = 0.0
    }

    if (msg.ind_min_depth32 !== undefined) {
      resolved.ind_min_depth32 = msg.ind_min_depth32;
    }
    else {
      resolved.ind_min_depth32 = 0.0
    }

    if (msg.min_depth32 !== undefined) {
      resolved.min_depth32 = msg.min_depth32;
    }
    else {
      resolved.min_depth32 = 0.0
    }

    if (msg.force_at_min_depth32 !== undefined) {
      resolved.force_at_min_depth32 = msg.force_at_min_depth32;
    }
    else {
      resolved.force_at_min_depth32 = 0.0
    }

    if (msg.stiffness_at_min_depth32 !== undefined) {
      resolved.stiffness_at_min_depth32 = msg.stiffness_at_min_depth32;
    }
    else {
      resolved.stiffness_at_min_depth32 = 0.0
    }

    if (msg.ind_max_stiffness32 !== undefined) {
      resolved.ind_max_stiffness32 = msg.ind_max_stiffness32;
    }
    else {
      resolved.ind_max_stiffness32 = 0.0
    }

    if (msg.max_stiffness32 !== undefined) {
      resolved.max_stiffness32 = msg.max_stiffness32;
    }
    else {
      resolved.max_stiffness32 = 0.0
    }

    if (msg.force_at_max_stiffness32 !== undefined) {
      resolved.force_at_max_stiffness32 = msg.force_at_max_stiffness32;
    }
    else {
      resolved.force_at_max_stiffness32 = 0.0
    }

    if (msg.depth_at_max_stiffness32 !== undefined) {
      resolved.depth_at_max_stiffness32 = msg.depth_at_max_stiffness32;
    }
    else {
      resolved.depth_at_max_stiffness32 = 0.0
    }

    if (msg.ind_min_stiffness32 !== undefined) {
      resolved.ind_min_stiffness32 = msg.ind_min_stiffness32;
    }
    else {
      resolved.ind_min_stiffness32 = 0.0
    }

    if (msg.min_stiffness32 !== undefined) {
      resolved.min_stiffness32 = msg.min_stiffness32;
    }
    else {
      resolved.min_stiffness32 = 0.0
    }

    if (msg.force_at_min_stiffness32 !== undefined) {
      resolved.force_at_min_stiffness32 = msg.force_at_min_stiffness32;
    }
    else {
      resolved.force_at_min_stiffness32 = 0.0
    }

    if (msg.depth_at_min_stiffness32 !== undefined) {
      resolved.depth_at_min_stiffness32 = msg.depth_at_min_stiffness32;
    }
    else {
      resolved.depth_at_min_stiffness32 = 0.0
    }

    if (msg.total_force !== undefined) {
      resolved.total_force = msg.total_force;
    }
    else {
      resolved.total_force = 0.0
    }

    if (msg.avg_force !== undefined) {
      resolved.avg_force = msg.avg_force;
    }
    else {
      resolved.avg_force = 0.0
    }

    if (msg.avg_depth !== undefined) {
      resolved.avg_depth = msg.avg_depth;
    }
    else {
      resolved.avg_depth = 0.0
    }

    return resolved;
    }
};

module.exports = StiffDepthForce;
