import React from 'react';
import './Thermometer.css';
import ReactFC from 'react-fusioncharts';


const thermometer = (props) => {
    

    const dataSource = {
        chart: {
          caption: "Car Engine Temperature",
          subcaption: "(Per Quarter minute)",
          lowerlimit: "120",
          upperlimit: "200",
          numbersuffix: "°F",
          thmfillcolor: "#008ee4",
          showgaugeborder: "1",
          gaugebordercolor: "#008ee4",
          gaugeborderthickness: "2",
          plottooltext: "Temperature: <b>$datavalue</b> ",
          theme: "fusion",
          showvalue: "1"
        },
        value: "140"
      };


    return (
        <div>
            <ReactFC
            type="thermometer"
            width="100%"
            height="600"
            dataFormat="JSON"
            dataSource={dataSource}></ReactFC>
        </div>
    )
}

export default thermometer;
