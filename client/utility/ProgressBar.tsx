const ProgressBar = ({
  step,
  totalSteps,
}: {
  step: number
  totalSteps: number
}) => {
  const percentage = (step / totalSteps) * 100

  return (
    <div className="relative pt-1">
      <div className="mb-2 flex items-center justify-between">
        <div>
          <span className="bg-primary-light text-s inline-block rounded-full px-2 py-1 font-semibold uppercase text-primary">
            Step {step} of {totalSteps}
          </span>
        </div>
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
