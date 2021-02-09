import React from 'react';
import { Button, Container } from 'semantic-ui-react';
import EventDashboard from '../../features/events/EventDashboard/EventDashboard';
import NavBar from './../../features/events/nav/NavBar';

export default function App() {
 {/*
  

  const title = React.createElement('h2',{},'Header Title');
  const div = React.createElement('div',{className:'App'},title);


 */}
{/* 
      <div className='App'>
      <h1> Title of the Web page</h1>
      <button className ='ui icon red button'>
        <i className ='user icon'/> CSS Button
      </button>
      <Button icon ='user' content='React Button'color='green' loading ='true'/>
       </div>
    */}


  return (
   
    
    <>
      <NavBar/>
      <Container className = 'main'> 
      <EventDashboard/>
      </Container>
   </>
   
  );
}


