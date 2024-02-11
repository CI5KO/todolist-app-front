import { useState } from "react";

import { GrFormView, GrFormViewHide } from "react-icons/gr";

interface inputProps {
  title?: string;
  type?: string;
  step?: string;
  placeholder?: string;
  disabled?: boolean;
  value?: string | number;
  onChange?: (e?: any) => void;
  onBlur?: (e?: any) => void;
}

export default function Input({
  title,
  type = "text",
  step,
  disabled = false,
  onChange,
  onBlur,
  value,
  placeholder,
}: inputProps): JSX.Element {
  const [inputType, setInputType] = useState<string>(type);

  return (
    <div className="flex items-center relative">
      <input
        placeholder={placeholder || title}
        className="border-2 border-blue-500 w-full rounded-full px-4 py-2 shadow-md hover:scale-105 transition duration-75 bg-transparent"
        type={inputType}
        min={1}
        step={step}
        disabled={disabled}
        onBlur={onBlur}
        onChange={(e) => onChange && onChange(e)}
        value={value}
      />
      {type === "password" && (
        <button
          className="p-2 self-center right-2 rounded-lg mb-2 absolute text-2xl"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            setInputType(inputType === "password" ? "text" : "password");
          }}
        >
          {inputType === "password" ? <GrFormView /> : <GrFormViewHide />}
        </button>
      )}
    </div>
  );
}
