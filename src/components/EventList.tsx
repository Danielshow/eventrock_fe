import React from 'react';
import party from '../images/party.svg';

export interface Props {
  id: number;
  title: string;
  description: string;
  location: string;
}
const EventList = ({ id, title, description, location }: Props) => (
  <div className="eventlist__item">
    <img src={party} className="eventlist__item--image" alt="event"/>
    <h1 className="eventlist__item--title">{ title }</h1>
    <p className="eventlist__item--desc"> { description } </p>
    <p className="eventlist__item--location">Location: { location } </p>
  </div>
)

export default EventList;
