import express from "express";
import routes from "../routes";
import { postRegistterView } from "../controllers/videoController";

const apiRouter = express.Router();

apiRouter.get(routes.registerView, postRegistterView);

export default apiRouter;
