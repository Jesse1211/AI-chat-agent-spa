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
  const [busy, setBusy] = useState<boolean>(true);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    chatService
      .getAIRespond(chats, signal)
      .then((result: ResponseMessage) => {
        if (!signal.aborted) {
          onSetChats(chats.addMessage(result));
        }
      })
      .catch((e: Error) => signal.aborted || setError(e))
      .finally(() => signal.aborted || setBusy(false));

    return () => abortController.abort();
  }, [chats, onSetChats]);

  return { busy, error };
}
