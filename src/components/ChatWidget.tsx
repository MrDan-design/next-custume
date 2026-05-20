'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
  id: number;
  type: 'user' | 'assistant';
  text: string;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, type: 'assistant', text: 'Hello! 👋 How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage: Message = {
      id: Date.now(),
      type: 'user',
      text: input
    };
    setMessages(prev => [...prev, newMessage]);
    setInput('');

    // Simulate assistant response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now(),
        type: 'assistant',
        text: 'Thanks for your message! We\'re here to help with interviews, mentoring, and coaching.'
      }]);
    }, 500);
  };

  return (
    <div>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 9999,
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#7c3aed',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          fontSize: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        {isOpen ? '✕' : '💬'}
      </button>

      {/* Chat Panel */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '90px',
            right: '20px',
            zIndex: 9999,
            width: '350px',
            height: '500px',
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 5px 40px rgba(0,0,0,0.16)',
            display: 'flex',
            flexDirection: 'column',
            animation: 'slideUp 0.3s ease-out'
          }}
        >
          {/* Header */}
          <div
            style={{
              background: 'linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)',
              color: 'white',
              padding: '20px',
              borderRadius: '12px 12px 0 0',
              fontWeight: 'bold'
            }}
          >
            <div style={{ marginBottom: '4px' }}>CareerMentor Chat</div>
            <div style={{ fontSize: '12px', opacity: 0.9 }}>Powered by Buddy Assist</div>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              backgroundColor: '#f9fafb'
            }}
          >
            {messages.map(msg => (
              <div
                key={msg.id}
                style={{
                  display: 'flex',
                  justifyContent: msg.type === 'user' ? 'flex-end' : 'flex-start'
                }}
              >
                <div
                  style={{
                    maxWidth: '80%',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    backgroundColor: msg.type === 'user' ? '#7c3aed' : 'white',
                    color: msg.type === 'user' ? 'white' : '#000',
                    border: msg.type === 'assistant' ? '1px solid #e5e7eb' : 'none',
                    wordWrap: 'break-word'
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={scrollRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSend}
            style={{
              padding: '12px',
              borderTop: '1px solid #e5e7eb',
              display: 'flex',
              gap: '8px'
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              style={{
                flex: 1,
                padding: '10px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '14px',
                fontFamily: 'inherit'
              }}
            />
            <button
              type="submit"
              style={{
                padding: '10px 16px',
                backgroundColor: '#7c3aed',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '14px'
              }}
            >
              Send
            </button>
          </form>
        </div>
      )}

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
