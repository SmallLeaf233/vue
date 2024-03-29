module.exports = {
  "title": "小叶子Small_leaf",
  "description": "少女折寿中……",
  "dest": "dist",
  "plugins": [    //插件
    [
      '@maginapp/vuepress-plugin-katex',
      {
        delimiters: 'dollars'
      },
    ],
  ],
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ],
    ['script', {}, `
          var _hmt = _hmt || [];
          (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?b0aae218897fa9d8a9f76e9a77e0b3c6";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
          })();
        `] //百度统计
  ],
  "locales": {
    "/": {
      "lang": 'zh-CN'
    }
  },
  // "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text":"实用工具",
        "icon":"reco-other",
        "items":[
          {"text":"图片格式转换","link":"https://www.aconvert.com/cn/"},
          {"text":"AI抠图","link":"https://www.remove.bg/"},
          {"text":"优客API","link":"https://api.iyk0.com/"},
          {
            "text":"以图搜图","items":[
              {"text":"SauceNAO","link":"https://saucenao.com/"},
              {"text":"Ascii2d","link":"https://ascii2d.net/"},
              {"text":"Yandex","link":"https://yandex.ru/images/touch/"}
            ]
          }
        ]
      },
      {
        "text": "关于",
        "link": "/about/",
        "icon": "reco-account"
      }
    ],
    "type": "blog",
    "sidebar": false,
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "friendLink": [                    //友情链接
      {
        "title": "SuperChen",
        "desc": "SuperChen",
        "logo": "http://blog.hh2022.cn/wp-content/uploads/2022/09/logo-scaled.jpg",
        "link": "http://blog.hh2022.cn/"
      }
    ],
    "valineConfig": {
      "appId": "WoSytFuuSoIewSFIePDfUOXT-gzGzoHsz",// your appId
      "appKey": "Hhq39lX8v6S8Lo5JNuXu7cd0", // your appKey
      "avatar": "retro", //
      "enableQQ": true, //启用昵称框自动获取QQ昵称和QQ头像
      "requiredFields": ['nick', 'mail'], //设置必填项
      // showComment: false
    },
    "logo": "https://s2.loli.net/2022/11/05/YVI3G9Kg6ZNhmxQ.png",
    // "huawei": true, //首页出现华为文案
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "小叶子Small_leaf",
    "authorAvatar": "https://s2.loli.net/2022/11/05/GdYqVU6NEKPBLe1.png",
    "record": "备案号是啥 能吃吗？ ", //icp备案
    "startYear": "2022",
    "info": "一个普通的高中生，喜欢整些花里胡哨的小玩意",
    "socials":{
      "github" : "https://github.com/SmallLeaf233", //github
      // "gitlub" : false, //gitlub
      // "gitee" : "https://gitee.com/GodLikeZeal", //gitee
      // "jianshu" : "https://www.jianshu.com/u/e2d051b6d2e9", //简书
      // "zhihu" : "https://www.zhihu.com/people/qian-ge-diao-63", //知乎
      // "toutiao" : false, //知乎
      // "juejin": "https://juejin.im/user/2796746683716990", //掘金
      // "segmentfault" : "https://segmentfault.com/u/zeal_5eecb699bdb08", //思否
      "csdn" : "https://t.csdnimg.cn/vmds", //CSDN
      // "wechat" : "你的微信", //微信
      // "qq" : "你的QQ" //QQ
      "bilibili": "https://b23.tv/OMQQ8Qp", //bilibili
      "twitter": "https://twitter.com/Small_leaf233" //Twitter
    },
    "mottos": [{
      "zh": "愿你保持初心和善良,笑里尽是温暖与坦荡。",
      "en": "May you keep your original heart and kindness, and smile with warmth and magnanimity."
    },
      {
        "zh": "年轻就是无限的可能。",
        "en": "Youth means limitless possibilities."
      },
      {
        "zh": "真正的梦就是现实的彼岸。",
        "en": "Real dream is the other shore of reality."
      },
      {
        "zh": "不为模糊不清的未来担忧，只为清清楚楚的现在努力。",
        "en": "Don't worry about the vague future, just strive for the clear present."
      },
      {
        "zh": "与其装腔作势企图影响别人，不如咬牙切齿狠命修理自己。",
        "en": "Rather than pretending to influence others, it's better to grind your teeth and repair yourself."
      }, {
        "zh": "上天是公平的，只要努力就会有收获，否则就是你不够努力。",
        "en": "God is fair, as long as effort will include results, otherwise is you hard enough."
      },
      {
        "zh": "人生没有后悔，我们只能尽力去不让自己后悔。",
        "en": "Life without regret, we can only do our best to not to regret."
      }
    ],
    "covers": [
      'https://s2.loli.net/2022/08/18/xtfPzCR7OvaEXw8.png',
      'https://s2.loli.net/2022/08/19/oaHkpsWg1RrwzBd.jpg',
      'https://s2.loli.net/2022/08/19/EfIXnPOJA984Ggm.jpg',
      'https://s2.loli.net/2022/08/18/Neu1JiSZIG6jHMl.png',
      'https://s2.loli.net/2022/08/18/xgmNX9kUWiVCdTI.png',
      'https://s2.loli.net/2022/08/18/ZTLOE3gXM2PhezJ.png',
      'https://s2.loli.net/2022/08/18/Gr8Fv7McxsZ9DwN.png',
    ],
    "codeTheme": "tomorrow"
  },
  "markdown": {
    "lineNumbers": false
  },
  // configureWebpack: (config, isServer) => {
  //   if (!isServer) {
  //     // 修改客户端的 webpack 配置
  //     config.output.publicPath = config.mode === 'production'
  //       ? 'https://pan.zealsay.com/blog/' // sample/essays 打包的默认路径为 ‘_nuxt’ 或者可以指定cdn 域名
  //       : '/';
  //     config.output.filename = "assets/js/[name].js";
  //   }
  // }
}