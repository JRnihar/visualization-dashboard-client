import React from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import useData from '../../Hooks/useData';

const Source = () => {
    const [lists, setList] = useData()
    console.log(lists);
    return (
        <div className='mt-8'>
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
                <XAxis dataKey="source" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="relevance" stackId="1" stroke="#8884d8" fill="#8884d8" />
                <Area type="monotone" dataKey="topic" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                <Area type="monotone" dataKey="published" stackId="1" stroke="#ffc658" fill="#ffc658" />
            </AreaChart>
        </div>
    );
};

export default Source;