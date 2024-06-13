import { useState } from "react";
import { Toaster } from "sonner"
import ChatApp from "./ChatApp";
import ImageGenApp from "./ImageGenApp";

export const Home = () => {

  interface Options {
    id: string;
    name: string;
    description: string;
  }

type optionsApp =  0 | 1 | 2

  const optionsToSelect: Options[] = [
    {
      id: "1",
      name: "Chatear conmigo",
      description: "Puedes preguntarme sobre cualquier tema que desees",
    },
    {
      id: "2",
      name: "Generar una imagen",
      description: "Puedes generar una imagen con tu petición",
    }
  ] as const

  
  const [option , setOption] = useState<optionsApp>(0)
  return (
    <>
      <Toaster
        richColors
        position='top-right'/>
      <div
        className="flex flex-wrap justify-center"
      >
        {
          option === 0 && (
            <main className="min-h-dvh w-[calc(100%-630px)] mx-auto">
              <div className="mx-auto max-w-3xl flex flex-col h-full py-8 justify-center">
                <h1 className="text-4xl font-bold text-sky-500 mb-2">Hola,</h1>
                <h2 className="text-xl">¿En qué te puedo ayudar?</h2>
                <div className="flex gap-4 flex-wrap mt-4">
                  {
                    optionsToSelect.map(({description, id, name}: Options) => (
                      <button
                        key={id}
                        className="flex-1 bg-gray-800 text-white p-6 text-left rounded-lg"
                        onClick={() => setOption(+id as optionsApp)}
                      >
                        <h3 className="text-lg font-bold text-sky-600 mb-3">{name}</h3>
                        <p>{description}</p>
                      </button>
                    ))
                  }
                </div>
              </div>
            </main>
          )
        }
      </div>
      {option === 1 && <ChatApp />}
      {option === 2 && <ImageGenApp />}
    </>
  )
}
