;; SIP-010 Fungible Token
;; A standard fungible token implementation

(impl-trait 'SP3FBR2AGK5H9QBDH3EEN6DF8EK8JY7RX8QJ5SVTE.sip-010-trait-ft-standard.sip-010-trait)

;; Token configuration
(define-constant CONTRACT-OWNER tx-sender)
(define-constant TOKEN-NAME "MyToken")
(define-constant TOKEN-SYMBOL "MTK")
(define-constant TOKEN-DECIMALS u6)
(define-constant TOKEN-SUPPLY u1000000000000) ;; 1 million tokens with 6 decimals

;; Error codes
(define-constant ERR-OWNER-ONLY (err u100))
(define-constant ERR-NOT-TOKEN-OWNER (err u101))
(define-constant ERR-INSUFFICIENT-BALANCE (err u102))

;; Storage
(define-fungible-token my-token TOKEN-SUPPLY)
(define-data-var token-uri (optional (string-utf8 256)) none)

;; Initialize token supply to contract owner
(ft-mint? my-token TOKEN-SUPPLY CONTRACT-OWNER)

;; SIP-010 Functions

(define-public (transfer (amount uint) (sender principal) (recipient principal) (memo (optional (buff 34))))
  (begin
    (asserts! (is-eq tx-sender sender) ERR-NOT-TOKEN-OWNER)
    (try! (ft-transfer? my-token amount sender recipient))
    (match memo to-print (print to-print) 0x)
    (ok true)))

(define-read-only (get-name)
  (ok TOKEN-NAME))

(define-read-only (get-symbol)
  (ok TOKEN-SYMBOL))

(define-read-only (get-decimals)
  (ok TOKEN-DECIMALS))

(define-read-only (get-balance (who principal))
  (ok (ft-get-balance my-token who)))

(define-read-only (get-total-supply)
  (ok (ft-get-supply my-token)))

(define-read-only (get-token-uri)
  (ok (var-get token-uri)))

;; Admin functions

(define-public (set-token-uri (value (string-utf8 256)))
  (begin
    (asserts! (is-eq tx-sender CONTRACT-OWNER) ERR-OWNER-ONLY)
    (ok (var-set token-uri (some value)))))

;; Mint additional tokens (owner only)
(define-public (mint (amount uint) (recipient principal))
  (begin
    (asserts! (is-eq tx-sender CONTRACT-OWNER) ERR-OWNER-ONLY)
    (ft-mint? my-token amount recipient)))

;; Burn tokens
(define-public (burn (amount uint))
  (ft-burn? my-token amount tx-sender))
