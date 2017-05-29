import glamorous from 'glamorous';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import warning from 'warning';
import { BodyContainer, joinUri } from 'phenomic';

import ContentWrapper from '../components/ContentWrapper';


const BasePage = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
});

const PageHeader = glamorous.div((props, theme) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '0.5rem',
  ...theme.colors.brandInverted,
}));

const PageContent = glamorous(ContentWrapper)({
  margin: '1rem 0',
});

const Title = glamorous.h1({
  margin: 0,
  fontSize: '1.5rem',
  fontWeight: 'normal',
  lineHeight: 1,
  letterSpacing: '1px',
});

const Page = (
  {
    isLoading,
    __filename,
    __url,
    head,
    body,
    header,
    footer,
    children,
  }
) => {
  const metaTitle = head.metaTitle ? head.metaTitle : head.title;

  const meta = [
    { property: 'og:type', content: 'article' },
    { property: 'og:title', content: metaTitle },
    {
      property: 'og:url',
      content: joinUri(process.env.PHENOMIC_USER_URL, __url),
    },
    { property: 'og:description', content: head.description },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: metaTitle },
    { name: 'twitter:description', content: head.description },
    { name: 'description', content: head.description },
  ];

  return (
    <BasePage>
      <Helmet title={metaTitle} meta={meta} />
      <PageHeader>
        <ContentWrapper>
          <Title>{head.title}</Title>
        </ContentWrapper>
      </PageHeader>
      <PageContent>
        {header}
        {isLoading || <BodyContainer>{ body }</BodyContainer>}
        {children}
        {footer}
      </PageContent>
    </BasePage>
  );
};

const HeadProps = PropTypes.shape({
  title: PropTypes.string.isRequired,
});

Page.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  __filename: PropTypes.string,
  __url: PropTypes.string,
  head: HeadProps.isRequired,
  body: PropTypes.string,
  header: PropTypes.element,
  footer: PropTypes.element,
};

export default Page;
