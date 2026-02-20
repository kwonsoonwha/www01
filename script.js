// 부드러운 스크롤 이동 기능 (네비게이션 클릭 시)
document.addEventListener('DOMContentLoaded', () => {
    // 모든 앵커 링크 선택 (href가 #으로 시작하는 링크)
    const links = document.querySelectorAll('a[href^="#"]');

    for (const link of links) {
        link.addEventListener('click', clickHandler);
    }

    function clickHandler(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        
        // href가 '#' 단독일 경우 최상단으로
        if (href === '#') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            return;
        }

        // 대상 섹션 요소 찾기
        const targetElement = document.querySelector(href);
        if (targetElement) {
            // 헤더가 고정(fixed)되어 있으므로, 헤더 높이만큼 오프셋(offset) 보정
            const headerHeight = document.querySelector('.header').offsetHeight;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }
});