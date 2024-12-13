module.exports = {
  plugins: {
    'postcss-preset-env': {
      stage: 3,
      features: {
        'custom-properties': false, 
      },
    },
    'postcss-calc': {
      precision: 10, 
      preserve: true, 
    },
  },
};
