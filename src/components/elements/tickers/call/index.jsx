import React from 'react'
import CallTickerIcon from '../../../../assets/svg/phone.arrow.up.right.svg'

const CallTicker = () => {
    return (
        <div className="Ticker-Group Ticker-Call">
            <img src={CallTickerIcon} className='No-Select '/>
            <p>(+994 10) 232-21-50</p>
        </div>
    )
}

export default CallTicker