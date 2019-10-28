import React from  'react';
import Sidenav from 'react-simple-sidenav';
import SideNavItems from './sidenavItems';
const SideNav = (props) => {
    return (
        <Sidenav
          showNav = {props.showNav}
          onHideNav = {props.onHideNav}
          navStyle = {{
              color:'white',
              background:'black',
              maxWidth:'230px'
          }}
        >
            <div>
                <SideNavItems/>
            </div>
        </Sidenav>
    )
}

export default SideNav;