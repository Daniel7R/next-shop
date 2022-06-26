const withPwa= require("next-pwa");
const runtimeCaching= require("next-pwa/cache");

module.exports= withPwa({
    pwa: {
        dest:"public",
        register: true,
        mode: "production",
        disable: false,
        runtimeCaching,
        buildExcludes: [/middleware-manifest\.json$/],
    },
    reactStrictMode: true,
    images: {
        domains: ["api.lorem.space"],
        unoptimized: true,
    }
})

// module.exports = {
    
//     },
    // distDir: "build",
    // sassOptions: {
    //     includePaths: [path.join(__dirname, 'styles')],
    //   },
    // env: {
    //     customKey: 'customValue',
    // },
    // compress: true,
    
    // ,
    // async redirects() {
    //     return [
    //         {
    //             source: '/hola',
    //             destination: "/hello",
    //             permanent: true
    //         }
    //     ]
    // }
// }