import Cookies from 'js-cookie'
import React from 'react'
import { Navigate } from 'react-router-dom'

export default function RouteGuard({children}) {
    const token = Cookies.get("token")
  return (
    <div>
        {!token ? children : <Navigate to={"/"}/>}
    </div>
  )
}
