document.addEventListener('DOMContentLoaded', function() {
    // Элементы DOM
    const adForm = document.getElementById('ad-form');
    const adsContainer = document.getElementById('ads-container');
    const imagePreview = document.getElementById('image-preview');
    const imageInput = document.getElementById('ad-image');
    const notification = document.getElementById('notification');
    const notificationText = document.getElementById('notification-text');
    
    // Ключ для localStorage (одобренные объявления)
    const APPROVED_ADS_KEY = 'vegas_plus_approved_ads';
    // Email для модерации (замените на свой)
    const MODERATION_EMAIL = "your-email@example.com";
    
    // Загрузка одобренных объявлений из localStorage
    function loadApprovedAds() {
        const ads = JSON.parse(localStorage.getItem(APPROVED_ADS_KEY)) || [];
        renderAds(ads);
        return ads;
    }
    
    // Отправка письма для модерации
    function sendForModeration(ad) {
        const subject = "Новое объявление на модерацию | VEGAS+";
        const body = `
            Новое объявление требует модерации:
            
            Название: ${ad.title}
            Категория: ${getCategoryName(ad.category)}
            Описание: ${ad.description}
            Контакты: ${ad.contacts}
            Изображение: ${ad.image || 'Не указано'}
            
            Дата: ${new Date(ad.date).toLocaleString()}
            
            Для добавления в общий список выполните в консоли:
            
            // 1. Получить текущие объявления
            const ads = JSON.parse(localStorage.getItem('${APPROVED_ADS_KEY}')) || [];
            
            // 2. Добавить новое объявление
            ads.unshift(${JSON.stringify(ad, null, 4)});
            
            // 3. Сохранить обновленный список
            localStorage.setItem('${APPROVED_ADS_KEY}', JSON.stringify(ads));
            
            // 4. Обновить страницу
            window.location.reload();
        `;
        
        // В реальном проекте раскомментируйте строку ниже
        // window.location.href = `mailto:${MODERATION_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        // Для демонстрации выводим в консоль
        console.log("Отправлено на модерацию:", { subject, body });
        return true;
    }
    
    // Отображение объявлений
    function renderAds(ads) {
        if (ads.length === 0) {
            adsContainer.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-box-open"></i>
                    <p>Пока нет одобренных объявлений</p>
                </div>
            `;
            return;
        }
        
        adsContainer.innerHTML = '';
        
        ads.forEach((ad, index) => {
            const adCard = document.createElement('div');
            adCard.className = 'ad-card';
            adCard.innerHTML = `
                <div class="ad-image">
                    ${ad.image ? 
                        `<img src="${ad.image}" alt="${ad.title}">` : 
                        `<i class="fas fa-image"></i>`}
                </div>
                <div class="ad-content">
                    <h3 class="ad-title">${ad.title}</h3>
                    <p class="ad-description">${ad.description}</p>
                    <p class="ad-contacts">${ad.contacts}</p>
                    <div class="ad-footer">
                        <span class="ad-category">${getCategoryName(ad.category)}</span>
                        <div class="ad-actions">
                            <button class="btn btn-danger" data-index="${index}">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `;
            
            adsContainer.appendChild(adCard);
        });
        
        // Добавляем обработчики для кнопок удаления
        document.querySelectorAll('.btn-danger').forEach(btn => {
            btn.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                deleteAd(index);
            });
        });
    }
    
    // Получение названия категории
    function getCategoryName(category) {
        switch (category) {
            case 'skin': return 'Скин';
            case 'accessory': return 'Аксессуар';
            case 'vehicle': return 'Транспорт';
            case 'weapon': return 'Оружие';
            default: return 'Другое';
        }
    }
    
    // Удаление объявления
    function deleteAd(index) {
        const ads = loadApprovedAds();
        ads.splice(index, 1);
        localStorage.setItem(APPROVED_ADS_KEY, JSON.stringify(ads));
        renderAds(ads);
        
        showNotification('Объявление удалено');
    }
    
    // Показ уведомления
    function showNotification(message) {
        notificationText.textContent = message;
        notification.style.display = 'flex';
        
        setTimeout(() => {
            notification.style.display = 'none';
        }, 3000);
    }
    
    // Предпросмотр изображения
    imageInput.addEventListener('input', function() {
        const url = this.value.trim();
        
        if (url) {
            imagePreview.innerHTML = `<img src="${url}" alt="Предпросмотр">`;
        } else {
            imagePreview.innerHTML = `
                <i class="fas fa-image"></i>
                <span>Предпросмотр изображения</span>
            `;
        }
    });
    
    // Обработка формы
    adForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const title = document.getElementById('ad-title').value;
        const category = document.getElementById('ad-category').value;
        const description = document.getElementById('ad-description').value;
        const contacts = document.getElementById('ad-contacts').value;
        const image = document.getElementById('ad-image').value;
        
        const newAd = {
            title,
            category,
            description,
            contacts,
            image,
            date: new Date().toISOString()
        };
        
        // Отправляем на модерацию
        if (sendForModeration(newAd)) {
            adForm.reset();
            imagePreview.innerHTML = `
                <i class="fas fa-image"></i>
                <span>Предпросмотр изображения</span>
            `;
            showNotification('Объявление отправлено на модерацию!');
        }
    });
    
    // Первоначальная загрузка одобренных объявлений
    loadApprovedAds();
});
