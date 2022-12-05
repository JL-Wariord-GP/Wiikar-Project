import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux/es/hooks/useSelector'

const ProtectedRoutes = () => {
  const nameCarsAlls = useSelector(state => state.nameCarsAlls)

    if (nameCarsAlls) {
        return <Outlet/>
    } else {
        return <Navigate to='/' />
    }
  return (
    <div>ProtectedRoutes</div>
  )
}

export default ProtectedRoutes