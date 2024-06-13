import { useRef, useState } from "react"
import { IconPlus, IconSend2 } from "@tabler/icons-react"

import { ImageResponse } from "./interfaces/interfaces"
import { Button } from "./components"
import { Toaster } from "sonner"
import { useGenerateImage } from "./hooks/useGenerateImage"

function ImageGenApp() {

  const formRef = useRef<HTMLFormElement>(null)
  const [ value , setValue ] = useState<string>('')
  const [ responseChat, setResponseChat ] = useState<ImageResponse | null>(null)
  const [ loading, setLoading ] = useState<boolean>(false)

  const { generateImage } = useGenerateImage()
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const response = await generateImage(value)
    setResponseChat( response! )
    setValue('')
    setLoading(false)
  }

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
              onPress={() => {}}
              icon={<IconPlus />}
            />
            {loading ? <p>Cargando...</p> : <p>Generar imagen</p>}
          </div>
        </aside>
        <main className="min-h-dvh w-[calc(100%-330px)]">
          <div className="mx-auto max-w-3xl flex flex-col h-[calc(100%-50px)] py-8">
            <div
              className="flex-1 space-y-4"
            >
              <p>{responseChat?.revised_prompt}</p>
              <img src={responseChat?.url} alt={responseChat?.revised_prompt} />
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

export default ImageGenApp
