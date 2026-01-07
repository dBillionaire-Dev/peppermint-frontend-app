
import React, { useState } from 'react';
import { STACK_CARDS } from '@/data/data';
import { Icon } from '@/components/dashboard/Icon';

export const CardStack: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % STACK_CARDS.length);
  };

  return (
    <div className="relative w-full h-[320px] lg:h-[350px] group">
      {STACK_CARDS.map((card, index) => {
        // Calculate the "distance" from the current index to determine stacking
        const offset = (index - currentIndex + STACK_CARDS.length) % STACK_CARDS.length;
        const isCurrent = offset === 0;
        
        return (
          <div
            key={card.id}
            onClick={nextCard}
            className={`absolute top-0 left-0 w-full h-full rounded-2xl p-8 border border-gray-200 shadow-sm transition-all duration-500 cursor-pointer
              ${card.color} flex flex-col justify-start
              ${isCurrent ? 'z-30 opacity-100 scale-100 translate-y-0 translate-x-0' : 
                offset === 1 ? 'z-20 opacity-80 scale-[0.96] translate-y-4 translate-x-4' : 
                'z-10 opacity-60 scale-[0.92] translate-y-8 translate-x-8'}
            `}
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-xl font-bold text-gray-800">{card.title}</h3>
              {isCurrent && (
                <div className="p-2 bg-white/50 rounded-full animate-pulse">
                  <Icon name="chevron-right" className="w-5 h-5 text-gray-600" />
                </div>
              )}
            </div>
            
            <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
              <h4 className="text-lg font-semibold text-gray-700 mb-3">Commodo consequat</h4>
              <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                {card.content}
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between text-xs text-gray-500 font-medium">
              <span>Updated 2 mins ago</span>
              <div className="flex space-x-1">
                {STACK_CARDS.map((_, dotIdx) => (
                  <div 
                    key={dotIdx}
                    className={`h-1 w-4 rounded-full transition-colors ${dotIdx === currentIndex ? 'bg-indigo-500' : 'bg-gray-300'}`} 
                  />
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
