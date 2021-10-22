const stripe=require("stripe")(process.env.STRIPE_KEY)

const Pay=(req,res)=>{
    stripe.charges.create(
        {
          source: req.body.tokenId,
          amount: req.body.amount,
          currency: "JOD",
        },
        (stripeErr, stripeRes) => {
          if (stripeErr) {
           return  res.status(500).json(stripeErr);
          } else {
            console.log("back",stripeRes);
           return res.status(200).json(stripeRes);
          }
        }
      );
}
module.exports={Pay}