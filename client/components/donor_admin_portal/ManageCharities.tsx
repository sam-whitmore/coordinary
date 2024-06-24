import { useAuth0 } from '@auth0/auth0-react'
import useFollowedCharities from '../../hooks/useFollowedCharities'
import CharityListItem from './CharityListItem'
import { Link } from 'react-router-dom'

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
    <section className="relative h-full w-[90%] ">
      <div className="h-auto w-auto  bg-background p-6">
        <div className="flex items-center">
          <h1 className="mb-4 font-display text-5xl font-medium capitalize text-secondary">
            Your
          </h1>
          <h1 className="mb-4 font-display text-5xl font-medium capitalize text-primary">
            Charities
          </h1>
        </div>
        {data.length === 0 ? (
          <div className="rounded-lg bg-white p-8 text-center shadow-md">
            <p className="text-lg text-secondary">
              Uh oh, it seems you dont follow any charities yet.
            </p>
            <Link
              to="/"
              className="hover:text-primary-dark text-primary underline"
            >
              Lets find you one
            </Link>
          </div>
        ) : (
          <ul>
            {data.map((charity) => (
              <li key={charity.id}>
                <CharityListItem
                  {...{ ...charity, useUnfollow: handleUnfollow }}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
