import React from 'react'
import { Line } from "react-chartjs-2";
const SizePicture = ({data, lineOptions}) => {
    return (
        <div className="content-size">
            <Line data={lineOptions} />
            {data && <h1 className='text-size'>Avg: {data.avgSize} bytes</h1>}
        </div>
    )
}

export default SizePicture
