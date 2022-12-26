;; Auto-generated. Do not edit!


(when (boundp 'tactile_servo_srvs::choose_configuration_singularity)
  (if (not (find-package "TACTILE_SERVO_SRVS"))
    (make-package "TACTILE_SERVO_SRVS"))
  (shadow 'choose_configuration_singularity (find-package "TACTILE_SERVO_SRVS")))
(unless (find-package "TACTILE_SERVO_SRVS::CHOOSE_CONFIGURATION_SINGULARITY")
  (make-package "TACTILE_SERVO_SRVS::CHOOSE_CONFIGURATION_SINGULARITY"))
(unless (find-package "TACTILE_SERVO_SRVS::CHOOSE_CONFIGURATION_SINGULARITYREQUEST")
  (make-package "TACTILE_SERVO_SRVS::CHOOSE_CONFIGURATION_SINGULARITYREQUEST"))
(unless (find-package "TACTILE_SERVO_SRVS::CHOOSE_CONFIGURATION_SINGULARITYRESPONSE")
  (make-package "TACTILE_SERVO_SRVS::CHOOSE_CONFIGURATION_SINGULARITYRESPONSE"))

(in-package "ROS")





(defclass tactile_servo_srvs::choose_configuration_singularityRequest
  :super ros::object
  :slots (_choose_configuration ))

(defmethod tactile_servo_srvs::choose_configuration_singularityRequest
  (:init
   (&key
    ((:choose_configuration __choose_configuration) 0)
    )
   (send-super :init)
   (setq _choose_configuration (round __choose_configuration))
   self)
  (:choose_configuration
   (&optional __choose_configuration)
   (if __choose_configuration (setq _choose_configuration __choose_configuration)) _choose_configuration)
  (:serialization-length
   ()
   (+
    ;; int64 _choose_configuration
    8
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; int64 _choose_configuration
#+(or :alpha :irix6 :x86_64)
       (progn (sys::poke _choose_configuration (send s :buffer) (send s :count) :long) (incf (stream-count s) 8))
#-(or :alpha :irix6 :x86_64)
       (cond ((and (class _choose_configuration) (= (length (_choose_configuration . bv)) 2)) ;; bignum
              (write-long (ash (elt (_choose_configuration . bv) 0) 0) s)
              (write-long (ash (elt (_choose_configuration . bv) 1) -1) s))
             ((and (class _choose_configuration) (= (length (_choose_configuration . bv)) 1)) ;; big1
              (write-long (elt (_choose_configuration . bv) 0) s)
              (write-long (if (>= _choose_configuration 0) 0 #xffffffff) s))
             (t                                         ;; integer
              (write-long _choose_configuration s)(write-long (if (>= _choose_configuration 0) 0 #xffffffff) s)))
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; int64 _choose_configuration
#+(or :alpha :irix6 :x86_64)
      (setf _choose_configuration (prog1 (sys::peek buf ptr- :long) (incf ptr- 8)))
#-(or :alpha :irix6 :x86_64)
      (setf _choose_configuration (let ((b0 (prog1 (sys::peek buf ptr- :integer) (incf ptr- 4)))
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

(defclass tactile_servo_srvs::choose_configuration_singularityResponse
  :super ros::object
  :slots (_success ))

(defmethod tactile_servo_srvs::choose_configuration_singularityResponse
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

(defclass tactile_servo_srvs::choose_configuration_singularity
  :super ros::object
  :slots ())

(setf (get tactile_servo_srvs::choose_configuration_singularity :md5sum-) "10ee8dd987888b1b0dd9111a4eae0a74")
(setf (get tactile_servo_srvs::choose_configuration_singularity :datatype-) "tactile_servo_srvs/choose_configuration_singularity")
(setf (get tactile_servo_srvs::choose_configuration_singularity :request) tactile_servo_srvs::choose_configuration_singularityRequest)
(setf (get tactile_servo_srvs::choose_configuration_singularity :response) tactile_servo_srvs::choose_configuration_singularityResponse)

(defmethod tactile_servo_srvs::choose_configuration_singularityRequest
  (:response () (instance tactile_servo_srvs::choose_configuration_singularityResponse :init)))

(setf (get tactile_servo_srvs::choose_configuration_singularityRequest :md5sum-) "10ee8dd987888b1b0dd9111a4eae0a74")
(setf (get tactile_servo_srvs::choose_configuration_singularityRequest :datatype-) "tactile_servo_srvs/choose_configuration_singularityRequest")
(setf (get tactile_servo_srvs::choose_configuration_singularityRequest :definition-)
      "int64 choose_configuration

---

int64 success
")

(setf (get tactile_servo_srvs::choose_configuration_singularityResponse :md5sum-) "10ee8dd987888b1b0dd9111a4eae0a74")
(setf (get tactile_servo_srvs::choose_configuration_singularityResponse :datatype-) "tactile_servo_srvs/choose_configuration_singularityResponse")
(setf (get tactile_servo_srvs::choose_configuration_singularityResponse :definition-)
      "int64 choose_configuration

---

int64 success
")



(provide :tactile_servo_srvs/choose_configuration_singularity "10ee8dd987888b1b0dd9111a4eae0a74")


