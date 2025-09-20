import React from 'react';
import { Card } from '@/components/ui/card';
import { Info } from 'lucide-react';

interface RightPanelProps {
  children?: React.ReactNode;
  title?: string;
}

export const RightPanel: React.FC<RightPanelProps> = ({ 
  children, 
  title = "Contextual Info" 
}) => {
  return (
    <div className="w-[10%] min-w-[160px] bg-right-panel-bg border-l border-border/50 p-4 transition-colors duration-500">
      <Card className="h-full p-4">
        <div className="flex items-center space-x-2 mb-4">
          <Info className="w-4 h-4 text-muted-foreground" />
          <h3 className="text-sm font-medium text-foreground">{title}</h3>
        </div>
        
        <div className="text-xs text-muted-foreground space-y-2">
          {children || (
            <div className="space-y-2">
              <p>Quick insights and contextual information will appear here.</p>
              <div className="w-full h-16 bg-muted/20 rounded border-2 border-dashed border-muted/40 flex items-center justify-center">
                <span className="text-xs text-muted-foreground">Content Area</span>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};