import React, { useState } from 'react'
import { Avatar, Divider, FlexboxGrid, Icon, Modal, Panel } from 'rsuite'
import LazyImage from './LazyImage'
import Details from './Details'

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
              <LazyImage src={character.image} />
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
      <Details show={show} close={close} character={character} />
    </>
  )
}

export default Brief
