import React, { useEffect, useState } from "react";

// Services
import { getStatistics } from "../services/cloudinary.services";
// Components
import TotalImage from "./Sections/TotalImage";
import SizePicture from "./Sections/SizePicture";
import Picture from "./Sections/Pictures";

const Statistic = () => {
  // State
  const [data, setData] = useState();
  const [doughnutOptions, setDoughnut] = useState([]);
  const [lineOptions, setLine] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {viewStatistic()});

  // Configs Charts
  const createOptionsDoughnut = (data) => {
    const chart = {
      labels: Object.keys(data.formats),
      datasets: [
        {
          data: Object.values(data.formats),
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#57d657"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#57d657"],
        },
      ],
    };
    setDoughnut(chart);
  };

  const createOptionsLine = (data) => {
    const chart = {
      labels: data.allSize.map((elm, idx) => idx),
      datasets: [
        {
          label: "Size Picture",
          fill: false,
          lineTension: 0.1,
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: data.allSize,
        },
      ],
    };
    setLine(chart);
  };

  // Service
  const viewStatistic = async () => {
    try {
      const data = await getStatistics();
      createOptionsDoughnut(data);
      createOptionsLine(data);
      setData(data);
    } catch (error) {
      setError("Upps! I am a mistake, we will solve it as soon as possible");
    }
  };

  return (
    <div className="margin">
      {error ? (
        <h1 style={{color: "white"}}>{error}</h1>
      ) : (
        <>
          <TotalImage data={data} doughnutOptions={doughnutOptions} />
          <div className="content">
            <Picture data={data} />
            {data && <SizePicture data={data} lineOptions={lineOptions} />}
          </div>
        </>
      )}
    </div>
  );
};

export default Statistic;
