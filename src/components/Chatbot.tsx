import { Send } from "@mui/icons-material";
import { Input, Button } from "@mui/joy";

import { FC, useRef, useState } from "react";
import "./Chatbot.scss";

import { Chats } from "../models/chats.tsx";
import { ChatTemplate } from "./ChatTemplate.tsx";
import { useChat } from "../hooks/use-chat.ts";

const Chatbot: FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [userInput, userInputResponse] = useState<string>(); // user input
  const [chats, setChats] = useState<Chats>(new Chats());
  useChat(chats, setChats);

  // send the user response to the server
  const sendMessage = (request: string) => {
    // render user response
    setChats(
      chats.addMessage({
        id: chats.messages.length + 1,
        $type: "request",
        message: request,
        user: {
          id: 1,
          username: "User",
        },
      })
    );
  };

  const handleSubmit = () => {
    if (!userInput) {
      if (inputRef && inputRef.current) {
        inputRef.current.focus();
      }
      return;
    }
    sendMessage(userInput);
  };

  return (
    <div className="chat-container">
      <ChatTemplate chats={chats} />

      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
      >
        <Input
          ref={inputRef}
          required
          endDecorator={
            <Button type="submit" color="primary">
              <Send />
            </Button>
          }
          onChange={(event) => userInputResponse(event.target.value)}
        />
      </form>
    </div>
  );
};

export default Chatbot;
