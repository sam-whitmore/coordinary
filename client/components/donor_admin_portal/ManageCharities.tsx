import { useAuth0 } from '@auth0/auth0-react'
import useFollowedCharities from '../../hooks/useFollowedCharities'
import CharityListItem from './CharityListItem'

interface Props {
  userId: number
}

export default function ManageCharities(props: Props) {
  const { isLoading, isError, data, unfollow } = useFollowedCharities(
    props.userId,
  )
  const { getAccessTokenSilently } = useAuth0()

  const handleUnfollow = async ({ id }: { id: number }) => {
    const token = await getAccessTokenSilently()
    await unfollow.mutateAsync({ token, charityId: id, donorId: props.userId })
  }

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError || !data) {
    return <p>Something went wrong!</p>
  }

  return (
    <>
      <ul>
        {data.map((charity) => {
          return (
            <li key={charity.id}>
              <CharityListItem
                {...{ ...charity, useUnfollow: handleUnfollow }}
              />
            </li>
          )
        })}
      </ul>
    </>
  )
}
