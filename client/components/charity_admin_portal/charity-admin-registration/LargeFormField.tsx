interface Props {
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  className?: string
}

const LargeFormField: React.FC<Props> = ({
  label,
  name,
  value,
  onChange,
  className,
}) => {
  return (
    <div className={`form-field ${className}`}>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={5}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      />
    </div>
  )
}

export default LargeFormField
