import { useEffect, useRef, useState } from "react"
import { IconMessage, IconPlus, IconSend2 } from "@tabler/icons-react"

import { History, PropsResponse, StorageChatProps } from "./interfaces/interfaces"
import { initState } from "./data"

function ChatApp() {

  const formRef = useRef<HTMLFormElement>(null)
  const [ value , setValue ] = useState<string>('')
  const [ message, setMessage ] = useState<History[]>([])

  const [ storageChats, setStorageChats ] = useState<StorageChatProps[]>(initState || [])
  const [ activeChat, setActiveChat ] = useState<StorageChatProps>({} as StorageChatProps)
  const [ valuesFromStorage, setValuesFromStorage ] = useState<{title: string, id: string}[]>([])

  const onSetActiveChat = (id: string) => {
    const chat = storageChats.find(chat => chat.id === id)
    if(chat) {
      setActiveChat(chat)
      setMessage(chat.history)
    }
  }

  const newChat = () => {
    if(message.length > 0) {
      setStorageChats(
        [...storageChats,
          { id: crypto.randomUUID(),
            title: message[0].parts[0].text || value,
            history: message }
        ]
      )
    }
    setMessage([])
    setActiveChat({} as StorageChatProps)
    setValue('')
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const options:PropsResponse = {
      prompt: value!,
      history: message
    }
    
    const { history }:PropsResponse = await fetch('http://localhost:3000/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(options)
    }).then((res) => res.json())

    setMessage([...history])
    if(activeChat.id !== undefined) {
      console.log("update chat")
      activeChat.history = history
    }
  }

  useEffect(() => {
    const mapValuesFromStorage = storageChats?.map((chat) => {
      return {
        id: chat.id!,
        title: chat.title!
      }
    })
    setValuesFromStorage(mapValuesFromStorage)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[storageChats])

  console.log({message, activeChat, storageChats})

  return (
    <div
      className="flex flex-wrap"
    >
      <aside
        className="bg-gray-800 min-h-dvh w-[330px] py-8 px-4"
      >
        <div>
          <button
            className="flex bg-gray-700 p-4 rounded-full w-full justify-center gap-4"
            onClick={newChat}
          >
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
              {
                valuesFromStorage.map((val) => (
                  <button
                    className="flex p-4 gap-4 flex-wrap items-center bg-transparent hover:bg-gray-700 rounded-full w-full"
                    key={val.id}
                    onClick={() => onSetActiveChat(val.id)}
                  >
                    <IconMessage size={20} />
                    <p className="line-clamp-1 w-[calc(100%-60px)] text-left">{val.title}</p>
                  </button>
                ))
              }
            </li>
          </ul>
        </div>
      </aside>
      <main className="min-h-dvh w-[calc(100%-330px)]">
        {/* <header
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
        </header> */}
        <div className="mx-auto max-w-3xl flex flex-col h-[calc(100%-50px)] py-8">
          <div
            className="flex-1 space-y-4"
          > 
            {message.map((chat, index) => (
                  chat.role === "model"
                  ? (
                    <div
                      key={index}
                      className="bg-sky-950 p-4 rounded-lg"
                    >
                      {chat.role}
                      <p>{chat.parts.map((part) => part.text)}</p>
                    </div>
                  )
                  : (
                    <div
                      key={index}
                      className="p-4 rounded-lg bg-cyan-950"
                    >
                      {chat.role}
                      <p>{chat.parts.map((part) => part.text)}</p>
                    </div>
                  )
                )
              )
            }
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
                value={value}
                onChange={(e) => setValue(e.target.value)}
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
