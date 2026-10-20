// Переменная для хранения текущего размера шрифта в пикселях
let currentFontSize = 16; // Начальный размер шрифта

// Переключение страниц
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    const selectedPage = document.getElementById('page-' + pageId);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }

    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => btn.classList.remove('active'));
}

// Плавная регулировка шрифта с кликами (до 5+ шагов в обе стороны)
function changeFontSize(action) {
    if (action === 'large') {
        // Увеличиваем на 2px за каждый клик (максимум до 32px)
        if (currentFontSize < 32) {
            currentFontSize += 2;
        }
    } else if (action === 'small') {
        // Уменьшаем на 2px за каждый клик (минимум до 12px)
        if (currentFontSize > 12) {
            currentFontSize -= 2;
        }
    }

    // Применяем новый размер ко всему сайту
    document.body.style.fontSize = currentFontSize + 'px';
}

// Голосовая озвучка (Speech Synthesis)
function speakText(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel(); // Останавливаем текущую речь
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'kk-KZ';
        utterance.rate = 0.85; // Разборчивый темп
        window.speechSynthesis.speak(utterance);
    } else {
        alert('Сіздің браузеріңіз дауыстық көмекті қолдамайды.');
    }
}