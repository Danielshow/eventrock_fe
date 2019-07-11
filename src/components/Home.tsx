import React from 'react';
import SignInLink from './header/SignInLink';
import EventList from './EventList';
import Category from './Category';
import Footer from './Footer';
import image from '../images/party.svg';

const Home: React.FC = () => {

  const events = [{
    id: 1,
    title: 'Hutrrr',
    description: 'Yes',
    location: 'ddjdjd'
    },
    {
    id: 1,
    title: 'Hutrrr',
    description: 'Yes',
    location: 'ddjdjd'
    },
    {
    id: 1,
    title: 'Hutrrr',
    description: 'Yes',
    location: 'ddjdjd'
    },
    {
    id: 1,
    title: 'Hutrrr',
    description: 'Yes',
    location: 'ddjdjd'
    },
  ]
  const eventItems = events.map((event) => {
   return (
      <EventList {...event} />
   )
  })
  return (
    <>
      <SignInLink />
      <div className="container">
        <div className="container__hero">
          <h1 className="container__hero--big">CREATE YOUR OWN EVENTS IN MINUTES AND GET AUDIENCE FOR YOUR EVENTS</h1>
          <p className="container__hero--small">We showcase your events to the world and help you coordinate the process. </p>
        </div>
      </div>
      <div className="event__container">
        <div className="eventlist">
           <h1 className="eventlist__title"> Recent Event </h1>
           <div className="eventlist__all">
               {eventItems}
           </div>
           <div className="eventlist__action">
             <button className="btn">See More Events</button>
           </div>
        </div>
        <div className="event-call_to_action">
          <h1> Want to Create an Event? Signup </h1>
        </div>
        <div className="category__container">
           <h1 className="category__title">Categories to Explore</h1>
           <div className="category__list">
             <Category image={image} />
             <Category image={image} />
             <Category image={image} />
             <Category image={image} />
           </div>
        </div>
        <Footer />
      </div>
    </>
  );
}


export default Home;
