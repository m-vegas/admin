<script>
    document.addEventListener('DOMContentLoaded', function() {
        // Элементы DOM
        const adForm = document.getElementById('ad-form');
        const adsContainer = document.getElementById('ads-container');
        const imagePreview = document.getElementById('image-preview');
        const imageInput = document.getElementById('ad-image');
        const notification = document.getElementById('notification');
        
        // Email для модерации (замените на свой)
        const MODERATION_EMAIL = "your-email@example.com";
        const STORAGE_KEY = 'vegas_plus_approved_ads';

        // Загрузка одобренных объявлений из localStorage
        function loadApprovedAds() {
            const ads = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
            renderAds(ads);
            return ads;
        }

        // Отправка письма (эмуляция)
        function sendEmailForModeration(ad) {
            const subject = "Новое объявление на модерацию";
            const body = `
                Новое объявление ждет модерации:
                
                Название: ${ad.title}
                Категория: ${getCategoryName(ad.category)}
                Описание: ${ad.description}
                Контакты: ${ad.contacts}
                Изображение: ${ad.image || 'Нет'}
                
                Чтобы добавить, используйте консоль:
                localStorage.setItem('${STORAGE_KEY}', 
                    JSON.stringify([...JSON.parse(localStorage.getItem('${STORAGE_KEY}') || [], 
                    ${JSON.stringify(ad, null, 4)}])
            `;

            // Эмуляция отправки (в реальности используйте mailto или сервис)
            console.log("Отправлено на модерацию:", { subject, body });
            
            // В реальном проекте раскомментируйте это:
            // window.location.href = `mailto:${MODERATION_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            
            return true;
        }

        // Отображение объявлений
        function renderAds(ads) {
            if (ads.length === 0) {
                adsContainer.innerHTML = `
                    <div class="empty-state">
                        <i class="fas fa-box-open" style="font-size: 3rem; margin-bottom: 15px;"></i>
                        <p>Нет одобренных объявлений</p>
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

            // Обработчики для кнопок удаления
            document.querySelectorAll('.btn-danger').forEach(btn => {
                btn.addEventListener('click', function() {
                    const index = parseInt(this.getAttribute('data-index'));
                    deleteAd(index);
                });
            });
        }

        // Удаление объявления
        function deleteAd(index) {
            const ads = loadApprovedAds();
            ads.splice(index, 1);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(ads));
            renderAds(ads);
            showNotification('Объявление удалено');
        }

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

            // Отправка на модерацию
            if (sendEmailForModeration(newAd)) {
                adForm.reset();
                imagePreview.innerHTML = `
                    <i class="fas fa-image"></i>
                    <span>Предпросмотр изображения</span>
                `;
                showNotification('Объявление отправлено на модерацию!');
            }
        });

        // Показ уведомления
        function showNotification(message) {
            notification.textContent = message;
            notification.style.display = 'block';
            setTimeout(() => {
                notification.style.display = 'none';
            }, 3000);
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

        // Первоначальная загрузка одобренных объявлений
        loadApprovedAds();
    });
</script>