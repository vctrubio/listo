import 'mapbox-gl/dist/mapbox-gl.css';

import "bootstrap";
import insert from './form/insertForm';
import autocomplete from './form/autocomplete';
import { initMapbox } from './plugins/init_mapbox';


insert();
autocomplete();
initMapbox();
