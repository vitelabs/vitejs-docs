- frontend has a decent ui/ux
	- doesn't use tailwind, but that's not a big deal
- contracts are well documented
	- contract is for a single DAO
		- governance token is specified in constructor
	- SpaceFactory.solpp is just an indexer for spaces
		- doesn't validate if a submitted address is a space or not
			- not a big deal if space ids are submitted immediately after creation
	- comments that on-chain proposals may be impossible atm
		- "seeems solpp doese not support `call` yet"
	- not sure why withdrawn votes are saved on-chain rather than just being deleted
	- Allows off-chain proposals
		- Good if the token holders trust the team to follow through

- consolation prize for vite-dao-by-fgfm999
	- The frontend is decent but doesn't use tailwind and the contracts only support off-chain proposals (no on-chain proposals)
	- This person is a good dev. Liked their documentation and clean code, lots of potential