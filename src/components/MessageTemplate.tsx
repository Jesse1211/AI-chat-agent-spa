import { FC } from "react";
import "./Chats.scss";
import { RequestMessage, ResponseMessage } from "../models/types";

export const MessageTemplate: FC<{
  message: RequestMessage | ResponseMessage;
}> = ({ message }) => {
  return (
    <div key={message.id} className="message response">
      <p key={message.id}>{message.message}</p>
    </div>
  );
};
