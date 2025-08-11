module.exports = {
  theme: {
    extend: {
      animation: {
        'gradient-flow': 'gradientFlow 12s ease infinite',
      },
      keyframes: {
        gradientFlow: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        }
      }
    }
  }
}