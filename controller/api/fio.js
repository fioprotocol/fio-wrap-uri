
class FIOCtrl {
    constructor() {}
    
    async getImageUrlWithDomain(req,res) {
      let domain = req.params.domain;
      let realdomain = domain;
      if (domain.indexOf(".json") > 1) {
        let index = domain.indexOf(".json");
        realdomain = domain.substring(0,  index);
      }
      try {
          let tempRes = {
              "name": "FIO Domain: "+realdomain,
              "description": "Create FIO Crypto Handles on your custom FIO Domain.",
              "image": "https://metadata.fioprotocol.io/nftimage/"+realdomain+".svg",
          }
          res.send(tempRes)
        } catch (error) {
          console.log(error);
          res.send({})
        }
    }
}

export default new FIOCtrl();