    // 监听滚动事件
window.addEventListener('scroll', () => {
    // 选择所有的.section元素
    const sections = document.querySelectorAll('.section');
    
    // 遍历每个section
    sections.forEach(section => {
      // 获取当前section的边界信息
      const rect = section.getBoundingClientRect();
      
      // 检查section是否进入可视区域的80%
      if (rect.top < window.innerHeight * 0.8) {
        // 若进入可视区域，则添加'visible'类触发过渡效果
        section.classList.add('visible');
      }
    });
  });

