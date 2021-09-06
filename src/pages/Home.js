import React from 'react'
import { useSelector } from 'react-redux'
import './../scss/home.scss'

import { ReactComponent as Loader } from '../assets/circles.svg';
import CardItems from '../components/CardItems'
import UserInput from '../components/UserInput';
import SideBar from '../components/SideBar';

function Home() {
    const { isFetching } = useSelector((state) => state.homeReducer)
    return (
        <div className='app'>
            <UserInput />
            {isFetching ? <Loader /> : <CardItems />}
            <SideBar />
        </div>
    )
}

export default Home