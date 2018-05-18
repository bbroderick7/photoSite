'use strict';
import React, { Component }     from 'react';
import { withRouter }           from 'react-router-dom';
import { NavBar }               from './navBar';
import { BannerSelection }      from './bannerSelection';
import stillsInfo               from '../data/stillsDescription';

let Stills = () => <div className="outerDiv contentDiv-secondary col-xs-12">
  <NavBar selector={"stills-navbar"}/>
  <BannerSelection info={stillsInfo}/>
</div>

export default withRouter(Stills);
