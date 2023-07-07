import { useContext } from 'react'
import { ScrollContext, ScrollContextData } from '../contexts/ScrollContext'


export const useScroll = (): ScrollContextData => {
  const context = useContext(ScrollContext)

  return context
}
