var posts=["牧羊人/workerAIflux1文生图/","牧羊人/tg图床/","牧羊人/workers部署极简图床/","牧羊人/CF优选SaaS回源/","牧羊人/wokerAI部署文生图/","牧羊人/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };