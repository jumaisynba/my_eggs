// Generated by gencpp from file tactile_servo_msgs/tunePid.msg
// DO NOT EDIT!


#ifndef TACTILE_SERVO_MSGS_MESSAGE_TUNEPID_H
#define TACTILE_SERVO_MSGS_MESSAGE_TUNEPID_H


#include <string>
#include <vector>
#include <map>

#include <ros/types.h>
#include <ros/serialization.h>
#include <ros/builtin_message_traits.h>
#include <ros/message_operations.h>

#include <std_msgs/Header.h>

namespace tactile_servo_msgs
{
template <class ContainerAllocator>
struct tunePid_
{
  typedef tunePid_<ContainerAllocator> Type;

  tunePid_()
    : header()
    , err_in(0.0)
    , err_out(0.0)
    , dt(0.0)  {
    }
  tunePid_(const ContainerAllocator& _alloc)
    : header(_alloc)
    , err_in(0.0)
    , err_out(0.0)
    , dt(0.0)  {
  (void)_alloc;
    }



   typedef  ::std_msgs::Header_<ContainerAllocator>  _header_type;
  _header_type header;

   typedef double _err_in_type;
  _err_in_type err_in;

   typedef double _err_out_type;
  _err_out_type err_out;

   typedef double _dt_type;
  _dt_type dt;





  typedef boost::shared_ptr< ::tactile_servo_msgs::tunePid_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::tactile_servo_msgs::tunePid_<ContainerAllocator> const> ConstPtr;

}; // struct tunePid_

typedef ::tactile_servo_msgs::tunePid_<std::allocator<void> > tunePid;

typedef boost::shared_ptr< ::tactile_servo_msgs::tunePid > tunePidPtr;
typedef boost::shared_ptr< ::tactile_servo_msgs::tunePid const> tunePidConstPtr;

// constants requiring out of line definition



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::tactile_servo_msgs::tunePid_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::tactile_servo_msgs::tunePid_<ContainerAllocator> >::stream(s, "", v);
return s;
}


template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator==(const ::tactile_servo_msgs::tunePid_<ContainerAllocator1> & lhs, const ::tactile_servo_msgs::tunePid_<ContainerAllocator2> & rhs)
{
  return lhs.header == rhs.header &&
    lhs.err_in == rhs.err_in &&
    lhs.err_out == rhs.err_out &&
    lhs.dt == rhs.dt;
}

template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator!=(const ::tactile_servo_msgs::tunePid_<ContainerAllocator1> & lhs, const ::tactile_servo_msgs::tunePid_<ContainerAllocator2> & rhs)
{
  return !(lhs == rhs);
}


} // namespace tactile_servo_msgs

namespace ros
{
namespace message_traits
{





template <class ContainerAllocator>
struct IsFixedSize< ::tactile_servo_msgs::tunePid_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::tactile_servo_msgs::tunePid_<ContainerAllocator> const>
  : FalseType
  { };

template <class ContainerAllocator>
struct IsMessage< ::tactile_servo_msgs::tunePid_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::tactile_servo_msgs::tunePid_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::tactile_servo_msgs::tunePid_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::tactile_servo_msgs::tunePid_<ContainerAllocator> const>
  : TrueType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::tactile_servo_msgs::tunePid_<ContainerAllocator> >
{
  static const char* value()
  {
    return "d466e8971fee54af10a1ce5a1fa444c0";
  }

  static const char* value(const ::tactile_servo_msgs::tunePid_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0xd466e8971fee54afULL;
  static const uint64_t static_value2 = 0x10a1ce5a1fa444c0ULL;
};

template<class ContainerAllocator>
struct DataType< ::tactile_servo_msgs::tunePid_<ContainerAllocator> >
{
  static const char* value()
  {
    return "tactile_servo_msgs/tunePid";
  }

  static const char* value(const ::tactile_servo_msgs::tunePid_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::tactile_servo_msgs::tunePid_<ContainerAllocator> >
{
  static const char* value()
  {
    return "Header header\n"
"float64 err_in\n"
"float64 err_out\n"
"float64 dt\n"
"================================================================================\n"
"MSG: std_msgs/Header\n"
"# Standard metadata for higher-level stamped data types.\n"
"# This is generally used to communicate timestamped data \n"
"# in a particular coordinate frame.\n"
"# \n"
"# sequence ID: consecutively increasing ID \n"
"uint32 seq\n"
"#Two-integer timestamp that is expressed as:\n"
"# * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')\n"
"# * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')\n"
"# time-handling sugar is provided by the client library\n"
"time stamp\n"
"#Frame this data is associated with\n"
"string frame_id\n"
;
  }

  static const char* value(const ::tactile_servo_msgs::tunePid_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::tactile_servo_msgs::tunePid_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream& stream, T m)
    {
      stream.next(m.header);
      stream.next(m.err_in);
      stream.next(m.err_out);
      stream.next(m.dt);
    }

    ROS_DECLARE_ALLINONE_SERIALIZER
  }; // struct tunePid_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::tactile_servo_msgs::tunePid_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream& s, const std::string& indent, const ::tactile_servo_msgs::tunePid_<ContainerAllocator>& v)
  {
    s << indent << "header: ";
    s << std::endl;
    Printer< ::std_msgs::Header_<ContainerAllocator> >::stream(s, indent + "  ", v.header);
    s << indent << "err_in: ";
    Printer<double>::stream(s, indent + "  ", v.err_in);
    s << indent << "err_out: ";
    Printer<double>::stream(s, indent + "  ", v.err_out);
    s << indent << "dt: ";
    Printer<double>::stream(s, indent + "  ", v.dt);
  }
};

} // namespace message_operations
} // namespace ros

#endif // TACTILE_SERVO_MSGS_MESSAGE_TUNEPID_H