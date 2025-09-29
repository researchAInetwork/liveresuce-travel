import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm your LiveRescue AI assistant. I can help you with flight disruptions, hotel bookings, and travel advice. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputText.trim()) {
      const userMessage: Message = {
        id: messages.length + 1,
        text: inputText,
        sender: 'user',
        timestamp: new Date()
      };
      
      setMessages([...messages, userMessage]);
      setInputText('');
      
      // Simulate AI response
      setTimeout(() => {
        const botResponse: Message = {
          id: messages.length + 2,
          text: generateAIResponse(inputText),
          sender: 'bot',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  const generateAIResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('delay') || input.includes('cancel')) {
      return "I see you're dealing with a flight disruption. I've already started searching for nearby hotels and will have options ready within 30 seconds. Would you like me to explain what's causing the delay?";
    } else if (input.includes('hotel') || input.includes('accommodation')) {
      return "I can help you find the perfect rescue hotel! Based on your traveler profile, I'm prioritizing safe, convenient options near the airport. The top-rated choice is already pre-selected. Shall I proceed with the booking?";
    } else if (input.includes('rebook') || input.includes('flight')) {
      return "Let me check alternative flights for you. I see 3 options departing in the next 6 hours. I can also coordinate with your rescue hotel to extend your stay if needed. Which would you prefer?";
    } else if (input.includes('weather')) {
      return "Current weather conditions show heavy thunderstorms in your departure area, which explains the 89% disruption probability. The weather is expected to clear by tomorrow morning at 7 AM.";
    } else {
      return "I'm here to help with any travel-related concerns. I can assist with flight disruptions, hotel bookings, rebooking options, weather updates, and general travel advice. What specific information do you need?";
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 neu-button-primary p-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-110 z-50"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-96 h-[500px] neu-card rounded-3xl flex flex-col bg-white shadow-2xl z-50">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        <div className="flex items-center space-x-3">
          <div className="neu-circle p-2 bg-gradient-to-br from-blue-500 to-indigo-600">
            <Bot className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">AI Travel Copilot</h3>
            <p className="text-xs text-green-600">● Online</p>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="neu-button p-2 rounded-lg text-gray-500 hover:text-gray-700"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex items-start space-x-2 max-w-[80%] ${
              message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
            }`}>
              <div className={`neu-circle p-2 ${
                message.sender === 'user' 
                  ? 'bg-blue-500' 
                  : 'bg-gradient-to-br from-indigo-500 to-purple-600'
              }`}>
                {message.sender === 'user' ? (
                  <User className="h-4 w-4 text-white" />
                ) : (
                  <Bot className="h-4 w-4 text-white" />
                )}
              </div>
              <div className={`neu-inset p-3 rounded-2xl ${
                message.sender === 'user' 
                  ? 'bg-blue-50 text-blue-900' 
                  : 'bg-white text-gray-800'
              }`}>
                <p className="text-sm leading-relaxed">{message.text}</p>
                <p className="text-xs text-gray-500 mt-2">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-100">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            className="flex-1 neu-input px-4 py-2 rounded-xl text-sm"
            placeholder="Ask about your travel disruption..."
          />
          <button
            onClick={handleSendMessage}
            className="neu-button-primary p-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatAssistant;