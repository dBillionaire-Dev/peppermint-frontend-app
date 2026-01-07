"use client"
import React from 'react';
import { METRICS } from '@/data/data';
import { Icon } from '@/components/dashboard/Icon';

export const MetricsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {METRICS.map((metric, i) => (
        <div key={i} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{metric.label}</span>
            <div className={`flex items-center text-xs font-bold ${metric.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
              <Icon name={metric.trend === 'up' ? 'arrow-up' : 'arrow-down'} className="w-3 h-3 mr-1" />
              {metric.percentage}
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-800">{metric.value}</div>
          <div className="mt-4 h-1 w-full bg-gray-100 rounded-full overflow-hidden">
            <div 
              className={`h-full rounded-full ${metric.trend === 'up' ? 'bg-indigo-500' : 'bg-red-400'}`}
              style={{ width: `${metric.progress}%` }}

            />
          </div>
        </div>
      ))}
    </div>
  );
};
