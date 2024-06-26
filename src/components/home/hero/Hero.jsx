import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"
import {useNavigate} from "react-router-dom"
const Hero = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading title='Search Your Next Property ' subtitle='Find new & featured property located in your local city.' />

          <form className='flex'>
            <div className='box'>
              <span>City/Street</span>
              <input type='text' autoComplete="none" placeholder='Location' />
            </div>
            <div className='box'>
              <span>Property Type</span>
              <input type='text'autoComplete="none" placeholder='Property Type' />
            </div>
            <div className='box'>
              <span>Price Range</span>
              <input type='text' autoComplete="none" placeholder='Price Range' />
            </div>
            {/* <div className='box'>
              <h4>Advance Filter</h4>
            </div> */}
            <button className='btn1' onClick={()=>navigate("/")}>
              <i className='fa fa-search'></i>
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Hero
