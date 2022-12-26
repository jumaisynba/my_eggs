// Generated by gencpp from file tactile_servo_msgs/CalibSerieselOptoforce.msg
// DO NOT EDIT!


#ifndef TACTILE_SERVO_MSGS_MESSAGE_CALIBSERIESELOPTOFORCE_H
#define TACTILE_SERVO_MSGS_MESSAGE_CALIBSERIESELOPTOFORCE_H


#include <string>
#include <vector>
#include <map>

#include <ros/types.h>
#include <ros/serialization.h>
#include <ros/builtin_message_traits.h>
#include <ros/message_operations.h>

#include <std_msgs/Header.h>
#include <geometry_msgs/Wrench.h>

namespace tactile_servo_msgs
{
template <class ContainerAllocator>
struct CalibSerieselOptoforce_
{
  typedef CalibSerieselOptoforce_<ContainerAllocator> Type;

  CalibSerieselOptoforce_()
    : header()
    , adc0(0)
    , adc1(0)
    , adc2(0)
    , adc3(0)
    , adc4(0)
    , adc5(0)
    , adc6(0)
    , adc7(0)
    , adc8(0)
    , adc9(0)
    , adc10(0)
    , adc11(0)
    , adc12(0)
    , adc13(0)
    , adc14(0)
    , adc15(0)
    , nano()  {
    }
  CalibSerieselOptoforce_(const ContainerAllocator& _alloc)
    : header(_alloc)
    , adc0(0)
    , adc1(0)
    , adc2(0)
    , adc3(0)
    , adc4(0)
    , adc5(0)
    , adc6(0)
    , adc7(0)
    , adc8(0)
    , adc9(0)
    , adc10(0)
    , adc11(0)
    , adc12(0)
    , adc13(0)
    , adc14(0)
    , adc15(0)
    , nano(_alloc)  {
  (void)_alloc;
    }



   typedef  ::std_msgs::Header_<ContainerAllocator>  _header_type;
  _header_type header;

   typedef uint16_t _adc0_type;
  _adc0_type adc0;

   typedef uint16_t _adc1_type;
  _adc1_type adc1;

   typedef uint16_t _adc2_type;
  _adc2_type adc2;

   typedef uint16_t _adc3_type;
  _adc3_type adc3;

   typedef uint16_t _adc4_type;
  _adc4_type adc4;

   typedef uint16_t _adc5_type;
  _adc5_type adc5;

   typedef uint16_t _adc6_type;
  _adc6_type adc6;

   typedef uint16_t _adc7_type;
  _adc7_type adc7;

   typedef uint16_t _adc8_type;
  _adc8_type adc8;

   typedef uint16_t _adc9_type;
  _adc9_type adc9;

   typedef uint16_t _adc10_type;
  _adc10_type adc10;

   typedef uint16_t _adc11_type;
  _adc11_type adc11;

   typedef uint16_t _adc12_type;
  _adc12_type adc12;

   typedef uint16_t _adc13_type;
  _adc13_type adc13;

   typedef uint16_t _adc14_type;
  _adc14_type adc14;

   typedef uint16_t _adc15_type;
  _adc15_type adc15;

   typedef  ::geometry_msgs::Wrench_<ContainerAllocator>  _nano_type;
  _nano_type nano;





  typedef boost::shared_ptr< ::tactile_servo_msgs::CalibSerieselOptoforce_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::tactile_servo_msgs::CalibSerieselOptoforce_<ContainerAllocator> const> ConstPtr;

}; // struct CalibSerieselOptoforce_

typedef ::tactile_servo_msgs::CalibSerieselOptoforce_<std::allocator<void> > CalibSerieselOptoforce;

typedef boost::shared_ptr< ::tactile_servo_msgs::CalibSerieselOptoforce > CalibSerieselOptoforcePtr;
typedef boost::shared_ptr< ::tactile_servo_msgs::CalibSerieselOptoforce const> CalibSerieselOptoforceConstPtr;

// constants requiring out of line definition



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::tactile_servo_msgs::CalibSerieselOptoforce_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::tactile_servo_msgs::CalibSerieselOptoforce_<ContainerAllocator> >::stream(s, "", v);
return s;
}


template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator==(const ::tactile_servo_msgs::CalibSerieselOptoforce_<ContainerAllocator1> & lhs, const ::tactile_servo_msgs::CalibSerieselOptoforce_<ContainerAllocator2> & rhs)
{
  return lhs.header == rhs.header &&
    lhs.adc0 == rhs.adc0 &&
    lhs.adc1 == rhs.adc1 &&
    lhs.adc2 == rhs.adc2 &&
    lhs.adc3 == rhs.adc3 &&
    lhs.adc4 == rhs.adc4 &&
    lhs.adc5 == rhs.adc5 &&
    lhs.adc6 == rhs.adc6 &&
    lhs.adc7 == rhs.adc7 &&
    lhs.adc8 == rhs.adc8 &&
    lhs.adc9 == rhs.adc9 &&
    lhs.adc10 == rhs.adc10 &&
    lhs.adc11 == rhs.adc11 &&
    lhs.adc12 == rhs.adc12 &&
    lhs.adc13 == rhs.adc13 &&
    lhs.adc14 == rhs.adc14 &&
    lhs.adc15 == rhs.adc15 &&
    lhs.nano == rhs.nano;
}

template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator!=(const ::tactile_servo_msgs::CalibSerieselOptoforce_<ContainerAllocator1> & lhs, const ::tactile_servo_msgs::CalibSerieselOptoforce_<ContainerAllocator2> & rhs)
{
  return !(lhs == rhs);
}


} // namespace tactile_servo_msgs

namespace ros
{
namespace message_traits
{





template <class ContainerAllocator>
struct IsFixedSize< ::tactile_servo_msgs::CalibSerieselOptoforce_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::tactile_servo_msgs::CalibSerieselOptoforce_<ContainerAllocator> const>
  : FalseType
  { };

template <class ContainerAllocator>
struct IsMessage< ::tactile_servo_msgs::CalibSerieselOptoforce_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::tactile_servo_msgs::CalibSerieselOptoforce_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::tactile_servo_msgs::CalibSerieselOptoforce_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::tactile_servo_msgs::CalibSerieselOptoforce_<ContainerAllocator> const>
  : TrueType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::tactile_servo_msgs::CalibSerieselOptoforce_<ContainerAllocator> >
{
  static const char* value()
  {
    return "89487ec7fb2ca7040c7708621b61dd21";
  }

  static const char* value(const ::tactile_servo_msgs::CalibSerieselOptoforce_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0x89487ec7fb2ca704ULL;
  static const uint64_t static_value2 = 0x0c7708621b61dd21ULL;
};

template<class ContainerAllocator>
struct DataType< ::tactile_servo_msgs::CalibSerieselOptoforce_<ContainerAllocator> >
{
  static const char* value()
  {
    return "tactile_servo_msgs/CalibSerieselOptoforce";
  }

  static const char* value(const ::tactile_servo_msgs::CalibSerieselOptoforce_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::tactile_servo_msgs::CalibSerieselOptoforce_<ContainerAllocator> >
{
  static const char* value()
  {
    return "Header header\n"
"uint16 adc0\n"
"uint16 adc1\n"
"uint16 adc2\n"
"uint16 adc3\n"
"uint16 adc4\n"
"uint16 adc5\n"
"uint16 adc6\n"
"uint16 adc7\n"
"uint16 adc8\n"
"uint16 adc9\n"
"uint16 adc10\n"
"uint16 adc11\n"
"uint16 adc12\n"
"uint16 adc13\n"
"uint16 adc14\n"
"uint16 adc15\n"
"geometry_msgs/Wrench nano\n"
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
"\n"
"================================================================================\n"
"MSG: geometry_msgs/Wrench\n"
"# This represents force in free space, separated into\n"
"# its linear and angular parts.\n"
"Vector3  force\n"
"Vector3  torque\n"
"\n"
"================================================================================\n"
"MSG: geometry_msgs/Vector3\n"
"# This represents a vector in free space. \n"
"# It is only meant to represent a direction. Therefore, it does not\n"
"# make sense to apply a translation to it (e.g., when applying a \n"
"# generic rigid transformation to a Vector3, tf2 will only apply the\n"
"# rotation). If you want your data to be translatable too, use the\n"
"# geometry_msgs/Point message instead.\n"
"\n"
"float64 x\n"
"float64 y\n"
"float64 z\n"
;
  }

  static const char* value(const ::tactile_servo_msgs::CalibSerieselOptoforce_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::tactile_servo_msgs::CalibSerieselOptoforce_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream& stream, T m)
    {
      stream.next(m.header);
      stream.next(m.adc0);
      stream.next(m.adc1);
      stream.next(m.adc2);
      stream.next(m.adc3);
      stream.next(m.adc4);
      stream.next(m.adc5);
      stream.next(m.adc6);
      stream.next(m.adc7);
      stream.next(m.adc8);
      stream.next(m.adc9);
      stream.next(m.adc10);
      stream.next(m.adc11);
      stream.next(m.adc12);
      stream.next(m.adc13);
      stream.next(m.adc14);
      stream.next(m.adc15);
      stream.next(m.nano);
    }

    ROS_DECLARE_ALLINONE_SERIALIZER
  }; // struct CalibSerieselOptoforce_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::tactile_servo_msgs::CalibSerieselOptoforce_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream& s, const std::string& indent, const ::tactile_servo_msgs::CalibSerieselOptoforce_<ContainerAllocator>& v)
  {
    s << indent << "header: ";
    s << std::endl;
    Printer< ::std_msgs::Header_<ContainerAllocator> >::stream(s, indent + "  ", v.header);
    s << indent << "adc0: ";
    Printer<uint16_t>::stream(s, indent + "  ", v.adc0);
    s << indent << "adc1: ";
    Printer<uint16_t>::stream(s, indent + "  ", v.adc1);
    s << indent << "adc2: ";
    Printer<uint16_t>::stream(s, indent + "  ", v.adc2);
    s << indent << "adc3: ";
    Printer<uint16_t>::stream(s, indent + "  ", v.adc3);
    s << indent << "adc4: ";
    Printer<uint16_t>::stream(s, indent + "  ", v.adc4);
    s << indent << "adc5: ";
    Printer<uint16_t>::stream(s, indent + "  ", v.adc5);
    s << indent << "adc6: ";
    Printer<uint16_t>::stream(s, indent + "  ", v.adc6);
    s << indent << "adc7: ";
    Printer<uint16_t>::stream(s, indent + "  ", v.adc7);
    s << indent << "adc8: ";
    Printer<uint16_t>::stream(s, indent + "  ", v.adc8);
    s << indent << "adc9: ";
    Printer<uint16_t>::stream(s, indent + "  ", v.adc9);
    s << indent << "adc10: ";
    Printer<uint16_t>::stream(s, indent + "  ", v.adc10);
    s << indent << "adc11: ";
    Printer<uint16_t>::stream(s, indent + "  ", v.adc11);
    s << indent << "adc12: ";
    Printer<uint16_t>::stream(s, indent + "  ", v.adc12);
    s << indent << "adc13: ";
    Printer<uint16_t>::stream(s, indent + "  ", v.adc13);
    s << indent << "adc14: ";
    Printer<uint16_t>::stream(s, indent + "  ", v.adc14);
    s << indent << "adc15: ";
    Printer<uint16_t>::stream(s, indent + "  ", v.adc15);
    s << indent << "nano: ";
    s << std::endl;
    Printer< ::geometry_msgs::Wrench_<ContainerAllocator> >::stream(s, indent + "  ", v.nano);
  }
};

} // namespace message_operations
} // namespace ros

#endif // TACTILE_SERVO_MSGS_MESSAGE_CALIBSERIESELOPTOFORCE_H