import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { CostBreakdownItem } from '../types';

interface CostBreakdownProps {
  data: CostBreakdownItem[];
  total: number;
}

const CostBreakdown: React.FC<CostBreakdownProps> = ({ data, total }) => {
  const formatCurrency = (value: number) => 
    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);

  // Custom label renderer for the Pie chart to show percentage cleanly
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    // Position outside
    const x = cx + (outerRadius + 15) * Math.cos(-midAngle * RADIAN);
    const y = cy + (outerRadius + 15) * Math.sin(-midAngle * RADIAN);
    
    // Only show label if slice is significant enough to avoid clutter
    if (percent < 0.05) return null;

    return (
      <text 
        x={x} 
        y={y} 
        fill="#64748b" 
        textAnchor={x > cx ? 'start' : 'end'} 
        dominantBaseline="central"
        fontSize="11"
        fontWeight="600"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100 h-full flex flex-col relative overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#C5A059]"></div>

      <div className="mb-6">
        <h3 className="text-2xl font-bold text-[#1e3a8a] mb-2">
          Composição
        </h3>
        <p className="text-sm text-slate-500 font-medium">Detalhamento dos tributos pagos</p>
      </div>

      <div className="flex-grow w-full h-72 relative mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={105}
              paddingAngle={2}
              dataKey="value"
              stroke="none"
              cornerRadius={4}
              isAnimationActive={false} // Disabled for PDF export
              label={renderCustomizedLabel} // Show labels for PDF
              labelLine={{ stroke: '#cbd5e1', strokeWidth: 1 }}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value: number) => formatCurrency(value)}
              contentStyle={{ borderRadius: '8px', border: 'none', backgroundColor: '#1e3a8a', color: 'white', fontSize: '13px', fontWeight: 500, padding: '12px' }}
              itemStyle={{ color: 'white' }}
            />
          </PieChart>
        </ResponsiveContainer>
        {/* Center Label */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
            <span className="text-xs text-slate-400 uppercase tracking-widest block mb-1 font-semibold">Total</span>
            <span className="text-2xl font-bold text-[#1e3a8a]">{formatCurrency(total)}</span>
        </div>
      </div>

      <div className="mt-auto space-y-4">
        {data.map((item) => (
          <div key={item.name} className="flex items-center justify-between text-sm group p-2 hover:bg-slate-50 rounded-lg transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full shadow-sm" style={{ backgroundColor: item.color }} />
              <span className="text-slate-600 font-medium group-hover:text-slate-900 transition-colors">{item.name}</span>
            </div>
            <span className="font-bold text-slate-800">{formatCurrency(item.value)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CostBreakdown;