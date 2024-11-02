import React from 'react'
import Layout from '../../components/Layouts/Layout'
import '../../Styles/Home.css'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'
import Section7 from './Section7'
const Home = () => {
  return (
    <>
      <Layout>
        {/* Home Section Hero Banner */}
        <Section1></Section1>
        {/* Home Section about  */}
        <Section2></Section2>
        {/* Home Section Menu */}
        <Section3></Section3>
        {/* Home Section Promotion */}
        <Section4></Section4>
        {/* Home Shop Setion */}
        <Section5></Section5>
        {/* Home Blog Setion */}
        <Section6></Section6>
        {/* Home contact Setion */}
        <Section7></Section7>
      </Layout>
    </>
  )
}

export default Home