import { History } from '../interfaces/interfaces'

export const CardMessage = ({parts, role}:History) => {
  
  const bgColor = role === "model" ? "bg-sky-950" : "bg-cyan-950"
  const textAling = role === "model" ? "text-right mr-0 ml-auto" : "text-left"
  const colorRole = role === "model" ? "text-sky-600" : "text-cyan-400"

  return (
    <div
      className={`${bgColor} ${textAling} p-4 rounded-lg bg-cyan-950 max-w-xl`}
    >
      <p className={`${colorRole} mb-2 font-bold capitalize`}>{role}</p>
      <p>{parts.map((part) => part.text)}</p>
    </div>
  )
}
