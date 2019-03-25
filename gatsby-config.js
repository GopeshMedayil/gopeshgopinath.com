module.exports = {
    siteMetadata: {
        title: "Gopesh Gopinath"
    },
    plugins: [

        {
            resolve: "gatsby-plugin-react-helmet",
            // Blank options, equivalent to string-only plugin
            options: {
                plugins: [],
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "Gopesh Gopinath | Full Stack Developer",
                short_name: "Gopesh",
                start_url: "/",
                background_color: "#6b37bf",
                theme_color: "#6b37bf",
                // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
                // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
                display: "standalone",
                icon: "src/img/icon.jpg", // This path is relative to the root of the site.
                // An optional attribute which provides support for CORS check.
                // If you do not provide a crossOrigin option, it will skip CORS for manifest.
                // Any invalid keyword or empty string defaults to `anonymous`
                crossOrigin: `use-credentials`,
            },
        },
        `gatsby-plugin-offline`,

        {
            resolve: "gatsby-plugin-sass",
            options: {
                plugins: []
            }
        }, `gatsby-transformer-json`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `./src/data`,
            },
        },

    ]
}