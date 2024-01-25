import React from 'react'
import { startCase } from 'lodash'
import { auth } from '@clerk/nextjs'
import OrgControl from './_components/org-control'
import { Sidebar } from '../../_components/sidebar'

type Props = {
    children:React.ReactNode
}
export async function generateMetaData(){
  const {orgSlug} = auth()

}


const OrganizationIdLayout = ({children}: Props) => {
  return (
    <>
    {/* <OrgControl/> */}
    <div>OrganizationLayout</div>
    </>
  )
}

export default OrganizationIdLayout

//5 hr 58 min