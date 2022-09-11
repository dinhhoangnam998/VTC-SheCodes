import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!

export default function Plan() {
    return <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />;
}
