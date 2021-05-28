module.exports = {
  siteMetadata: {
    title: "my gatsby blog",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: "./data/",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
    },
    "gatsby-transformer-json",
    "gatsby-transformer-remark",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    // {
    //   resolve: "gatsby-plugin-sharp",
    //   options: {
    //     // Defaults used for gatsbyImageData and StaticImage
    //     defaults: {},
    //     // Set to false to allow builds to continue on image errors
    //     failOnError: true,
    //     // deprecated options and their defaults:
    //     base64Width: 20,
    //     forceBase64Format: `jpg`, // valid formats: png,jpg,webp
    //     useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
    //     stripMetadata: true,
    //     defaultQuality: 100,
    //   },
    // },
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
  ],
};
