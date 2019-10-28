import React from 'react'
import 'prismjs/themes/prism-solarizedlight.css'
import Root from './src/components/Root'

export const wrapRootElement = ({ element }) => {
  return (
    <Root className="test">{element}</Root>
  )
}
