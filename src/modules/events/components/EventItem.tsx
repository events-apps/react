import React from 'react';
import { Event } from '../models/event';

interface EventItemProps {
  event: Event;
}

const EventItem: React.FC<EventItemProps> = ({ event }) => {
  return (
    <div className="rounded overflow-hidden shadow-lg">
      <img className="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{event.name}</div>
        {event.description && <p className="text-gray-700 text-base">{event.description}</p>}
      </div>
      {event.tags && (
        <div className="px-6 py-4">
          {event.tags.map(tag => (
            <span
              key={tag}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventItem;
