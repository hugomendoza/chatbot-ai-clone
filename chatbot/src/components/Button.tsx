interface PropsButton {
  onPress: () => void;
  icon?: React.JSX.Element;
}

export const Button = ({ icon, onPress }:PropsButton) => {
  return (
    <button
      className="flex bg-gray-700 p-4 rounded-full w-full justify-center gap-4"
      onClick={onPress}
    >
      {icon && icon}
      <p>Nueva conversación</p>
    </button>
  )
}