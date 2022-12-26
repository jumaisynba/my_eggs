// Generated by gencpp from file schunk_ezn64/get_velocityRequest.msg
// DO NOT EDIT!


#ifndef SCHUNK_EZN64_MESSAGE_GET_VELOCITYREQUEST_H
#define SCHUNK_EZN64_MESSAGE_GET_VELOCITYREQUEST_H


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
struct get_velocityRequest_
{
  typedef get_velocityRequest_<ContainerAllocator> Type;

  get_velocityRequest_()
    {
    }
  get_velocityRequest_(const ContainerAllocator& _alloc)
    {
  (void)_alloc;
    }







  typedef boost::shared_ptr< ::schunk_ezn64::get_velocityRequest_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::schunk_ezn64::get_velocityRequest_<ContainerAllocator> const> ConstPtr;

}; // struct get_velocityRequest_

typedef ::schunk_ezn64::get_velocityRequest_<std::allocator<void> > get_velocityRequest;

typedef boost::shared_ptr< ::schunk_ezn64::get_velocityRequest > get_velocityRequestPtr;
typedef boost::shared_ptr< ::schunk_ezn64::get_velocityRequest const> get_velocityRequestConstPtr;

// constants requiring out of line definition



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::schunk_ezn64::get_velocityRequest_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::schunk_ezn64::get_velocityRequest_<ContainerAllocator> >::stream(s, "", v);
return s;
}


} // namespace schunk_ezn64

namespace ros
{
namespace message_traits
{





template <class ContainerAllocator>
struct IsFixedSize< ::schunk_ezn64::get_velocityRequest_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::schunk_ezn64::get_velocityRequest_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::schunk_ezn64::get_velocityRequest_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::schunk_ezn64::get_velocityRequest_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::schunk_ezn64::get_velocityRequest_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct HasHeader< ::schunk_ezn64::get_velocityRequest_<ContainerAllocator> const>
  : FalseType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::schunk_ezn64::get_velocityRequest_<ContainerAllocator> >
{
  static const char* value()
  {
    return "d41d8cd98f00b204e9800998ecf8427e";
  }

  static const char* value(const ::schunk_ezn64::get_velocityRequest_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0xd41d8cd98f00b204ULL;
  static const uint64_t static_value2 = 0xe9800998ecf8427eULL;
};

template<class ContainerAllocator>
struct DataType< ::schunk_ezn64::get_velocityRequest_<ContainerAllocator> >
{
  static const char* value()
  {
    return "schunk_ezn64/get_velocityRequest";
  }

  static const char* value(const ::schunk_ezn64::get_velocityRequest_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::schunk_ezn64::get_velocityRequest_<ContainerAllocator> >
{
  static const char* value()
  {
    return "\n"
;
  }

  static const char* value(const ::schunk_ezn64::get_velocityRequest_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::schunk_ezn64::get_velocityRequest_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream&, T)
    {}

    ROS_DECLARE_ALLINONE_SERIALIZER
  }; // struct get_velocityRequest_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::schunk_ezn64::get_velocityRequest_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream&, const std::string&, const ::schunk_ezn64::get_velocityRequest_<ContainerAllocator>&)
  {}
};

} // namespace message_operations
} // namespace ros

#endif // SCHUNK_EZN64_MESSAGE_GET_VELOCITYREQUEST_H
