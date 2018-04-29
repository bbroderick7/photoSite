'use strict';
import React, { Component }     from 'react';
import { withRouter }           from 'react-router-dom';
import { NavBar }               from './navBar';
import { BannerSelection }      from './bannerSelection';
import  projectInfo             from '../data/projectsDescription';
/*************************************************************************/
let Projects = () => <div className="outerDiv contentDiv-secondary col-xs-12">
  <NavBar selector={"projects-navbar"}/>
  <BannerSelection info={projectInfo}/>
</div>

export default withRouter(Projects);
