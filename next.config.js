module.exports = {
    webpack: {}, // Use webpack 4
    async rewrites() {
        return [
            {
                source: '/unrelated-rewrite',
                destination: '/unrelated-destination',
            }
        ]
    }
}
