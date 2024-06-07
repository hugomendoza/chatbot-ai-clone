export interface PropsResponse {
  prompt: string;
  history: History[];
}

export interface History {
  role:  string;
  parts: Part[];
}

export interface Part {
  text: string;
}

export interface StorageChatProps {
  id: string;
  title: string;
  history: History[]
}