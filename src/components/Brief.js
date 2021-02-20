import React, { useState } from 'react'
import { Avatar, Divider, FlexboxGrid, Icon, Modal, Panel } from 'rsuite'

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
        <Modal.Body>
          <FlexboxGrid justify='space-around' align='top'>
            <FlexboxGrid.Item colspan={8}>
              <Avatar circle src={character.image} size='lg' />
            </FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={12} style={{ marginTop: '1rem' }}>
              <p className='title'>{character.name}</p>
              <p>
                <Icon
                  icon='circle'
                  style={{ color: '#b0c8d1', marginRight: '5px' }}
                />
                {character.status} - {character.species}
              </p>
            </FlexboxGrid.Item>
          </FlexboxGrid>
          <Divider />
          <FlexboxGrid justify='center' align='center'>
            <FlexboxGrid.Item colspan={8}>
              <small>Gender</small>
              <p>{character.gender}</p>
            </FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={8}>
              <small>Location</small>
              <p>{character.location.name}</p>
            </FlexboxGrid.Item>
            <FlexboxGrid.Item
              colspan={24}
              style={{ margin: '0.8rem 0' }}
            ></FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={8}>
              <small>Species</small>
              <p>{character.species}</p>
            </FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={8}>
              <small>Origin</small>
              <p>{character.origin.name}</p>
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Brief
