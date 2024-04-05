import React from "react";
import Back from "../common/Back";
import Heading from "../common/Heading";
import img from "../images/about.jpg";
import "./about.css";

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Discover the essence of EstateEase and our commitment to revolutionizing real estate with blockchain technology.' />

            <p>At EstateEase, we're pioneers in integrating blockchain technology into real estate transactions, ensuring unparalleled security, transparency, and efficiency. Powered by Web3 technology, our platform offers a decentralized ecosystem where every property transaction is safeguarded by cryptographic protocols, providing immutable records and eliminating the risk of fraud or tampering.</p>
            <p>Whether you're buying, selling, or investing in real estate, EstateEase leverages the power of blockchain to provide a secure and seamless experience. Our team of experts combines innovative technology with industry expertise to redefine the real estate landscape, offering a range of services tailored to your needs. From smart contracts to decentralized finance (DeFi) integration, we're committed to simplifying real estate transactions while ensuring the highest standards of security.</p>
            <button className='btn2'>Learn More About Us</button>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='EstateEase Office' />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
