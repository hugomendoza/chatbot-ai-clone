import { useEffect, useRef, useState } from "react"
import { IconMessage, IconPlus, IconSend2 } from "@tabler/icons-react"

import { History, StorageChatProps } from "./interfaces/interfaces"
import { initState } from "./data"
import { Button, ButtonHistory, CardMessage } from "./components"
import { Toaster } from "sonner"
import { useCreateChat } from "./hooks/useCreateChat"

function ChatApp() {

  const formRef = useRef<HTMLFormElement>(null)
  const [ value , setValue ] = useState<string>('')
  const [ message, setMessage ] = useState<History[]>([])

  const { generateChat } = useCreateChat()

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

    const response = await generateChat({
      prompt: value,
      history: message
    })

    if(!response) return false

    if(!response) return false
    const { history } = response!

    setMessage([...history])

    if(activeChat.id !== undefined) {
      activeChat.history = history
    }
    
    setValue('')
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

  return (
    <>
      <Toaster
        richColors
        position='top-right'/>
      <div
        className="flex flex-wrap"
      >
        <aside
          className="bg-gray-800 min-h-dvh w-[330px] py-8 px-4"
        >
          <div>
            <Button
              onPress={newChat}
              icon={<IconPlus />}
            />
          </div>
          <div>
            <header className=" mt-6 mb-2">
              <p className="text-lg">Historial</p>
            </header>
            <ul>
              {
                valuesFromStorage.map((val) => (
                  <li
                    key={val.id}
                  >
                    <ButtonHistory
                      icon={<IconMessage size={20} />}
                      title={val.title}
                      onPress={() => onSetActiveChat(val.id)}
                    />
                  </li>
                ))
              }
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
                <CardMessage
                  key={index}
                  {...chat}
                />
              ))}
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
    </>
  )
}

export default ChatApp
