import React from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import useData from '../../Hooks/useData';

const Intensity = () => {
    const [lists, setList] = useData()
    console.log(lists);
    return (
        <div className='mt-8'>
            <LineChart width={5000} height={300} data={lists} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="intensity" stroke="#8884d8" activeDot={{ r: 8 }} />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="country" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default Intensity;