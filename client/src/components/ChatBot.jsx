import { useState, useRef, useEffect } from "react";
import sendImg from "../assets/send.png";
import axios from "axios";
import ReactMarkdown from "react-markdown";

const suggestions = [
  "Tell me about Ranjeet",
  "Explain the Nestfin project",
  "What technologies do you use?",
  "Show your experience",
];

// backend url
const API_URL = "https://ranjeetdev.in/service/api/chat";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  // const [messages, setMessages] = useState([
  //   {
  //     role: "assistant",
  //     content: `Hi 👋

  // I'm Ranjeet's AI Assistant.

  // Ask me about:
  // • Experience
  // • Skills
  // • Projects
  // • Resume`,
  //   },
  // ]);

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(true);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const sendMessage = async (messageText) => {
    const userMessage = {
      role: "user",
      content: messageText,
    };

    setMessages((prev) => [...prev, userMessage]);

    setShowSuggestions(false);

    try {
      setLoading(true);

      const sessionId = localStorage.getItem("chatSessionId");

      const response = await axios.post(API_URL, {
        sessionId,
        message: messageText,
      });

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: response.data.reply,
        },
      ]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const currentMessage = input;

    setInput("");

    await sendMessage(currentMessage);
  };

  const handleSuggestionClick = async (question) => {
    await sendMessage(question);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          border: "none",
          cursor: "pointer",
          zIndex: 9999,
          background: "linear-gradient(135deg,#7C3AED,#5B21B6)",
          color: "#fff",
          fontSize: "24px",
          boxShadow: "0 6px 20px rgba(124,58,237,.4)",
        }}
      >
        💬
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: window.innerWidth < 768 ? "80px" : "100px",
            right: window.innerWidth < 768 ? "10px" : "30px",
            width: window.innerWidth < 768 ? "95vw" : "380px",
            height: window.innerWidth < 768 ? "80vh" : "550px",
            background: "#111827",
            border: "1px solid rgba(255,255,255,.1)",
            borderRadius: "16px",
            zIndex: 9999,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              padding: "16px",
              background: "#7C3AED",
              color: "#fff",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>Ranjeet AI Assistant</span>

            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: "transparent",
                border: "none",
                color: "#fff",
                fontSize: "20px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              ✕
            </button>
          </div>

          <div
            style={{
              flex: 1,
              padding: "16px",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <div
              style={{
                background: "#1F2937",
                padding: "12px",
                borderRadius: "12px",
                color: "#fff",
                marginBottom: "12px",
              }}
            >
              Hi 👋
              <br />
              <br />
              I'm Ranjeet's AI Assistant.
              <br />
              <br />
              Ask me about:
              <br />
              • Experience
              <br />
              • Skills
              <br />
              • Projects
              <br />• Resume
            </div>

            {/* {messages.length  && ( */}
            <div
              style={{
                display: "block",
                // flexWrap: "wrap",
                // gap: "8px",
              }}
            >
              {suggestions.map((question) => (
                <button
                  key={question}
                  onClick={() => handleSuggestionClick(question)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    // justifyContent: "space-between",
                    gap: "8px",
                    // width: "100%",
                    padding: "10px 14px",
                    marginBottom: "10px",
                    borderRadius: "12px",
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: "#374151", // grey
                    color: "#fff",
                    cursor: "pointer",
                    fontSize: "13px",
                    transition: "0.2s",
                  }}
                >
                  <span>{question}</span>

                  <img
                    src={sendImg}
                    alt="send"
                    style={{
                      width: "24px",
                      height: "24px",
                      objectFit: "contain",
                    }}
                  />
                </button>
              ))}
            </div>
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  alignSelf: msg.role === "user" ? "flex-end" : "flex-start",

                  maxWidth: "85%",

                  padding: "12px",

                  borderRadius: "12px",

                  whiteSpace: "pre-wrap",

                  wordBreak: "break-word",

                  background: msg.role === "user" ? "#7C3AED" : "#1F2937",

                  color: "#fff",
                }}
              >
                <ReactMarkdown>{msg.content}</ReactMarkdown>
                <div ref={messagesEndRef} />
              </div>
            ))}

            {loading && (
              <div
                style={{
                  alignSelf: "flex-start",
                  background: "#1F2937",
                  color: "#fff",
                  padding: "12px",
                  borderRadius: "12px",
                  maxWidth: "80%",
                }}
              >
                Thinking...
              </div>
            )}
          </div>

          <div
            style={{
              display: "flex",
              gap: "8px",
              padding: "12px",
              borderTop: "1px solid rgba(255,255,255,.1)",
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSend();
                }
              }}
              placeholder="Ask something..."
              style={{
                flex: 1,
                padding: "10px",
                borderRadius: "8px",
                border: "none",
                outline: "none",
              }}
            />

            <button
              onClick={handleSend}
              style={{
                padding: "10px 16px",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                background: "#7C3AED",
                color: "#fff",
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
