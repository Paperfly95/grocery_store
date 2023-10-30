import React from 'react'
import { MainNavigation } from '../components/MainNavigation'
import { Outlet } from 'react-router'

export const Root = () => {
  return (
    <>
        <MainNavigation />
        <main className="w-100 d-flex flex-wrap justify-content-center gap-3 p-3"><Outlet /></main>
    </>
  )
}
