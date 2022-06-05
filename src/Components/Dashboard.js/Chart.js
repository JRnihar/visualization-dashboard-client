import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Scatter, Tooltip, XAxis, YAxis } from 'recharts';
import useData from '../../Hooks/useData';
import ShowChart from './ShowChart';
import { Link,  NavLink,  Outlet } from 'react-router-dom';

const Chart = () => {
    const [lists, setList] = useData()
    console.log(lists);



    return (
    

        <div className='bg-slate-500'>
            <div  >
                <h2 className='text-2xl text-center pt-5 text-white mb-5 font-bold text-purple-00'>Welcome to BlackCoffer's Dashboard</h2>
           </div>
            <div class="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content bg-teal-200">

             

                    <Outlet></Outlet>

                </div>
                <div class="drawer-side ">
                    <label for="dashboard-sidebar" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-slate-500 text-base-content">
                        <li className='text-white'><NavLink to='/'>Intensity</NavLink></li>
                        <li className='text-white'><NavLink to='./likeHood'>LikeHood</NavLink></li>
                        <li className='text-white'><NavLink to='./source'>Source</NavLink></li>
                        <li className='text-white'><NavLink to='./endYear'>End_Year</NavLink></li>

                    </ul>

                </div>
            </div>

       </div>

    );
};

export default Chart;