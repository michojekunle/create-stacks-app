;; Counter Contract
;; A simple contract demonstrating state management in Clarity

;; Data variables
(define-data-var counter uint u0)
(define-data-var owner principal tx-sender)

;; Error codes
(define-constant ERR-NOT-OWNER (err u403))

;; Public functions

;; Increment the counter by 1
(define-public (increment)
  (ok (var-set counter (+ (var-get counter) u1))))

;; Decrement the counter by 1
(define-public (decrement)
  (let ((current (var-get counter)))
    (asserts! (> current u0) (err u400))
    (ok (var-set counter (- current u1)))))

;; Reset the counter to 0 (owner only)
(define-public (reset)
  (begin
    (asserts! (is-eq tx-sender (var-get owner)) ERR-NOT-OWNER)
    (ok (var-set counter u0))))

;; Set the counter to a specific value (owner only)
(define-public (set-counter (value uint))
  (begin
    (asserts! (is-eq tx-sender (var-get owner)) ERR-NOT-OWNER)
    (ok (var-set counter value))))

;; Read-only functions

;; Get the current counter value
(define-read-only (get-counter)
  (ok (var-get counter)))

;; Get the contract owner
(define-read-only (get-owner)
  (ok (var-get owner)))
