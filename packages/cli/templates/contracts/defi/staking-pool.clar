;; Staking Pool
(use-trait sip010-trait .sip010-trait.sip010-trait)

(define-map stakes principal uint)

(define-public (stake (token <sip010-trait>) (amount uint))
  (begin
    (try! (contract-call? token transfer amount tx-sender (as-contract tx-sender) none))
    (map-set stakes tx-sender (+ (default-to u0 (map-get? stakes tx-sender)) amount))
    (ok true)))

(define-public (unstake (token <sip010-trait>) (amount uint))
  (begin
    (asserts! (>= (default-to u0 (map-get? stakes tx-sender)) amount) (err u100))
    (try! (as-contract (contract-call? token transfer amount tx-sender tx-sender none)))
    (map-set stakes tx-sender (- (default-to u0 (map-get? stakes tx-sender)) amount))
    (ok true)))

(define-read-only (get-stake (staker principal))
  (ok (default-to u0 (map-get? stakes staker))))
