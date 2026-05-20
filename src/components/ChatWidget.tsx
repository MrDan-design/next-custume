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
    { id: 1, type: 'assistant', text: 'Hello! 👋 How can I help you today? Ask me about our interviews, mentoring, coaching, or tools.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      type: 'user',
      text: input
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/buddy-assist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: input,
          project_id: '6a0cf9eeaddb33fba4b3ca4a',
          timestamp: new Date().toISOString()
        })
      });

      const data = await response.json();
      
      let assistantText = 'I found some information for you:';
      if (data.results && data.results.length > 0) {
        assistantText = data.results
          .map((r: { title: string; content: string }) => `• ${r.title}: ${r.content}`)
          .join('\n\n');
      } else {
        assistantText = 'I couldn\'t find specific information about that. Feel free to ask about our interview prep, mentoring programs, coaching services, or marketplace tools!';
      }

      const assistantMessage: Message = {
        id: Date.now() + 1,
        type: 'assistant',
        text: assistantText
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = {
        id: Date.now() + 1,
        type: 'assistant',
        text: 'Sorry, I encountered an error. Please try again.'
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
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

          <div
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              backgroundColor: '#ffffff'
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
                    color: msg.type === 'user' ? 'white' : '#1f2937',
                    border: msg.type === 'assistant' ? '1px solid #e5e7eb' : 'none',
                    wordWrap: 'break-word',
                    fontSize: '14px',
                    lineHeight: '1.4',
                    whiteSpace: 'pre-wrap'
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start'
                }}
              >
                <div
                  style={{
                    padding: '12px 16px',
                    borderRadius: '12px',
                    backgroundColor: 'white',
                    border: '1px solid #e5e7eb',
                    display: 'flex',
                    gap: '4px',
                    color: '#6b7280'
                  }}
                >
                  <span style={{ animation: 'bounce 1.4s infinite' }}>●</span>
                  <span style={{ animation: 'bounce 1.4s infinite 0.2s' }}>●</span>
                  <span style={{ animation: 'bounce 1.4s infinite 0.4s' }}>●</span>
                </div>
              </div>
            )}
            <div ref={scrollRef} />
          </div>

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
              placeholder="Ask me anything..."
              disabled={isLoading}
              style={{
                flex: 1,
                padding: '10px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '14px',
                fontFamily: 'inherit',
                color: '#1f2937',
                backgroundColor: 'white',
                opacity: isLoading ? 0.6 : 1,
                cursor: isLoading ? 'not-allowed' : 'text'
              }}
            />
            <button
              type="submit"
              disabled={isLoading}
              style={{
                padding: '10px 16px',
                backgroundColor: isLoading ? '#9ca3af' : '#7c3aed',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                fontWeight: 'bold',
                fontSize: '14px',
                transition: 'background-color 0.2s'
              }}
            >
              {isLoading ? '...' : 'Send'}
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

        @keyframes bounce {
          0%, 60%, 100% {
            opacity: 0.3;
            transform: translateY(0);
          }
          30% {
            opacity: 1;
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}
