import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction'; // For interactive features
import EventModal from './EventModal'; // Ensure this component is properly created
import './styles/Home.css';
import './styles/AboutUs.css';
import 'react-toastify/dist/ReactToastify.css';

// Calendar component with printing, adding, and modal functionality
const CalendarCard = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Handles adding new events
  const handleDateClick = (arg) => {
    const title = prompt('Enter a title for your event:');
    if (title) {
      const newEvent = {
        title,
        start: arg.date,
        allDay: arg.allDay,
        // You can add more details here as needed
        description: 'Default description', // Placeholder, update accordingly
        venue: 'Default venue' // Placeholder, update accordingly
      };
      setEvents([...events, newEvent]);
    }
  };

  // Handles clicks on events to open modal with details
  const handleEventClick = (clickInfo) => {
    setSelectedEvent({
      title: clickInfo.event.title,
      start: clickInfo.event.start,
      venue: clickInfo.event.extendedProps.venue,
      description: clickInfo.event.extendedProps.description
    });
  };

  // Closes the modal
  const closeModal = () => {
    setSelectedEvent(null);
  };

  // Function to handle the print operation
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="about-us-card">
      <h1>Calendar Events</h1>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
        }}
        selectable={true}
        timeZone='local'
        businessHours={true}
        weekNumbers={true}
        events={events}
        eventClick={handleEventClick}
        dateClick={handleDateClick}
      />
      <button className="print-button" onClick={handlePrint}>Print Calendar</button>
      <p className="calendar-note">
        *All events located at main Temple site, unless otherwise specified.
      </p>
      {selectedEvent && <EventModal event={selectedEvent} onClose={closeModal} />}
    </div>
  );
}

export default CalendarCard;
