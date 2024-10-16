import { ResponseMessage, RequestMessage } from "./types";

export class Chats {
  messages: (RequestMessage | ResponseMessage)[];

  constructor() {
    this.messages = [
      {
        id: 1,
        $type: "response",
        message:
          "Hi there. If you're here, that means you're looking for a job. Tell me, what's your name?",
      },
    ];
  }

  addMessage(message: RequestMessage | ResponseMessage): this {
    this.messages.push(message);
    return this;

    // // sort the messages by id
    // if (message.id == this.request.length + this.response.length) {
    //   return;
    // }

    // // use two pointers to sort the messages
    // let i = 0;
    // let j = 0;
    // let curId = 1;
    // const newRequest: RequestMessage[] = [];
    // const newResponse: ResponseMessage[] = [];
    // while (i < this.request.length || j < this.response.length) {
    //   if (i < this.request.length && this.request[i].id === curId) {
    //     newRequest.push(this.request[i]);
    //     i++;
    //   } else if (j < this.response.length && this.response[j].id === curId) {
    //     newResponse.push(this.response[j]);
    //     j++;
    //   }
    //   curId++;
    // }
  }
}
