import React, { useState, useEffect, useRef } from "react";
import { MessageCircle } from "lucide-react";
import "../../index.css";

const ChatWidget = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>(
    [],
  );
  const chatWindowRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    setChatOpen(!chatOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessages([...messages, { sender: "user", text: message }]);
    setMessage("");

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      if (response.ok) {
        const data = await response.json();
        const botReply = data.reply;

        setTimeout(() => {
          setMessages((prevMessages) => [
            ...prevMessages,
            { sender: "bot", text: botReply },
          ]);
        }, 1000);
      } else {
        console.error("Failed to get AI response");
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", text: "Sorry, something went wrong." },
        ]);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: "Sorry, there was an error." },
      ]);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        chatWindowRef.current &&
        !chatWindowRef.current.contains(event.target as Node)
      ) {
        setChatOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <button className="chat-bubble" onClick={toggleChat}>
        <MessageCircle size={20} />
      </button>

      <div
        className={`chat-window ${chatOpen ? "open" : ""}`}
        ref={chatWindowRef}
      >
        <div className="chat-header">
          <div className="left-text">Let's Chat</div>
          <button className="close-btn" onClick={() => setChatOpen(false)}>
            ×
          </button>
        </div>

        <div className="messages">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${msg.sender === "bot" ? "bot" : "user"}`}
            >
              <div className="message-text">{msg.text}</div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="input-area">
          <input
            type="text"
            value={message}
            onChange={handleInputChange}
            placeholder="Type your message..."
            required
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ChatWidget;
