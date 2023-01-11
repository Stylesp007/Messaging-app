import React from 'react'
import { Tab, Nav } from 'react-bootstrap'
export default function Sidebar({ id }) {
  return (
    <div style={{ width: '250px'}} className="d-flex flex-column">
      <Tab.Container>
        <Nav.Item>
          <Nav.Link eventKey= "conversations">Conversations</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey = "contacts">Contacts</Nav.Link>
        </Nav.Item>
      </Tab.Container>
    </div>
  )
}
