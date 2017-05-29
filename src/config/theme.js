const colors = {
  black: '#000',
  black25: 'rgba(0, 0, 0, 0.25)',
  white: '#fff',
  grey: {
    darkest: '#454545',
    darker: '#666',
    light: '#ccc',
    lighter: '#ddd',
    lightest: '#f4f4f4',
  },
  pink: '#d52569',
  blue: '#3c6c90',
};

export default {
  colors: {
    body: {
      color: colors.black,
      backgroundColor: colors.white,
    },
    brand: {
      color: colors.pink,
    },
    brandInverted: {
      color: colors.white,
      backgroundColor: colors.pink,
    },
    navigation: {
      color: colors.blue,
    },
  },
  layout: {
    maxWidth: '40rem',
  },
};
