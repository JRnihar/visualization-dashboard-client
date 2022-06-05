import React from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import useData from '../../Hooks/useData';

const ShowChart = ({list}) => {
    const{country,added}=list
    const [lists]=useData()
   console.log(list);
    return (
      
        <>
            {/* <LineChart width={1200} height={600} data={lists}>
                <Line type="monotone" dataKey="added" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="country" />
                <YAxis />
            </LineChart>  */}

            <LineChart width={1200} height={300} data={lists} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="intensity" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="country" />
                <YAxis />
                <Tooltip />
            </LineChart>
     </>
    );
};

export default ShowChart;