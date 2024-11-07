document.addEventListener('DOMContentLoaded', function() {
    const activityContainer = document.querySelector('.activity-container');
    const barItems = document.querySelectorAll('.bar-item');
    const activities = document.querySelectorAll('.activity');
    let currentIndex = 0;

    function showActivity(index) {
        activityContainer.style.transform = `translateX(-${index * 100}%)`;
        barItems.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
    }

    barItems.forEach((item, index) => {
        item.addEventListener('mouseover', () => {
            showActivity(index);
        });
    });

    activities.forEach(activity => {
        activity.addEventListener('click', () => {
            const target = activity.getAttribute('data-target');
            window.location.href = target;
        });
    });

    // 自动切换活动
    setInterval(() => {
        currentIndex = (currentIndex + 1) % activities.length;
        showActivity(currentIndex);
    }, 5000);
});
