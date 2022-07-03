import React, { ReactNode } from 'react'
import Header from '../Header/Header'

interface LayOut {
    children: React.ReactNode
}
const Layout = (props: LayOut) => {
  return (
    <>
      <div>
          <Header />
          <main className=''>
        {props.children}
          </main>
      </div>

    </>
  )
}

export default Layout