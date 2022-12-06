module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/sass/_variables.scss";
        @import "@/sass/_mixins.scss";`,
      },
    },
  },
};
