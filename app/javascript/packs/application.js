import 'mapbox-gl/dist/mapbox-gl.css';

import "bootstrap";
//import insert from './form/insertForm';
//import autocomplete from './form/autocomplete';
import { initMapbox } from './plugins/init_mapbox';
//import { sortList } from './plugins/sort_list';
import {textareaResize} from './input/textarea-resize'
import {showFile, toHtmlNumericInput, durationHelper } from './input/file_input_helper'

import {flatPickr} from './plugins/init_flatpickr'
import {countChar} from './input/char_counter'
import {validateCapacity, validatePrice} from './input/validate_input'
//autocomplete();
initMapbox();
//sortList();
textareaResize()
showFile()
flatPickr()
toHtmlNumericInput( )
countChar()
durationHelper()
validateCapacity()
validatePrice()
// import { initUpdateNavbarOnScroll } from '../components/navbar';
// initUpdateNavbarOnScroll();

import "controllers"
