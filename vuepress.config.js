const {AutoNavSide} = require("./.vuepress/auto_nav_side")

const autoNavSide = new AutoNavSide()
let navbar = autoNavSide.genNavbarGroup()
let sidebar = autoNavSide.genSidebarGroup()
console.log(navbar)
console.log(sidebar)
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
        sidebar,
    }
}