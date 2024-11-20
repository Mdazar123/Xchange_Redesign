import React from 'react'
import './trust.css'
import trust from '../../assets/xtrust.png'
import tick from '../../assets/tick.svg'
const Trust = () => {
  return (
    <div className='trust'>
      <div className='trust_left'>
        <p><span>Why trust us?</span></p>
        <h1>Why Should You Trust Our
        Product</h1>
        <p>Trust our product for reliability, quality, and satisfaction.</p>
        <div className="trusts">
          <div className="trust_card">
            <img src={tick} alt="" />
            <h3>Safe and Secure Process</h3>
          </div>
          <div className="trust_card">
            <img src={tick} alt="" />
            <h3>Verified trustworthy sellers</h3>
          </div>
          <div className="trust_card">
            <img src={tick} alt="" />
            <h3>Clear and fair policies for all</h3>
          </div>
        </div>
        <button className='trust_button'>Get Started</button>
      </div>
      <div className='trust_right'>
<div class="container noselect">
  <div class="canvas">
    <div class="tracker tr-1"></div>
    <div class="tracker tr-2"></div>
    <div class="tracker tr-3"></div>
    <div class="tracker tr-4"></div>
    <div class="tracker tr-5"></div>
    <div class="tracker tr-6"></div>
    <div class="tracker tr-7"></div>
    <div class="tracker tr-8"></div>
    <div class="tracker tr-9"></div>
    <div class="tracker tr-10"></div>
    <div class="tracker tr-11"></div>
    <div class="tracker tr-12"></div>
    <div class="tracker tr-13"></div>
    <div class="tracker tr-14"></div>
    <div class="tracker tr-15"></div>
    <div class="tracker tr-16"></div>
    <div class="tracker tr-17"></div>
    <div class="tracker tr-18"></div>
    <div class="tracker tr-19"></div>
    <div class="tracker tr-20"></div>
    <div class="tracker tr-21"></div>
    <div class="tracker tr-22"></div>
    <div class="tracker tr-23"></div>
    <div class="tracker tr-24"></div>
    <div class="tracker tr-25"></div>
    <div id="card">
      <img src={trust} alt="" className='trust_img' />
    </div>
  </div>
</div>
      </div>
    </div>
  )
}

export default Trust