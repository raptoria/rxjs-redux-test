import React from 'react'
import { Breadcrumb } from 'semantic-ui-react'

const Breadcrumbs = () => (
  <Breadcrumb size='large'>
    <Breadcrumb.Section link>Home</Breadcrumb.Section>
    <Breadcrumb.Divider icon='right chevron' />
    <Breadcrumb.Section link>Wave</Breadcrumb.Section>
    <Breadcrumb.Divider icon='right chevron' />
    <Breadcrumb.Section active>Child Order</Breadcrumb.Section>
  </Breadcrumb>
)

export default Breadcrumbs