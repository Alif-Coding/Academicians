import React, { useState, useEffect } from 'react';
import { io } from "socket.io-client";
const socket = io("http://localhost:5000");


export default function Clubstruct() {
    const [username, setUsername] = useState("");
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState([]);
    const [typingUser, setTypingUser] = useState("");

    useEffect(() => {
        socket.on("", (msg) => {
            setMessagers((prev) => [...prev, msg]);
        });

        socket.on("userList", (userList) => {
            setUsers(userList);
        })

        socket.on("typing", ({ user, isTyping }) => {
            setTypingUser(isTyping ? user : "");
        });

        return () => {
            socket.off("chatMessage");
            socket.off("userList");
            socket.off("typing");
        };
    }, []);

    const joinChat = () => {
        if (username) socket.emit("join", { username });
    };

    const sendMessage = () => {
        if (message.trim()) {
            socket.emit("chatMessage", { text: message});
            setMessage("")
        }
    }

    const handleTyping = () => {
        socket.emit("typing", { isTyping: message.length > 0 });
    };

    return(
        <>
            <div class="h-screen w-screen bg-slate-900">
                <div>
                    
                </div>
                <div class="chats">
                    
                </div>
                <input type="text" class="h-[50px] w-[500px] bg-white ml-[40%]">

                </input>
            </div>
        </>)
}