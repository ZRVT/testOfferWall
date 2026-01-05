import { createContext, useState } from 'react'

const AppContext = createContext(null)

const AppContextProvider = ({ children }) => {
  const [campaigns, setCampaigns] = useState([])

  return (
    <AppContext.Provider value={{ campaigns, setCampaigns }}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContextProvider }

// This is used later on, still need to understand this better.
// I don't want to do drill down props, so this will allow me to centralize it here
// This keeps the logic central and keeps the pages more clean.
// This way if i change any of the values in the future, i only need to change it here
