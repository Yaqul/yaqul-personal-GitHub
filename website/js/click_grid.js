// 获取所有的标题元素
const toggleTitles = document.querySelectorAll('.toggle-title');

toggleTitles.forEach(title => {
  // 为每个标题添加点击事件监听器
  title.addEventListener('click', () => {
    const section = title.parentElement; // 获取当前标题所在的 section

    // 切换 section 的 "open" 类
    section.classList.toggle('open');
  });
});