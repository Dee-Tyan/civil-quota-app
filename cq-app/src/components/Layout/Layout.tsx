import React, { ReactNode } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

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
          <Footer />
      </div>

    </>
  )
}

export default Layout