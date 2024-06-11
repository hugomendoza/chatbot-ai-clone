export interface GeminiResponse {
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
