import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Scatter, Tooltip, XAxis, YAxis } from 'recharts';
import useData from '../../Hooks/useData';
import ShowChart from './ShowChart';
import { Link,  Outlet } from 'react-router-dom';

const Chart = () => {
    const [lists, setList] = useData()
    console.log(lists);



    return (
        <div>
          
            <LineChart width={5000} height={300} data={lists} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="intensity" stroke="#8884d8" activeDot={{ r: 8 }} />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="country" />
                <YAxis />
                <Tooltip />
            </LineChart>
            <div className='chart-2'>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <BarChart width={5000} height={250} data={lists}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="country" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="end_year" fill="#8884d8" />
                                <Bar dataKey="start_year" fill="#82ca9d" />
                            </BarChart>
                        </div>
                    </div>
                </div>
            </div>
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
                    <XAxis dataKey="source" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="relevance" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="topic" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                    <Area type="monotone" dataKey="published" stackId="1" stroke="#ffc658" fill="#ffc658" />
                </AreaChart>
            </div>
            <Outlet></Outlet>
          <div >
               <li><Link to='/'>Intensity</Link></li>
               <li><Link to='./likeHood'>LikeHood</Link></li>
          </div>
        </div>
    );
};

export default Chart;