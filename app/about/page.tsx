'use client'

import GalleryImage from '@/components/gallery-image'
import { Card } from '@/components/ui/card'
import Translator from '@/components/translator'
import { useEffect, useRef, useState } from 'react'
import { useTheme } from 'next-themes'
import 'leaflet/dist/leaflet.css'

export default function About () {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)
  const tileLayerRef = useRef<any>(null)
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Handle hydration
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    // Dynamically import Leaflet to avoid SSR issues
    if (
      typeof window !== 'undefined' &&
      mapRef.current &&
      !mapInstanceRef.current &&
      mounted
    ) {
      import('leaflet').then(L => {
        if (!mapRef.current || mapInstanceRef.current) return

        const map = L.map(mapRef.current).setView([-43.5, 170.5], 6)
        mapInstanceRef.current = map

        // Get current theme (use resolvedTheme to handle 'system' preference)
        const currentTheme = resolvedTheme || theme || 'light'
        const isDark = currentTheme === 'dark'

        // Using different tile providers for light/dark mode
        const tileUrl = isDark
          ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
          : 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

        const attribution = isDark
          ? '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          : '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

        // Add tile layer
        const tileLayer = L.tileLayer(tileUrl, {
          attribution,
          maxZoom: 19
        }).addTo(map)

        tileLayerRef.current = tileLayer

        // City coordinates
        const cities: {
          invercargill: { coords: [number, number]; name: string }
          nelson: { coords: [number, number]; name: string }
          christchurch: { coords: [number, number]; name: string }
        } = {
          invercargill: {
            coords: [-46.4132, 168.3538],
            name: 'Waihōpai (Invercargill)'
          },
          nelson: { coords: [-41.2706, 173.284], name: 'Whakatū (Nelson)' },
          christchurch: {
            coords: [-43.5321, 172.6362],
            name: 'Ōtautahi (Christchurch)'
          }
        }

        // Custom icon for markers
        const customIcon = L.divIcon({
          className: 'custom-marker',
          html: '<div style="background: hsl(var(--primary)); width: 16px; height: 16px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3);"></div>',
          iconSize: [16, 16],
          iconAnchor: [8, 8]
        })

        // Add markers
        L.marker(cities.invercargill.coords, { icon: customIcon })
          .addTo(map)
          .bindPopup(
            `<strong>${cities.invercargill.name}</strong><br/>Born and raised`
          )

        L.marker(cities.nelson.coords, { icon: customIcon })
          .addTo(map)
          .bindPopup(
            `<strong>${cities.nelson.name}</strong><br/>Fresh start at 18`
          )

        L.marker(cities.christchurch.coords, { icon: customIcon })
          .addTo(map)
          .bindPopup(
            `<strong>${cities.christchurch.name}</strong><br/>Current home`
          )

        // Draw arrows between cities
        const drawArrow = (from: [number, number], to: [number, number]) => {
          // Draw the line
          L.polyline([from, to], {
            color: 'hsl(var(--primary))',
            weight: 3,
            opacity: 0.7,
            dashArray: '10, 10',
            className: 'journey-path'
          }).addTo(map)

          // Calculate arrow position (at the end of the line)
          const arrowIcon = L.divIcon({
            className: 'arrow-marker',
            html: `<div style="
              width: 0; 
              height: 0; 
              border-left: 8px solid transparent;
              border-right: 8px solid transparent;
              border-top: 12px solid hsl(var(--primary));
              transform: rotate(${calculateAngle(from, to)}deg);
              filter: drop-shadow(0 1px 2px rgba(0,0,0,0.2));
            "></div>`,
            iconSize: [16, 16],
            iconAnchor: [8, 0]
          })

          L.marker(to, { icon: arrowIcon }).addTo(map)
        }

        // Calculate angle for arrow rotation
        const calculateAngle = (
          from: [number, number],
          to: [number, number]
        ) => {
          const dx = to[1] - from[1]
          const dy = to[0] - from[0]
          return (Math.atan2(dx, dy) * 180) / Math.PI
        }

        // Draw journey arrows
        drawArrow(cities.invercargill.coords, cities.nelson.coords)
        drawArrow(cities.nelson.coords, cities.christchurch.coords)

        // Fit bounds to show all cities
        const bounds = L.latLngBounds([
          cities.invercargill.coords,
          cities.nelson.coords,
          cities.christchurch.coords
        ])
        map.fitBounds(bounds, { padding: [50, 50] })
      })
    }

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [mounted, resolvedTheme])

  // Watch for theme changes and update map tiles
  useEffect(() => {
    if (!mounted || !mapInstanceRef.current || !tileLayerRef.current) return

    import('leaflet').then(L => {
      const currentTheme = resolvedTheme || theme || 'light'
      const isDark = currentTheme === 'dark'

      const tileUrl = isDark
        ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
        : 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

      const attribution = isDark
        ? '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        : '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

      // Remove old tile layer
      if (tileLayerRef.current) {
        mapInstanceRef.current.removeLayer(tileLayerRef.current)
      }

      // Add new tile layer
      const newTileLayer = L.tileLayer(tileUrl, {
        attribution,
        maxZoom: 19
      }).addTo(mapInstanceRef.current)

      tileLayerRef.current = newTileLayer
    })
  }, [mounted, theme, resolvedTheme])

  return (
    <div className='container max-w-6xl py-6 lg:py-10'>
      {/* Header Section */}
      <div className='flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8'>
        <div className='flex-1 space-y-4'>
          <h1 className='inline-block font-black text-4xl lg:text-6xl'>
            About
          </h1>
          <p className='text-xl md:text-2xl text-muted-foreground font-light'>
            In case you find me really interesting.
          </p>
        </div>
      </div>

      <hr className='my-8 border-muted' />

      {/* Content Grid - Better for mobile */}
      <div className='grid gap-8 lg:grid-cols-2 lg:gap-12 my-8'>
        {/* Text Content */}
        <div className='space-y-8 text-lg leading-relaxed'>
          <div className='space-y-4'>
            <h2 className='text-2xl font-bold'>Who I Am</h2>
            <p className='text-muted-foreground'>
              I have a passion for programming and really enjoy the
              problem-solving aspect and seeing my solutions come to life. When
              I&apos;m not studying, I enjoy being out in nature, cooking or
              hanging with my cat, Zena. I also enjoy working out and have
              recently taken up pilates.
            </p>
          </div>

          <div className='space-y-4'>
            <h2 className='text-2xl font-bold'>My Journey</h2>
            <div className='text-muted-foreground'>
              I was born and raised down south in{' '}
              <Translator english='Invercargill' maori='Waihōpai' />. At 18 I
              moved north to sunny{' '}
              <Translator english='Nelson' maori='Whakatū' /> for a fresh start.
              I began studying at Nelson Marlborough Institute of Technology and
              earned my Diploma in Web Design and Development. From there I
              moved to <Translator english='Christchurch' maori='Ōtautahi' />{' '}
              with my partner to continue study in order to earn my Bachelor of
              Information Technology.
            </div>
          </div>

          <div className='space-y-4'>
            <h2 className='text-2xl font-bold'>What Drives Me</h2>
            <p className='text-muted-foreground'>
              I have a passion for sustainability and a community-driven
              approach to life. I have a strong interest in urban planning and
              transport in particular. I want to be able to leverage my IT
              skills in order to create solutions that provide a positive impact
              on the environment and society.
            </p>
          </div>
        </div>

        {/* Map Section */}
        <div className='space-y-6'>
          <div className='space-y-2'>
            <h2 className='text-2xl font-bold'>My Path Through Aotearoa</h2>
            <p className='text-sm text-muted-foreground'>
              Follow my journey from the south to where I am today
            </p>
          </div>
          <Card className='overflow-hidden'>
            <div
              ref={mapRef}
              className='w-full h-[400px] md:h-[500px] bg-muted'
              style={{ zIndex: 0 }}
            />
          </Card>
        </div>
      </div>

      {/* Photo Gallery - Grid instead of Carousel */}
      <div className='my-16'>
        <h2 className='text-2xl font-bold mb-6'>Snapshots</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          <Card className='overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow'>
            <GalleryImage
              alt='Ōtautahi'
              description='Ōtautahi'
              src='/images/chch.jpg'
              width={600}
              height={400}
            />
          </Card>
          <Card className='overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow'>
            <GalleryImage
              alt='Zena the cat'
              description='Zena the cat.'
              src='/images/zena.jpg'
              width={400}
              height={600}
            />
          </Card>
          <Card className='overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow'>
            <GalleryImage
              alt='Invercargill'
              description='Ōreti beach, Waihōpai'
              src='/images/invers.jpg'
              width={400}
              height={600}
            />
          </Card>
          <Card className='overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow'>
            <GalleryImage
              alt='Nelson'
              description='Nelson'
              src='/images/nelson.jpg'
              width={600}
              height={400}
            />
          </Card>
        </div>
      </div>
    </div>
  )
}
