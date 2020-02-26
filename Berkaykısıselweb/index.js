import 'ol/ol.css';
import Feature from 'ol/Feature';
import Map from 'ol/Map';
import View from 'ol/View';
import Point from 'ol/geom/Point';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import {fromLonLat} from 'ol/proj';
import TileJSON from 'ol/source/TileJSON';
import VectorSource from 'ol/source/Vector';
import {Icon, Style} from 'ol/style';


var rome = new Feature({
  geometry: new Point(fromLonLat([12.5, 41.9]))
});

var london = new Feature({
  geometry: new Point(fromLonLat([-0.12755, 51.507222]))
});

var madrid = new Feature({
  geometry: new Point(fromLonLat([-3.683333, 40.4]))
});

rome.setStyle(new Style({
  image: new Icon({
    color: '#8959A8',
    crossOrigin: 'anonymous',
    src: 'data/square.svg'
  })
}));

london.setStyle(new Style({
  image: new Icon({
    color: '#4271AE',
    crossOrigin: 'anonymous',
    src: 'data/square.svg'
  })
}));

madrid.setStyle(new Style({
  image: new Icon({
    color: [113, 140, 0],
    crossOrigin: 'anonymous',
    src: 'data/square.svg'
  })
}));


var vectorSource = new VectorSource({
  features: [rome, london, madrid]
});

var vectorLayer = new VectorLayer({
  source: vectorSource
});

var rasterLayer = new TileLayer({
  source: new TileJSON({
    url: 'https://a.tiles.mapbox.com/v3/aj.1x1-degrees.json',
    crossOrigin: ''
  })
});

var map = new Map({
  layers: [rasterLayer, vectorLayer],
  target: document.getElementById('map'),
  view: new View({
    center: fromLonLat([2.896372, 44.60240]),
    zoom: 3
  })
});