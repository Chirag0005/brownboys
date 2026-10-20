import React, { useState, useEffect } from 'react';
import { SALON_INFO } from '../data/salonData';
import { getSydneyStatus } from '../utils/hoursUtil';
import type { SalonStatus } from '../utils/hoursUtil';
import { Clock, Calendar } from 'lucide-react';

interface OpeningHoursComponentProps {
  onOpenBooking?: () => void;
}

export const OpeningHoursComponent: React.FC<OpeningHoursComponentProps> = ({ onOpenBooking }) => {
  const [status, setStatus] = useState<SalonStatus>(getSydneyStatus());

  useEffect(() => {
    setStatus(getSydneyStatus());
    const interval = setInterval(() => {
      setStatus(getSydneyStatus());
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-7 sm:p-8 rounded-3xl bg-white border border-[#E5E5E2] shadow-sm">
      {/* Top Header with Live Badge */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E5E5E2]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Clock className="w-5 h-5 text-[#E5B824]" />
            <h3 className="text-xl sm:text-2xl font-bold text-[#121212]">
              Opening Hours
            </h3>
          </div>
          <p className="text-xs text-[#5A5A57]">
            Sydney Local Time: <span className="font-semibold text-[#121212]">{status.sydneyTimeDisplay}</span>
          </p>
        </div>

        {/* Live Status Pill */}
        <div className="flex items-center gap-2.5">
          <div
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold border transition-colors ${
              status.isOpen
                ? 'bg-emerald-50 border-emerald-200 text-emerald-700'
                : 'bg-[#F3F3F0] border-[#E5E5E2] text-[#5A5A57]'
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full ${
                status.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-neutral-400'
              }`}
            />
            <span>{status.statusText}</span>
          </div>
          <span className="text-xs text-[#5A5A57] hidden sm:inline">
            {status.detailText}
          </span>
        </div>
      </div>

      {/* Schedule Table */}
      <div className="divide-y divide-[#E5E5E2] my-6">
        {SALON_INFO.hours.map((schedule) => {
          const isToday = status.dayName === schedule.day;
          return (
            <div
              key={schedule.day}
              className={`py-3 flex items-center justify-between text-sm transition-colors rounded-xl px-3 ${
                isToday ? 'bg-[#FAF9F5] border border-[#E5B824]/30 font-bold' : 'text-[#5A5A57]'
              }`}
            >
              <div className="flex items-center gap-2">
                {isToday && <span className="w-2 h-2 rounded-full bg-[#E5B824]"></span>}
                <span className={isToday ? 'text-[#121212]' : 'text-[#5A5A57]'}>
                  {schedule.day}
                  {isToday && (
                    <span className="ml-2 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-[#E5B824] text-black">
                      Today
                    </span>
                  )}
                </span>
              </div>
              <span className={`font-mono text-xs sm:text-sm ${isToday ? 'text-[#121212] font-extrabold' : 'text-[#5A5A57]'}`}>
                {schedule.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Walk-in Availability Callout */}
      <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#E5E5E0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="text-xs text-[#5A5A57]">
          <p className="font-bold text-[#121212] mb-0.5">Spontaneous walk-ins welcome</p>
          <p>Drop in during salon hours or reserve your preferred spot in seconds.</p>
        </div>
        {onOpenBooking ? (
          <button
            type="button"
            onClick={onOpenBooking}
            className="text-xs font-bold px-4 py-2.5 rounded-xl bg-[#E5B824] hover:bg-[#D0A415] text-black transition-all shadow-sm active:scale-95 cursor-pointer shrink-0 flex items-center gap-1.5"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Online</span>
          </button>
        ) : null}
      </div>
    </div>
  );
};
