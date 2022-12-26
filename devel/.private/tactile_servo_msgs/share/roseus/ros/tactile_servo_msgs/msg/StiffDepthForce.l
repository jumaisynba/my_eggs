;; Auto-generated. Do not edit!


(when (boundp 'tactile_servo_msgs::StiffDepthForce)
  (if (not (find-package "TACTILE_SERVO_MSGS"))
    (make-package "TACTILE_SERVO_MSGS"))
  (shadow 'StiffDepthForce (find-package "TACTILE_SERVO_MSGS")))
(unless (find-package "TACTILE_SERVO_MSGS::STIFFDEPTHFORCE")
  (make-package "TACTILE_SERVO_MSGS::STIFFDEPTHFORCE"))

(in-package "ROS")
;;//! \htmlinclude StiffDepthForce.msg.html
(if (not (find-package "STD_MSGS"))
  (ros::roseus-add-msgs "std_msgs"))


(defclass tactile_servo_msgs::StiffDepthForce
  :super ros::object
  :slots (_header _force _depth _stiffness_force _image _stiffness_image _forces32 _depth32 _stiffness32 _index_in_array32 _ind_max_force32 _max_force32 _depth_at_max_force32 _stiffness_at_max_force32 _ind_min_force32 _min_force32 _depth_at_min_force32 _stiffness_at_min_force32 _ind_max_depth32 _max_depth32 _force_at_max_depth32 _stiffness_at_max_depth32 _ind_min_depth32 _min_depth32 _force_at_min_depth32 _stiffness_at_min_depth32 _ind_max_stiffness32 _max_stiffness32 _force_at_max_stiffness32 _depth_at_max_stiffness32 _ind_min_stiffness32 _min_stiffness32 _force_at_min_stiffness32 _depth_at_min_stiffness32 _total_force _avg_force _avg_depth ))

(defmethod tactile_servo_msgs::StiffDepthForce
  (:init
   (&key
    ((:header __header) (instance std_msgs::Header :init))
    ((:force __force) (make-array 0 :initial-element 0.0 :element-type :float))
    ((:depth __depth) (make-array 0 :initial-element 0.0 :element-type :float))
    ((:stiffness_force __stiffness_force) (make-array 0 :initial-element 0.0 :element-type :float))
    ((:image __image) (make-array 0 :initial-element 0.0 :element-type :float))
    ((:stiffness_image __stiffness_image) (make-array 0 :initial-element 0.0 :element-type :float))
    ((:forces32 __forces32) (make-array 0 :initial-element 0.0 :element-type :float))
    ((:depth32 __depth32) (make-array 0 :initial-element 0.0 :element-type :float))
    ((:stiffness32 __stiffness32) (make-array 0 :initial-element 0.0 :element-type :float))
    ((:index_in_array32 __index_in_array32) (make-array 0 :initial-element 0 :element-type :integer))
    ((:ind_max_force32 __ind_max_force32) 0.0)
    ((:max_force32 __max_force32) 0.0)
    ((:depth_at_max_force32 __depth_at_max_force32) 0.0)
    ((:stiffness_at_max_force32 __stiffness_at_max_force32) 0.0)
    ((:ind_min_force32 __ind_min_force32) 0.0)
    ((:min_force32 __min_force32) 0.0)
    ((:depth_at_min_force32 __depth_at_min_force32) 0.0)
    ((:stiffness_at_min_force32 __stiffness_at_min_force32) 0.0)
    ((:ind_max_depth32 __ind_max_depth32) 0.0)
    ((:max_depth32 __max_depth32) 0.0)
    ((:force_at_max_depth32 __force_at_max_depth32) 0.0)
    ((:stiffness_at_max_depth32 __stiffness_at_max_depth32) 0.0)
    ((:ind_min_depth32 __ind_min_depth32) 0.0)
    ((:min_depth32 __min_depth32) 0.0)
    ((:force_at_min_depth32 __force_at_min_depth32) 0.0)
    ((:stiffness_at_min_depth32 __stiffness_at_min_depth32) 0.0)
    ((:ind_max_stiffness32 __ind_max_stiffness32) 0.0)
    ((:max_stiffness32 __max_stiffness32) 0.0)
    ((:force_at_max_stiffness32 __force_at_max_stiffness32) 0.0)
    ((:depth_at_max_stiffness32 __depth_at_max_stiffness32) 0.0)
    ((:ind_min_stiffness32 __ind_min_stiffness32) 0.0)
    ((:min_stiffness32 __min_stiffness32) 0.0)
    ((:force_at_min_stiffness32 __force_at_min_stiffness32) 0.0)
    ((:depth_at_min_stiffness32 __depth_at_min_stiffness32) 0.0)
    ((:total_force __total_force) 0.0)
    ((:avg_force __avg_force) 0.0)
    ((:avg_depth __avg_depth) 0.0)
    )
   (send-super :init)
   (setq _header __header)
   (setq _force __force)
   (setq _depth __depth)
   (setq _stiffness_force __stiffness_force)
   (setq _image __image)
   (setq _stiffness_image __stiffness_image)
   (setq _forces32 __forces32)
   (setq _depth32 __depth32)
   (setq _stiffness32 __stiffness32)
   (setq _index_in_array32 __index_in_array32)
   (setq _ind_max_force32 (float __ind_max_force32))
   (setq _max_force32 (float __max_force32))
   (setq _depth_at_max_force32 (float __depth_at_max_force32))
   (setq _stiffness_at_max_force32 (float __stiffness_at_max_force32))
   (setq _ind_min_force32 (float __ind_min_force32))
   (setq _min_force32 (float __min_force32))
   (setq _depth_at_min_force32 (float __depth_at_min_force32))
   (setq _stiffness_at_min_force32 (float __stiffness_at_min_force32))
   (setq _ind_max_depth32 (float __ind_max_depth32))
   (setq _max_depth32 (float __max_depth32))
   (setq _force_at_max_depth32 (float __force_at_max_depth32))
   (setq _stiffness_at_max_depth32 (float __stiffness_at_max_depth32))
   (setq _ind_min_depth32 (float __ind_min_depth32))
   (setq _min_depth32 (float __min_depth32))
   (setq _force_at_min_depth32 (float __force_at_min_depth32))
   (setq _stiffness_at_min_depth32 (float __stiffness_at_min_depth32))
   (setq _ind_max_stiffness32 (float __ind_max_stiffness32))
   (setq _max_stiffness32 (float __max_stiffness32))
   (setq _force_at_max_stiffness32 (float __force_at_max_stiffness32))
   (setq _depth_at_max_stiffness32 (float __depth_at_max_stiffness32))
   (setq _ind_min_stiffness32 (float __ind_min_stiffness32))
   (setq _min_stiffness32 (float __min_stiffness32))
   (setq _force_at_min_stiffness32 (float __force_at_min_stiffness32))
   (setq _depth_at_min_stiffness32 (float __depth_at_min_stiffness32))
   (setq _total_force (float __total_force))
   (setq _avg_force (float __avg_force))
   (setq _avg_depth (float __avg_depth))
   self)
  (:header
   (&rest __header)
   (if (keywordp (car __header))
       (send* _header __header)
     (progn
       (if __header (setq _header (car __header)))
       _header)))
  (:force
   (&optional __force)
   (if __force (setq _force __force)) _force)
  (:depth
   (&optional __depth)
   (if __depth (setq _depth __depth)) _depth)
  (:stiffness_force
   (&optional __stiffness_force)
   (if __stiffness_force (setq _stiffness_force __stiffness_force)) _stiffness_force)
  (:image
   (&optional __image)
   (if __image (setq _image __image)) _image)
  (:stiffness_image
   (&optional __stiffness_image)
   (if __stiffness_image (setq _stiffness_image __stiffness_image)) _stiffness_image)
  (:forces32
   (&optional __forces32)
   (if __forces32 (setq _forces32 __forces32)) _forces32)
  (:depth32
   (&optional __depth32)
   (if __depth32 (setq _depth32 __depth32)) _depth32)
  (:stiffness32
   (&optional __stiffness32)
   (if __stiffness32 (setq _stiffness32 __stiffness32)) _stiffness32)
  (:index_in_array32
   (&optional __index_in_array32)
   (if __index_in_array32 (setq _index_in_array32 __index_in_array32)) _index_in_array32)
  (:ind_max_force32
   (&optional __ind_max_force32)
   (if __ind_max_force32 (setq _ind_max_force32 __ind_max_force32)) _ind_max_force32)
  (:max_force32
   (&optional __max_force32)
   (if __max_force32 (setq _max_force32 __max_force32)) _max_force32)
  (:depth_at_max_force32
   (&optional __depth_at_max_force32)
   (if __depth_at_max_force32 (setq _depth_at_max_force32 __depth_at_max_force32)) _depth_at_max_force32)
  (:stiffness_at_max_force32
   (&optional __stiffness_at_max_force32)
   (if __stiffness_at_max_force32 (setq _stiffness_at_max_force32 __stiffness_at_max_force32)) _stiffness_at_max_force32)
  (:ind_min_force32
   (&optional __ind_min_force32)
   (if __ind_min_force32 (setq _ind_min_force32 __ind_min_force32)) _ind_min_force32)
  (:min_force32
   (&optional __min_force32)
   (if __min_force32 (setq _min_force32 __min_force32)) _min_force32)
  (:depth_at_min_force32
   (&optional __depth_at_min_force32)
   (if __depth_at_min_force32 (setq _depth_at_min_force32 __depth_at_min_force32)) _depth_at_min_force32)
  (:stiffness_at_min_force32
   (&optional __stiffness_at_min_force32)
   (if __stiffness_at_min_force32 (setq _stiffness_at_min_force32 __stiffness_at_min_force32)) _stiffness_at_min_force32)
  (:ind_max_depth32
   (&optional __ind_max_depth32)
   (if __ind_max_depth32 (setq _ind_max_depth32 __ind_max_depth32)) _ind_max_depth32)
  (:max_depth32
   (&optional __max_depth32)
   (if __max_depth32 (setq _max_depth32 __max_depth32)) _max_depth32)
  (:force_at_max_depth32
   (&optional __force_at_max_depth32)
   (if __force_at_max_depth32 (setq _force_at_max_depth32 __force_at_max_depth32)) _force_at_max_depth32)
  (:stiffness_at_max_depth32
   (&optional __stiffness_at_max_depth32)
   (if __stiffness_at_max_depth32 (setq _stiffness_at_max_depth32 __stiffness_at_max_depth32)) _stiffness_at_max_depth32)
  (:ind_min_depth32
   (&optional __ind_min_depth32)
   (if __ind_min_depth32 (setq _ind_min_depth32 __ind_min_depth32)) _ind_min_depth32)
  (:min_depth32
   (&optional __min_depth32)
   (if __min_depth32 (setq _min_depth32 __min_depth32)) _min_depth32)
  (:force_at_min_depth32
   (&optional __force_at_min_depth32)
   (if __force_at_min_depth32 (setq _force_at_min_depth32 __force_at_min_depth32)) _force_at_min_depth32)
  (:stiffness_at_min_depth32
   (&optional __stiffness_at_min_depth32)
   (if __stiffness_at_min_depth32 (setq _stiffness_at_min_depth32 __stiffness_at_min_depth32)) _stiffness_at_min_depth32)
  (:ind_max_stiffness32
   (&optional __ind_max_stiffness32)
   (if __ind_max_stiffness32 (setq _ind_max_stiffness32 __ind_max_stiffness32)) _ind_max_stiffness32)
  (:max_stiffness32
   (&optional __max_stiffness32)
   (if __max_stiffness32 (setq _max_stiffness32 __max_stiffness32)) _max_stiffness32)
  (:force_at_max_stiffness32
   (&optional __force_at_max_stiffness32)
   (if __force_at_max_stiffness32 (setq _force_at_max_stiffness32 __force_at_max_stiffness32)) _force_at_max_stiffness32)
  (:depth_at_max_stiffness32
   (&optional __depth_at_max_stiffness32)
   (if __depth_at_max_stiffness32 (setq _depth_at_max_stiffness32 __depth_at_max_stiffness32)) _depth_at_max_stiffness32)
  (:ind_min_stiffness32
   (&optional __ind_min_stiffness32)
   (if __ind_min_stiffness32 (setq _ind_min_stiffness32 __ind_min_stiffness32)) _ind_min_stiffness32)
  (:min_stiffness32
   (&optional __min_stiffness32)
   (if __min_stiffness32 (setq _min_stiffness32 __min_stiffness32)) _min_stiffness32)
  (:force_at_min_stiffness32
   (&optional __force_at_min_stiffness32)
   (if __force_at_min_stiffness32 (setq _force_at_min_stiffness32 __force_at_min_stiffness32)) _force_at_min_stiffness32)
  (:depth_at_min_stiffness32
   (&optional __depth_at_min_stiffness32)
   (if __depth_at_min_stiffness32 (setq _depth_at_min_stiffness32 __depth_at_min_stiffness32)) _depth_at_min_stiffness32)
  (:total_force
   (&optional __total_force)
   (if __total_force (setq _total_force __total_force)) _total_force)
  (:avg_force
   (&optional __avg_force)
   (if __avg_force (setq _avg_force __avg_force)) _avg_force)
  (:avg_depth
   (&optional __avg_depth)
   (if __avg_depth (setq _avg_depth __avg_depth)) _avg_depth)
  (:serialization-length
   ()
   (+
    ;; std_msgs/Header _header
    (send _header :serialization-length)
    ;; float64[] _force
    (* 8    (length _force)) 4
    ;; float64[] _depth
    (* 8    (length _depth)) 4
    ;; float64[] _stiffness_force
    (* 8    (length _stiffness_force)) 4
    ;; float64[] _image
    (* 8    (length _image)) 4
    ;; float64[] _stiffness_image
    (* 8    (length _stiffness_image)) 4
    ;; float64[] _forces32
    (* 8    (length _forces32)) 4
    ;; float64[] _depth32
    (* 8    (length _depth32)) 4
    ;; float64[] _stiffness32
    (* 8    (length _stiffness32)) 4
    ;; uint32[] _index_in_array32
    (* 4    (length _index_in_array32)) 4
    ;; float64 _ind_max_force32
    8
    ;; float64 _max_force32
    8
    ;; float64 _depth_at_max_force32
    8
    ;; float64 _stiffness_at_max_force32
    8
    ;; float64 _ind_min_force32
    8
    ;; float64 _min_force32
    8
    ;; float64 _depth_at_min_force32
    8
    ;; float64 _stiffness_at_min_force32
    8
    ;; float64 _ind_max_depth32
    8
    ;; float64 _max_depth32
    8
    ;; float64 _force_at_max_depth32
    8
    ;; float64 _stiffness_at_max_depth32
    8
    ;; float64 _ind_min_depth32
    8
    ;; float64 _min_depth32
    8
    ;; float64 _force_at_min_depth32
    8
    ;; float64 _stiffness_at_min_depth32
    8
    ;; float64 _ind_max_stiffness32
    8
    ;; float64 _max_stiffness32
    8
    ;; float64 _force_at_max_stiffness32
    8
    ;; float64 _depth_at_max_stiffness32
    8
    ;; float64 _ind_min_stiffness32
    8
    ;; float64 _min_stiffness32
    8
    ;; float64 _force_at_min_stiffness32
    8
    ;; float64 _depth_at_min_stiffness32
    8
    ;; float64 _total_force
    8
    ;; float64 _avg_force
    8
    ;; float64 _avg_depth
    8
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; std_msgs/Header _header
       (send _header :serialize s)
     ;; float64[] _force
     (write-long (length _force) s)
     (dotimes (i (length _force))
       (sys::poke (elt _force i) (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
       )
     ;; float64[] _depth
     (write-long (length _depth) s)
     (dotimes (i (length _depth))
       (sys::poke (elt _depth i) (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
       )
     ;; float64[] _stiffness_force
     (write-long (length _stiffness_force) s)
     (dotimes (i (length _stiffness_force))
       (sys::poke (elt _stiffness_force i) (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
       )
     ;; float64[] _image
     (write-long (length _image) s)
     (dotimes (i (length _image))
       (sys::poke (elt _image i) (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
       )
     ;; float64[] _stiffness_image
     (write-long (length _stiffness_image) s)
     (dotimes (i (length _stiffness_image))
       (sys::poke (elt _stiffness_image i) (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
       )
     ;; float64[] _forces32
     (write-long (length _forces32) s)
     (dotimes (i (length _forces32))
       (sys::poke (elt _forces32 i) (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
       )
     ;; float64[] _depth32
     (write-long (length _depth32) s)
     (dotimes (i (length _depth32))
       (sys::poke (elt _depth32 i) (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
       )
     ;; float64[] _stiffness32
     (write-long (length _stiffness32) s)
     (dotimes (i (length _stiffness32))
       (sys::poke (elt _stiffness32 i) (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
       )
     ;; uint32[] _index_in_array32
     (write-long (length _index_in_array32) s)
     (dotimes (i (length _index_in_array32))
       (write-long (elt _index_in_array32 i) s)
       )
     ;; float64 _ind_max_force32
       (sys::poke _ind_max_force32 (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _max_force32
       (sys::poke _max_force32 (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _depth_at_max_force32
       (sys::poke _depth_at_max_force32 (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _stiffness_at_max_force32
       (sys::poke _stiffness_at_max_force32 (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _ind_min_force32
       (sys::poke _ind_min_force32 (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _min_force32
       (sys::poke _min_force32 (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _depth_at_min_force32
       (sys::poke _depth_at_min_force32 (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _stiffness_at_min_force32
       (sys::poke _stiffness_at_min_force32 (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _ind_max_depth32
       (sys::poke _ind_max_depth32 (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _max_depth32
       (sys::poke _max_depth32 (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _force_at_max_depth32
       (sys::poke _force_at_max_depth32 (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _stiffness_at_max_depth32
       (sys::poke _stiffness_at_max_depth32 (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _ind_min_depth32
       (sys::poke _ind_min_depth32 (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _min_depth32
       (sys::poke _min_depth32 (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _force_at_min_depth32
       (sys::poke _force_at_min_depth32 (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _stiffness_at_min_depth32
       (sys::poke _stiffness_at_min_depth32 (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _ind_max_stiffness32
       (sys::poke _ind_max_stiffness32 (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _max_stiffness32
       (sys::poke _max_stiffness32 (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _force_at_max_stiffness32
       (sys::poke _force_at_max_stiffness32 (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _depth_at_max_stiffness32
       (sys::poke _depth_at_max_stiffness32 (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _ind_min_stiffness32
       (sys::poke _ind_min_stiffness32 (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _min_stiffness32
       (sys::poke _min_stiffness32 (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _force_at_min_stiffness32
       (sys::poke _force_at_min_stiffness32 (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _depth_at_min_stiffness32
       (sys::poke _depth_at_min_stiffness32 (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _total_force
       (sys::poke _total_force (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _avg_force
       (sys::poke _avg_force (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _avg_depth
       (sys::poke _avg_depth (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; std_msgs/Header _header
     (send _header :deserialize buf ptr-) (incf ptr- (send _header :serialization-length))
   ;; float64[] _force
   (let (n)
     (setq n (sys::peek buf ptr- :integer)) (incf ptr- 4)
     (setq _force (instantiate float-vector n))
     (dotimes (i n)
     (setf (elt _force i) (sys::peek buf ptr- :double)) (incf ptr- 8)
     ))
   ;; float64[] _depth
   (let (n)
     (setq n (sys::peek buf ptr- :integer)) (incf ptr- 4)
     (setq _depth (instantiate float-vector n))
     (dotimes (i n)
     (setf (elt _depth i) (sys::peek buf ptr- :double)) (incf ptr- 8)
     ))
   ;; float64[] _stiffness_force
   (let (n)
     (setq n (sys::peek buf ptr- :integer)) (incf ptr- 4)
     (setq _stiffness_force (instantiate float-vector n))
     (dotimes (i n)
     (setf (elt _stiffness_force i) (sys::peek buf ptr- :double)) (incf ptr- 8)
     ))
   ;; float64[] _image
   (let (n)
     (setq n (sys::peek buf ptr- :integer)) (incf ptr- 4)
     (setq _image (instantiate float-vector n))
     (dotimes (i n)
     (setf (elt _image i) (sys::peek buf ptr- :double)) (incf ptr- 8)
     ))
   ;; float64[] _stiffness_image
   (let (n)
     (setq n (sys::peek buf ptr- :integer)) (incf ptr- 4)
     (setq _stiffness_image (instantiate float-vector n))
     (dotimes (i n)
     (setf (elt _stiffness_image i) (sys::peek buf ptr- :double)) (incf ptr- 8)
     ))
   ;; float64[] _forces32
   (let (n)
     (setq n (sys::peek buf ptr- :integer)) (incf ptr- 4)
     (setq _forces32 (instantiate float-vector n))
     (dotimes (i n)
     (setf (elt _forces32 i) (sys::peek buf ptr- :double)) (incf ptr- 8)
     ))
   ;; float64[] _depth32
   (let (n)
     (setq n (sys::peek buf ptr- :integer)) (incf ptr- 4)
     (setq _depth32 (instantiate float-vector n))
     (dotimes (i n)
     (setf (elt _depth32 i) (sys::peek buf ptr- :double)) (incf ptr- 8)
     ))
   ;; float64[] _stiffness32
   (let (n)
     (setq n (sys::peek buf ptr- :integer)) (incf ptr- 4)
     (setq _stiffness32 (instantiate float-vector n))
     (dotimes (i n)
     (setf (elt _stiffness32 i) (sys::peek buf ptr- :double)) (incf ptr- 8)
     ))
   ;; uint32[] _index_in_array32
   (let (n)
     (setq n (sys::peek buf ptr- :integer)) (incf ptr- 4)
     (setq _index_in_array32 (instantiate integer-vector n))
     (dotimes (i n)
     (setf (elt _index_in_array32 i) (sys::peek buf ptr- :integer)) (incf ptr- 4)
     ))
   ;; float64 _ind_max_force32
     (setq _ind_max_force32 (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _max_force32
     (setq _max_force32 (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _depth_at_max_force32
     (setq _depth_at_max_force32 (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _stiffness_at_max_force32
     (setq _stiffness_at_max_force32 (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _ind_min_force32
     (setq _ind_min_force32 (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _min_force32
     (setq _min_force32 (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _depth_at_min_force32
     (setq _depth_at_min_force32 (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _stiffness_at_min_force32
     (setq _stiffness_at_min_force32 (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _ind_max_depth32
     (setq _ind_max_depth32 (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _max_depth32
     (setq _max_depth32 (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _force_at_max_depth32
     (setq _force_at_max_depth32 (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _stiffness_at_max_depth32
     (setq _stiffness_at_max_depth32 (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _ind_min_depth32
     (setq _ind_min_depth32 (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _min_depth32
     (setq _min_depth32 (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _force_at_min_depth32
     (setq _force_at_min_depth32 (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _stiffness_at_min_depth32
     (setq _stiffness_at_min_depth32 (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _ind_max_stiffness32
     (setq _ind_max_stiffness32 (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _max_stiffness32
     (setq _max_stiffness32 (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _force_at_max_stiffness32
     (setq _force_at_max_stiffness32 (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _depth_at_max_stiffness32
     (setq _depth_at_max_stiffness32 (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _ind_min_stiffness32
     (setq _ind_min_stiffness32 (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _min_stiffness32
     (setq _min_stiffness32 (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _force_at_min_stiffness32
     (setq _force_at_min_stiffness32 (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _depth_at_min_stiffness32
     (setq _depth_at_min_stiffness32 (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _total_force
     (setq _total_force (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _avg_force
     (setq _avg_force (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _avg_depth
     (setq _avg_depth (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;;
   self)
  )

(setf (get tactile_servo_msgs::StiffDepthForce :md5sum-) "7e64db6a34b90e4652b9e7e2cf58e65a")
(setf (get tactile_servo_msgs::StiffDepthForce :datatype-) "tactile_servo_msgs/StiffDepthForce")
(setf (get tactile_servo_msgs::StiffDepthForce :definition-)
      "# This message force penetration depth and stifness of the simulated sensor in Gazebo ODE

Header header        # Header timestamp should be acquisition time of image

float64[] force          # forces
float64[] depth          # penetrations
float64[] stiffness_force      # stiffness based on force (gazebo)
float64[] image          # sensor outputs
float64[] stiffness_image      # stiffness based on the tactile image. actual (gazebo) force is multyplied by sensitivity value
###
float64[] forces32
float64[] depth32
float64[] stiffness32
uint32[] index_in_array32
float64 ind_max_force32
float64 max_force32
float64 depth_at_max_force32
float64 stiffness_at_max_force32
float64 ind_min_force32
float64 min_force32
float64 depth_at_min_force32
float64 stiffness_at_min_force32
float64 ind_max_depth32
float64 max_depth32
float64 force_at_max_depth32
float64 stiffness_at_max_depth32
float64 ind_min_depth32
float64 min_depth32
float64 force_at_min_depth32
float64 stiffness_at_min_depth32
float64 ind_max_stiffness32
float64 max_stiffness32
float64 force_at_max_stiffness32
float64 depth_at_max_stiffness32
float64 ind_min_stiffness32
float64 min_stiffness32
float64 force_at_min_stiffness32
float64 depth_at_min_stiffness32
float64 total_force
float64 avg_force
float64 avg_depth


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



(provide :tactile_servo_msgs/StiffDepthForce "7e64db6a34b90e4652b9e7e2cf58e65a")


