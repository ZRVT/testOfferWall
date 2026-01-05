import AppRoutes from './appRoutes'
import { AppContextProvider } from './context/context'

const App = () => {
  return (
    <>
      <AppContextProvider>
        <AppRoutes />
      </AppContextProvider>
    </>
  )
}

export default App
