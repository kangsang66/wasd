module.exports = {
    base: '/wasd/',
    title: 'Kinsey\'s Blog',
    head: [
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
    ],
    description: '你我山巅自相逢，人去归来烟雨中。',
    theme: 'reco',
    themeConfig: {
        type: 'blog',
        author: '谦逊',
        smoothScroll: true,
        huawei: true,
        logo: '/logo.png',
        type: 'blog',
        subSidebar: 'auto',
        // 头像
        authorAvatar: '/person.jpg',
        // 配置时间轴
        nav: [
            { text: '时间轴', link: '../timeline/', icon: 'reco-date' }
        ],
        // 博客配置
        blogConfig: {
            category: {
                location: 2,     // 在导航栏菜单中所占的位置，默认2
                text: '前端基础' // 默认文案 “分类”
            },
            tag: {
                location: 3,     // 在导航栏菜单中所占的位置，默认3
                text: 'Tag'      // 默认文案 “标签”
            },
        },
        // 评论功能
        valineConfig: {
            appId: 'blxU7XVX1CXgWKvVQ1YELDUl-gzGzoHsz',// your appId
            appKey: 'mRw2sXxoYOCJgnPUAeT0QKGH', // your appKey
        },

    },
    plugins: [
        ["vuepress-plugin-nuggets-style-copy", {
            copyText: "复制代码",
            tip: {
                content: "复制成功"
            }
        }],
        [
            //先安装在配置， npm install @vuepress-reco/vuepress-plugin-kan-ban-niang --save
            "@vuepress-reco/vuepress-plugin-kan-ban-niang",
            {
                theme: ['koharu', 'blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'izumi', 'shizuku', 'wanko', 'miku', 'z16'],
                clean: false,
                messages: {
                    welcome: '我是lookroot欢迎你的关注 ',
                    home: '心里的花，我想要带你回家。',
                    theme: '好吧，希望你能喜欢我的其他小伙伴。',
                    close: '再见哦'
                },
                width: 240,
                height: 352
            }
        ],
        [
            "@vuepress-reco/vuepress-plugin-loading-page",
            {
                component: '啊实打实大师大所'
            }
        ],
    ]
}