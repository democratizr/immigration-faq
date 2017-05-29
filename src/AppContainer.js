import glamorous, { ThemeProvider } from 'glamorous';
import PropTypes from 'prop-types';
import React from 'react';

import DefaultHeadMeta from './components/DefaultHeadMeta';
import theme from './config/theme';


const appStyles = `
html { box-sizing: border-box; }

*,
*::before,
*::after {
  box-sizing: inherit;
}

html,
body {
  margin: 0;
  padding: 0;
}

html {
  min-height: 100%;
}

body {
  color: ${theme.colors.body.color};
  background-color: ${theme.colors.body.backgroundColor};
  line-height: 1.5rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}


a {
  font-weight: bold;
  text-decoration: none;
  color: ${theme.colors.navigation.color};
}

a:hover {
  text-decoration: underline;
}

img {
  max-width: 100%;
}
`;

const GlobalStyles = () => (
  <style dangerouslySetInnerHTML={{ __html: appStyles }} />
);

const Container = glamorous.div({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
});

const Content = glamorous.div({
  flex: '1 1 auto',
  display: 'flex',
  alignItems: 'stretch',
  flexDirection: 'column',
});

const AppContainer = (props) => (
  <ThemeProvider theme={theme}>
    <Container>
      <GlobalStyles />
      <DefaultHeadMeta />
      <Content>
        { props.children }
      </Content>
    </Container>
  </ThemeProvider>
)

AppContainer.propTypes = {
  children: PropTypes.node,
}

export default AppContainer
