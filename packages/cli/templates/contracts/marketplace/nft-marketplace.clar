;; NFT Marketplace
(use-trait nft-trait .nft-trait.nft-trait)

(define-constant ERR-NOT-AUTHORIZED (err u100))
(define-constant ERR-LISTING-NOT-FOUND (err u101))
(define-constant ERR-WRONG-PRICE (err u102))

(define-map listings
  { contract: principal, token-id: uint }
  { price: uint, seller: principal }
)

(define-public (list-asset (nft-asset-contract <nft-trait>) (token-id uint) (price uint))
  (let ((listing-id { contract: (contract-of nft-asset-contract), token-id: token-id }))
    ;; Transfer NFT to contract
    (try! (contract-call? nft-asset-contract transfer token-id tx-sender (as-contract tx-sender)))
    ;; Create listing
    (map-set listings listing-id { price: price, seller: tx-sender })
    (ok true)))

(define-public (unlist-asset (nft-asset-contract <nft-trait>) (token-id uint))
  (let (
    (listing-id { contract: (contract-of nft-asset-contract), token-id: token-id })
    (listing (unwrap! (map-get? listings listing-id) ERR-LISTING-NOT-FOUND))
  )
    (asserts! (is-eq tx-sender (get seller listing)) ERR-NOT-AUTHORIZED)
    ;; Return NFT
    (as-contract (try! (contract-call? nft-asset-contract transfer token-id tx-sender (get seller listing))))
    (map-delete listings listing-id)
    (ok true)))

(define-public (purchase-asset (nft-asset-contract <nft-trait>) (token-id uint))
  (let (
    (listing-id { contract: (contract-of nft-asset-contract), token-id: token-id })
    (listing (unwrap! (map-get? listings listing-id) ERR-LISTING-NOT-FOUND))
    (price (get price listing))
    (seller (get seller listing))
  )
    ;; Transfer STX to seller
    (try! (stx-transfer? price tx-sender seller))
    ;; Transfer NFT to buyer
    (as-contract (try! (contract-call? nft-asset-contract transfer token-id tx-sender tx-sender)))
    (map-delete listings listing-id)
    (ok true)))
