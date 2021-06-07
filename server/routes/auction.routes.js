import express from "express";
import authCtrl from "../controllers/auth.controller";
import userCtrl from "../controllers/user.controller";
import auctionCtrl from "../controllers/auction.controller";

const router = express.Router();

router.route("/api/auctions").get(auctionCtrl.listOpen);

router.route("/api/auctions/bid/:userId").get(auctionCtrl.listByBidder);

router
  .route("/api/auctions/by/:userId")
  .get(
    authCtrl.requireSignin,
    authCtrl.hasAuthorization,
    auctionCtrl.listBySeller
  );

router
  .route("/api/auctions/by/:userId")
  .post(
    authCtrl.requireSignin,
    authCtrl.hasAuthorization,
    userCtrl.isSeller,
    auctionCtrl.create
  );

router
  .route("/api/auctions/image/:auctionId")
  .get(auctionCtrl.photo, auctionCtrl.defaultPhoto);

router.param("userId", userCtrl.userByID);
router.param("auctionId", auctionCtrl.auctionByID);

export default router;
