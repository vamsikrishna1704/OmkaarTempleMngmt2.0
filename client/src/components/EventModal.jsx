import React from 'react';

const EventModal = ({ event, onClose }) => {
  if (!event) return null; // If there is no event, don't render the modal

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>{event.title}</h2>
        <p><strong>Date:</strong> {event.start ? event.start.toLocaleString() : ''}</p>
        <p><strong>Venue:</strong> {event.venue || 'No venue specified'}</p>
        <p><strong>Description:</strong> {event.description || 'No additional details provided.'}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default EventModal;
