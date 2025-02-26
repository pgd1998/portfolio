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
        description = "I'm a Software Engineer with X years of experience...";
        break;
      
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
        html: `<div style="padding: 10px; color: #d3d3d3;">${description}</div>`,
        x: 'center',
        y: 'center',
        width: '80%',
        height: '80%',
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