"use client";
import { useEffect,useRef } from 'react';
import { Terminal as XTerm } from '@xterm/xterm';
import { FitAddon } from '@xterm/addon-fit';
import '@xterm/xterm/css/xterm.css';
import styles from '../app/terminal/terminal.module.css';

interface terminalProps{
    onCommand: (command: string) => void;
}


const Terminal=({onCommand}:terminalProps)=>{
    const terminalRef=useRef<HTMLDivElement>(null);
    const xTermRef=useRef<XTerm | null>(null);
    let command='';

    useEffect(()=>{
        if (!terminalRef.current) return;

        const term=new XTerm({
            cursorBlink: true,
            theme: {
              background: '#1e1e1e',
              foreground: '#d3d3d3',
              cursor: '#00d4ff',
            },
          });
        xTermRef.current=term;

        // Fit addon
        const fitAddon=new FitAddon();
        term.loadAddon(fitAddon);

        // Attach to DOM
        term.open(terminalRef.current);
        fitAddon.fit();

        // Initial prompt
        term.writeln("Welcome to Poorvith's@Portfolio")
        term.writeln('Type a command (e.g., "help" to know about all the commands) or click an option.');
        term.write('poorvith@portfolio:~$ ');

        // Handle input
        term.onKey(({key,domEvent})=>{
            if (domEvent.key==='Enter'){
                term.writeln('')
                if (command.toLowerCase() === 'help') {
                    term.writeln('about');
                    term.writeln('projects');
                    term.writeln('skills');
                    term.writeln('contact');
                  }
                  else {
                    onCommand(command.trim().toLowerCase());
                  }
                command='';
                term.write('poorvith@portfolio:~$ ');
            }else if (domEvent.key === 'Backspace'){
                if (command.length>0){
                    command=command.slice(0,-1);
                    term.write('\b \b');
                }
            }
            else if (key.match(/^[a-zA-Z0-9]$/)){
                command+=key;
                term.write(key);
            }
        })

        return ()=>{
            term.dispose();
        }

    },[])
    return <div ref={terminalRef} className={styles.terminal} />;
}

export default Terminal;