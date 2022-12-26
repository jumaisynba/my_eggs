;; Auto-generated. Do not edit!


(when (boundp 'tactile_servo_msgs::compare_eigens)
  (if (not (find-package "TACTILE_SERVO_MSGS"))
    (make-package "TACTILE_SERVO_MSGS"))
  (shadow 'compare_eigens (find-package "TACTILE_SERVO_MSGS")))
(unless (find-package "TACTILE_SERVO_MSGS::COMPARE_EIGENS")
  (make-package "TACTILE_SERVO_MSGS::COMPARE_EIGENS"))

(in-package "ROS")
;;//! \htmlinclude compare_eigens.msg.html


(defclass tactile_servo_msgs::compare_eigens
  :super ros::object
  :slots (_vec_eigen1_x _vec_eigen1_y _val_eigen1 _vec_eigen2_x _vec_eigen2_y _val_eigen2 ))

(defmethod tactile_servo_msgs::compare_eigens
  (:init
   (&key
    ((:vec_eigen1_x __vec_eigen1_x) 0.0)
    ((:vec_eigen1_y __vec_eigen1_y) 0.0)
    ((:val_eigen1 __val_eigen1) 0.0)
    ((:vec_eigen2_x __vec_eigen2_x) 0.0)
    ((:vec_eigen2_y __vec_eigen2_y) 0.0)
    ((:val_eigen2 __val_eigen2) 0.0)
    )
   (send-super :init)
   (setq _vec_eigen1_x (float __vec_eigen1_x))
   (setq _vec_eigen1_y (float __vec_eigen1_y))
   (setq _val_eigen1 (float __val_eigen1))
   (setq _vec_eigen2_x (float __vec_eigen2_x))
   (setq _vec_eigen2_y (float __vec_eigen2_y))
   (setq _val_eigen2 (float __val_eigen2))
   self)
  (:vec_eigen1_x
   (&optional __vec_eigen1_x)
   (if __vec_eigen1_x (setq _vec_eigen1_x __vec_eigen1_x)) _vec_eigen1_x)
  (:vec_eigen1_y
   (&optional __vec_eigen1_y)
   (if __vec_eigen1_y (setq _vec_eigen1_y __vec_eigen1_y)) _vec_eigen1_y)
  (:val_eigen1
   (&optional __val_eigen1)
   (if __val_eigen1 (setq _val_eigen1 __val_eigen1)) _val_eigen1)
  (:vec_eigen2_x
   (&optional __vec_eigen2_x)
   (if __vec_eigen2_x (setq _vec_eigen2_x __vec_eigen2_x)) _vec_eigen2_x)
  (:vec_eigen2_y
   (&optional __vec_eigen2_y)
   (if __vec_eigen2_y (setq _vec_eigen2_y __vec_eigen2_y)) _vec_eigen2_y)
  (:val_eigen2
   (&optional __val_eigen2)
   (if __val_eigen2 (setq _val_eigen2 __val_eigen2)) _val_eigen2)
  (:serialization-length
   ()
   (+
    ;; float64 _vec_eigen1_x
    8
    ;; float64 _vec_eigen1_y
    8
    ;; float64 _val_eigen1
    8
    ;; float64 _vec_eigen2_x
    8
    ;; float64 _vec_eigen2_y
    8
    ;; float64 _val_eigen2
    8
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; float64 _vec_eigen1_x
       (sys::poke _vec_eigen1_x (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _vec_eigen1_y
       (sys::poke _vec_eigen1_y (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _val_eigen1
       (sys::poke _val_eigen1 (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _vec_eigen2_x
       (sys::poke _vec_eigen2_x (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _vec_eigen2_y
       (sys::poke _vec_eigen2_y (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _val_eigen2
       (sys::poke _val_eigen2 (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; float64 _vec_eigen1_x
     (setq _vec_eigen1_x (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _vec_eigen1_y
     (setq _vec_eigen1_y (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _val_eigen1
     (setq _val_eigen1 (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _vec_eigen2_x
     (setq _vec_eigen2_x (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _vec_eigen2_y
     (setq _vec_eigen2_y (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _val_eigen2
     (setq _val_eigen2 (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;;
   self)
  )

(setf (get tactile_servo_msgs::compare_eigens :md5sum-) "67c049bbb4b73b3b423f74d38f657f1e")
(setf (get tactile_servo_msgs::compare_eigens :datatype-) "tactile_servo_msgs/compare_eigens")
(setf (get tactile_servo_msgs::compare_eigens :definition-)
      "float64 vec_eigen1_x
float64 vec_eigen1_y
float64 val_eigen1
float64 vec_eigen2_x
float64 vec_eigen2_y
float64 val_eigen2

")



(provide :tactile_servo_msgs/compare_eigens "67c049bbb4b73b3b423f74d38f657f1e")


