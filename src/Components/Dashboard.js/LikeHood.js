import React from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import useData from '../../Hooks/useData';

const LikeHood = () => {
    const [lists, setList] = useData()
    console.log(lists);
    return (
        <div>
            <AreaChart
                width={5000}
                height={400}
                data={lists}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="country" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="likelihood" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
        </div>
    );
};

export default LikeHood;