import React, { useState } from 'react'
import { Avatar, Button, FlexboxGrid, Icon, Modal, Panel } from 'rsuite'

const Brief = ({ character }) => {
  const [show, setShow] = useState(false)

  const close = () => setShow(false)
  const open = () => setShow(true)

  return (
    <>
      <Panel onClick={open}>
        <FlexboxGrid align='middle' justify='space-between'>
          <FlexboxGrid.Item colspan={12}>
            <div className='img-name'>
              <Avatar circle src={character.image} />
              <p style={{ marginLeft: '0.7rem' }}>{character.name}</p>
            </div>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={12}>
            <Icon
              icon='circle'
              style={{ color: '#b0c8d1', marginRight: '5px' }}
            />
            {character.status} - {character.species}
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </Panel>
      <Modal size='xs' show={show} onHide={close}>
        <Modal.Header></Modal.Header>
        <Modal.Body id='modal-body'>
          <Avatar circle src={character.image} />
          {/* <img src={character.image} alt={character.name} /> */}
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Brief
