// used when server replies to the user
export interface ResponseMessage {
  id: number;
  $type: "response";
  message: string;
  options?: OptionType;
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

export type OptionType = Category | Post;

export interface OptionTypeBase {
  $type: "category" | "post";
}

export interface Category extends OptionTypeBase {
  $type: "category";
  titles: string[];
}

export interface Post extends OptionTypeBase {
  $type: "post";
  title: string;
  content: string;
  src: string;
}
