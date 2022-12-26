// Generated by gencpp from file tactile_servo_msgs/COCtoZMP.msg
// DO NOT EDIT!


#ifndef TACTILE_SERVO_MSGS_MESSAGE_COCTOZMP_H
#define TACTILE_SERVO_MSGS_MESSAGE_COCTOZMP_H


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
struct COCtoZMP_
{
  typedef COCtoZMP_<ContainerAllocator> Type;

  COCtoZMP_()
    : header()
    , num_pixels_contact(0)
    , coc_to_zmp_smooth(0.0)  {
    }
  COCtoZMP_(const ContainerAllocator& _alloc)
    : header(_alloc)
    , num_pixels_contact(0)
    , coc_to_zmp_smooth(0.0)  {
  (void)_alloc;
    }



   typedef  ::std_msgs::Header_<ContainerAllocator>  _header_type;
  _header_type header;

   typedef int32_t _num_pixels_contact_type;
  _num_pixels_contact_type num_pixels_contact;

   typedef double _coc_to_zmp_smooth_type;
  _coc_to_zmp_smooth_type coc_to_zmp_smooth;





  typedef boost::shared_ptr< ::tactile_servo_msgs::COCtoZMP_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::tactile_servo_msgs::COCtoZMP_<ContainerAllocator> const> ConstPtr;

}; // struct COCtoZMP_

typedef ::tactile_servo_msgs::COCtoZMP_<std::allocator<void> > COCtoZMP;

typedef boost::shared_ptr< ::tactile_servo_msgs::COCtoZMP > COCtoZMPPtr;
typedef boost::shared_ptr< ::tactile_servo_msgs::COCtoZMP const> COCtoZMPConstPtr;

// constants requiring out of line definition



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::tactile_servo_msgs::COCtoZMP_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::tactile_servo_msgs::COCtoZMP_<ContainerAllocator> >::stream(s, "", v);
return s;
}


template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator==(const ::tactile_servo_msgs::COCtoZMP_<ContainerAllocator1> & lhs, const ::tactile_servo_msgs::COCtoZMP_<ContainerAllocator2> & rhs)
{
  return lhs.header == rhs.header &&
    lhs.num_pixels_contact == rhs.num_pixels_contact &&
    lhs.coc_to_zmp_smooth == rhs.coc_to_zmp_smooth;
}

template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator!=(const ::tactile_servo_msgs::COCtoZMP_<ContainerAllocator1> & lhs, const ::tactile_servo_msgs::COCtoZMP_<ContainerAllocator2> & rhs)
{
  return !(lhs == rhs);
}


} // namespace tactile_servo_msgs

namespace ros
{
namespace message_traits
{





template <class ContainerAllocator>
struct IsFixedSize< ::tactile_servo_msgs::COCtoZMP_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::tactile_servo_msgs::COCtoZMP_<ContainerAllocator> const>
  : FalseType
  { };

template <class ContainerAllocator>
struct IsMessage< ::tactile_servo_msgs::COCtoZMP_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::tactile_servo_msgs::COCtoZMP_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::tactile_servo_msgs::COCtoZMP_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::tactile_servo_msgs::COCtoZMP_<ContainerAllocator> const>
  : TrueType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::tactile_servo_msgs::COCtoZMP_<ContainerAllocator> >
{
  static const char* value()
  {
    return "0d817ec84cd3c8d3b73bcf52114de648";
  }

  static const char* value(const ::tactile_servo_msgs::COCtoZMP_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0x0d817ec84cd3c8d3ULL;
  static const uint64_t static_value2 = 0xb73bcf52114de648ULL;
};

template<class ContainerAllocator>
struct DataType< ::tactile_servo_msgs::COCtoZMP_<ContainerAllocator> >
{
  static const char* value()
  {
    return "tactile_servo_msgs/COCtoZMP";
  }

  static const char* value(const ::tactile_servo_msgs::COCtoZMP_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::tactile_servo_msgs::COCtoZMP_<ContainerAllocator> >
{
  static const char* value()
  {
    return "Header header\n"
"int32 num_pixels_contact\n"
"float64 coc_to_zmp_smooth\n"
"\n"
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

  static const char* value(const ::tactile_servo_msgs::COCtoZMP_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::tactile_servo_msgs::COCtoZMP_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream& stream, T m)
    {
      stream.next(m.header);
      stream.next(m.num_pixels_contact);
      stream.next(m.coc_to_zmp_smooth);
    }

    ROS_DECLARE_ALLINONE_SERIALIZER
  }; // struct COCtoZMP_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::tactile_servo_msgs::COCtoZMP_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream& s, const std::string& indent, const ::tactile_servo_msgs::COCtoZMP_<ContainerAllocator>& v)
  {
    s << indent << "header: ";
    s << std::endl;
    Printer< ::std_msgs::Header_<ContainerAllocator> >::stream(s, indent + "  ", v.header);
    s << indent << "num_pixels_contact: ";
    Printer<int32_t>::stream(s, indent + "  ", v.num_pixels_contact);
    s << indent << "coc_to_zmp_smooth: ";
    Printer<double>::stream(s, indent + "  ", v.coc_to_zmp_smooth);
  }
};

} // namespace message_operations
} // namespace ros

#endif // TACTILE_SERVO_MSGS_MESSAGE_COCTOZMP_H
