import { WebSocketServer } from "ws";
import { GameManager } from "./GameManager";

const wsServer = new WebSocketServer({ port: 8080 });

const gameManager = new GameManager()

wsServer.on('connection', function connection(ws){
    gameManager.addUser(ws)
    ws.on("disconnect", () => gameManager.removeUser(ws))
})

