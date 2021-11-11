
class FIOCtrl {
    constructor() {}
    
    async getImageUrlWithDomain(req,res) {
        let domain = req.query.domain;
        try {
            let tempRes = {
                "name": "FIO Domain: "+domain,
                "description": "Create FIO Addresses on your custom FIO Domain.",
                "image": "https://metadata.fioprotocol.io/nftimage/"+domain+".svg",
            }
            res.send(tempRes)
          } catch (error) {
            console.log(error);
            res.send({})
          }
    }
}

export default new FIOCtrl();