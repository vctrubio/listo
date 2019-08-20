import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.min.css'

export const flatPickr = () => {
   const today = new Date()
   flatpickr("#list_place_place_attributes_start_time", {
    enableTime: true,
    minuteIncrement: 15,
    minDate: today,
   });

   flatpickr("#list_place_place_attributes_length", {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    time_24hr: true
   });
}
