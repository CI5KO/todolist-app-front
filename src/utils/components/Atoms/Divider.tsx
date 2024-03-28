type DividerProps = {
  text: string
}

export default function Divider({ text = 'Example' }: DividerProps) {
  return (
    <div className="my-4 flex items-center gap-4 before:h-px before:flex-1 before:bg-gray-300  before:content-[''] after:h-px after:flex-1 after:bg-gray-300  after:content-[''] text-xl fond-bold">
      {text}
    </div>
  )
}
