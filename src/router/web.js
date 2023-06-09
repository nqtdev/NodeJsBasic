import express from "express";
import homeController from "../controller/homeController";
let router = express.Router();
const initWebRouter = (app) => {
  router.get("/", homeController.getHomepage);
  router.get("/about", (req, res) => {
    res.send("Tien");
  });
  return app.user("/", router);
};
export default initWebRouter;
