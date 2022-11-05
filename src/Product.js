import React from 'react'
import Layout from './components/Layout'

import {Table,Button,AddIcon,Heading} from "evergreen-ui"

const product = () => {
  return (
    <div className="bg-white-800">
    <Layout>
   <a href="/AddProduct">
    <Button marginLeft={1300}  iconBefore={AddIcon} position="absolute" appearance="primary">
        Add Product
      </Button></a>
       <Heading marginLeft={240} size={900} is="h1">Product</Heading>
      <center>
       
      <Table.Body className='p-6 w-3/4'>
      
  <Table.Head>
 
    <Table.TextCell flexBasis={560} flexShrink={0} flexGrow={0}>
      Fixed width
    </Table.TextCell>
    <Table.TextCell>Flex me col 2</Table.TextCell>
    <Table.TextCell>Flex me col 3</Table.TextCell>
  </Table.Head>
  <Table.Body>
    <Table.Row>
      <Table.TextCell flexBasis={560} flexShrink={0} flexGrow={0}>
        Fixed width
      </Table.TextCell>
      <Table.TextCell>Flex me col 2</Table.TextCell>
      <Table.TextCell>Flex me col 3</Table.TextCell>
    </Table.Row>
    <Table.Row>
      <Table.TextCell flexBasis={560} flexShrink={0} flexGrow={0}>
        Fixed width
      </Table.TextCell>
      <Table.TextCell>Flex me col 2</Table.TextCell>
      <Table.TextCell>Flex me col 3</Table.TextCell>
    </Table.Row>
    <Table.Row>
      <Table.TextCell flexBasis={560} flexShrink={0} flexGrow={0}>
        Fixed width
      </Table.TextCell>
      <Table.TextCell>Flex me col 2</Table.TextCell>
      <Table.TextCell>Flex me col 3</Table.TextCell>
    </Table.Row>
    <Table.Row>
      <Table.TextCell flexBasis={560} flexShrink={0} flexGrow={0}>
        Fixed width
      </Table.TextCell>
      <Table.TextCell>Flex me col 2</Table.TextCell>
      <Table.TextCell>Flex me col 3</Table.TextCell>
    </Table.Row>
    <Table.Row>
      <Table.TextCell flexBasis={560} flexShrink={0} flexGrow={0}>
        Fixed width
      </Table.TextCell>
      <Table.TextCell>Flex me col 2</Table.TextCell>
      <Table.TextCell>Flex me col 3</Table.TextCell>
    </Table.Row>
    <Table.Row>
      <Table.TextCell flexBasis={560} flexShrink={0} flexGrow={0}>
        Fixed width
      </Table.TextCell>
      <Table.TextCell>Flex me col 2</Table.TextCell>
      <Table.TextCell>Flex me col 3</Table.TextCell>
    </Table.Row>
    <Table.Row>
      <Table.TextCell flexBasis={560} flexShrink={0} flexGrow={0}>
        Fixed width
      </Table.TextCell>
      <Table.TextCell>Flex me col 2</Table.TextCell>
      <Table.TextCell>Flex me col 3</Table.TextCell>
    </Table.Row>
    <Table.Row>
      <Table.TextCell flexBasis={560} flexShrink={0} flexGrow={0}>
        Fixed width
      </Table.TextCell>
      <Table.TextCell>Flex me col 2</Table.TextCell>
      <Table.TextCell>Flex me col 3</Table.TextCell>
    </Table.Row>
  </Table.Body>
</Table.Body>
</center></Layout>
    </div>
  )
}

export default product