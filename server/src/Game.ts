import { Chess } from "chess.js";
import { WebSocket } from "ws";

export class Game{
    public player1: WebSocket;
    public player2: WebSocket;
    public board: Chess;
    private startTime: Date;

    constructor(player1: WebSocket, player2: WebSocket){
        this.player1 = player1
        this.player2 = player2
        this.board = new Chess()
        this.startTime = new Date()
    }

    makeMove(socket: WebSocket, move: {
        from: string,
        to: string,
    }){
        //validating the type of move using zod

        if(this.board.moves.length % 2 === 0 && socket !== this.player1){
            return  //returning if it is not the turn of player1
        }

        if(this.board.moves.length % 2 === 1 && socket !== this.player2){
            return  //returning if it is not the turn of player1
        }

        try {
            this.board.move(move)
        } catch (error) {
            return;
        }
    }
}