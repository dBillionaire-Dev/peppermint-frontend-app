
import React from 'react';
import { CardStack } from '@/components/dashboard/CardStack';
import { MetricsGrid } from '@/components/dashboard/MetricsGrid';
import { InteractiveMap } from '@/components/dashboard/InteractiveMap';
import { DATA_SOURCES } from '../../data/data';
import { Icon } from '@/components/dashboard/Icon';

export const Dashboard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-10">
      {/* Header Section */}
      <div className="flex flex-col lg:items-center justify-between md:justify-center gap-20  border-b border-gray-200 lg:pb-15 mb-0 min-h-[80vh]">
        <div className='lg:pt-15 lg:pr-70'>
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-none mb-2 
               bg-linear-to-r from-indigo-500 via-indigo-800 to-indigo-950 
               bg-clip-text text-transparent">
            Ask Stream
          </h1>
          <p className="text-4xl lg:text-6xl font-bold text-gray-300">lorem ipsum</p>
        </div>
        
      <div className="w-full max-w-2xl px-4 pb-20 mb-5">
        <div className="bg-white rounded-2xl border border-gray-200 drop-shadow-sm shadow-indigo-100/30 p-4 flex flex-col gap-4 relative w-full focus-within:ring-2 focus-within:ring-indigo-100 transition-all">
          
          <div className="relative w-full">
            <Icon
              name="search"
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none"
            />
            <input
              type="text"
              placeholder="Ask anything"
              className="w-full pl-10 pr-4 py-2 text-base text-gray-600 outline-none placeholder-gray-400 font-medium rounded-lg"
            />
          </div>

          <div className="flex items-center justify-between border-t border-gray-50 pt-3">
            <div className="flex items-center gap-3">
              <span className="px-2 py-0.5 rounded bg-indigo-50 border border-indigo-100 text-[10px] font-black text-indigo-600">✦ Beta</span>
              <span className="text-[10px] text-gray-400 font-bold tracking-tight">Conversational Analytics</span>
            </div>
            <button className="bg-gray-400 hover:bg-[#C1C3D0] text-white px-8 py-2.5 rounded-xl text-xs font-extrabold transition-all shadow-sm">
              Analyze
            </button>
          </div>
        </div>
      </div>
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Sidebar Mini - Bookmarks & History */}
        <div className="lg:col-span-3 space-y-8 border-r border-gray-200 pt-3">
          <div>
            <h3 className="text-xs font-bold text-gray-400 tracking-widest mb-4">Bookmarks</h3>
            <ul className="space-y-4">
              <li className="text-sm font-medium bg-indigo-50 py-2 hover:underline cursor-pointer">Why is sentiment dropping this...</li>
              <li className="text-sm font-medium text-gray-500 hover:text-gray-800 cursor-pointer">What do people dislike about...</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">History</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 rounded-lg hover:bg-white cursor-pointer group transition-all">
                <span className="text-sm font-medium text-gray-600">Today</span>
                <Icon name="chevron-right" className="w-4 h-4 text-gray-300 group-hover:text-indigo-400" />
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg hover:bg-white cursor-pointer group transition-all">
                <span className="text-sm font-medium text-gray-600">Last 7 days</span>
                <Icon name="chevron-right" className="w-4 h-4 text-gray-300 group-hover:text-indigo-400" />
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg hover:bg-white cursor-pointer group transition-all">
                <span className="text-sm font-medium text-gray-600">November</span>
                <Icon name="chevron-right" className="w-4 h-4 text-gray-300 group-hover:text-indigo-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Sections */}
        <div  className="lg:col-span-9 space-y-8 pt-7.5 bg-white rounded-2xl p-8">
        <div className="lg:col-span-9 space-y-8 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm min-h-[320px]">
          
          {/* Section 1 & 2 Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
            <div className="space-y-4 md:border-r border-gray-100">
              <h2 className="text-xl font-bold text-gray-800">Section 1</h2>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-6 leading-tight">Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="inline-flex items-center px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-bold rounded-full border border-indigo-100">
                  <span className="mr-1">+</span> Chip
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-800">Section 2</h2>
              <CardStack />
            </div>
          </div>

          {/* Section 3 & Data Source Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:border-t border-gray-100">
             <div className="space-y-4 md:border-r border-gray-100">
              <h2 className="text-xl font-bold text-gray-800">Section 3</h2>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">Commodo consequat</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>

            <div className="bg-white md:p-12">
             <div className="flex items-center justify-between mb-12">
               <h4 className="text-[14px] font-bold text-indigo-900/30 tracking-[0.2em]">Data Source</h4>
               <span className="text-[12px] font-black text-gray-400 flex items-center gap-1 cursor-pointer hover:text-gray-600 transition-colors">All ▼</span>
             </div>
             <div className="space-y-8">
                {DATA_SOURCES.map((source, i) => (
                  <div key={source.id} className="flex gap-5 group cursor-pointer">
                    <div className="flex-1 min-w-0 border-b border-gray-50 pb-4 group-last:border-none">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="text-sm font-medium text-gray-500 group-hover:text-indigo-600 transition-colors">{source.name}</h5>
                        <div className="flex items-center gap-3">
                           <span className="text-[12px] text-gray-400 font-semi-bold tracking-widest">{source.date}</span>
                           <span className="text-gray-200 opacity-60">
                             <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                           </span>
                        </div>
                      </div>
                      <p className="text-[11px] text-gray-400 font-medium leading-relaxed line-clamp-1 group-hover:text-gray-500">
                        {source.description}
                      </p>
                    </div>
                  </div>
                ))}
             </div>
          </div>
          </div>
        </div>
          {/* Demographic Section  */}
          <div className="space-y-6 pt-10 border-t border-gray-200">
            <div className="flex justify-between items-end">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Demographics</h2>
                <p className="text-gray-400 text-sm font-medium">Detailed breakdown of user demographics and geographic distribution.</p>
              </div>
              <button className="flex items-center space-x-2 text-sm font-bold text-indigo-600 bg-indigo-50 px-4 py-2 rounded-xl border border-indigo-100 hover:bg-indigo-100 transition-colors">
                <Icon name="database" className="w-4 h-4" />
                <span>Export Data</span>
              </button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-3 space-y-6">
                <MetricsGrid />
                <div className="bg-indigo-600 rounded-3xl p-8 text-white shadow-xl shadow-indigo-200 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:scale-110 transition-transform">
                    <Icon name="database" className="w-40 h-40" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 relative z-10">User Sentiment Analysis</h3>
                  <p className="text-indigo-100 text-sm leading-relaxed max-w-lg mb-8 relative z-10">
                    Our AI models indicate a strong 12% growth in positive sentiment across European markets this month. The key driver is the recent interface improvements.
                  </p>
                  <button className="bg-white text-indigo-600 font-bold px-6 py-3 rounded-2xl shadow-sm hover:bg-indigo-50 transition-colors relative z-10">
                    View Full Report
                  </button>
                </div>
              </div>
              <div className="lg:col-span-3">
                <InteractiveMap />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
