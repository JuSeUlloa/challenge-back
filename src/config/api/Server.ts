import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import conexionBD from "../connexion/connexionDB";

import apiRoteProduct from "../../app/product/route/productRoute";

class Server {
  public app: express.Application;

  constructor() {
    this.app = express();
    dotenv.config({ path: ".env" });
    conexionBD();
    this.startServer();
    this.routesActivate();
  }

  public startServer(): void {
    this.app.set("PORT", process.env.PORT);
    this.app.use(cors());
    this.app.use(morgan("dev"));
    this.app.use(express.json({ limit: "100mb" }));
    this.app.use(
      express.urlencoded({
        extended: true,
      })
    );
  }

  public routesActivate(): void {

    this.app.use("/api/public", apiRoteProduct);
  }

  public listenServer(): void {
    this.app.listen(this.app.get("PORT"), () => {
      const port = this.app.get("PORT");
      console.log("local server listen to " + port);
    });
  }
}

export default Server;
