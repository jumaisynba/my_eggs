// Generated by gencpp from file schunk_ezn64/get_error.msg
// DO NOT EDIT!


#ifndef SCHUNK_EZN64_MESSAGE_GET_ERROR_H
#define SCHUNK_EZN64_MESSAGE_GET_ERROR_H

#include <ros/service_traits.h>


#include <schunk_ezn64/get_errorRequest.h>
#include <schunk_ezn64/get_errorResponse.h>


namespace schunk_ezn64
{

struct get_error
{

typedef get_errorRequest Request;
typedef get_errorResponse Response;
Request request;
Response response;

typedef Request RequestType;
typedef Response ResponseType;

}; // struct get_error
} // namespace schunk_ezn64


namespace ros
{
namespace service_traits
{


template<>
struct MD5Sum< ::schunk_ezn64::get_error > {
  static const char* value()
  {
    return "ea324a22c787839f822b9a025bc2c6fe";
  }

  static const char* value(const ::schunk_ezn64::get_error&) { return value(); }
};

template<>
struct DataType< ::schunk_ezn64::get_error > {
  static const char* value()
  {
    return "schunk_ezn64/get_error";
  }

  static const char* value(const ::schunk_ezn64::get_error&) { return value(); }
};


// service_traits::MD5Sum< ::schunk_ezn64::get_errorRequest> should match
// service_traits::MD5Sum< ::schunk_ezn64::get_error >
template<>
struct MD5Sum< ::schunk_ezn64::get_errorRequest>
{
  static const char* value()
  {
    return MD5Sum< ::schunk_ezn64::get_error >::value();
  }
  static const char* value(const ::schunk_ezn64::get_errorRequest&)
  {
    return value();
  }
};

// service_traits::DataType< ::schunk_ezn64::get_errorRequest> should match
// service_traits::DataType< ::schunk_ezn64::get_error >
template<>
struct DataType< ::schunk_ezn64::get_errorRequest>
{
  static const char* value()
  {
    return DataType< ::schunk_ezn64::get_error >::value();
  }
  static const char* value(const ::schunk_ezn64::get_errorRequest&)
  {
    return value();
  }
};

// service_traits::MD5Sum< ::schunk_ezn64::get_errorResponse> should match
// service_traits::MD5Sum< ::schunk_ezn64::get_error >
template<>
struct MD5Sum< ::schunk_ezn64::get_errorResponse>
{
  static const char* value()
  {
    return MD5Sum< ::schunk_ezn64::get_error >::value();
  }
  static const char* value(const ::schunk_ezn64::get_errorResponse&)
  {
    return value();
  }
};

// service_traits::DataType< ::schunk_ezn64::get_errorResponse> should match
// service_traits::DataType< ::schunk_ezn64::get_error >
template<>
struct DataType< ::schunk_ezn64::get_errorResponse>
{
  static const char* value()
  {
    return DataType< ::schunk_ezn64::get_error >::value();
  }
  static const char* value(const ::schunk_ezn64::get_errorResponse&)
  {
    return value();
  }
};

} // namespace service_traits
} // namespace ros

#endif // SCHUNK_EZN64_MESSAGE_GET_ERROR_H
