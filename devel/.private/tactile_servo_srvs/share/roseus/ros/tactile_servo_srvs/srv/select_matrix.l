;; Auto-generated. Do not edit!


(when (boundp 'tactile_servo_srvs::select_matrix)
  (if (not (find-package "TACTILE_SERVO_SRVS"))
    (make-package "TACTILE_SERVO_SRVS"))
  (shadow 'select_matrix (find-package "TACTILE_SERVO_SRVS")))
(unless (find-package "TACTILE_SERVO_SRVS::SELECT_MATRIX")
  (make-package "TACTILE_SERVO_SRVS::SELECT_MATRIX"))
(unless (find-package "TACTILE_SERVO_SRVS::SELECT_MATRIXREQUEST")
  (make-package "TACTILE_SERVO_SRVS::SELECT_MATRIXREQUEST"))
(unless (find-package "TACTILE_SERVO_SRVS::SELECT_MATRIXRESPONSE")
  (make-package "TACTILE_SERVO_SRVS::SELECT_MATRIXRESPONSE"))

(in-package "ROS")





(defclass tactile_servo_srvs::select_matrixRequest
  :super ros::object
  :slots (_copx _copy _force _cocx _cocy _orient ))

(defmethod tactile_servo_srvs::select_matrixRequest
  (:init
   (&key
    ((:copx __copx) 0)
    ((:copy __copy) 0)
    ((:force __force) 0)
    ((:cocx __cocx) 0)
    ((:cocy __cocy) 0)
    ((:orient __orient) 0)
    )
   (send-super :init)
   (setq _copx (round __copx))
   (setq _copy (round __copy))
   (setq _force (round __force))
   (setq _cocx (round __cocx))
   (setq _cocy (round __cocy))
   (setq _orient (round __orient))
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
  (:serialization-length
   ()
   (+
    ;; int64 _copx
    8
    ;; int64 _copy
    8
    ;; int64 _force
    8
    ;; int64 _cocx
    8
    ;; int64 _cocy
    8
    ;; int64 _orient
    8
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; int64 _copx
#+(or :alpha :irix6 :x86_64)
       (progn (sys::poke _copx (send s :buffer) (send s :count) :long) (incf (stream-count s) 8))
#-(or :alpha :irix6 :x86_64)
       (cond ((and (class _copx) (= (length (_copx . bv)) 2)) ;; bignum
              (write-long (ash (elt (_copx . bv) 0) 0) s)
              (write-long (ash (elt (_copx . bv) 1) -1) s))
             ((and (class _copx) (= (length (_copx . bv)) 1)) ;; big1
              (write-long (elt (_copx . bv) 0) s)
              (write-long (if (>= _copx 0) 0 #xffffffff) s))
             (t                                         ;; integer
              (write-long _copx s)(write-long (if (>= _copx 0) 0 #xffffffff) s)))
     ;; int64 _copy
#+(or :alpha :irix6 :x86_64)
       (progn (sys::poke _copy (send s :buffer) (send s :count) :long) (incf (stream-count s) 8))
#-(or :alpha :irix6 :x86_64)
       (cond ((and (class _copy) (= (length (_copy . bv)) 2)) ;; bignum
              (write-long (ash (elt (_copy . bv) 0) 0) s)
              (write-long (ash (elt (_copy . bv) 1) -1) s))
             ((and (class _copy) (= (length (_copy . bv)) 1)) ;; big1
              (write-long (elt (_copy . bv) 0) s)
              (write-long (if (>= _copy 0) 0 #xffffffff) s))
             (t                                         ;; integer
              (write-long _copy s)(write-long (if (>= _copy 0) 0 #xffffffff) s)))
     ;; int64 _force
#+(or :alpha :irix6 :x86_64)
       (progn (sys::poke _force (send s :buffer) (send s :count) :long) (incf (stream-count s) 8))
#-(or :alpha :irix6 :x86_64)
       (cond ((and (class _force) (= (length (_force . bv)) 2)) ;; bignum
              (write-long (ash (elt (_force . bv) 0) 0) s)
              (write-long (ash (elt (_force . bv) 1) -1) s))
             ((and (class _force) (= (length (_force . bv)) 1)) ;; big1
              (write-long (elt (_force . bv) 0) s)
              (write-long (if (>= _force 0) 0 #xffffffff) s))
             (t                                         ;; integer
              (write-long _force s)(write-long (if (>= _force 0) 0 #xffffffff) s)))
     ;; int64 _cocx
#+(or :alpha :irix6 :x86_64)
       (progn (sys::poke _cocx (send s :buffer) (send s :count) :long) (incf (stream-count s) 8))
#-(or :alpha :irix6 :x86_64)
       (cond ((and (class _cocx) (= (length (_cocx . bv)) 2)) ;; bignum
              (write-long (ash (elt (_cocx . bv) 0) 0) s)
              (write-long (ash (elt (_cocx . bv) 1) -1) s))
             ((and (class _cocx) (= (length (_cocx . bv)) 1)) ;; big1
              (write-long (elt (_cocx . bv) 0) s)
              (write-long (if (>= _cocx 0) 0 #xffffffff) s))
             (t                                         ;; integer
              (write-long _cocx s)(write-long (if (>= _cocx 0) 0 #xffffffff) s)))
     ;; int64 _cocy
#+(or :alpha :irix6 :x86_64)
       (progn (sys::poke _cocy (send s :buffer) (send s :count) :long) (incf (stream-count s) 8))
#-(or :alpha :irix6 :x86_64)
       (cond ((and (class _cocy) (= (length (_cocy . bv)) 2)) ;; bignum
              (write-long (ash (elt (_cocy . bv) 0) 0) s)
              (write-long (ash (elt (_cocy . bv) 1) -1) s))
             ((and (class _cocy) (= (length (_cocy . bv)) 1)) ;; big1
              (write-long (elt (_cocy . bv) 0) s)
              (write-long (if (>= _cocy 0) 0 #xffffffff) s))
             (t                                         ;; integer
              (write-long _cocy s)(write-long (if (>= _cocy 0) 0 #xffffffff) s)))
     ;; int64 _orient
#+(or :alpha :irix6 :x86_64)
       (progn (sys::poke _orient (send s :buffer) (send s :count) :long) (incf (stream-count s) 8))
#-(or :alpha :irix6 :x86_64)
       (cond ((and (class _orient) (= (length (_orient . bv)) 2)) ;; bignum
              (write-long (ash (elt (_orient . bv) 0) 0) s)
              (write-long (ash (elt (_orient . bv) 1) -1) s))
             ((and (class _orient) (= (length (_orient . bv)) 1)) ;; big1
              (write-long (elt (_orient . bv) 0) s)
              (write-long (if (>= _orient 0) 0 #xffffffff) s))
             (t                                         ;; integer
              (write-long _orient s)(write-long (if (>= _orient 0) 0 #xffffffff) s)))
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; int64 _copx
#+(or :alpha :irix6 :x86_64)
      (setf _copx (prog1 (sys::peek buf ptr- :long) (incf ptr- 8)))
#-(or :alpha :irix6 :x86_64)
      (setf _copx (let ((b0 (prog1 (sys::peek buf ptr- :integer) (incf ptr- 4)))
                  (b1 (prog1 (sys::peek buf ptr- :integer) (incf ptr- 4))))
              (cond ((= b1 -1) b0)
                     ((and (= b1  0)
                           (<= lisp::most-negative-fixnum b0 lisp::most-positive-fixnum))
                      b0)
                    ((= b1  0) (make-instance bignum :size 1 :bv (integer-vector b0)))
                    (t (make-instance bignum :size 2 :bv (integer-vector b0 (ash b1 1)))))))
   ;; int64 _copy
#+(or :alpha :irix6 :x86_64)
      (setf _copy (prog1 (sys::peek buf ptr- :long) (incf ptr- 8)))
#-(or :alpha :irix6 :x86_64)
      (setf _copy (let ((b0 (prog1 (sys::peek buf ptr- :integer) (incf ptr- 4)))
                  (b1 (prog1 (sys::peek buf ptr- :integer) (incf ptr- 4))))
              (cond ((= b1 -1) b0)
                     ((and (= b1  0)
                           (<= lisp::most-negative-fixnum b0 lisp::most-positive-fixnum))
                      b0)
                    ((= b1  0) (make-instance bignum :size 1 :bv (integer-vector b0)))
                    (t (make-instance bignum :size 2 :bv (integer-vector b0 (ash b1 1)))))))
   ;; int64 _force
#+(or :alpha :irix6 :x86_64)
      (setf _force (prog1 (sys::peek buf ptr- :long) (incf ptr- 8)))
#-(or :alpha :irix6 :x86_64)
      (setf _force (let ((b0 (prog1 (sys::peek buf ptr- :integer) (incf ptr- 4)))
                  (b1 (prog1 (sys::peek buf ptr- :integer) (incf ptr- 4))))
              (cond ((= b1 -1) b0)
                     ((and (= b1  0)
                           (<= lisp::most-negative-fixnum b0 lisp::most-positive-fixnum))
                      b0)
                    ((= b1  0) (make-instance bignum :size 1 :bv (integer-vector b0)))
                    (t (make-instance bignum :size 2 :bv (integer-vector b0 (ash b1 1)))))))
   ;; int64 _cocx
#+(or :alpha :irix6 :x86_64)
      (setf _cocx (prog1 (sys::peek buf ptr- :long) (incf ptr- 8)))
#-(or :alpha :irix6 :x86_64)
      (setf _cocx (let ((b0 (prog1 (sys::peek buf ptr- :integer) (incf ptr- 4)))
                  (b1 (prog1 (sys::peek buf ptr- :integer) (incf ptr- 4))))
              (cond ((= b1 -1) b0)
                     ((and (= b1  0)
                           (<= lisp::most-negative-fixnum b0 lisp::most-positive-fixnum))
                      b0)
                    ((= b1  0) (make-instance bignum :size 1 :bv (integer-vector b0)))
                    (t (make-instance bignum :size 2 :bv (integer-vector b0 (ash b1 1)))))))
   ;; int64 _cocy
#+(or :alpha :irix6 :x86_64)
      (setf _cocy (prog1 (sys::peek buf ptr- :long) (incf ptr- 8)))
#-(or :alpha :irix6 :x86_64)
      (setf _cocy (let ((b0 (prog1 (sys::peek buf ptr- :integer) (incf ptr- 4)))
                  (b1 (prog1 (sys::peek buf ptr- :integer) (incf ptr- 4))))
              (cond ((= b1 -1) b0)
                     ((and (= b1  0)
                           (<= lisp::most-negative-fixnum b0 lisp::most-positive-fixnum))
                      b0)
                    ((= b1  0) (make-instance bignum :size 1 :bv (integer-vector b0)))
                    (t (make-instance bignum :size 2 :bv (integer-vector b0 (ash b1 1)))))))
   ;; int64 _orient
#+(or :alpha :irix6 :x86_64)
      (setf _orient (prog1 (sys::peek buf ptr- :long) (incf ptr- 8)))
#-(or :alpha :irix6 :x86_64)
      (setf _orient (let ((b0 (prog1 (sys::peek buf ptr- :integer) (incf ptr- 4)))
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

(defclass tactile_servo_srvs::select_matrixResponse
  :super ros::object
  :slots (_success ))

(defmethod tactile_servo_srvs::select_matrixResponse
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

(defclass tactile_servo_srvs::select_matrix
  :super ros::object
  :slots ())

(setf (get tactile_servo_srvs::select_matrix :md5sum-) "477eddf35d1c9126254cd3a55ca19343")
(setf (get tactile_servo_srvs::select_matrix :datatype-) "tactile_servo_srvs/select_matrix")
(setf (get tactile_servo_srvs::select_matrix :request) tactile_servo_srvs::select_matrixRequest)
(setf (get tactile_servo_srvs::select_matrix :response) tactile_servo_srvs::select_matrixResponse)

(defmethod tactile_servo_srvs::select_matrixRequest
  (:response () (instance tactile_servo_srvs::select_matrixResponse :init)))

(setf (get tactile_servo_srvs::select_matrixRequest :md5sum-) "477eddf35d1c9126254cd3a55ca19343")
(setf (get tactile_servo_srvs::select_matrixRequest :datatype-) "tactile_servo_srvs/select_matrixRequest")
(setf (get tactile_servo_srvs::select_matrixRequest :definition-)
      "int64 copx
int64 copy
int64 force
int64 cocx
int64 cocy
int64 orient
---

int64 success

")

(setf (get tactile_servo_srvs::select_matrixResponse :md5sum-) "477eddf35d1c9126254cd3a55ca19343")
(setf (get tactile_servo_srvs::select_matrixResponse :datatype-) "tactile_servo_srvs/select_matrixResponse")
(setf (get tactile_servo_srvs::select_matrixResponse :definition-)
      "int64 copx
int64 copy
int64 force
int64 cocx
int64 cocy
int64 orient
---

int64 success

")



(provide :tactile_servo_srvs/select_matrix "477eddf35d1c9126254cd3a55ca19343")


