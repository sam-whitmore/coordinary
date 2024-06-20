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
    <div className="grid grid-cols-2 gap-2">
      <div>
        <Link to={`../../../${props.slug}`} className="text-xl">
          {props.name}
        </Link>
      </div>
      <div>
        <button
          className={`mx-5 ${selectedForUnfollowing ? 'hidden' : ''}`}
          onClick={handleSelectForUnfollowing}
        >
          Unfollow
        </button>
        <button
          className={`${selectedForUnfollowing ? '' : 'hidden'}`}
          onClick={handleUnfollow}
        >
          Confirm Unfollow
        </button>
        <button
          className={`mx-5 ${selectedForUnfollowing ? '' : 'hidden'}`}
          onClick={handleCancelUnfollow}
        >
          Cancel
        </button>
      </div>
    </div>
  )
}
