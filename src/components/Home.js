import React, { useState, useRef, useCallback } from 'react'
import { debounce } from 'lodash'
import { FlexboxGrid, InputGroup, AutoComplete, Icon, Col, Panel } from 'rsuite'
import useApi from './useApi'

import Brief from './Brief'

const Home = () => {
  const [query, setQuery] = useState('')
  const [val, setVal] = useState('')
  const [pageNumber, setPageNumber] = useState(1)

  const { loading, error, characters, more, characterList } = useApi(
    query,
    pageNumber
  )

  const observer = useRef()
  const lastCharacter = useCallback(
    (node) => {
      if (loading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && more) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1)
        }
      })
      if (node) observer.current.observe(node)
    },
    [loading, more]
  )

  const dsearch = useCallback(
    debounce((value) => {
      setQuery(value)
    }, 500),
    []
  )

  const handleSearch = (value) => {
    const nextValue = value
    setVal(nextValue)
    dsearch(nextValue)
    setPageNumber(1)
  }

  return (
    <FlexboxGrid justify='center' align='middle' style={{ marginTop: '13vh' }}>
      <FlexboxGrid.Item colspan={24} className='text-center'>
        <h1 style={{ marginBottom: '5rem' }}>Rick and Morty Search</h1>
      </FlexboxGrid.Item>
      <FlexboxGrid.Item componentClass={Col} colspan={24} sm={12} md={8}>
        <InputGroup inside>
          <InputGroup.Addon>
            <Icon icon='search' style={{ color: '#e5e5ea' }} />
          </InputGroup.Addon>
          <AutoComplete
            data={characterList}
            value={val}
            onChange={handleSearch}
            placeholder='Search for a contact'
            menuClassName='y-overflow'
          />
        </InputGroup>
        <div className='results' style={{ marginTop: '0.5rem' }}>
          {characters.map((character, index) => {
            if (characters.length === index + 1) {
              return (
                <div ref={lastCharacter} key={character.id}>
                  <Brief character={character} />
                </div>
              )
            } else {
              return <Brief key={character.id} character={character} />
            }
          })}
          {loading && <Panel>Loading...</Panel>}
          {error && <Panel>Error</Panel>}
        </div>
      </FlexboxGrid.Item>
    </FlexboxGrid>
  )
}

export default Home
