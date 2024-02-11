import { useState, useEffect, type ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
}

const setOverflow = (text: string): void => {
  if (document === undefined) return;
  document.body.style.overflow = text;
};

export default function Modal({ isOpen, children, onClose }: ModalProps) {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => setMounted(true), []);
  if (mounted === false) return <></>;

  const { error } = console;

  console.error = (...args: any) => {
    if (/setOverflow/.test(args[0])) return;
    error(...args);
  };

  if (!isOpen) {
    setOverflow("auto");
    return <></>;
  }

  setOverflow("hidden");
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-[550]">
      <div
        className="absolute w-full h-full backdrop-blur-[2px] bg-gray-800/50"
        onClick={onClose}
      />
      <div className="bg-[#ececec] dark:bg-[#23222A] z-50 rounded-lg p-8 w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3">
        {children}
      </div>
    </div>
  );
}
