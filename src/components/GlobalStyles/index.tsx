import { ComponentProps } from '@/utils/interface'
import './GlobalStyles.scss'
import React from 'react'

const GlobalStyles: React.FC<ComponentProps> = ({ children }) => {
  return <> {children}</>
}

export default GlobalStyles
