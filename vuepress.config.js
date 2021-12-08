const {AutoNavSide} = require("./.vuepress/auto_nav_side")

const autoNavSide = new AutoNavSide()
let navbar = autoNavSide.genNavbarGroup()
let sidebar = autoNavSide.genSidebarGroup()
console.log("navbar:", navbar)
console.log("sidebar:", sidebar)
module.exports = {
    lang: "zh-Hans",
    title: "小城",
    description: "notes",
    public: "./public",
    dest: "./dist",
    head: [
        ['link', {rel: 'icon', href: '/images/favicon.ico'}],
    ],
    themeConfig: {
        // logo: '/images/favicon.ico',
        navbar,
        sidebar: sidebar,
        "@@@test@@@": "cherry",
    },
    bundlerConfig: {
        viteOptions: {
            server: {
                watch: {
                  ignored: ['!**/node_modules/@vuepress/theme-default/**']
                }
            },
            // 被监听的包必须被排除在优化之外，
            // 以便它能出现在依赖关系图中并触发热更新。
            optimizeDeps: {
            exclude: ['@vuepress/theme-default']
            }
        }
    }
}
