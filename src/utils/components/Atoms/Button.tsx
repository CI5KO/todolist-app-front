import { IconType } from "react-icons";

interface ButtonProps {
  children: string;
  color?: "Blue" | "Green" | "Red" | "Orange" | "Purple";
  disabled?: boolean;
  Icon?: IconType;
  onClick?: () => void;
}

const getBorderColor = (color: string | undefined) => {
  switch (color) {
    case "Blue":
      return "border-blue-500";
    case "Green":
      return "border-green-500";
    case "Red":
      return "border-red-500";
    case "Orange":
      return "border-orange-500";
    case "Purple":
      return "border-purple-500";
    default:
      return "border-blue-500";
  }
};

export default function Button({
  disabled = false,
  children,
  color,
  Icon,
  onClick,
}: ButtonProps) {
  const borderColor = getBorderColor(color);
  return (
    <button
      disabled={disabled}
      className={`flex justify-between border-2 rounded-full w-fit px-4 py-1.5 ${
        disabled
          ? "border-gray-500/50"
          : `shadow-md hover:scale-105 transition duration-75 ${borderColor}`
      }`}
      onClick={onClick}
    >
      {Icon && <Icon className="self-center" />}
      <div
        className={`text-center text-sm font-bold antialiased self-center w-full p-1 `}
      >
        {children}
      </div>
    </button>
  );
}
