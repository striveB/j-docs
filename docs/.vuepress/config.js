const interviewSidebar = [
  {
    title: '面试题',
    sidebarDepth: 5,
    children: ['js', 'vue', 'browser', 'code',],
  },
];
const vueSidebar = [
  {
    title: 'Vue基础',
    sidebarDepth: 5,
    children: [
      'base/1', // 指令
      'base/2', // 计算属性
      'base/slot', //插槽
    ],
  },
  {
    title: '可复用性与组合',
    sidebarDepth: 5,
    children: ['reuse/1', 'reuse/2', 'reuse/3', 'reuse/4', 'reuse/5'],
  },
];
const vueRouterSidebar = [
  {
    title: 'vue-router',
    sidebarDepth: 5,
    children: ['01', '02', '03', '04', '05', '06'],
  },
];
const cssSidebar = [
  {
    title: '动画',
    sidebarDepth: 5,
    children: ['animation/01', 'animation/02', 'animation/03'],
  },
];
const vueVuexSidebar = [
  {
    title: 'Vuex',
    sidebarDepth: 5,
    children: ['01', '02', '03'],
  },
];
const vueTheorySidebar = [
  {
    title: '原理篇',
    sidebarDepth: 5,
    children: [
      {
        title: 'vue3响应式原理',
        children: ['reactive/01', 'reactive/02'],
      },
      {
        title: '渲染函数',
        children: ['reader/reader'],
      },
    ],
  },
];
const nestSidebar = [
  {
    title: '基础',
    sidebarDepth: 5,
    children: [''],
  },
];
const useJsSidebar = [
  {
    title: '功能案例',
    sidebarDepth: 5,
    children: ['icuFun', 'skill'],
  },
];
const v4Sidebar = [
  {
    title: 'javaScript高级程序设计（第四版）',
    sidebarDepth: 5,
    children: ['01', '02', '03', '04', '05'],
  },
];
const typeScriptSidebar = [
  {
    title: 'typeScript入门教程',
    sidebarDepth: 5,
    children: [
      {
        title: '开始',
        children: ['01', '02'],
      },
      {
        title: '基础',
        children: ['03', '04', '05', '06'],
      },
      // {
      //     title: '进阶',
      //     children: [
      //         '01',
      //     ]
      // }
    ],
  },
];
const webpackSidebar = [
  {
    title: 'webpack',
    sidebarDepth: 5,
    children: [
      {
        title: '基本使用',
        children: ['01'],
      },
    ],
  },
];
const nodeSidebar = [
  {
    title: 'Node.js',
    sidebarDepth: 5,
    children: [
      'base/01',
      'base/02',
      'base/03',
      'base/04',
      'base/05',
      'base/06',
    ],
  },
  {
    title: 'Express',
    sidebarDepth: 5,
    children: ['express/01', 'express/02', 'express/03'],
  },
];
module.exports = {
  title: '📘 远俊的知识库',
  head: [['link', { rel: 'icon', href: './public/images/book-alt.svg' }]],
  description: '🔥立志成为一名优秀的前端开发工程师！',
  themeConfig: {
    sidebar: {
      '/vue/api/': vueSidebar,
      '/vue/vueRouter/': vueRouterSidebar,
      '/vue/theory/': vueTheorySidebar,
      '/vue/vuex/': vueVuexSidebar,
      '/interview/': interviewSidebar,
      '/next/': nestSidebar,
      '/javaScript/usejs/': useJsSidebar,
      '/javaScript/v4/': v4Sidebar,
      '/typeScript/study/': typeScriptSidebar,
      '/node/': nodeSidebar,
      '/webpack/': webpackSidebar,
      '/css/': cssSidebar,
    },
    nav: [
      { text: '🏡', link: '/' },
      {
        text: '面试题',
        items: [
          {
            text: 'JavaScript',
            link: '/interview/js',
          },
          {
            text: 'Vue',
            link: '/interview/vue',
          },
          {
            text: '浏览器',
            link: '/interview/browser',
          },
          {
            text: '代码实现',
            link: '/interview/code',
          },
        ],
      },
      {
        text: 'Vue',
        items: [
          {
            text: 'vue全家桶',
            items: [
              { text: 'vue', link: '/vue/api/base/1' },
              { text: 'vue-router', link: '/vue/vueRouter/01' },
              { text: 'vuex', link: '/vue/vuex/01' },
            ],
          },
          {
            text: 'vue原理',
            items: [
              { text: 'vue3响应式原理', link: '/vue/theory/reactive/01' },
              { text: '渲染函数', link: '/vue/theory/reader/reader' },
            ],
          },
        ],
      },
      {
        text: 'CSS',
        items: [{ text: '动画', link: '/css/animation/01' }],
      },
      {
        text: 'JavaScript',
        items: [
          {
            text: '积累',
            items: [
              { text: 'js常用方法', link: '/javaScript/usejs/icuFun' },
              { text: '功能案例', link: '/javaScript/usejs/skill' },
            ],
          },
          {
            text: '读书',
            items: [
              {
                text: 'JavaScript高级程序（第四版）',
                link: '/javaScript/v4/01',
              },
            ],
          },
        ],
      },
      {
        text: 'TypeScript',
        items: [
          {
            text: '读书',
            items: [
              { text: 'TypeScript入门教程', link: '/typeScript/study/01' },
            ],
          },
        ],
      },
      {
        text: 'Node',
        items: [
          {
            text: 'Node.js 基础',
            link: '/node/base/01',
          },
          {
            text: 'Express',
            link: '/node/express/01',
          },
        ],
      },
      {
        text: 'Webpack',
        link: '/webpack/01',
      },
      {
        text: 'webgis',
        items: [
          {
            text: 'gis',
            link: '/webgis/index',
          },
          {
            text: 'Openlayers',
            link: '/webgis/openlayers',
          },
          {
            text: 'Cesium',
            link: '/webgis/cesium',
          },
        ],
      },
      // { text: 'Nest', link: 'https://docs.nestjs.cn/8/firststeps'}
    ],
  },
};
