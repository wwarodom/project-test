import React from 'react'
import MainLayout from '../components/layout/MainLayout';
import QR from '../asset/img/QR.png'


class Dashboard extends React.Component {
    render() {
        return (
            <div>

                <MainLayout />
                <div className="warp-profile">
                    <div className="profile">
                        <div className="warp-text" >
                            <h1>หัวข้อใหญ่</h1>
                            <h6>คำเปรย</h6>
                        </div>
                        <div className="warp-img">
                          <img src={QR} alt="qr" />  
                        </div>
                        
                    </div>
                </div>

                <div className="warp-Dashboard">

                </div>



            </div>
        )
    }
}
export default Dashboard;