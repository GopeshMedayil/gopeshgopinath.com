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
            resolve: "gatsby-plugin-sass",
            options: {
                plugins: []
            }
        }

    ]
}