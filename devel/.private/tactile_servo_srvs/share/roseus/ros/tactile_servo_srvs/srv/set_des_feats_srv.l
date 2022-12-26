;; Auto-generated. Do not edit!


(when (boundp 'tactile_servo_srvs::set_des_feats_srv)
  (if (not (find-package "TACTILE_SERVO_SRVS"))
    (make-package "TACTILE_SERVO_SRVS"))
  (shadow 'set_des_feats_srv (find-package "TACTILE_SERVO_SRVS")))
(unless (find-package "TACTILE_SERVO_SRVS::SET_DES_FEATS_SRV")
  (make-package "TACTILE_SERVO_SRVS::SET_DES_FEATS_SRV"))
(unless (find-package "TACTILE_SERVO_SRVS::SET_DES_FEATS_SRVREQUEST")
  (make-package "TACTILE_SERVO_SRVS::SET_DES_FEATS_SRVREQUEST"))
(unless (find-package "TACTILE_SERVO_SRVS::SET_DES_FEATS_SRVRESPONSE")
  (make-package "TACTILE_SERVO_SRVS::SET_DES_FEATS_SRVRESPONSE"))

(in-package "ROS")





(defclass tactile_servo_srvs::set_des_feats_srvRequest
  :super ros::object
  :slots (_copx _copy _force _cocx _cocy _orient _zmp_x _zmp_y ))

(defmethod tactile_servo_srvs::set_des_feats_srvRequest
  (:init
   (&key
    ((:copx __copx) 0.0)
    ((:copy __copy) 0.0)
    ((:force __force) 0.0)
    ((:cocx __cocx) 0.0)
    ((:cocy __cocy) 0.0)
    ((:orient __orient) 0.0)
    ((:zmp_x __zmp_x) 0.0)
    ((:zmp_y __zmp_y) 0.0)
    )
   (send-super :init)
   (setq _copx (float __copx))
   (setq _copy (float __copy))
   (setq _force (float __force))
   (setq _cocx (float __cocx))
   (setq _cocy (float __cocy))
   (setq _orient (float __orient))
   (setq _zmp_x (float __zmp_x))
   (setq _zmp_y (float __zmp_y))
   self)
  (:copx
   (&optional __copx)
   (if __copx (setq _copx __copx)) _copx)
  (:copy
   (&optional __copy)
   (if __copy (setq _copy __copy)) _copy)
  (:force
   (&optional __force)
   (if __force (setq _force __force)) _force)
  (:cocx
   (&optional __cocx)
   (if __cocx (setq _cocx __cocx)) _cocx)
  (:cocy
   (&optional __cocy)
   (if __cocy (setq _cocy __cocy)) _cocy)
  (:orient
   (&optional __orient)
   (if __orient (setq _orient __orient)) _orient)
  (:zmp_x
   (&optional __zmp_x)
   (if __zmp_x (setq _zmp_x __zmp_x)) _zmp_x)
  (:zmp_y
   (&optional __zmp_y)
   (if __zmp_y (setq _zmp_y __zmp_y)) _zmp_y)
  (:serialization-length
   ()
   (+
    ;; float64 _copx
    8
    ;; float64 _copy
    8
    ;; float64 _force
    8
    ;; float64 _cocx
    8
    ;; float64 _cocy
    8
    ;; float64 _orient
    8
    ;; float64 _zmp_x
    8
    ;; float64 _zmp_y
    8
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; float64 _copx
       (sys::poke _copx (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _copy
       (sys::poke _copy (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _force
       (sys::poke _force (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _cocx
       (sys::poke _cocx (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _cocy
       (sys::poke _cocy (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _orient
       (sys::poke _orient (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _zmp_x
       (sys::poke _zmp_x (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _zmp_y
       (sys::poke _zmp_y (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; float64 _copx
     (setq _copx (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _copy
     (setq _copy (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _force
     (setq _force (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _cocx
     (setq _cocx (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _cocy
     (setq _cocy (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _orient
     (setq _orient (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _zmp_x
     (setq _zmp_x (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _zmp_y
     (setq _zmp_y (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;;
   self)
  )

(defclass tactile_servo_srvs::set_des_feats_srvResponse
  :super ros::object
  :slots (_success ))

(defmethod tactile_servo_srvs::set_des_feats_srvResponse
  (:init
   (&key
    ((:success __success) 0)
    )
   (send-super :init)
   (setq _success (round __success))
   self)
  (:success
   (&optional __success)
   (if __success (setq _success __success)) _success)
  (:serialization-length
   ()
   (+
    ;; int64 _success
    8
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; int64 _success
#+(or :alpha :irix6 :x86_64)
       (progn (sys::poke _success (send s :buffer) (send s :count) :long) (incf (stream-count s) 8))
#-(or :alpha :irix6 :x86_64)
       (cond ((and (class _success) (= (length (_success . bv)) 2)) ;; bignum
              (write-long (ash (elt (_success . bv) 0) 0) s)
              (write-long (ash (elt (_success . bv) 1) -1) s))
             ((and (class _success) (= (length (_success . bv)) 1)) ;; big1
              (write-long (elt (_success . bv) 0) s)
              (write-long (if (>= _success 0) 0 #xffffffff) s))
             (t                                         ;; integer
              (write-long _success s)(write-long (if (>= _success 0) 0 #xffffffff) s)))
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; int64 _success
#+(or :alpha :irix6 :x86_64)
      (setf _success (prog1 (sys::peek buf ptr- :long) (incf ptr- 8)))
#-(or :alpha :irix6 :x86_64)
      (setf _success (let ((b0 (prog1 (sys::peek buf ptr- :integer) (incf ptr- 4)))
                  (b1 (prog1 (sys::peek buf ptr- :integer) (incf ptr- 4))))
              (cond ((= b1 -1) b0)
                     ((and (= b1  0)
                           (<= lisp::most-negative-fixnum b0 lisp::most-positive-fixnum))
                      b0)
                    ((= b1  0) (make-instance bignum :size 1 :bv (integer-vector b0)))
                    (t (make-instance bignum :size 2 :bv (integer-vector b0 (ash b1 1)))))))
   ;;
   self)
  )

(defclass tactile_servo_srvs::set_des_feats_srv
  :super ros::object
  :slots ())

(setf (get tactile_servo_srvs::set_des_feats_srv :md5sum-) "a9f79bb34d45b76c6fd0a8b06fb9504b")
(setf (get tactile_servo_srvs::set_des_feats_srv :datatype-) "tactile_servo_srvs/set_des_feats_srv")
(setf (get tactile_servo_srvs::set_des_feats_srv :request) tactile_servo_srvs::set_des_feats_srvRequest)
(setf (get tactile_servo_srvs::set_des_feats_srv :response) tactile_servo_srvs::set_des_feats_srvResponse)

(defmethod tactile_servo_srvs::set_des_feats_srvRequest
  (:response () (instance tactile_servo_srvs::set_des_feats_srvResponse :init)))

(setf (get tactile_servo_srvs::set_des_feats_srvRequest :md5sum-) "a9f79bb34d45b76c6fd0a8b06fb9504b")
(setf (get tactile_servo_srvs::set_des_feats_srvRequest :datatype-) "tactile_servo_srvs/set_des_feats_srvRequest")
(setf (get tactile_servo_srvs::set_des_feats_srvRequest :definition-)
      "float64 copx
float64 copy
float64 force
float64 cocx
float64 cocy
float64 orient
float64 zmp_x
float64 zmp_y
---

int64 success
")

(setf (get tactile_servo_srvs::set_des_feats_srvResponse :md5sum-) "a9f79bb34d45b76c6fd0a8b06fb9504b")
(setf (get tactile_servo_srvs::set_des_feats_srvResponse :datatype-) "tactile_servo_srvs/set_des_feats_srvResponse")
(setf (get tactile_servo_srvs::set_des_feats_srvResponse :definition-)
      "float64 copx
float64 copy
float64 force
float64 cocx
float64 cocy
float64 orient
float64 zmp_x
float64 zmp_y
---

int64 success
")



(provide :tactile_servo_srvs/set_des_feats_srv "a9f79bb34d45b76c6fd0a8b06fb9504b")


