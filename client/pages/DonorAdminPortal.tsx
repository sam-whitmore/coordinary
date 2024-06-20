import { useAuth0 } from '@auth0/auth0-react'
import ManageDetails from '../components/donor_admin_portal/ManageDetails'
import useActiveDonor from '../hooks/useDonors'
import { DonorData } from '../../models/donor'
import DonorAdminSidebar from '../components/donor_admin_portal/DonorAdminSidebar'
import DonorAdminNav from '../components/donor_admin_portal/DonorAdminNav'
import { Outlet } from 'react-router-dom'

export default function DonorAdminPortal() {
  return (
    <div className="border-box h-screen w-screen border-4 border-red-400">
      <DonorAdminNav />
      <div className="flex h-[90%] w-full">
        <DonorAdminSidebar />
        <Outlet />
      </div>
    </div>
  )
}

// export default function DonorProfilePage() {
//   const { isLoading, isError, data, edit } = useActiveDonor()
//   const { getAccessTokenSilently } = useAuth0()

//   if (isLoading) {
//     return <p>Loading...</p>
//   }

//   if (isError || !data) {
//     return <p>Something went wrong!</p>
//   }

//   const handleSubmit = async (data: DonorData) => {
//     const token = await getAccessTokenSilently()

//     await edit.mutateAsync({ token, data })
//   }

//   return (
//     <>
//       <ManageDetails {...{ email: data.email, onSubmit: handleSubmit }} />
//     </>
//   )
// }
