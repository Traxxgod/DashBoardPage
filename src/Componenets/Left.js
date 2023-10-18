import React from 'react'
import './Left.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import WalletIcon from '@mui/icons-material/Wallet';
import SettingsInputSvideoIcon from '@mui/icons-material/SettingsInputSvideo';
import QuizIcon from '@mui/icons-material/Quiz';
import CallToActionIcon from '@mui/icons-material/CallToAction';
import ArrowRightIcon from '@mui/icons-material/NavigateNext';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';

export default function Left() {
  return (
    <div>
      <nav className='col d-none d-md-block sidebar'>
        <div className="sidebar-sticky">
          <div className="dashboard"><h5><CallToActionIcon/> DashBoard</h5></div>
            <ul className='nav flex-column'>
                <li className='nav-item'>
                    <a className='nav-link' href="DashBoard">
                      <DashboardIcon/>  DashBoard
                    </a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href="Product">
                      <Inventory2Icon/> Product   <ArrowRightIcon style={{textAlign:"right"}}/>
                    </a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href="Customers">
                      <SupportAgentIcon/> Customers <ArrowRightIcon style={{textAlign:"right"}}/>
                    </a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href="Income">
                      <WalletIcon/> Income  <ArrowRightIcon style={{textAlign:"right"}}/>
                    </a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href="Promote">
                      <SettingsInputSvideoIcon/>  Promote <ArrowRightIcon style={{textAlign:"right"}}/>
                    </a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href="Help">
                      <QuizIcon/> Help  <ArrowRightIcon style={{textAlign:"right"}}/>
                    </a>
                </li>
                
            </ul>
        </div>

        <div className="profile">
          <SwitchAccountIcon style={{fontSize:"50px"}}/>
          <div>
            Prakhar Shukla
            <div>Project Manager</div>
          </div>
        </div>
      </nav>
    </div>
  )
}
