import { Outlet } from 'react-router-dom'
import { Header, Footer } from './index'

// used outlet here so that i can easier control the layout of the app
const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout
