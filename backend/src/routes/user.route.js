import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { acceptFriendRequest, getFriendRequests, getOutgoingFriendReqs, getRecommendedUsers, sendFriendRequest } from "../controllers/user.controller.js";
import { getMyFriends } from "../controllers/user.controller.js";

const router = express.Router();
// applying protectroute to all routes
router.use(protectRoute)

router.get("/",getRecommendedUsers);
router.get("/friends",getMyFriends);


router.post("/friend-request/:id",sendFriendRequest);
router.put("/friend-request/:id/accept",acceptFriendRequest);

router.get("/friend-request",getFriendRequests);
router.get("/outgoing-friend-request",getOutgoingFriendReqs);


export default router;