import React from 'react';

import FAQs from '../components/FAQs';
import Page from './Page';


const Homepage = (props) => {
  return (
    <Page { ...props }>
      <FAQs />
    </Page>
  )
};

export default Homepage;
