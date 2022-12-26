
"use strict";

let CameraInfo = require('./CameraInfo.js');
let CompressedImage = require('./CompressedImage.js');
let ChannelFloat32 = require('./ChannelFloat32.js');
let NavSatFix = require('./NavSatFix.js');
let TimeReference = require('./TimeReference.js');
let Joy = require('./Joy.js');
let MagneticField = require('./MagneticField.js');
let MultiDOFJointState = require('./MultiDOFJointState.js');
let Temperature = require('./Temperature.js');
let FluidPressure = require('./FluidPressure.js');
let Range = require('./Range.js');
let Imu = require('./Imu.js');
let PointCloud = require('./PointCloud.js');
let MultiEchoLaserScan = require('./MultiEchoLaserScan.js');
let PointField = require('./PointField.js');
let LaserScan = require('./LaserScan.js');
let JointState = require('./JointState.js');
let JoyFeedback = require('./JoyFeedback.js');
let RelativeHumidity = require('./RelativeHumidity.js');
let JoyFeedbackArray = require('./JoyFeedbackArray.js');
let LaserEcho = require('./LaserEcho.js');
let Image = require('./Image.js');
let BatteryState = require('./BatteryState.js');
let Illuminance = require('./Illuminance.js');
let PointCloud2 = require('./PointCloud2.js');
let RegionOfInterest = require('./RegionOfInterest.js');
let NavSatStatus = require('./NavSatStatus.js');

module.exports = {
  CameraInfo: CameraInfo,
  CompressedImage: CompressedImage,
  ChannelFloat32: ChannelFloat32,
  NavSatFix: NavSatFix,
  TimeReference: TimeReference,
  Joy: Joy,
  MagneticField: MagneticField,
  MultiDOFJointState: MultiDOFJointState,
  Temperature: Temperature,
  FluidPressure: FluidPressure,
  Range: Range,
  Imu: Imu,
  PointCloud: PointCloud,
  MultiEchoLaserScan: MultiEchoLaserScan,
  PointField: PointField,
  LaserScan: LaserScan,
  JointState: JointState,
  JoyFeedback: JoyFeedback,
  RelativeHumidity: RelativeHumidity,
  JoyFeedbackArray: JoyFeedbackArray,
  LaserEcho: LaserEcho,
  Image: Image,
  BatteryState: BatteryState,
  Illuminance: Illuminance,
  PointCloud2: PointCloud2,
  RegionOfInterest: RegionOfInterest,
  NavSatStatus: NavSatStatus,
};
