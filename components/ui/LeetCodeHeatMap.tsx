"use client"; // Mark this as a client-side component

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

const LeetCodeHeatMap = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch LeetCode activity data from your API route
    const fetchLeetCodeData = async () => {
      try {
        const res = await axios.get('/api/leetcodeData');
        setData(res.data.activity); // Assuming 'activity' contains problem-solving data
        setLoading(false);
      } catch (error) {
        console.error('Error fetching LeetCode data', error);
        setLoading(false);
      }
    };

    fetchLeetCodeData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="py-20" id="leetcode-heatmap">
      <h1 className="heading">
        A look at my{' '}
        <span className="text-purple">LeetCode contributions</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-x-24 gap-y-8 mt-10">
        <div className="sm:h-[41rem] lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-[500px] w-[80vw]">
          <div className="relative flex items-center justify-center sm:w-[550px] w-[80vw] sm:h-[50vh] h-[30vh] overflow-hidden rounded-lg lg:h-[30vh] bg-[#13162d]">
            <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d] p-4">
              <CalendarHeatmap
                startDate={'2025-01-01'}
                endDate={'2025-01-31'}
                values={data}
                showWeekdayLabels={true}
                showMonthLabels={true}
                classForValue={(value: any) => {
                  if (!value) return 'color-empty';
                  return `color-leetcode-${value.count}`;
                }}
              />
            </div>
          </div>
          <h1 className="font-bold lg:text-sm md:text-xl text-base line-clamp-1 pb-2">
            LeetCode Problem Solving Heatmap
          </h1>
          <p className="lg:text-sm lg:font-normal font-light text-sm line-clamp-2">
            Visualize my daily LeetCode activity and problem-solving streaks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeetCodeHeatMap;
