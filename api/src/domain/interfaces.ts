export interface ChatResponse {
  model:                string;
  created_at:           Date;
  message:              Message;
  done_reason:          string;
  done:                 boolean;
  total_duration:       number;
  load_duration:        number;
  prompt_eval_count:    number;
  prompt_eval_duration: number;
  eval_count:           number;
  eval_duration:        number;
}

export interface Message {
  role:    string;
  content: string;
}

export interface ChatRequest {
  model:    string;
  messages: Message[];
}

export interface Message {
  role:    string;
  content: string;
}

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
