import {Map} from 'maplibre-gl';

const map = new Map({
    container: 'map',
    zoom: 1,
    center: [0, 0],
    style: { 
        "version": 8,
        "sources": {
            "satellite": {
                "type": "raster",
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
