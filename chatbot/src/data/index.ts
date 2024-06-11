import { StorageChatProps } from "../interfaces/interfaces";

export const initState: StorageChatProps[] = [
  {
    id: "123",
    title: "Mi primer chat",
    history: [
      {
        role: "user",
        parts: [{ text: "Hello, I have 2 dogs in my house." }],
      },
      {
        role: "model",
        parts: [{ text: "Great to meet you. What would you like to know?" }],
      },
    ],
  },
  {
    id: "456",
    title: "Mi segundo chat dfgslñjvsdakjfgkl asdkljgfdsklñfgjdklf",
    history: [
      {
          "role": "user",
          "parts": [
              {
                  "text": "Cúanto es 2 + 2?"
              }
          ]
      },
      {
          "parts": [
              {
                  "text": "2 + 2 = 4 \n"
              }
          ],
          "role": "model"
      }
    ]
  },
  {
    id: "789",
    title: "Mi tercer chat",
    history: [
      {
          "role": "user",
          "parts": [
              {
                  "text": "Cúanto es 5 * 5?"
              }
          ]
      },
      {
          "parts": [
              {
                  "text": "5 * 5 es 25. \n"
              }
          ],
          "role": "model"
      }
    ]
  },
  {
    id: "012",
    title: "Mi cuarto chat",
    history: [
      {
          "role": "user",
          "parts": [
              {
                  "text": "Cúanto es 5 * 9?"
              }
          ]
      },
      {
          "parts": [
              {
                  "text": "5 * 9 = 45 \n"
              }
          ],
          "role": "model"
      }
    ]
  }
]