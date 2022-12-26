;; Auto-generated. Do not edit!


(when (boundp 'tactile_servo_srvs::begin_control)
  (if (not (find-package "TACTILE_SERVO_SRVS"))
    (make-package "TACTILE_SERVO_SRVS"))
  (shadow 'begin_control (find-package "TACTILE_SERVO_SRVS")))
(unless (find-package "TACTILE_SERVO_SRVS::BEGIN_CONTROL")
  (make-package "TACTILE_SERVO_SRVS::BEGIN_CONTROL"))
(unless (find-package "TACTILE_SERVO_SRVS::BEGIN_CONTROLREQUEST")
  (make-package "TACTILE_SERVO_SRVS::BEGIN_CONTROLREQUEST"))
(unless (find-package "TACTILE_SERVO_SRVS::BEGIN_CONTROLRESPONSE")
  (make-package "TACTILE_SERVO_SRVS::BEGIN_CONTROLRESPONSE"))

(in-package "ROS")





(defclass tactile_servo_srvs::begin_controlRequest
  :super ros::object
  :slots (_begin_control ))

(defmethod tactile_servo_srvs::begin_controlRequest
  (:init
   (&key
    ((:begin_control __begin_control) 0)
    )
   (send-super :init)
   (setq _begin_control (round __begin_control))
   self)
  (:begin_control
   (&optional __begin_control)
   (if __begin_control (setq _begin_control __begin_control)) _begin_control)
  (:serialization-length
   ()
   (+
    ;; int64 _begin_control
    8
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; int64 _begin_control
#+(or :alpha :irix6 :x86_64)
       (progn (sys::poke _begin_control (send s :buffer) (send s :count) :long) (incf (stream-count s) 8))
#-(or :alpha :irix6 :x86_64)
       (cond ((and (class _begin_control) (= (length (_begin_control . bv)) 2)) ;; bignum
              (write-long (ash (elt (_begin_control . bv) 0) 0) s)
              (write-long (ash (elt (_begin_control . bv) 1) -1) s))
             ((and (class _begin_control) (= (length (_begin_control . bv)) 1)) ;; big1
              (write-long (elt (_begin_control . bv) 0) s)
              (write-long (if (>= _begin_control 0) 0 #xffffffff) s))
             (t                                         ;; integer
              (write-long _begin_control s)(write-long (if (>= _begin_control 0) 0 #xffffffff) s)))
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; int64 _begin_control
#+(or :alpha :irix6 :x86_64)
      (setf _begin_control (prog1 (sys::peek buf ptr- :long) (incf ptr- 8)))
#-(or :alpha :irix6 :x86_64)
      (setf _begin_control (let ((b0 (prog1 (sys::peek buf ptr- :integer) (incf ptr- 4)))
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

(defclass tactile_servo_srvs::begin_controlResponse
  :super ros::object
  :slots (_success ))

(defmethod tactile_servo_srvs::begin_controlResponse
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

(defclass tactile_servo_srvs::begin_control
  :super ros::object
  :slots ())

(setf (get tactile_servo_srvs::begin_control :md5sum-) "f8510db0e51054ee9f4d5a55ab97ee71")
(setf (get tactile_servo_srvs::begin_control :datatype-) "tactile_servo_srvs/begin_control")
(setf (get tactile_servo_srvs::begin_control :request) tactile_servo_srvs::begin_controlRequest)
(setf (get tactile_servo_srvs::begin_control :response) tactile_servo_srvs::begin_controlResponse)

(defmethod tactile_servo_srvs::begin_controlRequest
  (:response () (instance tactile_servo_srvs::begin_controlResponse :init)))

(setf (get tactile_servo_srvs::begin_controlRequest :md5sum-) "f8510db0e51054ee9f4d5a55ab97ee71")
(setf (get tactile_servo_srvs::begin_controlRequest :datatype-) "tactile_servo_srvs/begin_controlRequest")
(setf (get tactile_servo_srvs::begin_controlRequest :definition-)
      "int64 begin_control

---

int64 success
")

(setf (get tactile_servo_srvs::begin_controlResponse :md5sum-) "f8510db0e51054ee9f4d5a55ab97ee71")
(setf (get tactile_servo_srvs::begin_controlResponse :datatype-) "tactile_servo_srvs/begin_controlResponse")
(setf (get tactile_servo_srvs::begin_controlResponse :definition-)
      "int64 begin_control

---

int64 success
")



(provide :tactile_servo_srvs/begin_control "f8510db0e51054ee9f4d5a55ab97ee71")


