import { useState } from 'react'
import { Charity } from '../../../models/charity'
import { Link } from 'react-router-dom'

interface Props extends Charity {
  useUnfollow: (_) => void
}

export default function CharityListItem(props: Props) {
  const [selectedForUnfollowing, setSelectedForUnfollowing] = useState(false)

  //we need to display the relevant data from the charity
  //we want to have a button to unfollow
  //but we don't want that button to actually unfollow immediately, just to mark it as 'being unfollowed'

  //another button that actually commits that unfollow

  const handleSelectForUnfollowing = () => {
    setSelectedForUnfollowing(() => true)
  }

  const handleUnfollow = () => {
    props.useUnfollow({ id: props.id })
  }

  const handleCancelUnfollow = () => {
    setSelectedForUnfollowing(() => false)
  }

  return (
    <section className="py-4">
      <div className="grid grid-cols-2 items-center gap-4 rounded-lg bg-white p-4 shadow-md">
        <div>
          <Link
            to={`../../../${props.slug}`}
            className="hover:text-primary-dark font-display text-2xl font-medium capitalize text-primary"
          >
            {props.name}
          </Link>
        </div>
        <div className="flex justify-end space-x-3">
          <button
            className={`rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600 ${selectedForUnfollowing ? 'hidden' : ''}`}
            onClick={handleSelectForUnfollowing}
          >
            Unfollow
          </button>
          <button
            className={`rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-600 ${selectedForUnfollowing ? '' : 'hidden'}`}
            onClick={handleUnfollow}
          >
            Confirm Unfollow
          </button>
          <button
            className={`rounded-md bg-gray-500 px-4 py-2 text-white hover:bg-gray-600 ${selectedForUnfollowing ? '' : 'hidden'}`}
            onClick={handleCancelUnfollow}
          >
            Cancel
          </button>
        </div>
      </div>
    </section>
  )
}
