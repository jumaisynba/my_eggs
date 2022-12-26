# This Python file uses the following encoding: utf-8
"""autogenerated by genpy from tactile_servo_msgs/StiffDepthForce.msg. Do not edit."""
import codecs
import sys
python3 = True if sys.hexversion > 0x03000000 else False
import genpy
import struct

import std_msgs.msg

class StiffDepthForce(genpy.Message):
  _md5sum = "7e64db6a34b90e4652b9e7e2cf58e65a"
  _type = "tactile_servo_msgs/StiffDepthForce"
  _has_header = True  # flag to mark the presence of a Header object
  _full_text = """# This message force penetration depth and stifness of the simulated sensor in Gazebo ODE

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
"""
  __slots__ = ['header','force','depth','stiffness_force','image','stiffness_image','forces32','depth32','stiffness32','index_in_array32','ind_max_force32','max_force32','depth_at_max_force32','stiffness_at_max_force32','ind_min_force32','min_force32','depth_at_min_force32','stiffness_at_min_force32','ind_max_depth32','max_depth32','force_at_max_depth32','stiffness_at_max_depth32','ind_min_depth32','min_depth32','force_at_min_depth32','stiffness_at_min_depth32','ind_max_stiffness32','max_stiffness32','force_at_max_stiffness32','depth_at_max_stiffness32','ind_min_stiffness32','min_stiffness32','force_at_min_stiffness32','depth_at_min_stiffness32','total_force','avg_force','avg_depth']
  _slot_types = ['std_msgs/Header','float64[]','float64[]','float64[]','float64[]','float64[]','float64[]','float64[]','float64[]','uint32[]','float64','float64','float64','float64','float64','float64','float64','float64','float64','float64','float64','float64','float64','float64','float64','float64','float64','float64','float64','float64','float64','float64','float64','float64','float64','float64','float64']

  def __init__(self, *args, **kwds):
    """
    Constructor. Any message fields that are implicitly/explicitly
    set to None will be assigned a default value. The recommend
    use is keyword arguments as this is more robust to future message
    changes.  You cannot mix in-order arguments and keyword arguments.

    The available fields are:
       header,force,depth,stiffness_force,image,stiffness_image,forces32,depth32,stiffness32,index_in_array32,ind_max_force32,max_force32,depth_at_max_force32,stiffness_at_max_force32,ind_min_force32,min_force32,depth_at_min_force32,stiffness_at_min_force32,ind_max_depth32,max_depth32,force_at_max_depth32,stiffness_at_max_depth32,ind_min_depth32,min_depth32,force_at_min_depth32,stiffness_at_min_depth32,ind_max_stiffness32,max_stiffness32,force_at_max_stiffness32,depth_at_max_stiffness32,ind_min_stiffness32,min_stiffness32,force_at_min_stiffness32,depth_at_min_stiffness32,total_force,avg_force,avg_depth

    :param args: complete set of field values, in .msg order
    :param kwds: use keyword arguments corresponding to message field names
    to set specific fields.
    """
    if args or kwds:
      super(StiffDepthForce, self).__init__(*args, **kwds)
      # message fields cannot be None, assign default values for those that are
      if self.header is None:
        self.header = std_msgs.msg.Header()
      if self.force is None:
        self.force = []
      if self.depth is None:
        self.depth = []
      if self.stiffness_force is None:
        self.stiffness_force = []
      if self.image is None:
        self.image = []
      if self.stiffness_image is None:
        self.stiffness_image = []
      if self.forces32 is None:
        self.forces32 = []
      if self.depth32 is None:
        self.depth32 = []
      if self.stiffness32 is None:
        self.stiffness32 = []
      if self.index_in_array32 is None:
        self.index_in_array32 = []
      if self.ind_max_force32 is None:
        self.ind_max_force32 = 0.
      if self.max_force32 is None:
        self.max_force32 = 0.
      if self.depth_at_max_force32 is None:
        self.depth_at_max_force32 = 0.
      if self.stiffness_at_max_force32 is None:
        self.stiffness_at_max_force32 = 0.
      if self.ind_min_force32 is None:
        self.ind_min_force32 = 0.
      if self.min_force32 is None:
        self.min_force32 = 0.
      if self.depth_at_min_force32 is None:
        self.depth_at_min_force32 = 0.
      if self.stiffness_at_min_force32 is None:
        self.stiffness_at_min_force32 = 0.
      if self.ind_max_depth32 is None:
        self.ind_max_depth32 = 0.
      if self.max_depth32 is None:
        self.max_depth32 = 0.
      if self.force_at_max_depth32 is None:
        self.force_at_max_depth32 = 0.
      if self.stiffness_at_max_depth32 is None:
        self.stiffness_at_max_depth32 = 0.
      if self.ind_min_depth32 is None:
        self.ind_min_depth32 = 0.
      if self.min_depth32 is None:
        self.min_depth32 = 0.
      if self.force_at_min_depth32 is None:
        self.force_at_min_depth32 = 0.
      if self.stiffness_at_min_depth32 is None:
        self.stiffness_at_min_depth32 = 0.
      if self.ind_max_stiffness32 is None:
        self.ind_max_stiffness32 = 0.
      if self.max_stiffness32 is None:
        self.max_stiffness32 = 0.
      if self.force_at_max_stiffness32 is None:
        self.force_at_max_stiffness32 = 0.
      if self.depth_at_max_stiffness32 is None:
        self.depth_at_max_stiffness32 = 0.
      if self.ind_min_stiffness32 is None:
        self.ind_min_stiffness32 = 0.
      if self.min_stiffness32 is None:
        self.min_stiffness32 = 0.
      if self.force_at_min_stiffness32 is None:
        self.force_at_min_stiffness32 = 0.
      if self.depth_at_min_stiffness32 is None:
        self.depth_at_min_stiffness32 = 0.
      if self.total_force is None:
        self.total_force = 0.
      if self.avg_force is None:
        self.avg_force = 0.
      if self.avg_depth is None:
        self.avg_depth = 0.
    else:
      self.header = std_msgs.msg.Header()
      self.force = []
      self.depth = []
      self.stiffness_force = []
      self.image = []
      self.stiffness_image = []
      self.forces32 = []
      self.depth32 = []
      self.stiffness32 = []
      self.index_in_array32 = []
      self.ind_max_force32 = 0.
      self.max_force32 = 0.
      self.depth_at_max_force32 = 0.
      self.stiffness_at_max_force32 = 0.
      self.ind_min_force32 = 0.
      self.min_force32 = 0.
      self.depth_at_min_force32 = 0.
      self.stiffness_at_min_force32 = 0.
      self.ind_max_depth32 = 0.
      self.max_depth32 = 0.
      self.force_at_max_depth32 = 0.
      self.stiffness_at_max_depth32 = 0.
      self.ind_min_depth32 = 0.
      self.min_depth32 = 0.
      self.force_at_min_depth32 = 0.
      self.stiffness_at_min_depth32 = 0.
      self.ind_max_stiffness32 = 0.
      self.max_stiffness32 = 0.
      self.force_at_max_stiffness32 = 0.
      self.depth_at_max_stiffness32 = 0.
      self.ind_min_stiffness32 = 0.
      self.min_stiffness32 = 0.
      self.force_at_min_stiffness32 = 0.
      self.depth_at_min_stiffness32 = 0.
      self.total_force = 0.
      self.avg_force = 0.
      self.avg_depth = 0.

  def _get_types(self):
    """
    internal API method
    """
    return self._slot_types

  def serialize(self, buff):
    """
    serialize message into buffer
    :param buff: buffer, ``StringIO``
    """
    try:
      _x = self
      buff.write(_get_struct_3I().pack(_x.header.seq, _x.header.stamp.secs, _x.header.stamp.nsecs))
      _x = self.header.frame_id
      length = len(_x)
      if python3 or type(_x) == unicode:
        _x = _x.encode('utf-8')
        length = len(_x)
      buff.write(struct.Struct('<I%ss'%length).pack(length, _x))
      length = len(self.force)
      buff.write(_struct_I.pack(length))
      pattern = '<%sd'%length
      buff.write(struct.Struct(pattern).pack(*self.force))
      length = len(self.depth)
      buff.write(_struct_I.pack(length))
      pattern = '<%sd'%length
      buff.write(struct.Struct(pattern).pack(*self.depth))
      length = len(self.stiffness_force)
      buff.write(_struct_I.pack(length))
      pattern = '<%sd'%length
      buff.write(struct.Struct(pattern).pack(*self.stiffness_force))
      length = len(self.image)
      buff.write(_struct_I.pack(length))
      pattern = '<%sd'%length
      buff.write(struct.Struct(pattern).pack(*self.image))
      length = len(self.stiffness_image)
      buff.write(_struct_I.pack(length))
      pattern = '<%sd'%length
      buff.write(struct.Struct(pattern).pack(*self.stiffness_image))
      length = len(self.forces32)
      buff.write(_struct_I.pack(length))
      pattern = '<%sd'%length
      buff.write(struct.Struct(pattern).pack(*self.forces32))
      length = len(self.depth32)
      buff.write(_struct_I.pack(length))
      pattern = '<%sd'%length
      buff.write(struct.Struct(pattern).pack(*self.depth32))
      length = len(self.stiffness32)
      buff.write(_struct_I.pack(length))
      pattern = '<%sd'%length
      buff.write(struct.Struct(pattern).pack(*self.stiffness32))
      length = len(self.index_in_array32)
      buff.write(_struct_I.pack(length))
      pattern = '<%sI'%length
      buff.write(struct.Struct(pattern).pack(*self.index_in_array32))
      _x = self
      buff.write(_get_struct_27d().pack(_x.ind_max_force32, _x.max_force32, _x.depth_at_max_force32, _x.stiffness_at_max_force32, _x.ind_min_force32, _x.min_force32, _x.depth_at_min_force32, _x.stiffness_at_min_force32, _x.ind_max_depth32, _x.max_depth32, _x.force_at_max_depth32, _x.stiffness_at_max_depth32, _x.ind_min_depth32, _x.min_depth32, _x.force_at_min_depth32, _x.stiffness_at_min_depth32, _x.ind_max_stiffness32, _x.max_stiffness32, _x.force_at_max_stiffness32, _x.depth_at_max_stiffness32, _x.ind_min_stiffness32, _x.min_stiffness32, _x.force_at_min_stiffness32, _x.depth_at_min_stiffness32, _x.total_force, _x.avg_force, _x.avg_depth))
    except struct.error as se: self._check_types(struct.error("%s: '%s' when writing '%s'" % (type(se), str(se), str(locals().get('_x', self)))))
    except TypeError as te: self._check_types(ValueError("%s: '%s' when writing '%s'" % (type(te), str(te), str(locals().get('_x', self)))))

  def deserialize(self, str):
    """
    unpack serialized message in str into this message instance
    :param str: byte array of serialized message, ``str``
    """
    if python3:
      codecs.lookup_error("rosmsg").msg_type = self._type
    try:
      if self.header is None:
        self.header = std_msgs.msg.Header()
      end = 0
      _x = self
      start = end
      end += 12
      (_x.header.seq, _x.header.stamp.secs, _x.header.stamp.nsecs,) = _get_struct_3I().unpack(str[start:end])
      start = end
      end += 4
      (length,) = _struct_I.unpack(str[start:end])
      start = end
      end += length
      if python3:
        self.header.frame_id = str[start:end].decode('utf-8', 'rosmsg')
      else:
        self.header.frame_id = str[start:end]
      start = end
      end += 4
      (length,) = _struct_I.unpack(str[start:end])
      pattern = '<%sd'%length
      start = end
      s = struct.Struct(pattern)
      end += s.size
      self.force = s.unpack(str[start:end])
      start = end
      end += 4
      (length,) = _struct_I.unpack(str[start:end])
      pattern = '<%sd'%length
      start = end
      s = struct.Struct(pattern)
      end += s.size
      self.depth = s.unpack(str[start:end])
      start = end
      end += 4
      (length,) = _struct_I.unpack(str[start:end])
      pattern = '<%sd'%length
      start = end
      s = struct.Struct(pattern)
      end += s.size
      self.stiffness_force = s.unpack(str[start:end])
      start = end
      end += 4
      (length,) = _struct_I.unpack(str[start:end])
      pattern = '<%sd'%length
      start = end
      s = struct.Struct(pattern)
      end += s.size
      self.image = s.unpack(str[start:end])
      start = end
      end += 4
      (length,) = _struct_I.unpack(str[start:end])
      pattern = '<%sd'%length
      start = end
      s = struct.Struct(pattern)
      end += s.size
      self.stiffness_image = s.unpack(str[start:end])
      start = end
      end += 4
      (length,) = _struct_I.unpack(str[start:end])
      pattern = '<%sd'%length
      start = end
      s = struct.Struct(pattern)
      end += s.size
      self.forces32 = s.unpack(str[start:end])
      start = end
      end += 4
      (length,) = _struct_I.unpack(str[start:end])
      pattern = '<%sd'%length
      start = end
      s = struct.Struct(pattern)
      end += s.size
      self.depth32 = s.unpack(str[start:end])
      start = end
      end += 4
      (length,) = _struct_I.unpack(str[start:end])
      pattern = '<%sd'%length
      start = end
      s = struct.Struct(pattern)
      end += s.size
      self.stiffness32 = s.unpack(str[start:end])
      start = end
      end += 4
      (length,) = _struct_I.unpack(str[start:end])
      pattern = '<%sI'%length
      start = end
      s = struct.Struct(pattern)
      end += s.size
      self.index_in_array32 = s.unpack(str[start:end])
      _x = self
      start = end
      end += 216
      (_x.ind_max_force32, _x.max_force32, _x.depth_at_max_force32, _x.stiffness_at_max_force32, _x.ind_min_force32, _x.min_force32, _x.depth_at_min_force32, _x.stiffness_at_min_force32, _x.ind_max_depth32, _x.max_depth32, _x.force_at_max_depth32, _x.stiffness_at_max_depth32, _x.ind_min_depth32, _x.min_depth32, _x.force_at_min_depth32, _x.stiffness_at_min_depth32, _x.ind_max_stiffness32, _x.max_stiffness32, _x.force_at_max_stiffness32, _x.depth_at_max_stiffness32, _x.ind_min_stiffness32, _x.min_stiffness32, _x.force_at_min_stiffness32, _x.depth_at_min_stiffness32, _x.total_force, _x.avg_force, _x.avg_depth,) = _get_struct_27d().unpack(str[start:end])
      return self
    except struct.error as e:
      raise genpy.DeserializationError(e)  # most likely buffer underfill


  def serialize_numpy(self, buff, numpy):
    """
    serialize message with numpy array types into buffer
    :param buff: buffer, ``StringIO``
    :param numpy: numpy python module
    """
    try:
      _x = self
      buff.write(_get_struct_3I().pack(_x.header.seq, _x.header.stamp.secs, _x.header.stamp.nsecs))
      _x = self.header.frame_id
      length = len(_x)
      if python3 or type(_x) == unicode:
        _x = _x.encode('utf-8')
        length = len(_x)
      buff.write(struct.Struct('<I%ss'%length).pack(length, _x))
      length = len(self.force)
      buff.write(_struct_I.pack(length))
      pattern = '<%sd'%length
      buff.write(self.force.tostring())
      length = len(self.depth)
      buff.write(_struct_I.pack(length))
      pattern = '<%sd'%length
      buff.write(self.depth.tostring())
      length = len(self.stiffness_force)
      buff.write(_struct_I.pack(length))
      pattern = '<%sd'%length
      buff.write(self.stiffness_force.tostring())
      length = len(self.image)
      buff.write(_struct_I.pack(length))
      pattern = '<%sd'%length
      buff.write(self.image.tostring())
      length = len(self.stiffness_image)
      buff.write(_struct_I.pack(length))
      pattern = '<%sd'%length
      buff.write(self.stiffness_image.tostring())
      length = len(self.forces32)
      buff.write(_struct_I.pack(length))
      pattern = '<%sd'%length
      buff.write(self.forces32.tostring())
      length = len(self.depth32)
      buff.write(_struct_I.pack(length))
      pattern = '<%sd'%length
      buff.write(self.depth32.tostring())
      length = len(self.stiffness32)
      buff.write(_struct_I.pack(length))
      pattern = '<%sd'%length
      buff.write(self.stiffness32.tostring())
      length = len(self.index_in_array32)
      buff.write(_struct_I.pack(length))
      pattern = '<%sI'%length
      buff.write(self.index_in_array32.tostring())
      _x = self
      buff.write(_get_struct_27d().pack(_x.ind_max_force32, _x.max_force32, _x.depth_at_max_force32, _x.stiffness_at_max_force32, _x.ind_min_force32, _x.min_force32, _x.depth_at_min_force32, _x.stiffness_at_min_force32, _x.ind_max_depth32, _x.max_depth32, _x.force_at_max_depth32, _x.stiffness_at_max_depth32, _x.ind_min_depth32, _x.min_depth32, _x.force_at_min_depth32, _x.stiffness_at_min_depth32, _x.ind_max_stiffness32, _x.max_stiffness32, _x.force_at_max_stiffness32, _x.depth_at_max_stiffness32, _x.ind_min_stiffness32, _x.min_stiffness32, _x.force_at_min_stiffness32, _x.depth_at_min_stiffness32, _x.total_force, _x.avg_force, _x.avg_depth))
    except struct.error as se: self._check_types(struct.error("%s: '%s' when writing '%s'" % (type(se), str(se), str(locals().get('_x', self)))))
    except TypeError as te: self._check_types(ValueError("%s: '%s' when writing '%s'" % (type(te), str(te), str(locals().get('_x', self)))))

  def deserialize_numpy(self, str, numpy):
    """
    unpack serialized message in str into this message instance using numpy for array types
    :param str: byte array of serialized message, ``str``
    :param numpy: numpy python module
    """
    if python3:
      codecs.lookup_error("rosmsg").msg_type = self._type
    try:
      if self.header is None:
        self.header = std_msgs.msg.Header()
      end = 0
      _x = self
      start = end
      end += 12
      (_x.header.seq, _x.header.stamp.secs, _x.header.stamp.nsecs,) = _get_struct_3I().unpack(str[start:end])
      start = end
      end += 4
      (length,) = _struct_I.unpack(str[start:end])
      start = end
      end += length
      if python3:
        self.header.frame_id = str[start:end].decode('utf-8', 'rosmsg')
      else:
        self.header.frame_id = str[start:end]
      start = end
      end += 4
      (length,) = _struct_I.unpack(str[start:end])
      pattern = '<%sd'%length
      start = end
      s = struct.Struct(pattern)
      end += s.size
      self.force = numpy.frombuffer(str[start:end], dtype=numpy.float64, count=length)
      start = end
      end += 4
      (length,) = _struct_I.unpack(str[start:end])
      pattern = '<%sd'%length
      start = end
      s = struct.Struct(pattern)
      end += s.size
      self.depth = numpy.frombuffer(str[start:end], dtype=numpy.float64, count=length)
      start = end
      end += 4
      (length,) = _struct_I.unpack(str[start:end])
      pattern = '<%sd'%length
      start = end
      s = struct.Struct(pattern)
      end += s.size
      self.stiffness_force = numpy.frombuffer(str[start:end], dtype=numpy.float64, count=length)
      start = end
      end += 4
      (length,) = _struct_I.unpack(str[start:end])
      pattern = '<%sd'%length
      start = end
      s = struct.Struct(pattern)
      end += s.size
      self.image = numpy.frombuffer(str[start:end], dtype=numpy.float64, count=length)
      start = end
      end += 4
      (length,) = _struct_I.unpack(str[start:end])
      pattern = '<%sd'%length
      start = end
      s = struct.Struct(pattern)
      end += s.size
      self.stiffness_image = numpy.frombuffer(str[start:end], dtype=numpy.float64, count=length)
      start = end
      end += 4
      (length,) = _struct_I.unpack(str[start:end])
      pattern = '<%sd'%length
      start = end
      s = struct.Struct(pattern)
      end += s.size
      self.forces32 = numpy.frombuffer(str[start:end], dtype=numpy.float64, count=length)
      start = end
      end += 4
      (length,) = _struct_I.unpack(str[start:end])
      pattern = '<%sd'%length
      start = end
      s = struct.Struct(pattern)
      end += s.size
      self.depth32 = numpy.frombuffer(str[start:end], dtype=numpy.float64, count=length)
      start = end
      end += 4
      (length,) = _struct_I.unpack(str[start:end])
      pattern = '<%sd'%length
      start = end
      s = struct.Struct(pattern)
      end += s.size
      self.stiffness32 = numpy.frombuffer(str[start:end], dtype=numpy.float64, count=length)
      start = end
      end += 4
      (length,) = _struct_I.unpack(str[start:end])
      pattern = '<%sI'%length
      start = end
      s = struct.Struct(pattern)
      end += s.size
      self.index_in_array32 = numpy.frombuffer(str[start:end], dtype=numpy.uint32, count=length)
      _x = self
      start = end
      end += 216
      (_x.ind_max_force32, _x.max_force32, _x.depth_at_max_force32, _x.stiffness_at_max_force32, _x.ind_min_force32, _x.min_force32, _x.depth_at_min_force32, _x.stiffness_at_min_force32, _x.ind_max_depth32, _x.max_depth32, _x.force_at_max_depth32, _x.stiffness_at_max_depth32, _x.ind_min_depth32, _x.min_depth32, _x.force_at_min_depth32, _x.stiffness_at_min_depth32, _x.ind_max_stiffness32, _x.max_stiffness32, _x.force_at_max_stiffness32, _x.depth_at_max_stiffness32, _x.ind_min_stiffness32, _x.min_stiffness32, _x.force_at_min_stiffness32, _x.depth_at_min_stiffness32, _x.total_force, _x.avg_force, _x.avg_depth,) = _get_struct_27d().unpack(str[start:end])
      return self
    except struct.error as e:
      raise genpy.DeserializationError(e)  # most likely buffer underfill

_struct_I = genpy.struct_I
def _get_struct_I():
    global _struct_I
    return _struct_I
_struct_27d = None
def _get_struct_27d():
    global _struct_27d
    if _struct_27d is None:
        _struct_27d = struct.Struct("<27d")
    return _struct_27d
_struct_3I = None
def _get_struct_3I():
    global _struct_3I
    if _struct_3I is None:
        _struct_3I = struct.Struct("<3I")
    return _struct_3I