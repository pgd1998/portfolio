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

    const availableCommands=[
        'about',
        'projects',
        'skills',
        'contact',
        'welcome',
        'clear',
        'whoami',
        'help'

    ]

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


        const asciiArt=
`______                      _ _   _     
| ___ \\                    (_) | | |    
| |_/ /__   ___  _ ____   ___| |_| |__  
|  __/ _ \\ / _ \\| '__\\ \\ / / | __| '_ \\ 
| | | (_) | (_) | |   \\ V /| | |_| | | |
\\_|  \\___/ \\___/|_|    \\_/ |_|\\__|_| |_|
`;

    // Function to type message character by character
    function typeMessage(message: string,callback:()=>void) {
        let index = 0;
        function type() {
          if (index < message.length) {
            term.write(message[index]);
            index++;
            setTimeout(type, 50);
          } else{
            term.writeln('')
            callback();
          }
        }
        type();
      }
      // Function to display ASCII art properly
      function displayAsciiArt(callback: () => void) {
        // Split the ASCII art into lines
        const lines = asciiArt.split('\n');
        let lineIndex = 0;

        function typeLine() {
          if (lineIndex < lines.length) {
            term.writeln(lines[lineIndex]);
            lineIndex++;
            setTimeout(typeLine, 100); 
          } else {
            callback();
          }
        }
        typeLine();
      }
            // Initial prompt
        function welcome() {
            // Display ASCII art with proper alignment
            typeMessage("Welcome to Poorvith's Portfolio\n", () => {
              displayAsciiArt(() => {
                term.writeln(''); // Add an empty line for spacing
                typeMessage("Type a command (e.g., 'help' to know about all the commands).\n", prompt);
              });
            });
          }
  
    function prompt(){
        term.write('guest@portfolio:~$ ');
        }
        
        // Start of the terminal
        welcome();
        

        // TODO: handle the clear bug

        // Handle input
        term.onKey(({key,domEvent})=>{
            if (domEvent.key==='Enter'){
                term.writeln('')
                if (!availableCommands.includes(command.trim().toLowerCase())){
                  term.writeln("Invalid command. Try 'help' to see the available commands")
                }
                else if (command.trim().toLowerCase() === 'help') {
                    term.writeln("All the available commands")
                    availableCommands.forEach(cmd=>term.writeln(`- ${cmd}`))
                  }else if(command.trim().toLowerCase()==='clear'){
                    term.clear();
                  }else if(command.trim().toLowerCase()==='welcome'){
                        welcome();
                  }
                  else {
                    onCommand(command.trim().toLowerCase());
                  }
                command='';
                prompt();
            }else if (domEvent.key === 'Backspace'){
                if (command.length>0){
                    command=command.slice(0,-1);
                    term.write('\b \b');
                }
            }
            else if(domEvent.key==='Tab'){
                // domEvent.preventDefault();
                handleTabCompletion();
            }
            else if (key.match(/^[a-zA-Z0-9]$/)){
                command+=key;
                term.write(key);
            }
        })


        function handleTabCompletion(){
            const matches=availableCommands.filter(match=>match.startsWith(command));
            if (matches.length===1){
                const completion=matches[0].slice(command.length);
                command=matches[0];
                term.write(completion)
            }else if (matches.length>1){
                term.writeln('');
                matches.forEach(match => term.writeln(match));
                prompt();
                term.write(command);
            }
        }

        return ()=>{
            term.dispose();
        }

    },[])
    return <div ref={terminalRef} className={styles.terminal} />;
}

export default Terminal;