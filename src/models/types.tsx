// used when server replies to the user
export interface ResponseMessage {
  id: number;
  $type: "response";
  message: string;
  options?: string[];
}

// Used when user send message to the server
export interface User {
  id: number;
  username: string;
}

export interface RequestMessage {
  $type: "request";
  id: number;
  message: string;
  user: User;
}
