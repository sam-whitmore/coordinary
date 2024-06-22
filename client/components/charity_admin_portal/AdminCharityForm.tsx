interface CharityFormFieldProps {
  label: string
  name: string
  value: string | number | undefined
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
  className?: string
}

const CharityFormField: React.FC<CharityFormFieldProps> = ({
  label,
  name,
  value,
  onChange,
  type = 'text',
  className = '',
}) => {
  return (
    <div className={`mb-4 mt-2 flex items-center ${className}`}>
      <label className="w-1/4 pr-4 text-right">{label}</label>
      <input
        className="flex-1 rounded border px-2 py-1"
        name={name}
        value={value}
        onChange={onChange}
        type={type}
      />
    </div>
  )
}

export default CharityFormField
