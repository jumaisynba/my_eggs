;; Auto-generated. Do not edit!


(when (boundp 'tactile_servo_srvs::start_servo_controller)
  (if (not (find-package "TACTILE_SERVO_SRVS"))
    (make-package "TACTILE_SERVO_SRVS"))
  (shadow 'start_servo_controller (find-package "TACTILE_SERVO_SRVS")))
(unless (find-package "TACTILE_SERVO_SRVS::START_SERVO_CONTROLLER")
  (make-package "TACTILE_SERVO_SRVS::START_SERVO_CONTROLLER"))
(unless (find-package "TACTILE_SERVO_SRVS::START_SERVO_CONTROLLERREQUEST")
  (make-package "TACTILE_SERVO_SRVS::START_SERVO_CONTROLLERREQUEST"))
(unless (find-package "TACTILE_SERVO_SRVS::START_SERVO_CONTROLLERRESPONSE")
  (make-package "TACTILE_SERVO_SRVS::START_SERVO_CONTROLLERRESPONSE"))

(in-package "ROS")





(defclass tactile_servo_srvs::start_servo_controllerRequest
  :super ros::object
  :slots (_begin_controller ))

(defmethod tactile_servo_srvs::start_servo_controllerRequest
  (:init
   (&key
    ((:begin_controller __begin_controller) nil)
    )
   (send-super :init)
   (setq _begin_controller __begin_controller)
   self)
  (:begin_controller
   (&optional __begin_controller)
   (if __begin_controller (setq _begin_controller __begin_controller)) _begin_controller)
  (:serialization-length
   ()
   (+
    ;; bool _begin_controller
    1
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; bool _begin_controller
       (if _begin_controller (write-byte -1 s) (write-byte 0 s))
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; bool _begin_controller
     (setq _begin_controller (not (= 0 (sys::peek buf ptr- :char)))) (incf ptr- 1)
   ;;
   self)
  )

(defclass tactile_servo_srvs::start_servo_controllerResponse
  :super ros::object
  :slots (_controller_runs ))

(defmethod tactile_servo_srvs::start_servo_controllerResponse
  (:init
   (&key
    ((:controller_runs __controller_runs) nil)
    )
   (send-super :init)
   (setq _controller_runs __controller_runs)
   self)
  (:controller_runs
   (&optional __controller_runs)
   (if __controller_runs (setq _controller_runs __controller_runs)) _controller_runs)
  (:serialization-length
   ()
   (+
    ;; bool _controller_runs
    1
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; bool _controller_runs
       (if _controller_runs (write-byte -1 s) (write-byte 0 s))
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; bool _controller_runs
     (setq _controller_runs (not (= 0 (sys::peek buf ptr- :char)))) (incf ptr- 1)
   ;;
   self)
  )

(defclass tactile_servo_srvs::start_servo_controller
  :super ros::object
  :slots ())

(setf (get tactile_servo_srvs::start_servo_controller :md5sum-) "e2e21116f5b5b751861cd4a451d33268")
(setf (get tactile_servo_srvs::start_servo_controller :datatype-) "tactile_servo_srvs/start_servo_controller")
(setf (get tactile_servo_srvs::start_servo_controller :request) tactile_servo_srvs::start_servo_controllerRequest)
(setf (get tactile_servo_srvs::start_servo_controller :response) tactile_servo_srvs::start_servo_controllerResponse)

(defmethod tactile_servo_srvs::start_servo_controllerRequest
  (:response () (instance tactile_servo_srvs::start_servo_controllerResponse :init)))

(setf (get tactile_servo_srvs::start_servo_controllerRequest :md5sum-) "e2e21116f5b5b751861cd4a451d33268")
(setf (get tactile_servo_srvs::start_servo_controllerRequest :datatype-) "tactile_servo_srvs/start_servo_controllerRequest")
(setf (get tactile_servo_srvs::start_servo_controllerRequest :definition-)
      "bool begin_controller

---

bool controller_runs

")

(setf (get tactile_servo_srvs::start_servo_controllerResponse :md5sum-) "e2e21116f5b5b751861cd4a451d33268")
(setf (get tactile_servo_srvs::start_servo_controllerResponse :datatype-) "tactile_servo_srvs/start_servo_controllerResponse")
(setf (get tactile_servo_srvs::start_servo_controllerResponse :definition-)
      "bool begin_controller

---

bool controller_runs

")



(provide :tactile_servo_srvs/start_servo_controller "e2e21116f5b5b751861cd4a451d33268")


