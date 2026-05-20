'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
  type: 'user' | 'assistant';
  content: string;
  results?: Array<{ title: string; content: string; url: string }>;
}

export default function BuddyAssistWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'assistant',
      content: 'Hi there! 👋 I\'m your CareerMentor assistant. Ask me about interviews, mentoring, coaching, or our tools.'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { type: 'user', content: input };
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
      
      let assistantMessage = 'I found some information for you:';
      if (data.results && data.results.length > 0) {
        const resultText = data.results
          .map((r: { title: string; content: string; url: string }) => `• ${r.title}: ${r.content}`)
          .join('\n\n');
        assistantMessage = resultText;
      } else {
        assistantMessage = 'I couldn\'t find specific information about that. Feel free to explore our services or ask another question!';
      }

      setMessages(prev => [...prev, {
        type: 'assistant',
        content: assistantMessage,
        results: data.results
      }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, {
        type: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999] w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center border-4 border-white"
      >
        {isOpen ? (
          <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 sm:hidden z-[9998] bg-black/30"
            onClick={() => setIsOpen(false)}
          />

          {/* Chat Panel */}
          <div className="fixed bottom-0 left-0 right-0 sm:bottom-auto sm:right-4 sm:left-auto z-[9999] sm:top-auto w-full sm:w-80 md:w-96 max-h-[80vh] sm:max-h-[650px] bg-white rounded-t-3xl sm:rounded-2xl shadow-2xl border-t sm:border border-gray-200 flex flex-col animate-slideUp">
            {/* Badge */}
            <div className="bg-gradient-to-r from-purple-700 to-blue-700 text-white px-4 sm:px-6 py-2 text-center text-xs font-semibold">
              ✨ Powered by Buddy Assist
            </div>

            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 sm:px-6 py-4 flex items-center justify-between">
              <div className="flex-1">
                <h3 className="font-bold text-base sm:text-lg">CareerMentor Assistant</h3>
                <p className="text-xs sm:text-sm text-purple-100 mt-1">Always here to help</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="sm:hidden ml-2 p-2 hover:bg-white hover:bg-opacity-20 rounded-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 bg-gradient-to-b from-white to-gray-50">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-xs px-3 sm:px-4 py-2 sm:py-3 rounded-2xl text-sm ${
                      msg.type === 'user'
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-br-none'
                        : 'bg-white text-slate-900 rounded-bl-none border border-gray-200'
                    }`}
                  >
                    <p className="break-words whitespace-pre-wrap">{msg.content}</p>
                    {msg.results && msg.results.length > 0 && (
                      <div className="mt-2 space-y-2 pt-2 border-t border-gray-300">
                        {msg.results.map((result, i) => (
                          <a
                            key={i}
                            href={result.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-start gap-2 p-2 rounded-lg bg-gradient-to-r from-purple-50 to-blue-50 hover:from-purple-100 hover:to-blue-100"
                          >
                            <span className="text-base flex-shrink-0">📌</span>
                            <div className="flex-1 min-w-0">
                              <p className="font-bold text-slate-900 text-xs">{result.title}</p>
                              <p className="text-xs text-gray-600 line-clamp-2">{result.content.substring(0, 60)}...</p>
                            </div>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-200 px-4 py-3 rounded-2xl rounded-bl-none">
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSendMessage} className="border-t border-gray-200 px-3 sm:px-4 py-3 bg-white">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a question..."
                  className="flex-1 px-3 sm:px-4 py-2 rounded-xl border border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200 text-sm text-slate-900 placeholder-gray-500"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-400 text-white px-3 sm:px-4 py-2 rounded-xl transition disabled:opacity-60 font-bold text-sm flex items-center justify-center"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </>
      )}

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(100%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
