;; SIP-009 Non-Fungible Token
;; A standard NFT implementation

(impl-trait 'SP2PABAF9FTAJYNFZH93XENAJ8FVY99RRM50D2JG9.nft-trait.nft-trait)

;; NFT Configuration
(define-constant CONTRACT-OWNER tx-sender)
(define-constant COLLECTION-NAME "MyNFTCollection")
(define-constant COLLECTION-SYMBOL "MNFT")

;; Error codes
(define-constant ERR-OWNER-ONLY (err u100))
(define-constant ERR-NOT-TOKEN-OWNER (err u101))
(define-constant ERR-TOKEN-EXISTS (err u102))
(define-constant ERR-TOKEN-NOT-FOUND (err u103))
(define-constant ERR-LISTING-NOT-FOUND (err u104))
(define-constant ERR-WRONG-PRICE (err u105))

;; Storage
(define-non-fungible-token my-nft uint)
(define-data-var last-token-id uint u0)
(define-data-var base-token-uri (string-ascii 256) "")

;; Token metadata storage
(define-map token-metadata uint {
  uri: (string-ascii 256)
})

;; Marketplace listings
(define-map listings uint {
  price: uint,
  seller: principal
})

;; SIP-009 Functions

(define-public (transfer (token-id uint) (sender principal) (recipient principal))
  (begin
    (asserts! (is-eq tx-sender sender) ERR-NOT-TOKEN-OWNER)
    (map-delete listings token-id)
    (nft-transfer? my-nft token-id sender recipient)))

(define-read-only (get-last-token-id)
  (ok (var-get last-token-id)))

(define-read-only (get-token-uri (token-id uint))
  (match (map-get? token-metadata token-id)
    metadata (ok (some (get uri metadata)))
    (ok none)))

(define-read-only (get-owner (token-id uint))
  (ok (nft-get-owner? my-nft token-id)))

;; Mint function
(define-public (mint (recipient principal) (token-uri (string-ascii 256)))
  (let
    ((token-id (+ (var-get last-token-id) u1)))
    (try! (nft-mint? my-nft token-id recipient))
    (map-set token-metadata token-id { uri: token-uri })
    (var-set last-token-id token-id)
    (ok token-id)))

;; Batch mint function
(define-public (mint-batch (recipient principal) (uris (list 10 (string-ascii 256))))
  (let
    ((start-id (var-get last-token-id)))
    (fold mint-single uris (ok start-id))))

(define-private (mint-single (uri (string-ascii 256)) (prev-result (response uint uint)))
  (match prev-result
    prev-id
      (let
        ((new-id (+ prev-id u1)))
        (try! (nft-mint? my-nft new-id tx-sender))
        (map-set token-metadata new-id { uri: uri })
        (var-set last-token-id new-id)
        (ok new-id))
    err-code (err err-code)))

;; Admin functions
(define-public (set-base-uri (new-base-uri (string-ascii 256)))
  (begin
    (asserts! (is-eq tx-sender CONTRACT-OWNER) ERR-OWNER-ONLY)
    (ok (var-set base-token-uri new-base-uri))))

;; Marketplace functions

(define-public (list-for-sale (token-id uint) (price uint))
  (let
    ((owner (unwrap! (nft-get-owner? my-nft token-id) ERR-TOKEN-NOT-FOUND)))
    (asserts! (is-eq tx-sender owner) ERR-NOT-TOKEN-OWNER)
    (ok (map-set listings token-id { price: price, seller: tx-sender }))))

(define-public (unlist (token-id uint))
  (let
    ((listing (unwrap! (map-get? listings token-id) ERR-LISTING-NOT-FOUND)))
    (asserts! (is-eq tx-sender (get seller listing)) ERR-NOT-TOKEN-OWNER)
    (ok (map-delete listings token-id))))

(define-public (buy (token-id uint))
  (let
    ((listing (unwrap! (map-get? listings token-id) ERR-LISTING-NOT-FOUND))
     (price (get price listing))
     (seller (get seller listing)))
    (try! (stx-transfer? price tx-sender seller))
    (try! (nft-transfer? my-nft token-id seller tx-sender))
    (map-delete listings token-id)
    (ok token-id)))

(define-read-only (get-listing (token-id uint))
  (map-get? listings token-id))
