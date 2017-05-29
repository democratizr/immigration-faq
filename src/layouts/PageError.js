import glamorous from 'glamorous';
import PropTypes from 'prop-types';
import React from 'react';

import Page from './Page';

const ErrorText = glamorous.p({
  textAlign: 'center',
});

const PageError = ({ title, description }) => (
  <Page head={{ title }} body={''}>
    <ErrorText>{description}</ErrorText>
  </Page>
);

PageError.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

PageError.defaultProps = {
  title: 'Page Not Found',
  description: `We're sorry, we couldn't find that page.`,
};

export default PageError;
