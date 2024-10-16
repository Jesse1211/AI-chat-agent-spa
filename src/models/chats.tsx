import { ResponseMessage, RequestMessage } from "./types";

export interface Chats {
  messages: (RequestMessage | ResponseMessage)[];
}
