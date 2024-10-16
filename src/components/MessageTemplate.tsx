import { FC } from "react";
import "./Chats.scss";
import { RequestMessage, ResponseMessage } from "../models/types";

export const MessageTemplate: FC<{
  message: RequestMessage | ResponseMessage;
}> = ({ message }) => {
  if (message.$type === "request") {
    // sent from user
    return (
      <div key={message.id} className="message request">
        <p key={message.id}>{message.message}</p>
      </div>
    );
  }

  // sent from server
  return (
    <div key={message.id} className="message response">
      <p key={message.id}>{message.message}</p>
    </div>
  );
};
