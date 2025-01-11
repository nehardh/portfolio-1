import React from 'react'
import GitHubHeatmap from './ui/GitHubHeatMap'
import LeetCodeHeatMap from './ui/LeetCodeHeatMap'

const Activity = () => {
  return (
    <section>
        <div className="">
            <h1 className="heading text-purple">GitHub Activity</h1>
            <GitHubHeatmap />
        </div>
        <div className="">
            <LeetCodeHeatMap />
        </div>
    </section>
  )
}

export default Activity