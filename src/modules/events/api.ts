import axios from 'axios';

import { Event } from './models/event';
import { ApiResponse } from '../../models/apiResponse';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

export const fetchEvents = () => axios.get<ApiResponse<Event[]>>('events');
export const fetchEvent = (eventId: string) => axios.get<ApiResponse<Event>>(`events/${eventId}`);
export const createEvent = (event: Event) => axios.post<ApiResponse<Event>>('events', event);
export const deleteEvent = (eventId: string) => axios.delete<ApiResponse<Event>>(`events/${eventId}`);
