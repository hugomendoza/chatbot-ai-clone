export interface PropsResponse {
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
