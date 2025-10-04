var posts=["牧羊人/wokerAI部署文生图/","牧羊人/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };