"use client";
import { useEffect, useRef, useState } from "react";
import { Terminal as XTerm } from "@xterm/xterm";
// import { FitAddon } from "@xterm/addon-fit";
import "@xterm/xterm/css/xterm.css";
import styles from "../app/terminal/terminal.module.css";

interface terminalProps {
  onCommand: (command: string) => void;
}

const Terminal = ({ onCommand }: terminalProps) => {
  const terminalRef = useRef<HTMLDivElement>(null);
  const xTermRef = useRef<XTerm | null>(null);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  let command = "";

  const availableCommands = [
    "about",
    "projects",
    "skills",
    "contact",
    "welcome",
    "clear",
    "whoami",
    "help",
    "resume",
    "education",
    "experience"
  ];

  useEffect(() => {
    if (!terminalRef.current) return;

    const term = new XTerm({
      cursorBlink: true,
      theme: {
        background: "#1e1e1e",
        foreground: "#d3d3d3",
        cursor: "#00d4ff",
      },
    });
    xTermRef.current = term;

    // Fit addon
    import("@xterm/addon-fit").then(({ FitAddon }) => {
    const fitAddon = new FitAddon();
    term.loadAddon(fitAddon);

    // Attach to DOM
    term.open(terminalRef.current!);
    fitAddon.fit();

    const asciiArt = 
`______                      _ _   _     
| ___ \\                    (_) | | |    
| |_/ /__   ___  _ ____   ___| |_| |__  
|  __/ _ \\ / _ \\| '__\\ \\ / / | __| '_ \\ 
| | | (_) | (_) | |   \\ V /| | |_| | | |
\\_|  \\___/ \\___/|_|    \\_/ |_|\\__|_| |_|
`;

    // Function to type message character by character
    function typeMessage(message: string, callback: () => void) {
      let index = 0;
      function type() {
        if (index < message.length) {
          term.write(message[index]);
          index++;
          setTimeout(type, 30);
        } else {
          callback();
        }
      }
      type();
    }

    // Function to display ASCII art properly
    function displayAsciiArt(callback: () => void) {
      // Split the ASCII art into lines
      const lines = asciiArt.split("\n");
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
      typeMessage("Hello! I'm Poorvith Gowda, a Software Engineer with 2+ years of experience building enterprise web applications", () => {
        term.writeln(''); // Add spacing
        displayAsciiArt(() => {
          // term.writeln(''); // Add spacing
          // typeMessage("Master's (Software Engineering) from University of Melbourne | React | Node.js | JavaScript | Python | Full-Stack Development", () => {
            term.writeln('');
            typeMessage("I am currently exploring full-time opportunities as a Software Engineer in Australia.", () => {
              term.writeln('');
              term.writeln('');
              typeMessage("Type 'projects' to see my work, 'experience' for my background, or 'help' for all commands.", () => {
                term.writeln('');
                term.writeln('');
                prompt();
              });
            });
          });
        });
    }

    function prompt() {
      term.write("guest@portfolio:~$ ");
    }

    // Start of the terminal
    welcome();

    // Handle input
    term.onKey(({ key, domEvent }) => {
      if (domEvent.key === "Enter") {
        term.writeln("");

        if (command.trim()) {
          // Add to history
          setCommandHistory((prev) => [command, ...prev.slice(0, 9)]);
          setHistoryIndex(-1);
        }
        if (!availableCommands.includes(command.trim().toLowerCase())) {
          term.writeln(
            "Invalid command. Try 'help' to see the available commands"
          );
        } else if (command.trim().toLowerCase() === "help") {
          // term.writeln("Available commands");
          availableCommands.forEach((cmd) => term.write(`  ○ ${cmd}`));
          term.writeln('')
        } else if (command.trim().toLowerCase() === "clear") {
          term.clear();
        } else if (command.trim().toLowerCase() === "welcome") {
          welcome();
        } else if (command.trim().toLowerCase() === "whoami") {
          term.writeln("guest user")
        }  
        else {
          onCommand(command.trim().toLowerCase());
        }
        command = "";
        prompt();
      } else if (domEvent.key === "Backspace") {
        if (command.length > 0) {
          command = command.slice(0, -1);
          term.write("\b \b");
        }
      } else if (domEvent.key === "Tab") {
        // domEvent.preventDefault();
        handleTabCompletion();
      } else if (domEvent.key === "ArrowUp") {
        if (
          commandHistory.length > 0 &&
          historyIndex < commandHistory.length - 1
        ) {
          const newIndex = historyIndex + 1;
          setHistoryIndex(newIndex);

          // Clear current command
          term.write(
            "\r" +
            " ".repeat(
              "guest@poorvith.portfolio:~$ ".length + command.length
            ) +
            "\r"
          );
          prompt();

          // Write history command
          const historyCommand = commandHistory[newIndex];
          term.write(historyCommand);
          command = historyCommand;
        }
      } else if (domEvent.key === "ArrowDown") {
        if (historyIndex > 0) {
          const newIndex = historyIndex - 1;
          setHistoryIndex(newIndex);

          // Clear current command
          term.write(
            "\r" +
            " ".repeat(
              "guest@poorvith.portfolio:~$ ".length + command.length
            ) +
            "\r"
          );
          prompt();

          // Write history command
          const historyCommand = commandHistory[newIndex];
          term.write(historyCommand);
          command = historyCommand;
        } else if (historyIndex === 0) {
          setHistoryIndex(-1);

          // Clear current command
          term.write(
            "\r" +
            " ".repeat(
              "guest@poorvith.portfolio:~$ ".length + command.length
            ) +
            "\r"
          );
          prompt();
          command = "";
        }
      } else if (key.match(/^[a-zA-Z0-9]$/)) {
        command += key;
        term.write(key);
      }
    });

    function handleTabCompletion() {
      const matches = availableCommands.filter((match) =>
        match.startsWith(command)
      );
      if (matches.length === 1) {
        const completion = matches[0].slice(command.length);
        command = matches[0];
        term.write(completion);
      } else if (matches.length > 1) {
        term.writeln("");
        matches.forEach((match) => term.writeln(match));
        prompt();
        term.write(command);
      }
    }}).catch((err) => {
      console.error("Failed to load FitAddon:", err);
      // Fallback: Open terminal without FitAddon
      term.open(terminalRef.current!);
      term.writeln("Welcome to Poorvith Gowda's Portfolio (FitAddon failed)");
      term.writeln('Type a command (e.g., "projects") or use the sidebar.');
      term.write("user@portfolio:~$ ");
    });


    return () => {
      term.dispose();
    };
  }, [onCommand]);

  return <div ref={terminalRef} className={styles.terminal} />;
};

export default Terminal;