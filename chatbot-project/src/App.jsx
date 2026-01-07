import { useState, useRef, useEffect } from 'react'
import './App.css' 
import ChatMessage  from './components/ChatMessage'; 
import ChatInput from './components/ChatInput';




function ChatMessages({ messages }) {

  const chatMessagesRef = useRef(null);

  useEffect(() => {
    const containerElem = chatMessagesRef.current
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [messages]);
  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {messages.map(msg => (
        <ChatMessage
          key={msg.id}
          message={msg.message}
          sender={msg.sender}
        />
      ))}
    </div>
  );
}

function App() {
  const [messages, setMessages] = useState([

  ]);
  const [isInputOnTop, setIsInputOnTop] = useState(false);

  function togglePosition() {
    setIsInputOnTop(!isInputOnTop);
  }

  return (
    <div className="app-container">
      <button className="toggle-button" onClick={togglePosition}>
        Toggle Send Position
      </button>

      {isInputOnTop && (
        <ChatInput messages={messages} setMessages={setMessages} />
      )}

      <ChatMessages messages={messages} />

      {!isInputOnTop && (
        <ChatInput messages={messages} setMessages={setMessages} />
      )}
    </div>
  );
}
export default App
