import React from 'react'
import OrgControl from './_components/org-control'
import { Sidebar } from '../../_components/sidebar'
type Props = {
    children:React.ReactNode
}


const OrganizationIdLayout = ({children}: Props) => {
  return (
    <>
    <OrgControl/>
    <div>OrganizationLayout</div>
    </>
  )
}

export default OrganizationIdLayout