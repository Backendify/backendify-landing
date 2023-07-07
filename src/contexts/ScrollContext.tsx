import { ReactNode, createContext, useRef } from 'react'


export interface ScrollContextData {
  featuringSectionRef: React.RefObject<HTMLAnchorElement>,
  pricingSectionRef: React.RefObject<HTMLAnchorElement>,
  subscribeSectionRef: React.RefObject<HTMLAnchorElement>,
}

export const ScrollContext = createContext<ScrollContextData>({} as ScrollContextData)

export const ScrollProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const featuringSectionRef = useRef(null)
  const pricingSectionRef = useRef(null)
  const subscribeSectionRef = useRef(null)

  return (
    <ScrollContext.Provider value={{ featuringSectionRef, pricingSectionRef, subscribeSectionRef }}>
      {children}
    </ScrollContext.Provider>
  )
}
