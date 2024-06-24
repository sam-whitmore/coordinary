const ProgressBar = ({
  step,
  totalSteps,
}: {
  step: number
  totalSteps: number
}) => {
  const percentage = (step / totalSteps) * 100

  return (
    <div className="relative mx-auto my-4 flex w-full max-w-2xl flex-col rounded-md bg-white p-3 shadow-md">
      <div className="mb-2 flex items-center justify-between">
        <div className="text-right">
          <span className="text-s inline-block font-semibold text-primary">
            {percentage.toFixed(0)}%
          </span>
        </div>
      </div>
      <div className="bg-primary-light mb-4 flex h-2 overflow-hidden rounded text-xs">
        <div
          style={{ width: `${percentage}%` }}
          className="flex flex-col justify-center whitespace-nowrap bg-primary text-center text-white shadow-none"
        ></div>
      </div>
    </div>
  )
}

export default ProgressBar
