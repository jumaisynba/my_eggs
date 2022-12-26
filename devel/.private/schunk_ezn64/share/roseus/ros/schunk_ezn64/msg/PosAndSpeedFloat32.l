;; Auto-generated. Do not edit!


(when (boundp 'schunk_ezn64::PosAndSpeedFloat32)
  (if (not (find-package "SCHUNK_EZN64"))
    (make-package "SCHUNK_EZN64"))
  (shadow 'PosAndSpeedFloat32 (find-package "SCHUNK_EZN64")))
(unless (find-package "SCHUNK_EZN64::POSANDSPEEDFLOAT32")
  (make-package "SCHUNK_EZN64::POSANDSPEEDFLOAT32"))

(in-package "ROS")
;;//! \htmlinclude PosAndSpeedFloat32.msg.html


(defclass schunk_ezn64::PosAndSpeedFloat32
  :super ros::object
  :slots (_pos _speed ))

(defmethod schunk_ezn64::PosAndSpeedFloat32
  (:init
   (&key
    ((:pos __pos) 0.0)
    ((:speed __speed) 0.0)
    )
   (send-super :init)
   (setq _pos (float __pos))
   (setq _speed (float __speed))
   self)
  (:pos
   (&optional __pos)
   (if __pos (setq _pos __pos)) _pos)
  (:speed
   (&optional __speed)
   (if __speed (setq _speed __speed)) _speed)
  (:serialization-length
   ()
   (+
    ;; float32 _pos
    4
    ;; float32 _speed
    4
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; float32 _pos
       (sys::poke _pos (send s :buffer) (send s :count) :float) (incf (stream-count s) 4)
     ;; float32 _speed
       (sys::poke _speed (send s :buffer) (send s :count) :float) (incf (stream-count s) 4)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; float32 _pos
     (setq _pos (sys::peek buf ptr- :float)) (incf ptr- 4)
   ;; float32 _speed
     (setq _speed (sys::peek buf ptr- :float)) (incf ptr- 4)
   ;;
   self)
  )

(setf (get schunk_ezn64::PosAndSpeedFloat32 :md5sum-) "0611d9adb487c3bcf130e5b7b3ee7f37")
(setf (get schunk_ezn64::PosAndSpeedFloat32 :datatype-) "schunk_ezn64/PosAndSpeedFloat32")
(setf (get schunk_ezn64::PosAndSpeedFloat32 :definition-)
      "float32 pos
float32 speed

")



(provide :schunk_ezn64/PosAndSpeedFloat32 "0611d9adb487c3bcf130e5b7b3ee7f37")


