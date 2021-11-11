import "reflect-metadata";
import 'es6-shim';
import http from "http";
import app from "./app";
import { createConnection } from "./utils/connection";

async function start() {
  try {
    await createConnection();
    const server = http.createServer(app);

    const port = 4000;

    function onError(error: Error) {
      console.log(error);
      process.exit(1);
    }

    function onListening() {
      const addr = server.address();
      const bind =
        typeof addr === "string" ? "pipe " + addr : "port " + addr?.port;
      console.log("Listening on " + bind);
    }

    server.listen(port);
    server.on("error", onError);
    server.on("listening", onListening);
  } catch (error) {
    console.log(error);
  }
}


start()