- Very simplistic contract
- `bidsPerAuction[_auctionId]` is not sorted
- `ResolveAuction` looks very inefficient
	- way too many loops
	- does not batch `auctions[_auctionId].seller.transfer`
		- instead makes a new send tx to the seller for each bid
- Accounts can have multiple bids for the same auction which is nice