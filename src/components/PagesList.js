import glamorous from 'glamorous';
import PropTypes from 'prop-types';
import React from 'react';

import ContentWrapper from './ContentWrapper';
import PagePreview from './PagePreview';


const List = glamorous.ul({
  display: 'flex',
  flexDirection: 'column',
  listStyle: 'none',
  padding: 0,
});

const PagesList = ({ pages }) => {
  return (
    <ContentWrapper>
      { pages.length ?
        (
          <List>
            {
            pages.map((page) => (
              <li key={ page.title }>
                <PagePreview { ...page } />
              </li>
            ))
          }
          </List>
        )
        : "No posts yet." }
    </ContentWrapper>
  )
}

const PageData = PropTypes.shape({
  title: PropTypes.string.required,
});

PagesList.propTypes = {
  pages: PropTypes.arrayOf(PageData).isRequired,
}

export default PagesList
