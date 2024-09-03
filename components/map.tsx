'use client'

import React from 'react'
import { Map } from 'mapkit-react'

export function MapComponent () {
  return (
    <Map
      colorScheme={2}
      distances={0}
      loadPriority={2}
      mapType={2}
      showsScale={1}
      showsUserLocation
      token='INSERT-TOKEN-HERE'
    />
  )
}
