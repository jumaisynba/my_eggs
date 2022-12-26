// Generated by gencpp from file tactile_servo_msgs/PlanFeats.msg
// DO NOT EDIT!


#ifndef TACTILE_SERVO_MSGS_MESSAGE_PLANFEATS_H
#define TACTILE_SERVO_MSGS_MESSAGE_PLANFEATS_H


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
struct PlanFeats_
{
  typedef PlanFeats_<ContainerAllocator> Type;

  PlanFeats_()
    : header()
    , TypeContact()
    , numContours(0)
    , isCorner(false)
    , contactArea(0.0)  {
    }
  PlanFeats_(const ContainerAllocator& _alloc)
    : header(_alloc)
    , TypeContact(_alloc)
    , numContours(0)
    , isCorner(false)
    , contactArea(0.0)  {
  (void)_alloc;
    }



   typedef  ::std_msgs::Header_<ContainerAllocator>  _header_type;
  _header_type header;

   typedef std::basic_string<char, std::char_traits<char>, typename ContainerAllocator::template rebind<char>::other >  _TypeContact_type;
  _TypeContact_type TypeContact;

   typedef int32_t _numContours_type;
  _numContours_type numContours;

   typedef uint8_t _isCorner_type;
  _isCorner_type isCorner;

   typedef double _contactArea_type;
  _contactArea_type contactArea;





  typedef boost::shared_ptr< ::tactile_servo_msgs::PlanFeats_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::tactile_servo_msgs::PlanFeats_<ContainerAllocator> const> ConstPtr;

}; // struct PlanFeats_

typedef ::tactile_servo_msgs::PlanFeats_<std::allocator<void> > PlanFeats;

typedef boost::shared_ptr< ::tactile_servo_msgs::PlanFeats > PlanFeatsPtr;
typedef boost::shared_ptr< ::tactile_servo_msgs::PlanFeats const> PlanFeatsConstPtr;

// constants requiring out of line definition



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::tactile_servo_msgs::PlanFeats_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::tactile_servo_msgs::PlanFeats_<ContainerAllocator> >::stream(s, "", v);
return s;
}


template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator==(const ::tactile_servo_msgs::PlanFeats_<ContainerAllocator1> & lhs, const ::tactile_servo_msgs::PlanFeats_<ContainerAllocator2> & rhs)
{
  return lhs.header == rhs.header &&
    lhs.TypeContact == rhs.TypeContact &&
    lhs.numContours == rhs.numContours &&
    lhs.isCorner == rhs.isCorner &&
    lhs.contactArea == rhs.contactArea;
}

template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator!=(const ::tactile_servo_msgs::PlanFeats_<ContainerAllocator1> & lhs, const ::tactile_servo_msgs::PlanFeats_<ContainerAllocator2> & rhs)
{
  return !(lhs == rhs);
}


} // namespace tactile_servo_msgs

namespace ros
{
namespace message_traits
{





template <class ContainerAllocator>
struct IsFixedSize< ::tactile_servo_msgs::PlanFeats_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::tactile_servo_msgs::PlanFeats_<ContainerAllocator> const>
  : FalseType
  { };

template <class ContainerAllocator>
struct IsMessage< ::tactile_servo_msgs::PlanFeats_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::tactile_servo_msgs::PlanFeats_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::tactile_servo_msgs::PlanFeats_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::tactile_servo_msgs::PlanFeats_<ContainerAllocator> const>
  : TrueType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::tactile_servo_msgs::PlanFeats_<ContainerAllocator> >
{
  static const char* value()
  {
    return "f6ba0ac762b3ea36a8d1c92ae7084acf";
  }

  static const char* value(const ::tactile_servo_msgs::PlanFeats_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0xf6ba0ac762b3ea36ULL;
  static const uint64_t static_value2 = 0xa8d1c92ae7084acfULL;
};

template<class ContainerAllocator>
struct DataType< ::tactile_servo_msgs::PlanFeats_<ContainerAllocator> >
{
  static const char* value()
  {
    return "tactile_servo_msgs/PlanFeats";
  }

  static const char* value(const ::tactile_servo_msgs::PlanFeats_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::tactile_servo_msgs::PlanFeats_<ContainerAllocator> >
{
  static const char* value()
  {
    return "Header header\n"
"string TypeContact\n"
"int32 numContours\n"
"bool isCorner  \n"
"float64 contactArea\n"
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

  static const char* value(const ::tactile_servo_msgs::PlanFeats_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::tactile_servo_msgs::PlanFeats_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream& stream, T m)
    {
      stream.next(m.header);
      stream.next(m.TypeContact);
      stream.next(m.numContours);
      stream.next(m.isCorner);
      stream.next(m.contactArea);
    }

    ROS_DECLARE_ALLINONE_SERIALIZER
  }; // struct PlanFeats_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::tactile_servo_msgs::PlanFeats_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream& s, const std::string& indent, const ::tactile_servo_msgs::PlanFeats_<ContainerAllocator>& v)
  {
    s << indent << "header: ";
    s << std::endl;
    Printer< ::std_msgs::Header_<ContainerAllocator> >::stream(s, indent + "  ", v.header);
    s << indent << "TypeContact: ";
    Printer<std::basic_string<char, std::char_traits<char>, typename ContainerAllocator::template rebind<char>::other > >::stream(s, indent + "  ", v.TypeContact);
    s << indent << "numContours: ";
    Printer<int32_t>::stream(s, indent + "  ", v.numContours);
    s << indent << "isCorner: ";
    Printer<uint8_t>::stream(s, indent + "  ", v.isCorner);
    s << indent << "contactArea: ";
    Printer<double>::stream(s, indent + "  ", v.contactArea);
  }
};

} // namespace message_operations
} // namespace ros

#endif // TACTILE_SERVO_MSGS_MESSAGE_PLANFEATS_H
