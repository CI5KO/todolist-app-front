interface SelectProps {
  onChange?: (e?: any) => void
  displayOption?: string
  options?: Option[]
  primary?: PrimaryOption
}

type Option = {
  value: string | number
  label: string
  selected?: boolean
}

interface PrimaryOption extends Omit<Option, 'selected'> {}

export default function Select({
  onChange,
  displayOption = 'Main Option',
  options = [
    { value: 1, label: 'Option 1' },
    { value: 2, label: 'Option 2' },
  ],
  primary,
}: SelectProps) {
  return (
    <select
      className="border-2 border-blue-500 w-full rounded-full px-4 py-2 shadow-md hover:scale-105 transition duration-75 bg-transparent"
      onChange={onChange}
      value={primary?.value}
    >
      <option value="DEFAULT" disabled>
        {displayOption}
      </option>
      {primary?.value && (
        <option value={primary?.value}>{primary?.label}</option>
      )}
      {options.map((option, index) => (
        <option value={option.value} key={index}>
          {option.label}
        </option>
      ))}
    </select>
  )
}
