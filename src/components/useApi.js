import { useEffect, useState } from 'react'
import axios from 'axios'

const useApi = (query, pageNumber) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [characters, setCharacters] = useState([])
  const [characterList, setCharacterList] = useState([])
  const [more, setMore] = useState(false)

  useEffect(() => {
    setCharacters([])
    setCharacterList([])
  }, [query])

  useEffect(() => {
    setLoading(true)
    setError('')
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          'https://rickandmortyapi.com/api/character',
          {
            params: {
              name: query,
              page: pageNumber
            }
          }
        )
        // console.log(data)
        data.results.map((character) => {
          setCharacterList((prev) => {
            return [...new Set([...prev, character.name])]
          })
        })
        // console.log(characterList)
        setCharacters((previous) => {
          return [...previous, ...data.results]
        })
        setMore(data.info.next !== null)
        setLoading(false)
      } catch (error) {
        if (error.message === 'Request failed with status code 404') {
          setError('No Results')
          setLoading(false)
        } else {
          setError(error.message)
          setLoading(false)
        }
      }
    }
    fetchData()
  }, [query, pageNumber])

  return { loading, error, characters, more, characterList }
}

export default useApi
