import PropTypes from 'prop-types';
import React from 'react';
import enhanceCollection from 'phenomic/lib/enhance-collection';

import PagesList from '../components/PagesList';


const FAQs = (props, { collection }) => {
  const faqs = enhanceCollection(collection, {
    filter: { __filename: /^faq\// },
    sort: 'title',
  });

  return (
    <PagesList pages={faqs} />
  );
};

FAQs.contextTypes = {
  collection: PropTypes.array.isRequired,
};

export default FAQs;
