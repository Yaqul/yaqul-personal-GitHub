  // 获取所有导航栏链接
  const navLinks = document.querySelectorAll('nav a');

  // 为每个链接添加点击事件监听器
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      // 移除其他链接的 `active` 类
      navLinks.forEach(l => l.classList.remove('active'));
      
      // 给当前点击的链接添加 `active` 类
      this.classList.add('active');
    });
  });