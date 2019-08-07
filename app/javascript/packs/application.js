import 'mapbox-gl/dist/mapbox-gl.css';

import "bootstrap";
//import insert from './form/insertForm';
//import autocomplete from './form/autocomplete';
import { initMapbox } from './plugins/init_mapbox';
//import { sortList } from './plugins/sort_list';
import {textareaResize} from './input/textarea-resize'
//insert();
//autocomplete();
initMapbox();
//sortList();
textareaResize()


// import { initUpdateNavbarOnScroll } from '../components/navbar';
// initUpdateNavbarOnScroll();

import "controllers"
