// Generated by gencpp from file tactile_servo_srvs/select_matrixResponse.msg
// DO NOT EDIT!


#ifndef TACTILE_SERVO_SRVS_MESSAGE_SELECT_MATRIXRESPONSE_H
#define TACTILE_SERVO_SRVS_MESSAGE_SELECT_MATRIXRESPONSE_H


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
struct select_matrixResponse_
{
  typedef select_matrixResponse_<ContainerAllocator> Type;

  select_matrixResponse_()
    : success(0)  {
    }
  select_matrixResponse_(const ContainerAllocator& _alloc)
    : success(0)  {
  (void)_alloc;
    }



   typedef int64_t _success_type;
  _success_type success;





  typedef boost::shared_ptr< ::tactile_servo_srvs::select_matrixResponse_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::tactile_servo_srvs::select_matrixResponse_<ContainerAllocator> const> ConstPtr;

}; // struct select_matrixResponse_

typedef ::tactile_servo_srvs::select_matrixResponse_<std::allocator<void> > select_matrixResponse;

typedef boost::shared_ptr< ::tactile_servo_srvs::select_matrixResponse > select_matrixResponsePtr;
typedef boost::shared_ptr< ::tactile_servo_srvs::select_matrixResponse const> select_matrixResponseConstPtr;

// constants requiring out of line definition



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::tactile_servo_srvs::select_matrixResponse_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::tactile_servo_srvs::select_matrixResponse_<ContainerAllocator> >::stream(s, "", v);
return s;
}


template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator==(const ::tactile_servo_srvs::select_matrixResponse_<ContainerAllocator1> & lhs, const ::tactile_servo_srvs::select_matrixResponse_<ContainerAllocator2> & rhs)
{
  return lhs.success == rhs.success;
}

template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator!=(const ::tactile_servo_srvs::select_matrixResponse_<ContainerAllocator1> & lhs, const ::tactile_servo_srvs::select_matrixResponse_<ContainerAllocator2> & rhs)
{
  return !(lhs == rhs);
}


} // namespace tactile_servo_srvs

namespace ros
{
namespace message_traits
{





template <class ContainerAllocator>
struct IsFixedSize< ::tactile_servo_srvs::select_matrixResponse_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::tactile_servo_srvs::select_matrixResponse_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::tactile_servo_srvs::select_matrixResponse_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::tactile_servo_srvs::select_matrixResponse_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::tactile_servo_srvs::select_matrixResponse_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct HasHeader< ::tactile_servo_srvs::select_matrixResponse_<ContainerAllocator> const>
  : FalseType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::tactile_servo_srvs::select_matrixResponse_<ContainerAllocator> >
{
  static const char* value()
  {
    return "0f26af2399fbfbc8170d9a60ed7b9846";
  }

  static const char* value(const ::tactile_servo_srvs::select_matrixResponse_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0x0f26af2399fbfbc8ULL;
  static const uint64_t static_value2 = 0x170d9a60ed7b9846ULL;
};

template<class ContainerAllocator>
struct DataType< ::tactile_servo_srvs::select_matrixResponse_<ContainerAllocator> >
{
  static const char* value()
  {
    return "tactile_servo_srvs/select_matrixResponse";
  }

  static const char* value(const ::tactile_servo_srvs::select_matrixResponse_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::tactile_servo_srvs::select_matrixResponse_<ContainerAllocator> >
{
  static const char* value()
  {
    return "\n"
"int64 success\n"
"\n"
;
  }

  static const char* value(const ::tactile_servo_srvs::select_matrixResponse_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::tactile_servo_srvs::select_matrixResponse_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream& stream, T m)
    {
      stream.next(m.success);
    }

    ROS_DECLARE_ALLINONE_SERIALIZER
  }; // struct select_matrixResponse_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::tactile_servo_srvs::select_matrixResponse_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream& s, const std::string& indent, const ::tactile_servo_srvs::select_matrixResponse_<ContainerAllocator>& v)
  {
    s << indent << "success: ";
    Printer<int64_t>::stream(s, indent + "  ", v.success);
  }
};

} // namespace message_operations
} // namespace ros

#endif // TACTILE_SERVO_SRVS_MESSAGE_SELECT_MATRIXRESPONSE_H
