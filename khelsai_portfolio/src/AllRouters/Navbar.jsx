import React from 'react'
import { NavLink } from 'react-router-dom'
import {Text} from "@chakra-ui/react"

const Navbar = () => {

  const links=[
    {
      id:1,
      path:"/",
      title:"Home"
    },
    {
      id:1,
      path:"/about",
      title:"Abouts"
    },
    {
      id:1,
      path:"/project",
      title:"Projects"
    },
    {
      id:1,
      path:"/skill",
      title:"Skills"
    },
    {
      id:1,
      path:"/contact",
      title:"Contact"
    }
  ]

  const activeStyle = {
    textDecoration: 'none',
    color: 'orange',
    fontSize:"28px",
    fontVariant: "small-caps"
  };

  const defaultStyle = {
    textDecoration: 'none',
    fontSize:"28px",
    fontVariant: "small-caps",
    backgroundColor: "#4c4177",
    color:"whitesmoke",
  };
 
  return (
    <div  id="nav-menu" style={{display:"flex",backgroundColor: "#4c4177",color:"whitesmoke",justifyContent:"space-around",margin:"auto",padding:"10px"}}>
      <div style={{ width:"47%",fontFamily:"cambria",marginLeft:"-20%"}}>
        <Text>Khelsai Rajwade</Text>
      </div>
      <div style={{ width:"50%",display:"flex",justifyContent:"space-evenly",gap:"80px", maxW:"container.lg"}}   >
        {links.map((link) => (
          <div key={link.id} >
              <NavLink
                to={link.path} 
              
                style={({ isActive }) =>
                  isActive ? activeStyle : defaultStyle
                }
              >
                {link.title}
              </NavLink>

          </div>
        ))}
        
      </div>
    </div>
  );
}

export { Navbar}
