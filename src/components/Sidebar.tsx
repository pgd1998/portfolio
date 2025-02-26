
import React from 'react';
import styles from '../app/terminal/terminal.module.css';
interface SidebarProps {
    onCommand: (cmd: string) => void;
}

const Sidebar = ({ onCommand }: SidebarProps) => {
    const options=[
        { label: 'About Me', cmd: 'about' },
    { label: 'Projects', cmd: 'projects' },
    { label: 'Skills', cmd: 'skills' },
    { label: 'Contact', cmd: 'contact' },
    ];

    return(
    <aside className={styles.sidebar}>
        <h2></h2>
        {options.map((item)=>(
            <button
            key={item.cmd}
            className={styles.button}
            onClick={()=>onCommand(item.cmd)}>
                {item.label}
            </button>
        ))}
    </aside>
    )
}

export default Sidebar;