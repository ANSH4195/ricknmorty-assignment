import React, { useEffect, useRef, useState } from 'react'
import { Avatar } from 'rsuite'

const registerObserver = (ref, setShowImage) => {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      setShowImage(true)
      obs.disconnect()
    })
  })
  observer.observe(ref)
}

const LazyImage = ({ src }) => {
  const [showImage, setShowImage] = useState(false)
  const image = useRef(null)

  useEffect(() => {
    registerObserver(image.current, setShowImage)
  }, [])

  if (showImage) {
    return <Avatar circle src={src} />
  }
  return <span ref={image} style={styles} />
}

const styles = {
  background: '#999999',
  height: '40px',
  width: '40px',
  borderRadius: '50rem'
}

export default LazyImage
