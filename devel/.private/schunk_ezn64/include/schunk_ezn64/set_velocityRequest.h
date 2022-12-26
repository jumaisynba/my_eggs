// Generated by gencpp from file schunk_ezn64/set_velocityRequest.msg
// DO NOT EDIT!


#ifndef SCHUNK_EZN64_MESSAGE_SET_VELOCITYREQUEST_H
#define SCHUNK_EZN64_MESSAGE_SET_VELOCITYREQUEST_H


#include <string>
#include <vector>
#include <map>

#include <ros/types.h>
#include <ros/serialization.h>
#include <ros/builtin_message_traits.h>
#include <ros/message_operations.h>


namespace schunk_ezn64
{
template <class ContainerAllocator>
struct set_velocityRequest_
{
  typedef set_velocityRequest_<ContainerAllocator> Type;

  set_velocityRequest_()
    : goal_velocity(0.0)  {
    }
  set_velocityRequest_(const ContainerAllocator& _alloc)
    : goal_velocity(0.0)  {
  (void)_alloc;
    }



   typedef float _goal_velocity_type;
  _goal_velocity_type goal_velocity;





  typedef boost::shared_ptr< ::schunk_ezn64::set_velocityRequest_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::schunk_ezn64::set_velocityRequest_<ContainerAllocator> const> ConstPtr;

}; // struct set_velocityRequest_

typedef ::schunk_ezn64::set_velocityRequest_<std::allocator<void> > set_velocityRequest;

typedef boost::shared_ptr< ::schunk_ezn64::set_velocityRequest > set_velocityRequestPtr;
typedef boost::shared_ptr< ::schunk_ezn64::set_velocityRequest const> set_velocityRequestConstPtr;

// constants requiring out of line definition



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::schunk_ezn64::set_velocityRequest_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::schunk_ezn64::set_velocityRequest_<ContainerAllocator> >::stream(s, "", v);
return s;
}


template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator==(const ::schunk_ezn64::set_velocityRequest_<ContainerAllocator1> & lhs, const ::schunk_ezn64::set_velocityRequest_<ContainerAllocator2> & rhs)
{
  return lhs.goal_velocity == rhs.goal_velocity;
}

template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator!=(const ::schunk_ezn64::set_velocityRequest_<ContainerAllocator1> & lhs, const ::schunk_ezn64::set_velocityRequest_<ContainerAllocator2> & rhs)
{
  return !(lhs == rhs);
}


} // namespace schunk_ezn64

namespace ros
{
namespace message_traits
{





template <class ContainerAllocator>
struct IsFixedSize< ::schunk_ezn64::set_velocityRequest_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::schunk_ezn64::set_velocityRequest_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::schunk_ezn64::set_velocityRequest_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::schunk_ezn64::set_velocityRequest_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::schunk_ezn64::set_velocityRequest_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct HasHeader< ::schunk_ezn64::set_velocityRequest_<ContainerAllocator> const>
  : FalseType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::schunk_ezn64::set_velocityRequest_<ContainerAllocator> >
{
  static const char* value()
  {
    return "f59aa891e42d60388f6c495cda94909c";
  }

  static const char* value(const ::schunk_ezn64::set_velocityRequest_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0xf59aa891e42d6038ULL;
  static const uint64_t static_value2 = 0x8f6c495cda94909cULL;
};

template<class ContainerAllocator>
struct DataType< ::schunk_ezn64::set_velocityRequest_<ContainerAllocator> >
{
  static const char* value()
  {
    return "schunk_ezn64/set_velocityRequest";
  }

  static const char* value(const ::schunk_ezn64::set_velocityRequest_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::schunk_ezn64::set_velocityRequest_<ContainerAllocator> >
{
  static const char* value()
  {
    return "float32 goal_velocity\n"
;
  }

  static const char* value(const ::schunk_ezn64::set_velocityRequest_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::schunk_ezn64::set_velocityRequest_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream& stream, T m)
    {
      stream.next(m.goal_velocity);
    }

    ROS_DECLARE_ALLINONE_SERIALIZER
  }; // struct set_velocityRequest_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::schunk_ezn64::set_velocityRequest_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream& s, const std::string& indent, const ::schunk_ezn64::set_velocityRequest_<ContainerAllocator>& v)
  {
    s << indent << "goal_velocity: ";
    Printer<float>::stream(s, indent + "  ", v.goal_velocity);
  }
};

} // namespace message_operations
} // namespace ros

#endif // SCHUNK_EZN64_MESSAGE_SET_VELOCITYREQUEST_H
