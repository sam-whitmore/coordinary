import React, { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import {
  useFollowCharity,
  useUnfollowCharity,
} from '../hooks/useFollowedCharities'
import * as API from '../apis/charities'
import Heart from 'react-animated-heart'

interface ButtonProps {
  donorId: number
  charityId: number
}

const FollowCharityButton: React.FC<ButtonProps> = ({ donorId, charityId }) => {
  const { getAccessTokenSilently } = useAuth0()
  const followCharityMutation = useFollowCharity()
  const unfollowCharityMutation = useUnfollowCharity()

  const [isFollowing, setIsFollowing] = useState(false)

  useEffect(() => {
    const checkIfFollowing = async () => {
      try {
        const token = await getAccessTokenSilently()
        const followedCharities = await API.getCharitiesByDonorFollowing(
          token,
          donorId,
        )
        const isCurrentlyFollowing = followedCharities.some(
          (charity) => charity.id === charityId,
        )
        setIsFollowing(isCurrentlyFollowing)
      } catch (error) {
        console.error('Failed to check follow status:', error)
      }
    }

    checkIfFollowing()
  }, [charityId, donorId, getAccessTokenSilently])

  const handleFollowToggle = async () => {
    try {
      const token = await getAccessTokenSilently()
      if (isFollowing) {
        unfollowCharityMutation.mutate({ token, donorId, charityId })
      } else {
        followCharityMutation.mutate({ token, donorId, charityId })
      }
      setIsFollowing(!isFollowing)
    } catch (error) {
      console.error('Failed to toggle follow status:', error)
    }
  }

  return (
    <div className="mb-1 inline-block scale-100 transform cursor-pointer">
      <Heart {...{ isClick: isFollowing, onClick: handleFollowToggle }} />
    </div>
  )
}

export default FollowCharityButton
