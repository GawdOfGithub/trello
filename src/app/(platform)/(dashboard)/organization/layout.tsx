import {Sidebar} from '../_components/sidebar'
import React from 'react'

type Props = {
    children:React.ReactNode
}

const OrganizationLayout = ({children}: Props) => {
  return (

    <main className='pt-20 md:pt-24 px-4 max-w-6xl
    2xl:max-w-screen-xl mx-auto pl-0 ml-0
    '>
        <div className='flex gap-x-7'>
         <div className='w-64 shrink-0 hidden md:block ml-0'>
            <Sidebar/>
         </div>
        </div>
      
    {children}
    </main> 
  )
}

export default OrganizationLayout