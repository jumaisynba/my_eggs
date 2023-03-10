// Generated by gencpp from file tactile_servo_srvs/choose_configuration_singularityRequest.msg
// DO NOT EDIT!


#ifndef TACTILE_SERVO_SRVS_MESSAGE_CHOOSE_CONFIGURATION_SINGULARITYREQUEST_H
#define TACTILE_SERVO_SRVS_MESSAGE_CHOOSE_CONFIGURATION_SINGULARITYREQUEST_H


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
struct choose_configuration_singularityRequest_
{
  typedef choose_configuration_singularityRequest_<ContainerAllocator> Type;

  choose_configuration_singularityRequest_()
    : choose_configuration(0)  {
    }
  choose_configuration_singularityRequest_(const ContainerAllocator& _alloc)
    : choose_configuration(0)  {
  (void)_alloc;
    }



   typedef int64_t _choose_configuration_type;
  _choose_configuration_type choose_configuration;





  typedef boost::shared_ptr< ::tactile_servo_srvs::choose_configuration_singularityRequest_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::tactile_servo_srvs::choose_configuration_singularityRequest_<ContainerAllocator> const> ConstPtr;

}; // struct choose_configuration_singularityRequest_

typedef ::tactile_servo_srvs::choose_configuration_singularityRequest_<std::allocator<void> > choose_configuration_singularityRequest;

typedef boost::shared_ptr< ::tactile_servo_srvs::choose_configuration_singularityRequest > choose_configuration_singularityRequestPtr;
typedef boost::shared_ptr< ::tactile_servo_srvs::choose_configuration_singularityRequest const> choose_configuration_singularityRequestConstPtr;

// constants requiring out of line definition



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::tactile_servo_srvs::choose_configuration_singularityRequest_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::tactile_servo_srvs::choose_configuration_singularityRequest_<ContainerAllocator> >::stream(s, "", v);
return s;
}


template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator==(const ::tactile_servo_srvs::choose_configuration_singularityRequest_<ContainerAllocator1> & lhs, const ::tactile_servo_srvs::choose_configuration_singularityRequest_<ContainerAllocator2> & rhs)
{
  return lhs.choose_configuration == rhs.choose_configuration;
}

template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator!=(const ::tactile_servo_srvs::choose_configuration_singularityRequest_<ContainerAllocator1> & lhs, const ::tactile_servo_srvs::choose_configuration_singularityRequest_<ContainerAllocator2> & rhs)
{
  return !(lhs == rhs);
}


} // namespace tactile_servo_srvs

namespace ros
{
namespace message_traits
{





template <class ContainerAllocator>
struct IsFixedSize< ::tactile_servo_srvs::choose_configuration_singularityRequest_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::tactile_servo_srvs::choose_configuration_singularityRequest_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::tactile_servo_srvs::choose_configuration_singularityRequest_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::tactile_servo_srvs::choose_configuration_singularityRequest_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::tactile_servo_srvs::choose_configuration_singularityRequest_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct HasHeader< ::tactile_servo_srvs::choose_configuration_singularityRequest_<ContainerAllocator> const>
  : FalseType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::tactile_servo_srvs::choose_configuration_singularityRequest_<ContainerAllocator> >
{
  static const char* value()
  {
    return "9b87213b7248742e892d124acb32c142";
  }

  static const char* value(const ::tactile_servo_srvs::choose_configuration_singularityRequest_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0x9b87213b7248742eULL;
  static const uint64_t static_value2 = 0x892d124acb32c142ULL;
};

template<class ContainerAllocator>
struct DataType< ::tactile_servo_srvs::choose_configuration_singularityRequest_<ContainerAllocator> >
{
  static const char* value()
  {
    return "tactile_servo_srvs/choose_configuration_singularityRequest";
  }

  static const char* value(const ::tactile_servo_srvs::choose_configuration_singularityRequest_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::tactile_servo_srvs::choose_configuration_singularityRequest_<ContainerAllocator> >
{
  static const char* value()
  {
    return "int64 choose_configuration\n"
"\n"
;
  }

  static const char* value(const ::tactile_servo_srvs::choose_configuration_singularityRequest_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::tactile_servo_srvs::choose_configuration_singularityRequest_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream& stream, T m)
    {
      stream.next(m.choose_configuration);
    }

    ROS_DECLARE_ALLINONE_SERIALIZER
  }; // struct choose_configuration_singularityRequest_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::tactile_servo_srvs::choose_configuration_singularityRequest_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream& s, const std::string& indent, const ::tactile_servo_srvs::choose_configuration_singularityRequest_<ContainerAllocator>& v)
  {
    s << indent << "choose_configuration: ";
    Printer<int64_t>::stream(s, indent + "  ", v.choose_configuration);
  }
};

} // namespace message_operations
} // namespace ros

#endif // TACTILE_SERVO_SRVS_MESSAGE_CHOOSE_CONFIGURATION_SINGULARITYREQUEST_H
