import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import useData from '../../Hooks/useData';

const EndYear = () => {
    const [lists, setList] = useData()
    console.log(lists);
    return (
        <div className='mt-8'>
          
            <h2 className='text-2xl text-center  text-white  font-bold text-purple-00'>End Year</h2>
            <BarChart width={5000} height={300} data={lists}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="country" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="end_year" fill="#8884d8" />
                <Bar dataKey="start_year" fill="#82ca9d" />
            </BarChart>
        </div>
    );
};

export default EndYear;