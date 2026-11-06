// PAGE IS NOT MEANT TO BE SERVER SIDE - CHANGE THIS AFTER TESTING
'use client';

import dynamic from "next/dynamic"

// Disable Server Side Rendering For Map Component
const MapComponent = dynamic(
    () => import('./components/map/MapComponent'),
    { ssr: false }
);

export default function Page(){
    return <MapComponent/>
}
