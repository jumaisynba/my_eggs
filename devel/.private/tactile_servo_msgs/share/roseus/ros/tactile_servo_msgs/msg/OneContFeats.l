;; Auto-generated. Do not edit!


(when (boundp 'tactile_servo_msgs::OneContFeats)
  (if (not (find-package "TACTILE_SERVO_MSGS"))
    (make-package "TACTILE_SERVO_MSGS"))
  (shadow 'OneContFeats (find-package "TACTILE_SERVO_MSGS")))
(unless (find-package "TACTILE_SERVO_MSGS::ONECONTFEATS")
  (make-package "TACTILE_SERVO_MSGS::ONECONTFEATS"))

(in-package "ROS")
;;//! \htmlinclude OneContFeats.msg.html


(defclass tactile_servo_msgs::OneContFeats
  :super ros::object
  :slots (_centerpressure_x _centerpressure_y _contactForce _centerContact_x _centerContact_y _contactOrientation _zmp_x _zmp_y _is_contact _num_pixels_contact _highest_force_cell _real_total_force ))

(defmethod tactile_servo_msgs::OneContFeats
  (:init
   (&key
    ((:centerpressure_x __centerpressure_x) 0.0)
    ((:centerpressure_y __centerpressure_y) 0.0)
    ((:contactForce __contactForce) 0.0)
    ((:centerContact_x __centerContact_x) 0.0)
    ((:centerContact_y __centerContact_y) 0.0)
    ((:contactOrientation __contactOrientation) 0.0)
    ((:zmp_x __zmp_x) 0.0)
    ((:zmp_y __zmp_y) 0.0)
    ((:is_contact __is_contact) nil)
    ((:num_pixels_contact __num_pixels_contact) 0)
    ((:highest_force_cell __highest_force_cell) 0.0)
    ((:real_total_force __real_total_force) 0.0)
    )
   (send-super :init)
   (setq _centerpressure_x (float __centerpressure_x))
   (setq _centerpressure_y (float __centerpressure_y))
   (setq _contactForce (float __contactForce))
   (setq _centerContact_x (float __centerContact_x))
   (setq _centerContact_y (float __centerContact_y))
   (setq _contactOrientation (float __contactOrientation))
   (setq _zmp_x (float __zmp_x))
   (setq _zmp_y (float __zmp_y))
   (setq _is_contact __is_contact)
   (setq _num_pixels_contact (round __num_pixels_contact))
   (setq _highest_force_cell (float __highest_force_cell))
   (setq _real_total_force (float __real_total_force))
   self)
  (:centerpressure_x
   (&optional __centerpressure_x)
   (if __centerpressure_x (setq _centerpressure_x __centerpressure_x)) _centerpressure_x)
  (:centerpressure_y
   (&optional __centerpressure_y)
   (if __centerpressure_y (setq _centerpressure_y __centerpressure_y)) _centerpressure_y)
  (:contactForce
   (&optional __contactForce)
   (if __contactForce (setq _contactForce __contactForce)) _contactForce)
  (:centerContact_x
   (&optional __centerContact_x)
   (if __centerContact_x (setq _centerContact_x __centerContact_x)) _centerContact_x)
  (:centerContact_y
   (&optional __centerContact_y)
   (if __centerContact_y (setq _centerContact_y __centerContact_y)) _centerContact_y)
  (:contactOrientation
   (&optional __contactOrientation)
   (if __contactOrientation (setq _contactOrientation __contactOrientation)) _contactOrientation)
  (:zmp_x
   (&optional __zmp_x)
   (if __zmp_x (setq _zmp_x __zmp_x)) _zmp_x)
  (:zmp_y
   (&optional __zmp_y)
   (if __zmp_y (setq _zmp_y __zmp_y)) _zmp_y)
  (:is_contact
   (&optional __is_contact)
   (if __is_contact (setq _is_contact __is_contact)) _is_contact)
  (:num_pixels_contact
   (&optional __num_pixels_contact)
   (if __num_pixels_contact (setq _num_pixels_contact __num_pixels_contact)) _num_pixels_contact)
  (:highest_force_cell
   (&optional __highest_force_cell)
   (if __highest_force_cell (setq _highest_force_cell __highest_force_cell)) _highest_force_cell)
  (:real_total_force
   (&optional __real_total_force)
   (if __real_total_force (setq _real_total_force __real_total_force)) _real_total_force)
  (:serialization-length
   ()
   (+
    ;; float64 _centerpressure_x
    8
    ;; float64 _centerpressure_y
    8
    ;; float64 _contactForce
    8
    ;; float64 _centerContact_x
    8
    ;; float64 _centerContact_y
    8
    ;; float64 _contactOrientation
    8
    ;; float64 _zmp_x
    8
    ;; float64 _zmp_y
    8
    ;; bool _is_contact
    1
    ;; int32 _num_pixels_contact
    4
    ;; float64 _highest_force_cell
    8
    ;; float64 _real_total_force
    8
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; float64 _centerpressure_x
       (sys::poke _centerpressure_x (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _centerpressure_y
       (sys::poke _centerpressure_y (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _contactForce
       (sys::poke _contactForce (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _centerContact_x
       (sys::poke _centerContact_x (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _centerContact_y
       (sys::poke _centerContact_y (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _contactOrientation
       (sys::poke _contactOrientation (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _zmp_x
       (sys::poke _zmp_x (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _zmp_y
       (sys::poke _zmp_y (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; bool _is_contact
       (if _is_contact (write-byte -1 s) (write-byte 0 s))
     ;; int32 _num_pixels_contact
       (write-long _num_pixels_contact s)
     ;; float64 _highest_force_cell
       (sys::poke _highest_force_cell (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _real_total_force
       (sys::poke _real_total_force (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; float64 _centerpressure_x
     (setq _centerpressure_x (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _centerpressure_y
     (setq _centerpressure_y (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _contactForce
     (setq _contactForce (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _centerContact_x
     (setq _centerContact_x (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _centerContact_y
     (setq _centerContact_y (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _contactOrientation
     (setq _contactOrientation (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _zmp_x
     (setq _zmp_x (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _zmp_y
     (setq _zmp_y (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; bool _is_contact
     (setq _is_contact (not (= 0 (sys::peek buf ptr- :char)))) (incf ptr- 1)
   ;; int32 _num_pixels_contact
     (setq _num_pixels_contact (sys::peek buf ptr- :integer)) (incf ptr- 4)
   ;; float64 _highest_force_cell
     (setq _highest_force_cell (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _real_total_force
     (setq _real_total_force (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;;
   self)
  )

(setf (get tactile_servo_msgs::OneContFeats :md5sum-) "fdece2a38b99c6197914e4ea70b8fffb")
(setf (get tactile_servo_msgs::OneContFeats :datatype-) "tactile_servo_msgs/OneContFeats")
(setf (get tactile_servo_msgs::OneContFeats :definition-)
      "float64 centerpressure_x
float64 centerpressure_y
float64 contactForce
float64 centerContact_x
float64 centerContact_y
float64 contactOrientation
float64 zmp_x
float64 zmp_y
bool is_contact
int32 num_pixels_contact
float64 highest_force_cell
float64 real_total_force


")



(provide :tactile_servo_msgs/OneContFeats "fdece2a38b99c6197914e4ea70b8fffb")


