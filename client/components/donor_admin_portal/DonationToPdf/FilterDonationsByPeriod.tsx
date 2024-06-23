import { useState } from 'react'

interface Props {
  onPeriodChange: (period: string) => void
}

export default function DonationFilter({ onPeriodChange }: Props) {
  const [period, setPeriod] = useState('1 year')

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newPeriod = e.target.value
    setPeriod(newPeriod)
    onPeriodChange(newPeriod)
  }

  return (
    <div className="filter-section mb-4 flex items-center space-x-4">
      <label htmlFor="period" className="mr-2 text-lg font-medium text-primary">
        Filter by period:
      </label>
      <select
        id="period"
        value={period}
        onChange={handleChange}
        className="block w-full max-w-xs rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      >
        <option value="1 week">1 Week</option>
        <option value="1 month">1 Month</option>
        <option value="3 months">3 Months</option>
        <option value="6 months">6 Months</option>
        <option value="1 year">1 Year</option>
      </select>
    </div>
  )
}
