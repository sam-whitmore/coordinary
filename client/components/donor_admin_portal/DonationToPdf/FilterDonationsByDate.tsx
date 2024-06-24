import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { format } from 'date-fns'

interface Props {
  onDateChange: (date: string) => void
}

export default function DateFilter({ onDateChange }: Props) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const handleChange = (date: Date | null) => {
    setSelectedDate(date)
    if (date) {
      onDateChange(format(date, 'yyyy-MM-dd'))
    } else {
      onDateChange('')
    }
  }

  return (
    <div className="date-filter mb-4 flex items-center space-x-4">
      <label htmlFor="date" className="mr-2 text-lg font-medium text-primary">
        Filter by date:
      </label>
      <DatePicker
        selected={selectedDate}
        onChange={handleChange}
        dateFormat="yyyy-MM-dd"
        className="block w-full max-w-xs rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        placeholderText="Select a date"
      />
    </div>
  )
}
