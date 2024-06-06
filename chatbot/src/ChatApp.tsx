import { IconMessage, IconPlus, IconSend2 } from "@tabler/icons-react"
import { useRef, useState } from "react"
import { Message, PropsResponse } from "./interfaces/interfaces"

function ChatApp() {

  const [model, setModel] = useState("llama3")
  
  const ROLE_USER = 'user'
  const formRef = useRef<HTMLFormElement>(null)
  const [message, setMessage] = useState<Message>({content: '', role: ''})
  const [chatRecord, setChatRecord] = useState<Message[]>([])


  const options = {
    "model": model,
    "messages": [
      {
        "role": ROLE_USER,
        "content": "Can you show an example of axios?"
      }
    ]
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(formRef.current!)
    const valueMessage = formData.get('message')

    console.log(valueMessage)
    
    const resp:PropsResponse = await fetch('http://localhost:3000/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(options)
    }).then((res) => res.json())

    setMessage(resp.message)
    setChatRecord([
      ...chatRecord,
      {
        role: ROLE_USER,
        content: "sfsdfsdfsdf"
      },
      {
        role: resp.message?.role,
        content: message?.content
      },
    ])
  }

  console.log(chatRecord)

  return (
    <div
      className="flex flex-wrap"
    >
      <aside
        className="bg-gray-800 min-h-dvh w-[330px] py-8 px-4"
      >
        <div>
          <button className="flex bg-gray-700 p-4 rounded-full w-full justify-center gap-4">
            <IconPlus />
            <p>Nueva conversación</p>
          </button>
        </div>
        <div>
          <header className=" mt-6 mb-2">
            <p className="text-lg">Historial</p>
          </header>
          <ul>
            <li>
              <button
                className="flex p-4 gap-4 flex-wrap items-center bg-transparent hover:bg-gray-700 rounded-full"
              >
                <IconMessage size={20} />
                <p className="line-clamp-1 w-[calc(100%-60px)]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sed neque quos consequuntur delectus totam quibusdam quis blanditiis assumenda, quae quia adipisci ipsam quaerat nam odio nesciunt. Vitae, maxime facere.</p>
              </button>
            </li>
          </ul>
        </div>
      </aside>
      <main className="min-h-dvh w-[calc(100%-330px)]">
        <header
          className="p-4 text-white"
        >
          <select
            name="" id=""
            className="p-3 bg-[#242424] focus-within:outline-none text-lg"
            onChange={(e) => setModel(e.target.value)}
          >
            <option value="llama3">llama3</option>
            <option value="mistral">mistral</option>
          </select>
        </header>
        <div className="mx-auto max-w-3xl flex flex-col h-[calc(100%-120px)]">
          <div
            className="flex-1"
          >
            Hola
          </div>
          <form
            className="bg-gray-800 px-6 py-4 rounded-full"
            onSubmit={onSubmit}
            ref={formRef}
          >
            <fieldset className="flex items-center">
              <input
                type="text"
                name="message"
                placeholder="Escribe tu petición..."
                className="flex-1 bg-gray-800 focus-visible:outline-none text-lg"
              />
              <div className="flex items-center">
                <button>
                  <IconSend2 size={24} />
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </main>
    </div>
  )
}

export default ChatApp
