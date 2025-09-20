import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface DonutChartProps {
  title: string;
  data: any[];
  dataKey: string;
  nameKey: string;
  height?: number;
  colors?: string[];
}

const DEFAULT_COLORS = [
  'hsl(var(--chart-blue))',
  'hsl(var(--chart-purple))',
  'hsl(var(--chart-green))',
  'hsl(var(--chart-yellow))',
  'hsl(var(--chart-red))'
];

export const DonutChart: React.FC<DonutChartProps> = ({
  title,
  data,
  dataKey,
  nameKey,
  height = 300,
  colors = DEFAULT_COLORS
}) => {
  return (
    <Card className="chart-container hover-lift">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={height}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={5}
              dataKey={dataKey}
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={colors[index % colors.length]} 
                />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px'
              }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};