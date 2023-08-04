export default {

    base: process.env.NODE_ENV === "production" ? "/tooyui/" : "/",


    themeConfig: {
        siteTitle: false,
        logo: "/logo.png",
        nav: [
            { text: "指南", link: "/guild/installation" },
            { text: "组件", link: "/examples/button/" },
        ],
        socialLinks: [{ icon: "github", link: "https://github.com/Y-ash9" }],


        sidebar: {
            "/guild/": [
                {
                    text: "基础",
                    items: [
                        {
                            text: "安装",
                            link: "/guild/installation",
                        },
                        {
                            text: "快速开始",
                            link: "/guild/quickstart",
                        },
                    ],
                },
                {
                    text: "进阶",
                    collapsed: false,
                    items: [
                        {
                            text: "xx",
                            link: "/xx",
                        },
                    ],
                },
            ],


            "/examples/": [
                {
                    text: "基础组件",
                    items: [
                        {
                            text: "Button按钮",
                            link: "/examples/button/",
                        },
                        {
                            text: "Input输入框",
                            link: "/examples/input/",
                        },
                        {
                            text: "Textarea文本域",
                            link: "/examples/textarea/",
                        },
                        {
                            text: "Space间距",
                            link: "/examples/space/",
                        },

                    ],
                },
            ],


        }



    },







}
