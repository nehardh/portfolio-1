// components/GitHubHeatmap.js
import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const GitHubHeatmap = () => {
    return (
        <div className=" py-20 flex justify-center  rounded-lg lg:w-[60vw] lg:h-[30vw] pl-8">
            <GitHubCalendar username="nehardh" />
        </div>
    );
};

export default GitHubHeatmap;
