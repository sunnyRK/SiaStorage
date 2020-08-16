import React, { Component } from 'react';

import LandingContainer from '../src/modules/components/landing/LandingContainer';
import Auth from '../src/hoc/auth';

class Landing extends Component { 
  render() {
    return (
      <LandingContainer />
    );
  }
}

export default Auth(Landing);
