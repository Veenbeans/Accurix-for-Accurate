import React, { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { BarChart } from '@/components/charts/BarChart';
import { Send, Download, Bot, User } from 'lucide-react';
import { chatSuggestions, chatMessages } from '@/data/mockData';

interface Message {
  id: number;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  chartData?: any;
}

const Insights: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(chatMessages);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      type: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: Date.now() + 1,
        type: 'bot',
        content: `I've analyzed your query: "${inputValue}". Here's what I found based on our current data patterns. The trend shows interesting insights that could help optimize your processes.`,
        timestamp: new Date(),
        chartData: {
          type: 'bar',
          data: [
            { category: 'Q1', value: 85 },
            { category: 'Q2', value: 92 },
            { category: 'Q3', value: 78 },
            { category: 'Q4', value: 96 },
          ]
        }
      };
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
  };

  const rightPanelContent = (
    <div className="space-y-3">
      <div className="p-3 bg-chart-primary/10 rounded-lg">
        <p className="text-xs font-medium text-chart-primary">Suggested Follow-ups</p>
        <div className="mt-2 space-y-2">
          <button className="text-xs text-left text-muted-foreground hover:text-foreground transition-colors w-full">
            Show trend analysis
          </button>
          <button className="text-xs text-left text-muted-foreground hover:text-foreground transition-colors w-full">
            Export this data
          </button>
          <button className="text-xs text-left text-muted-foreground hover:text-foreground transition-colors w-full">
            Compare with last period
          </button>
        </div>
      </div>
      <div className="p-3 bg-success/10 rounded-lg">
        <p className="text-xs font-medium text-success">Saved Queries</p>
        <p className="text-xs text-muted-foreground mt-1">
          3 queries saved this month
        </p>
      </div>
    </div>
  );

  return (
    <DashboardLayout 
      rightPanelContent={rightPanelContent}
      rightPanelTitle="AI Assistant"
    >
      <div className="space-y-6 h-full">
        {/* Page Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">AI Insights</h1>
            <p className="text-muted-foreground">Chat with your data to get instant insights</p>
          </div>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export Chat
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-[500px]">
          {/* Chat Panel */}
          <Card className="flex flex-col">
            <div className="p-4 border-b">
              <h3 className="font-semibold">Conversation</h3>
            </div>
            
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.type === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-foreground'
                    }`}
                  >
                    <div className="flex items-start space-x-2">
                      {message.type === 'bot' && <Bot className="w-4 h-4 mt-0.5 flex-shrink-0" />}
                      {message.type === 'user' && <User className="w-4 h-4 mt-0.5 flex-shrink-0" />}
                      <div className="text-sm">{message.content}</div>
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-muted p-3 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Bot className="w-4 h-4" />
                      <div className="text-sm">Analyzing your query...</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <Input
                  placeholder="Ask about your data..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  disabled={isLoading}
                />
                <Button onClick={handleSendMessage} disabled={isLoading}>
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>

          {/* Results Panel */}
          <Card className="flex flex-col">
            <div className="p-4 border-b">
              <h3 className="font-semibold">Analysis Results</h3>
            </div>
            
            <div className="flex-1 p-4">
              {messages.length > 1 && messages[messages.length - 1].chartData ? (
                <BarChart
                  title="Query Results"
                  data={messages[messages.length - 1].chartData.data}
                  dataKey="value"
                  xAxisKey="category"
                  height={300}
                />
              ) : (
                <div className="flex items-center justify-center h-full text-muted-foreground">
                  <div className="text-center">
                    <Bot className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>Ask a question to see analysis results here</p>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </div>

        {/* Suggested Queries */}
        <Card className="p-4 mt-6">
          <h3 className="font-semibold mb-4">Suggested Queries</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {chatSuggestions.map((suggestion, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="h-auto p-3 text-left justify-start whitespace-normal min-h-[60px]"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                <div className="text-xs leading-relaxed">{suggestion}</div>
              </Button>
            ))}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Insights;