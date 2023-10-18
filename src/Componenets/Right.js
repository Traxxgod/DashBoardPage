import React from 'react'
import './Right.css'
import Middlecard from './Middlecard'
import MiddleCardNext from './MiddleCardNext'
import LowerCard from './LowerCard'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import image from './aud.jpg'
import { Height } from '@material-ui/icons'
import img from './fantasy-3077928_1280.jpg'
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import WalletIcon from '@mui/icons-material/Wallet';
import LocalMallIcon from '@mui/icons-material/LocalMall';

export default function Right() {
  return (
    <div className='main'>
      <div className="container"><h3>Hello Shahrukh</h3>

        <div className="upperSection">
          <div className='UpperCard'>
            <div className='dot1'><CurrencyExchangeIcon style={{marginLeft: "26px", marginTop: "26px", fontSize:"50px"}}/></div>
            <div className='UpperCardDetails'>
              <div className='earning fw-light'>Earning</div>
              <div className='data fw-bold'>$198k</div>
              <div className='conclusion'> <span className='conDataGreen'>37.8%</span> this month</div>
            </div>
          </div>
          <div className='UpperCard'>
            <div className='dot2'><SpeakerNotesIcon style={{marginLeft: "26px", marginTop: "26px", fontSize:"50px"}}/></div>
            <div className='UpperCardDetails'>
              <div className='order fw-light'>Order</div>
              <div className='data fw-bold'>$2.4k</div>
              <div className='conclusion'> <span className='conDataRed'>2%</span> this month</div>
            </div>
          </div>
          <div className='UpperCard'>
            <div className='dot3'><WalletIcon style={{marginLeft: "26px", marginTop: "26px", fontSize:"50px"}}/></div>
            <div className='UpperCardDetails'>
              <div className='balance fw-light'>Balance</div>
              <div className='data fw-bold'>$2.4k</div>
              <div className='conclusion'> <span className='conDataRed'>2%</span> this month</div>
            </div>
          </div>
          <div className='UpperCard'>
            <div className='dot4'><LocalMallIcon style={{marginLeft: "26px", marginTop: "26px", fontSize:"50px"}}/></div>
            <div className='UpperCardDetails'>
              <div className='total sales fw-light'>Total Sales</div>
              <div className='data fw-bold'>$89k</div>
              <div className='conclusion'> <span className='conDataGreen'>11%</span> this month</div>
            </div>
          </div>
           
        </div>

        <div className="middleSection">
          <div className='MiddleCard'>
            <div className='head'>
              <div className='heading fw-bolder m-lg-3'><h5>Overview</h5>
                <div className='earning fw-light'>Monthly Earning</div>
              </div>
              <div className='dropDown fw-light m-lg-3'>
                <div className='quart'>Quarterly <ExpandMoreIcon/> </div>
              </div>
            </div>
            <div className='graph'>
              <div className='jan'><div className='name'>Jan</div></div>
              <div className='feb'><div className='name'>Feb</div></div>
              <div className='mar'><div className='name'>Mar</div></div>
              <div className='apr'><div className='name'>Apr</div></div>
              <div className='may'><div className='name'>May</div></div>
              <div className='jun'><div className='name'>Jun</div></div>
              <div className='jul'><div className='name'>Jul</div></div>
              <div className='aug'><div className='name'>Aug</div></div>
              <div className='sep'><div className='name'>Sep</div></div>
              <div className='oct'><div className='name'>Oct</div></div>
              <div className='nov'><div className='name'>Nov</div></div>
              <div className='dec'><div className='name'>Dec</div></div>
            </div>
          </div>
            <MiddleCardNext></MiddleCardNext>
        </div>

        <div className='lowerSection'>
          <div className='LowerCard'>
            <div className='lowHeading'>
              <div className='product fw-bolder m-lg-4'>Product Sell</div>
              <div className='search'>
                <form className="d-flex">
                  <input className="form-control me-2 m-lg-3" type="search" placeholder="Search" aria-label="Search"/>
                </form>
              </div>
              <div className='dropDown fw-light m-lg-3 '>
                <div className='quart'>Last 30 days <ExpandMoreIcon/> </div>
              </div>
            </div>
            <div className="lowerTable">
              <div className="name">
                Product Name
              </div>
              <div className="stock">stock</div>
              <div className="price">Price</div>
              <div className="sales">Total Sales</div>
            </div>
            <hr/>

            <div className="item">

              <div className="lowerTable">
                <div className="name">
                  <div>
                    <img src={image} alt="..." style={{height: "50px", borderRadius: "5px"}} />
                  </div>
                  <div className="productDetails">
                    <div className="title fw-bolder">Abstract 3D</div>
                    <div className="discription">Lorem ipsum dolor sit amet consectetur adipisicing elit.!</div>
                  </div>
                </div>
                <div className="stock">32 in stock</div>
                <div className="price">$ 45.99</div>
                <div className="sales">20</div>
              </div>

              <div className="lowerTable">
                <div className="name">
                  <div>
                    <img src={img} alt="..." style={{height: "50px", borderRadius: "5px"}} />
                  </div>
                  <div className="productDetails">
                    <div className="title fw-bolder">Abstract 3D</div>
                    <div className="discription">Lorem ipsum dolor sit amet consectetur adipisicing elit.!</div>
                  </div>
                </div>
                <div className="stock">32 in stock</div>
                <div className="price">$ 45.99</div>
                <div className="sales">20</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
