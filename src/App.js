import React from 'react';
import './App.css';
import me from './image/me.jpg'
import html from './image/html.png'
import css from './image/css.png'
import js from './image/js.png'
import reactjs from './image/react.png'
import nodejs from './image/nodejs.png'
import mysql from './image/mysql.png'
import mongodb from './image/mongodb.png'
import python from './image/python.png'
import arduino from './image/arduino.png'
import network from './image/network.png'
import api from './image/api.png'
import github from './image/github.png'


import {motion} from 'framer-motion'

function App() {

  return (

    <div className="App">
    
      <motion.div 
      initial={{ opacity: 0}}
      animate={{ opacity: 1 }}
      transition={{ deley:13 ,duration: 3 }}
      >
      <div className="name" id="myHeader"><h1>SUCHANAN KWANMUANG</h1></div>
      </motion.div>

      <div >
        <div >
        <img
          className="me"
          src={me} 
          alt='me' 
        />
        </div>
      
        <div className="about">
        <h2>ABOUT</h2>
        <p>Name: Suchanan Kwanmuang</p>
        <p>Nickname: Pam</p>
        <p>Birth date: 24/01/1998</p>
        <p>Education : Bachelor of Engineering program in Information and Communication Engineering </p>
        <p>  at Mae Fah Luang University </p>
        <p>GPAX:3.30</p>
        <p>Hobbies: Exercise(Body Building), Cooking </p>
        </div>
      </div>


      
      <div className="skills">
      <h2>SKILLS</h2>
      <div className="all">
      <div className="skill" >
      <img src={html} alt="html"/>
      <p> HTML </p>
      </div>

      <div className="skill" >
      <img src={css} alt="css" /> 
      <p>  CSS </p>
      </div>
      
      <div className="skill" >
      <img src={js} alt="js" /> 
      <p>  Javascript </p>
      </div>

      <div className="skill" >
      <img src={reactjs} alt="reactjs" /> 
      <p> React.js </p>
      </div>
      <div className="skill" >
      <img src={nodejs} alt="nodejs" /> 
      <p>  Node.js (Express) </p>
      </div>
      <div className="skill" >
      <img src={mysql} alt="mysql" /> 
      <p> MySQL </p>
      </div>
      </div>
      <div className="all">
      <div className="skill" >
      <img src={mongodb} alt="mongodb" /> <p> MongoDB </p>
      </div>
      <div className="skill" >
      <img src={python} alt="python" /> <p> Python </p>
      </div>
      <div className="skill" >
      <img src={arduino} alt="arduino" /> <p> Arduino </p>
      </div>

      <div className="skill" >
      <img src={network} alt="network" /> <p> Network System </p>
      </div>

      <div className="skill" >
      <img src={api} alt="api" /> <p> RESTful API </p>
      </div>

      <div className="skill" >
      <img src={github} alt="github" /><p> Version Control (Git/Github) </p>      
      </div>

     
      </div>

      </div>


      <div className="experiences">
      <h2 >EXPERIENCES</h2>
      <h3>The Complete 2020 Web Developement Boot Camp Course</h3>
      <p>Udemy Website</p>
      <h3>Restaurant Management (Final Project)</h3>
      <p>Building web application for order the menu (front end part using HTML,CSS,Javascript)</p>
      <h3>Networt Administrator ( Co-operation Education Program) </h3>
      <p>IBM Solution Delivery Co.,Ltd. | Jan 2020-March 2020 </p>
      <h3>Smart Farm Simulator Poject</h3>
      <p>Coding on ESP32 board for automation light, turn on fan when high temperature, open the door by use key card</p>
      </div>
    </div>
  );
}



export default App;


