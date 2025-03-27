// components/TermCalendar.tsx
"use client";
import { format } from "date-fns";
type TermCalendarProps = {
  calendar: {
    termName: string;
    weeks: { date: string; note?: string }[];
  }[];
};
export default function TermCalendar({ calendar }: TermCalendarProps) {
  if (!calendar || calendar.length === 0) {
    return <p className="text-red-500">📭 No calendar data available.</p>;
  }

  return (
    <div className="space-y-4 text-xl">
      {calendar.map((term, idx) => (
        <div key={idx} className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="checkbox" className="peer" /> {/* 👈 expanded by default for debugging */}
          <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-2xl font-semibold">
            {term.termName}
          </div>
          <div className="collapse-content bg-base-200 text-base-content p-4">
            {term.weeks?.length > 0 ? (
                <ul className="text-left space-y-2 font-semibold">
                {term.weeks.map((week, i) => (
                  <li key={i} className="flex justify-between border-b border-base-300 pb-1">
                    <span>
                      {format(new Date(week.date), 'EEE dd MMM')}
                    </span>
                    <span>{week.note || ""}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm italic text-gray-300">No weeks found for this term.</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}