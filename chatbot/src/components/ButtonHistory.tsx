import { IconTrash } from "@tabler/icons-react";

interface ButtonHistoryProps {
  onPress: () => void;
  title: string;
  icon: JSX.Element
}
export const ButtonHistory = ({icon, onPress, title}:ButtonHistoryProps) => {
  return (
    <button
      className="flex p-4 gap-4 flex-wrap items-center bg-transparent hover:bg-gray-700 rounded-full w-full"
      onClick={onPress}
    >
      <div className="w-[calc(100%-40px)] flex flex-wrap gap-4 items-center">
        {icon && icon}
        <p className="line-clamp-1 text-left w-[calc(100%-40px)]">{title}</p>
      </div>
      <IconTrash
        size={20}
        color="#ef4444"
      />
    </button>
  )
}
