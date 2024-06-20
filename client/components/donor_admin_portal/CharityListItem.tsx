import { useState } from 'react'
import { Charity } from '../../../models/charity'

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
    props.useUnfollow(props.id)
  }

  return (
    <>
      <p>{props.name}</p>
      <br />
      <button onClick={handleSelectForUnfollowing}>Unfollow</button>
      <button
        className={`${selectedForUnfollowing ? '' : 'hidden'}`}
        onClick={handleUnfollow}
      >
        Confirm Unfollow
      </button>
    </>
  )
}
