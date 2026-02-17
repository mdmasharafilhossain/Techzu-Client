import { useEffect } from "react";
import { io, Socket } from "socket.io-client";

let socket: Socket;

export const useSocket = (onStockUpdate: () => void) => {
  useEffect(() => {
     socket = io("http://localhost:5000");

     socket.on("stock:update", () => {
      onStockUpdate();
      });

     return () => {
      socket.disconnect();
    };
  }, [onStockUpdate]);
};
