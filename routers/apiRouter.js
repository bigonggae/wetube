import express from "express";
import routes from "../routes";
import {
  postRegistterView,
  postAddComment
} from "../controllers/videoController";

const apiRouter = express.Router();

apiRouter.post(routes.registerView, postRegistterView);
apiRouter.post(routes.addComment, postAddComment);

export default apiRouter;
