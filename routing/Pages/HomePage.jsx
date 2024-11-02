import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {

  const navbarData = ["login", "signup"]

  return (
    <div>
      <p>Hello</p>

      <div>
        {
          navbarData.map((nav, index) => {
            return (
              <ul key={index}>
                <li><Link to={`/${nav}`}>{nav}</Link></li>
              </ul>
            )
          })
        }
      </div>

    </div>
  )
}

export default HomePage