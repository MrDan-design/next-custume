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

    // Add user message
    const userMessage: Message = { type: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Call our API endpoint
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
      {/* Chat Widget Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center border-4 border-white"
        title="Chat with CareerMentor Assistant"
      >
        {isOpen ? (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <div className="flex flex-col items-center gap-0.5">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
        )}
      </button>

      {/* Chat Widget Panel */}
      {isOpen && (
        <div className="fixed bottom-28 right-6 z-50 w-96 max-w-sm bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col h-[600px] md:h-[700px] overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 flex-shrink-0">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h3 className="font-black text-lg">CareerMentor Assistant</h3>
                <p className="text-sm text-purple-100">Always here to help</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center text-lg">
                🎯
              </div>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-xs lg:max-w-md px-5 py-3 rounded-2xl ${
                    msg.type === 'user'
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-br-none shadow-md'
                      : 'bg-white text-slate-900 rounded-bl-none border-2 border-gray-200 shadow-sm'
                  }`}
                >
                  <p className={`text-sm leading-relaxed ${msg.type === 'user' ? 'text-white' : 'text-slate-900'}`}>
                    {msg.content}
                  </p>
                  {msg.results && msg.results.length > 0 && (
                    <div className="mt-4 space-y-2 pt-4 border-t border-gray-300">
                      {msg.results.map((result, i) => (
                        <a
                          key={i}
                          href={result.url}
                          className="flex items-start gap-2 p-3 rounded-lg bg-gray-100 hover:bg-gradient-to-r hover:from-purple-100 hover:to-blue-100 transition group"
                        >
                          <span className="text-lg flex-shrink-0">📌</span>
                          <div>
                            <p className="font-bold text-slate-900 text-xs group-hover:text-purple-600 transition">
                              {result.title}
                            </p>
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
                <div className="bg-white border-2 border-gray-200 text-slate-900 px-5 py-3 rounded-2xl rounded-bl-none shadow-sm">
                  <div className="flex gap-2 items-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSendMessage} className="border-t border-gray-200 p-4 bg-white flex-shrink-0">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
                className="flex-1 px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-purple-500 focus:outline-none text-sm text-slate-900 placeholder-gray-500 font-medium transition"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-4 py-3 rounded-xl transition disabled:opacity-50 font-bold text-sm shadow-md transform hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
