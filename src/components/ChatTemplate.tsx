import { useEffect, useRef, FC } from "react";
import "./Chats.scss";
import { Chats } from "../models/chats";
import { MessageTemplate } from "./MessageTemplate";

export const ChatTemplate: FC<{
  chats: Chats;
}> = ({ chats }) => {
  const dummyRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (dummyRef && dummyRef.current && bodyRef && bodyRef.current) {
      bodyRef.current.scrollTo({
        top: dummyRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  }, [chats]);

  return (
    <div className="message-container" ref={bodyRef}>
      {chats.messages.map((chat) => (
        <MessageTemplate key={chat.id} message={chat} />
      ))}
    </div>
  );
};
