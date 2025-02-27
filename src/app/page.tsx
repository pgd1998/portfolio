"use client";
import Terminal from "@/components/Terminal";
import Sidebar from "@/components/Sidebar";
import { FaBars } from 'react-icons/fa';
// import WinBox from "winbox"; 
import * as winbox from "winbox";
import { useState } from "react";
import styles from './terminal/terminal.module.css';


const WinBox = winbox.WinBox || window.WinBox;


export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen]=useState(false);
  const handleCommand = (cmd: string) => {
    let title = '';
    let description = '';

    switch (cmd) {
      case 'about':
        title = 'About Me';
        // There has to be some art before description
        description = "Accomplished Software Engineer with a Master of Software Engineering degree from the University of Melbourne, possessing 2+ years of full-time experience designing, developing, testing, and maintaining enterprise web applications and software solutions for a globally recognised professional services firm serving diverse industries";
        break;
      
        // Display all the projects in one winbox with name skills and small description 
        // provide `View full` which opens a new window with full description and everything and 
        // also an option to `View project`
      case 'projects':
        title = 'Projects';
        description = 'Project 1: Built with Next.js<br>Project 2: Built with TypeScript';
        break;
      
      case 'skills':
        title = 'Skills';
        description = 'JS, Python, TS, React, Bootstrap';
        break;
      
      case 'contact':
        title = 'Contacts';
        description = 'poorvithgowda10@gmail.com';
        break;
      
      default:
        return "Unknown command";
    }

    if (typeof window !== 'undefined') {
      new WinBox({
        title,
        html: `<div class="winbox-content">${description}</div>`,
        x: 'center',
        y: 'center',
        width: '60%',
        height: '60%',
        border:0,
        class: [ 'modern'],
        onfocus: function () {
          this.setBackground('#2a2a2a');
        },
        onblur: function () {
          this.setBackground('#2a2a2a');
        },
      });
    }
  };

  return (
    <div>
      <Terminal onCommand={handleCommand} />
      {/* <button className={styles.mobileToggle}
      onClick={()=>{setIsSidebarOpen(!isSidebarOpen); console.log('clicked')}}>
        <FaBars/>
      </button>
      <div className={`${styles.sidebarWrapper} ${isSidebarOpen ? styles.open : ''}`}>
      <Sidebar onCommand={handleCommand} />
      </div>*/}
    </div> 
  );
}