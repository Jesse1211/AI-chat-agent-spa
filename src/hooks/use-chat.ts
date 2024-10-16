import { useEffect, useState } from "react";
import { chatService } from "../services/chat-service";
import { Chats } from "../models/chats";
import { ResponseMessage } from "../models/types";

export function useChat(
  chats: Chats,
  onSetChats: (chat: Chats) => void
): {
  busy: boolean;
  error?: Error;
} {
  const [busy, setBusy] = useState<boolean>(false);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const lastMessage = chats.messages[chats.messages.length - 1];
    if (lastMessage.$type === "response") {
      return;
    }

    setBusy(true);

    chatService
      .getAIRespond(chats, signal)
      .then((result: ResponseMessage) => {
        if (!signal.aborted) {
          onSetChats({
            messages: [...chats.messages, result],
          });
        }
      })
      .catch((e: Error) => {
        if (!signal.aborted) {
          setError(e);
        }
      })
      .finally(() => {
        if (!signal.aborted) {
          setBusy(false);
        }
      });

    return () => abortController.abort();
  }, [chats, onSetChats]);

  return { busy, error };
}
