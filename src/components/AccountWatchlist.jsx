import React from 'react'
import { Card,Divider } from '@chakra-ui/react'
import '../App.css';
const AccountWatchlist = () => {
  return (
    <>
    
     <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',margin:'16px'}}>
     <b>Account watchlist</b>

     </div>
    
         <Divider style={{color:'grey'}} />
         <div className='watchlist-container'>
            <div >
                <h6>Account</h6>
                <p>Sales</p>
                <p>Advertising</p>
                <p>Inventory</p>
                <p>Enterainment</p>
                <p>Product</p>
            </div>
            <div>
                <h6>This Month</h6>
                <p>1,194.58</p>
                <p>6,879.02</p>
                <p>4,692.26</p>
                <p>0.00</p>
                <p>4,652.10</p>
            </div>
            <div>
                <h6>YTD</h6>
                <p>11,418.29</p>
                <p>9,271.36</p>
                <p>9,768.09</p>
                <p>0.00</p>
                <p>2,529.90</p>
            </div>
         </div>
  </>
  )
}

export default AccountWatchlist
