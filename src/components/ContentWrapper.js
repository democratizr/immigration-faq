import glamorous from 'glamorous';


const ContentWrapper = glamorous.div((props, theme) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  maxWidth: theme.layout.maxWidth,
  padding: '1rem 0.75rem',
}));

export default ContentWrapper;
