// Portfolio项目过滤功能
const filterButtons = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.project-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // 更新活动按钮
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // 过滤项目
        const filter = button.getAttribute('data-filter');

        projectItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category').includes(filter)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// 项目详情页中的标签切换功能
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabName = button.getAttribute('data-tab');

        // 更新活动按钮
        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // 显示对应面板
        tabPanels.forEach(panel => {
            if (panel.id === tabName) {
                panel.classList.add('active');
            } else {
                panel.classList.remove('active');
            }
        });
    });
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});