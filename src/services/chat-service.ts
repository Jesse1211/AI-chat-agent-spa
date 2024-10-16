import axios from "axios";
import { Chats } from "../models/chats";
import { ResponseMessage } from "../models/types";

export const chatService = {
  async getAIRespond(
    message: Chats,
    abortSignal?: AbortSignal
  ): Promise<ResponseMessage> {
    const res: ResponseMessage = {
      id: message.messages.length + 1,
      $type: "response",
      message: "result.message",
    };

    return res;
    // const response = await axios.post<ResponseMessage>(
    //   `chat`,
    //   {
    //     message: message,
    //   },
    //   { signal: abortSignal }
    // );
    // return response.data;
  },
};
