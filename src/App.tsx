/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useEffect, useRef, useState } from 'react'
import './App.css'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { message } from 'antd'

mapboxgl.accessToken = ''
const App: React.FC<{}> = () => {
  const mapContainerRef = useRef<any>(null)
  const [lng, setLng] = useState(106.6643)
  const [lat, setLat] = useState(10.8038)
  const [zoom, setZoom] = useState(12.83)

  const success = (): void => {
    const hide = message.loading('Action in progress..', 0)
    // Dismiss manually and asynchronously
    setTimeout(hide, 2500)
  }
  // Initialize map when component mounts
  useEffect(() => {
    // if (mapContainerRef.current != null) return
    const map = new mapboxgl.Map({
      container: mapContainerRef.current ?? '',
      style: 'mapbox://styles/mapbox/dark-v10',
      center: [lng, lat],
      zoom
    })

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'top-right')

    map.on('move', () => {
      setLng(Number(map.getCenter().lng.toFixed(4)))
      setLat(Number(map.getCenter().lat.toFixed(4)))
      setZoom(Number(map.getZoom().toFixed(2)))
    })

    // Clean up on unmount
    return () => {
      success()

      map.remove()
    }
  }, [])

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
        </a>
      </div>
      <div className='card'>
        <h1>Vite + React</h1>
        <div className='sidebarStyle'>
          <div>
            Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
          </div>
        </div>
        <div className='map-container' ref={mapContainerRef} />
      </div>
      <div>
      </div>
    </div>
  )
}

export default App
