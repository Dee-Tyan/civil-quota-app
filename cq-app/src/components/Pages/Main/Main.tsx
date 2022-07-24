import React from 'react'
import { Outlet, Route } from 'react-router-dom'
import Layout from '../../Layout/Layout'

const Main = () => {
  return (
    <Layout>
        <Outlet/>
    </Layout>
  )
}

export default Main