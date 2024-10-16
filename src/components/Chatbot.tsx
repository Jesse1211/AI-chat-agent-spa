import { Send } from "@mui/icons-material";
import { Input, Button } from "@mui/joy";

import { FC, useRef, useState } from "react";
import "./Chatbot.scss";

import { Chats } from "../models/chats.tsx";
import { ChatTemplate } from "./ChatTemplate.tsx";
import { useChat } from "../hooks/use-chat.ts";
import { RequestMessage, ResponseMessage } from "../models/types.tsx";

const initialMessages: ResponseMessage = {
  id: 1,
  $type: "response",
  message:
    "Hi there. If you're here, that means you're looking for a job. Tell me, what's your name?",
};

export const Chatbot: FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [chats, setChats] = useState<Chats>({
    messages: [initialMessages],
  });
  useChat(chats, setChats);

  const handleSubmit = () => {
    if (inputRef && inputRef.current) {
      const userInput = inputRef.current.value;

      if (!userInput.trim()) {
        inputRef.current.focus();
        return;
      }

      const newMessage: RequestMessage = {
        id: chats.messages.length + 1,
        $type: "request",
        message: userInput,
        user: {
          id: 1,
          username: "User",
        },
      };
      setChats({
        messages: [...chats.messages, newMessage],
      });

      inputRef.current.value = "";
      inputRef.current.focus();
    }
    return;
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
          slotProps={{ input: { ref: inputRef } }}
          required
          endDecorator={
            <Button type="submit" color="primary">
              <Send />
            </Button>
          }
        />
      </form>
    </div>
  );
};
