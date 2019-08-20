import React from 'react'
import Load from '../components/Load';
import Load2 from '../components/Load-dessert';
import Header from '../components/layout/Header';


class Dashboard extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <Load/>
                <Load2/>
            </div>
        )
    }
}
export default Dashboard;