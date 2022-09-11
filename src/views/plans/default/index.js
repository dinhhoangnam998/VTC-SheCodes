import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!

export default function Plan() {
    return (
        <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={[
                { title: 'ABC Club Meeting', date: '2022-09-02' },
                { title: 'Hackathon', date: '2022-09-10' },
                { title: 'SheCodes', date: '2022-09-11' },
                { title: 'Computer Vision Deadline', date: '2022-09-14' }
            ]}
        />
    );
}
