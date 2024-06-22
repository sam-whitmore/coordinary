import Sidebar from '../components/charity_landing_page/Sidebar'
import { Outlet } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import useCharities from '../hooks/useCharities'

export default function CharityLandingPage() {

  const {charitySlug} = useParams()
  const { data: charity, isPending, isError, error } = useCharities().get(charitySlug as string) 

  if (isPending) {
    return (
      <p>Loading...</p>
    )
  }
  if (isError) {
    return (
      <p>{error.message}</p>
    )
  }

  return (
    <div className="flex h-[90%] w-screen">
      <Sidebar />
      <Outlet />
    </div>
  )
}
