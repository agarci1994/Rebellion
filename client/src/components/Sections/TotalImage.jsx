import React from 'react'
import { Doughnut } from "react-chartjs-2";

const TotalImage = ({data, doughnutOptions}) => {
    return (
        <div className="main">
            {!data && <p>load...</p>}
            <Doughnut
                data={doughnutOptions}
                height={300}
                options={{ maintainAspectRatio: false }}
            />
            {data && <h1 className="title">Total images: {data.totalImages}</h1>}
        </div>
    )
}

export default TotalImage
