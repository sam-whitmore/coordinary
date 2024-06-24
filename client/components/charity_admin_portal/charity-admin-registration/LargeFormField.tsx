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
        className="mt-1 block w-full resize-none rounded-md border border-gray-300 bg-white p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
      />
    </div>
  )
}

export default LargeFormField
