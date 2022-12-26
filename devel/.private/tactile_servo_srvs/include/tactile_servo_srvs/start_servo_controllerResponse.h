// Generated by gencpp from file tactile_servo_srvs/start_servo_controllerResponse.msg
// DO NOT EDIT!


#ifndef TACTILE_SERVO_SRVS_MESSAGE_START_SERVO_CONTROLLERRESPONSE_H
#define TACTILE_SERVO_SRVS_MESSAGE_START_SERVO_CONTROLLERRESPONSE_H


#include <string>
#include <vector>
#include <map>

#include <ros/types.h>
#include <ros/serialization.h>
#include <ros/builtin_message_traits.h>
#include <ros/message_operations.h>


namespace tactile_servo_srvs
{
template <class ContainerAllocator>
struct start_servo_controllerResponse_
{
  typedef start_servo_controllerResponse_<ContainerAllocator> Type;

  start_servo_controllerResponse_()
    : controller_runs(false)  {
    }
  start_servo_controllerResponse_(const ContainerAllocator& _alloc)
    : controller_runs(false)  {
  (void)_alloc;
    }



   typedef uint8_t _controller_runs_type;
  _controller_runs_type controller_runs;





  typedef boost::shared_ptr< ::tactile_servo_srvs::start_servo_controllerResponse_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::tactile_servo_srvs::start_servo_controllerResponse_<ContainerAllocator> const> ConstPtr;

}; // struct start_servo_controllerResponse_

typedef ::tactile_servo_srvs::start_servo_controllerResponse_<std::allocator<void> > start_servo_controllerResponse;

typedef boost::shared_ptr< ::tactile_servo_srvs::start_servo_controllerResponse > start_servo_controllerResponsePtr;
typedef boost::shared_ptr< ::tactile_servo_srvs::start_servo_controllerResponse const> start_servo_controllerResponseConstPtr;

// constants requiring out of line definition



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::tactile_servo_srvs::start_servo_controllerResponse_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::tactile_servo_srvs::start_servo_controllerResponse_<ContainerAllocator> >::stream(s, "", v);
return s;
}


template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator==(const ::tactile_servo_srvs::start_servo_controllerResponse_<ContainerAllocator1> & lhs, const ::tactile_servo_srvs::start_servo_controllerResponse_<ContainerAllocator2> & rhs)
{
  return lhs.controller_runs == rhs.controller_runs;
}

template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator!=(const ::tactile_servo_srvs::start_servo_controllerResponse_<ContainerAllocator1> & lhs, const ::tactile_servo_srvs::start_servo_controllerResponse_<ContainerAllocator2> & rhs)
{
  return !(lhs == rhs);
}


} // namespace tactile_servo_srvs

namespace ros
{
namespace message_traits
{





template <class ContainerAllocator>
struct IsFixedSize< ::tactile_servo_srvs::start_servo_controllerResponse_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::tactile_servo_srvs::start_servo_controllerResponse_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::tactile_servo_srvs::start_servo_controllerResponse_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::tactile_servo_srvs::start_servo_controllerResponse_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::tactile_servo_srvs::start_servo_controllerResponse_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct HasHeader< ::tactile_servo_srvs::start_servo_controllerResponse_<ContainerAllocator> const>
  : FalseType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::tactile_servo_srvs::start_servo_controllerResponse_<ContainerAllocator> >
{
  static const char* value()
  {
    return "8004741410349902f6ca73329f6a93b2";
  }

  static const char* value(const ::tactile_servo_srvs::start_servo_controllerResponse_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0x8004741410349902ULL;
  static const uint64_t static_value2 = 0xf6ca73329f6a93b2ULL;
};

template<class ContainerAllocator>
struct DataType< ::tactile_servo_srvs::start_servo_controllerResponse_<ContainerAllocator> >
{
  static const char* value()
  {
    return "tactile_servo_srvs/start_servo_controllerResponse";
  }

  static const char* value(const ::tactile_servo_srvs::start_servo_controllerResponse_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::tactile_servo_srvs::start_servo_controllerResponse_<ContainerAllocator> >
{
  static const char* value()
  {
    return "\n"
"bool controller_runs\n"
"\n"
;
  }

  static const char* value(const ::tactile_servo_srvs::start_servo_controllerResponse_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::tactile_servo_srvs::start_servo_controllerResponse_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream& stream, T m)
    {
      stream.next(m.controller_runs);
    }

    ROS_DECLARE_ALLINONE_SERIALIZER
  }; // struct start_servo_controllerResponse_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::tactile_servo_srvs::start_servo_controllerResponse_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream& s, const std::string& indent, const ::tactile_servo_srvs::start_servo_controllerResponse_<ContainerAllocator>& v)
  {
    s << indent << "controller_runs: ";
    Printer<uint8_t>::stream(s, indent + "  ", v.controller_runs);
  }
};

} // namespace message_operations
} // namespace ros

#endif // TACTILE_SERVO_SRVS_MESSAGE_START_SERVO_CONTROLLERRESPONSE_H