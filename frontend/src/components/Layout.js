import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import PageUser from './Header/PageUser'
import { auth } from '../store/actions'
import Header from './Header/Header'

const Layout = () => {
  const dispatch = useDispatch()

  const isAuth = useSelector((state) => state.user.isAuth)

  useEffect(() => {
    dispatch(auth())
  }, [dispatch])

  return (
    <>
      {isAuth ? <PageUser /> : <Header />}
      <Outlet />
    </>
  )
}

export default Layout
