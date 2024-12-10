module.exports = {
  plugins: {
    'postcss-preset-env': {
      stage: 3,
      features: {
        'calc': false, // Désactiver le traitement de calc()
      },
    },
  },
};
