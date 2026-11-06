// Declare Client-Side Code
'use client';

import { useEffect, useRef } from 'react';
import {Map} from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

export default function MapComponent() {

    // Reference The Map HTML Element In The Browser - Start As null Because The Element Has Not Yet Been Rendered By Return
    const mapContainerRef = useRef(null);

    useEffect(() => {

        // Verify The Container Exists In The Browser
        if(!mapContainerRef.current) return;

        const map = new Map({
            container: mapContainerRef.current,
            zoom: 1,
            center: [0, 0],
            style: { 
                "version": 8,
                "sources": {
                    "satellite": {
                        "type": "raster",
                        // FIND MORE RECENT & BETTER RENDERING SATELLITE TILES 
                        "tiles": [
                            "https://tiles.maps.eox.at/wmts/1.0.0/s2cloudless-2020_3857/default/g/{z}/{y}/{x}.jpg" 
                        ],
                        "tileSize": 256, 
                    }
                },
                "layers": [{
                    "id": "satellite",
                    "type": "raster",
                    "source": "satellite",
                }]
            }
        });

        // Remove The Map Instance When The Page Is Closed To Prevent Memory Leaks
        return () => map.remove();
    }, []);

    // Render The Map div In The Browser
    return (
        <div
            ref={mapContainerRef}
            style={{ width: '100%', height: '500px' }}
        />
    ); 
}
