var posts=["2024/04/01/杂乱无章/日志/","2024/04/01/ops/env环境变量/","2024/04/01/ops/ffmpeg将本地视频推流/","2024/04/01/ops/ios反编译及砸壳/","2024/04/15/ops/macos蓝牙、wifi睡眠及唤醒/","2024/04/01/ops/SSH动态端口转发访问服务器内网/","2024/04/01/ops/多阶段构建打包项目/","2024/04/01/ops/搭建stmp流媒体服务器/","2024/04/01/ops/jumpserver/","2024/04/25/node-red/一.node-red 搭建/","2024/04/25/node-red/二.Mobbus读取写入/","2024/04/01/ops/supervisor使用文档/","2024/04/01/ops/windows程序注册为服务/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };