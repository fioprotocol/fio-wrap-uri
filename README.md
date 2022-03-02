# fio-wrap-uri

The FIO Wrapping URI service is used to standardize the JSON for a Wrapped FIO Domain. 
When a FIO Domain is wrapped as an NFT on another protocol, such as Ethereum or Polygon, it includes a "tokenURI" field that, when called with 
an NFT ID number, returns a URI. This URI can then be called to retrieve JSON-formatted metadata for the NFT.

For FIO Wrapped domains, the tokenURI field is standardized, and includes a domain name of the FIO Domain being wrapped. In this example "sampledomain" is being passed in:

```
https://metadata.fioprotocol.io/domainnft/sampledomain.json
```

It returns auto-generated JSON for the Wrapped FIO Domain NFT similar to:

```json
{
   "name": "FIO Domain: sampledomain",
   "description": "Create FIO Addresses on your custom FIO Domain.",
   "image":"https://metadata.fioprotocol.io/nftimage/sampledomain.svg"
}
```

The URL in the "image" parameter links to the [FIO Wrapping image service](https://github.com/fioprotocol/fio-wrap-image) which auto generates a .svg image.
