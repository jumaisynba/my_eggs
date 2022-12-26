;; Auto-generated. Do not edit!


(when (boundp 'tactile_servo_msgs::PlotMatlabfareaiscontact)
  (if (not (find-package "TACTILE_SERVO_MSGS"))
    (make-package "TACTILE_SERVO_MSGS"))
  (shadow 'PlotMatlabfareaiscontact (find-package "TACTILE_SERVO_MSGS")))
(unless (find-package "TACTILE_SERVO_MSGS::PLOTMATLABFAREAISCONTACT")
  (make-package "TACTILE_SERVO_MSGS::PLOTMATLABFAREAISCONTACT"))

(in-package "ROS")
;;//! \htmlinclude PlotMatlabfareaiscontact.msg.html
(if (not (find-package "STD_MSGS"))
  (ros::roseus-add-msgs "std_msgs"))


(defclass tactile_servo_msgs::PlotMatlabfareaiscontact
  :super ros::object
  :slots (_header _fx _fy _fz _fwx _fwy _fwz _coc_x _coc_y _farea _iscontact _f _zmp_x _zmp_y _orient_z _cop_x _cop_y _coc_xd _coc_yd _fd _zmp_xd _zmp_yd _orient_zd _cop_xd _cop_yd _num_contours _x_now _y_now _z_now _wx_now _wy_now _wz_now _ww_now _x_des _y_des _z_des _wx_des _wy_des _wz_des _ww_des _x_c _y_c _z_c _dt _time _test_time2 ))

(defmethod tactile_servo_msgs::PlotMatlabfareaiscontact
  (:init
   (&key
    ((:header __header) (instance std_msgs::Header :init))
    ((:fx __fx) 0.0)
    ((:fy __fy) 0.0)
    ((:fz __fz) 0.0)
    ((:fwx __fwx) 0.0)
    ((:fwy __fwy) 0.0)
    ((:fwz __fwz) 0.0)
    ((:coc_x __coc_x) 0.0)
    ((:coc_y __coc_y) 0.0)
    ((:farea __farea) 0.0)
    ((:iscontact __iscontact) 0.0)
    ((:f __f) 0.0)
    ((:zmp_x __zmp_x) 0.0)
    ((:zmp_y __zmp_y) 0.0)
    ((:orient_z __orient_z) 0.0)
    ((:cop_x __cop_x) 0.0)
    ((:cop_y __cop_y) 0.0)
    ((:coc_xd __coc_xd) 0.0)
    ((:coc_yd __coc_yd) 0.0)
    ((:fd __fd) 0.0)
    ((:zmp_xd __zmp_xd) 0.0)
    ((:zmp_yd __zmp_yd) 0.0)
    ((:orient_zd __orient_zd) 0.0)
    ((:cop_xd __cop_xd) 0.0)
    ((:cop_yd __cop_yd) 0.0)
    ((:num_contours __num_contours) 0)
    ((:x_now __x_now) 0.0)
    ((:y_now __y_now) 0.0)
    ((:z_now __z_now) 0.0)
    ((:wx_now __wx_now) 0.0)
    ((:wy_now __wy_now) 0.0)
    ((:wz_now __wz_now) 0.0)
    ((:ww_now __ww_now) 0.0)
    ((:x_des __x_des) 0.0)
    ((:y_des __y_des) 0.0)
    ((:z_des __z_des) 0.0)
    ((:wx_des __wx_des) 0.0)
    ((:wy_des __wy_des) 0.0)
    ((:wz_des __wz_des) 0.0)
    ((:ww_des __ww_des) 0.0)
    ((:x_c __x_c) 0.0)
    ((:y_c __y_c) 0.0)
    ((:z_c __z_c) 0.0)
    ((:dt __dt) 0.0)
    ((:time __time) 0.0)
    ((:test_time2 __test_time2) 0.0)
    )
   (send-super :init)
   (setq _header __header)
   (setq _fx (float __fx))
   (setq _fy (float __fy))
   (setq _fz (float __fz))
   (setq _fwx (float __fwx))
   (setq _fwy (float __fwy))
   (setq _fwz (float __fwz))
   (setq _coc_x (float __coc_x))
   (setq _coc_y (float __coc_y))
   (setq _farea (float __farea))
   (setq _iscontact (float __iscontact))
   (setq _f (float __f))
   (setq _zmp_x (float __zmp_x))
   (setq _zmp_y (float __zmp_y))
   (setq _orient_z (float __orient_z))
   (setq _cop_x (float __cop_x))
   (setq _cop_y (float __cop_y))
   (setq _coc_xd (float __coc_xd))
   (setq _coc_yd (float __coc_yd))
   (setq _fd (float __fd))
   (setq _zmp_xd (float __zmp_xd))
   (setq _zmp_yd (float __zmp_yd))
   (setq _orient_zd (float __orient_zd))
   (setq _cop_xd (float __cop_xd))
   (setq _cop_yd (float __cop_yd))
   (setq _num_contours (round __num_contours))
   (setq _x_now (float __x_now))
   (setq _y_now (float __y_now))
   (setq _z_now (float __z_now))
   (setq _wx_now (float __wx_now))
   (setq _wy_now (float __wy_now))
   (setq _wz_now (float __wz_now))
   (setq _ww_now (float __ww_now))
   (setq _x_des (float __x_des))
   (setq _y_des (float __y_des))
   (setq _z_des (float __z_des))
   (setq _wx_des (float __wx_des))
   (setq _wy_des (float __wy_des))
   (setq _wz_des (float __wz_des))
   (setq _ww_des (float __ww_des))
   (setq _x_c (float __x_c))
   (setq _y_c (float __y_c))
   (setq _z_c (float __z_c))
   (setq _dt (float __dt))
   (setq _time (float __time))
   (setq _test_time2 (float __test_time2))
   self)
  (:header
   (&rest __header)
   (if (keywordp (car __header))
       (send* _header __header)
     (progn
       (if __header (setq _header (car __header)))
       _header)))
  (:fx
   (&optional __fx)
   (if __fx (setq _fx __fx)) _fx)
  (:fy
   (&optional __fy)
   (if __fy (setq _fy __fy)) _fy)
  (:fz
   (&optional __fz)
   (if __fz (setq _fz __fz)) _fz)
  (:fwx
   (&optional __fwx)
   (if __fwx (setq _fwx __fwx)) _fwx)
  (:fwy
   (&optional __fwy)
   (if __fwy (setq _fwy __fwy)) _fwy)
  (:fwz
   (&optional __fwz)
   (if __fwz (setq _fwz __fwz)) _fwz)
  (:coc_x
   (&optional __coc_x)
   (if __coc_x (setq _coc_x __coc_x)) _coc_x)
  (:coc_y
   (&optional __coc_y)
   (if __coc_y (setq _coc_y __coc_y)) _coc_y)
  (:farea
   (&optional __farea)
   (if __farea (setq _farea __farea)) _farea)
  (:iscontact
   (&optional __iscontact)
   (if __iscontact (setq _iscontact __iscontact)) _iscontact)
  (:f
   (&optional __f)
   (if __f (setq _f __f)) _f)
  (:zmp_x
   (&optional __zmp_x)
   (if __zmp_x (setq _zmp_x __zmp_x)) _zmp_x)
  (:zmp_y
   (&optional __zmp_y)
   (if __zmp_y (setq _zmp_y __zmp_y)) _zmp_y)
  (:orient_z
   (&optional __orient_z)
   (if __orient_z (setq _orient_z __orient_z)) _orient_z)
  (:cop_x
   (&optional __cop_x)
   (if __cop_x (setq _cop_x __cop_x)) _cop_x)
  (:cop_y
   (&optional __cop_y)
   (if __cop_y (setq _cop_y __cop_y)) _cop_y)
  (:coc_xd
   (&optional __coc_xd)
   (if __coc_xd (setq _coc_xd __coc_xd)) _coc_xd)
  (:coc_yd
   (&optional __coc_yd)
   (if __coc_yd (setq _coc_yd __coc_yd)) _coc_yd)
  (:fd
   (&optional __fd)
   (if __fd (setq _fd __fd)) _fd)
  (:zmp_xd
   (&optional __zmp_xd)
   (if __zmp_xd (setq _zmp_xd __zmp_xd)) _zmp_xd)
  (:zmp_yd
   (&optional __zmp_yd)
   (if __zmp_yd (setq _zmp_yd __zmp_yd)) _zmp_yd)
  (:orient_zd
   (&optional __orient_zd)
   (if __orient_zd (setq _orient_zd __orient_zd)) _orient_zd)
  (:cop_xd
   (&optional __cop_xd)
   (if __cop_xd (setq _cop_xd __cop_xd)) _cop_xd)
  (:cop_yd
   (&optional __cop_yd)
   (if __cop_yd (setq _cop_yd __cop_yd)) _cop_yd)
  (:num_contours
   (&optional __num_contours)
   (if __num_contours (setq _num_contours __num_contours)) _num_contours)
  (:x_now
   (&optional __x_now)
   (if __x_now (setq _x_now __x_now)) _x_now)
  (:y_now
   (&optional __y_now)
   (if __y_now (setq _y_now __y_now)) _y_now)
  (:z_now
   (&optional __z_now)
   (if __z_now (setq _z_now __z_now)) _z_now)
  (:wx_now
   (&optional __wx_now)
   (if __wx_now (setq _wx_now __wx_now)) _wx_now)
  (:wy_now
   (&optional __wy_now)
   (if __wy_now (setq _wy_now __wy_now)) _wy_now)
  (:wz_now
   (&optional __wz_now)
   (if __wz_now (setq _wz_now __wz_now)) _wz_now)
  (:ww_now
   (&optional __ww_now)
   (if __ww_now (setq _ww_now __ww_now)) _ww_now)
  (:x_des
   (&optional __x_des)
   (if __x_des (setq _x_des __x_des)) _x_des)
  (:y_des
   (&optional __y_des)
   (if __y_des (setq _y_des __y_des)) _y_des)
  (:z_des
   (&optional __z_des)
   (if __z_des (setq _z_des __z_des)) _z_des)
  (:wx_des
   (&optional __wx_des)
   (if __wx_des (setq _wx_des __wx_des)) _wx_des)
  (:wy_des
   (&optional __wy_des)
   (if __wy_des (setq _wy_des __wy_des)) _wy_des)
  (:wz_des
   (&optional __wz_des)
   (if __wz_des (setq _wz_des __wz_des)) _wz_des)
  (:ww_des
   (&optional __ww_des)
   (if __ww_des (setq _ww_des __ww_des)) _ww_des)
  (:x_c
   (&optional __x_c)
   (if __x_c (setq _x_c __x_c)) _x_c)
  (:y_c
   (&optional __y_c)
   (if __y_c (setq _y_c __y_c)) _y_c)
  (:z_c
   (&optional __z_c)
   (if __z_c (setq _z_c __z_c)) _z_c)
  (:dt
   (&optional __dt)
   (if __dt (setq _dt __dt)) _dt)
  (:time
   (&optional __time)
   (if __time (setq _time __time)) _time)
  (:test_time2
   (&optional __test_time2)
   (if __test_time2 (setq _test_time2 __test_time2)) _test_time2)
  (:serialization-length
   ()
   (+
    ;; std_msgs/Header _header
    (send _header :serialization-length)
    ;; float64 _fx
    8
    ;; float64 _fy
    8
    ;; float64 _fz
    8
    ;; float64 _fwx
    8
    ;; float64 _fwy
    8
    ;; float64 _fwz
    8
    ;; float64 _coc_x
    8
    ;; float64 _coc_y
    8
    ;; float64 _farea
    8
    ;; float64 _iscontact
    8
    ;; float64 _f
    8
    ;; float64 _zmp_x
    8
    ;; float64 _zmp_y
    8
    ;; float64 _orient_z
    8
    ;; float64 _cop_x
    8
    ;; float64 _cop_y
    8
    ;; float64 _coc_xd
    8
    ;; float64 _coc_yd
    8
    ;; float64 _fd
    8
    ;; float64 _zmp_xd
    8
    ;; float64 _zmp_yd
    8
    ;; float64 _orient_zd
    8
    ;; float64 _cop_xd
    8
    ;; float64 _cop_yd
    8
    ;; int32 _num_contours
    4
    ;; float64 _x_now
    8
    ;; float64 _y_now
    8
    ;; float64 _z_now
    8
    ;; float64 _wx_now
    8
    ;; float64 _wy_now
    8
    ;; float64 _wz_now
    8
    ;; float64 _ww_now
    8
    ;; float64 _x_des
    8
    ;; float64 _y_des
    8
    ;; float64 _z_des
    8
    ;; float64 _wx_des
    8
    ;; float64 _wy_des
    8
    ;; float64 _wz_des
    8
    ;; float64 _ww_des
    8
    ;; float64 _x_c
    8
    ;; float64 _y_c
    8
    ;; float64 _z_c
    8
    ;; float64 _dt
    8
    ;; float64 _time
    8
    ;; float64 _test_time2
    8
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; std_msgs/Header _header
       (send _header :serialize s)
     ;; float64 _fx
       (sys::poke _fx (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _fy
       (sys::poke _fy (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _fz
       (sys::poke _fz (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _fwx
       (sys::poke _fwx (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _fwy
       (sys::poke _fwy (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _fwz
       (sys::poke _fwz (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _coc_x
       (sys::poke _coc_x (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _coc_y
       (sys::poke _coc_y (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _farea
       (sys::poke _farea (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _iscontact
       (sys::poke _iscontact (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _f
       (sys::poke _f (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _zmp_x
       (sys::poke _zmp_x (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _zmp_y
       (sys::poke _zmp_y (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _orient_z
       (sys::poke _orient_z (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _cop_x
       (sys::poke _cop_x (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _cop_y
       (sys::poke _cop_y (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _coc_xd
       (sys::poke _coc_xd (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _coc_yd
       (sys::poke _coc_yd (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _fd
       (sys::poke _fd (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _zmp_xd
       (sys::poke _zmp_xd (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _zmp_yd
       (sys::poke _zmp_yd (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _orient_zd
       (sys::poke _orient_zd (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _cop_xd
       (sys::poke _cop_xd (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _cop_yd
       (sys::poke _cop_yd (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; int32 _num_contours
       (write-long _num_contours s)
     ;; float64 _x_now
       (sys::poke _x_now (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _y_now
       (sys::poke _y_now (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _z_now
       (sys::poke _z_now (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _wx_now
       (sys::poke _wx_now (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _wy_now
       (sys::poke _wy_now (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _wz_now
       (sys::poke _wz_now (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _ww_now
       (sys::poke _ww_now (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _x_des
       (sys::poke _x_des (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _y_des
       (sys::poke _y_des (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _z_des
       (sys::poke _z_des (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _wx_des
       (sys::poke _wx_des (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _wy_des
       (sys::poke _wy_des (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _wz_des
       (sys::poke _wz_des (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _ww_des
       (sys::poke _ww_des (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _x_c
       (sys::poke _x_c (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _y_c
       (sys::poke _y_c (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _z_c
       (sys::poke _z_c (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _dt
       (sys::poke _dt (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _time
       (sys::poke _time (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _test_time2
       (sys::poke _test_time2 (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; std_msgs/Header _header
     (send _header :deserialize buf ptr-) (incf ptr- (send _header :serialization-length))
   ;; float64 _fx
     (setq _fx (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _fy
     (setq _fy (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _fz
     (setq _fz (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _fwx
     (setq _fwx (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _fwy
     (setq _fwy (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _fwz
     (setq _fwz (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _coc_x
     (setq _coc_x (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _coc_y
     (setq _coc_y (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _farea
     (setq _farea (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _iscontact
     (setq _iscontact (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _f
     (setq _f (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _zmp_x
     (setq _zmp_x (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _zmp_y
     (setq _zmp_y (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _orient_z
     (setq _orient_z (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _cop_x
     (setq _cop_x (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _cop_y
     (setq _cop_y (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _coc_xd
     (setq _coc_xd (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _coc_yd
     (setq _coc_yd (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _fd
     (setq _fd (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _zmp_xd
     (setq _zmp_xd (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _zmp_yd
     (setq _zmp_yd (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _orient_zd
     (setq _orient_zd (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _cop_xd
     (setq _cop_xd (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _cop_yd
     (setq _cop_yd (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; int32 _num_contours
     (setq _num_contours (sys::peek buf ptr- :integer)) (incf ptr- 4)
   ;; float64 _x_now
     (setq _x_now (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _y_now
     (setq _y_now (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _z_now
     (setq _z_now (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _wx_now
     (setq _wx_now (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _wy_now
     (setq _wy_now (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _wz_now
     (setq _wz_now (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _ww_now
     (setq _ww_now (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _x_des
     (setq _x_des (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _y_des
     (setq _y_des (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _z_des
     (setq _z_des (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _wx_des
     (setq _wx_des (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _wy_des
     (setq _wy_des (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _wz_des
     (setq _wz_des (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _ww_des
     (setq _ww_des (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _x_c
     (setq _x_c (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _y_c
     (setq _y_c (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _z_c
     (setq _z_c (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _dt
     (setq _dt (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _time
     (setq _time (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _test_time2
     (setq _test_time2 (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;;
   self)
  )

(setf (get tactile_servo_msgs::PlotMatlabfareaiscontact :md5sum-) "918b4968142e48a7cee7614487692aec")
(setf (get tactile_servo_msgs::PlotMatlabfareaiscontact :datatype-) "tactile_servo_msgs/PlotMatlabfareaiscontact")
(setf (get tactile_servo_msgs::PlotMatlabfareaiscontact :definition-)
      "Header header
float64 fx
float64 fy
float64 fz
float64 fwx
float64 fwy
float64 fwz
float64 coc_x
float64 coc_y
float64 farea
float64 iscontact
float64 f
float64 zmp_x
float64 zmp_y
float64 orient_z
float64 cop_x
float64 cop_y
float64 coc_xd
float64 coc_yd
float64 fd
float64 zmp_xd
float64 zmp_yd
float64 orient_zd
float64 cop_xd
float64 cop_yd
int32 num_contours
float64 x_now
float64 y_now
float64 z_now
float64 wx_now
float64 wy_now
float64 wz_now
float64 ww_now
float64 x_des
float64 y_des
float64 z_des
float64 wx_des
float64 wy_des
float64 wz_des
float64 ww_des
float64 x_c
float64 y_c
float64 z_c
float64 dt
float64 time
float64 test_time2
================================================================================
MSG: std_msgs/Header
# Standard metadata for higher-level stamped data types.
# This is generally used to communicate timestamped data 
# in a particular coordinate frame.
# 
# sequence ID: consecutively increasing ID 
uint32 seq
#Two-integer timestamp that is expressed as:
# * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')
# * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')
# time-handling sugar is provided by the client library
time stamp
#Frame this data is associated with
string frame_id

")



(provide :tactile_servo_msgs/PlotMatlabfareaiscontact "918b4968142e48a7cee7614487692aec")


