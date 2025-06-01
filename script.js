// Define base path for images
const basePath = ''; // or path to images folder, e.g. '/assets/'

// Основной массив с аксессуарами
const accessoriesData = {
    'head': [
        {
            imageSrc: `${basePath}imgs/head/deadinside.png`,
            stats: { damage: 1, krit: 10, oglysh: 1 },
            upg: 'krit',
            yellow: {}
        },
        {
            imageSrc: `${basePath}imgs/head/bad.png`,
            stats: { krit: 10 },
            upg: 'krit',
            yellow: {}
        },
        {
            imageSrc: `${basePath}imgs/head/ironman.png`,
            stats: { krit: 2 },
            upg: 'krit',
            yellow: {}
        }
    ],
    'face': [
        {
            imageSrc: `${basePath}imgs/face/netri.png`,
            stats: { deff: 2, krit: 25 },
            upg: 'deff',
            yellow: {}
        },
        {
            imageSrc: `${basePath}imgs/face/maskinvisible.png`,
            stats: { deff: 0, oglysh: 3 },
            upg: 'deff',
            yellow: {}
        }
    ],
    'hand': [
        {
            imageSrc: `${basePath}imgs/hand/duff.png`,
            stats: { damage: 4 },
            upg: 'damage',
            yellow: {}
        },
        {
            imageSrc: `${basePath}imgs/hand/fraps.png`,
            stats: { deff: 2, damage: 2, krit: 2 },
            upg: 'damage',
            yellow: {}
        }
    ],
    'breast': [
        {
            imageSrc: `${basePath}imgs/breast/mahi.png`,
            stats: { deff: 2, damage: 1, krit: 10, armourmax: 25 },
            upg: 'damage',
            yellow: {}
        },
        {
            imageSrc: `${basePath}imgs/breast/energomahi.png`,
            stats: { deff: 4, damage: 2, krit: 12, armourmax: 25 },
            upg: 'damage',
            yellow: { damage: 2, hpmax: 5 }
        }
    ],
    'shoulder': [
        {
            imageSrc: `${basePath}imgs/shoulder/magshar2.png`,
            stats: { deff: 2, damage: 1, krit: 10, armourmax: 25 },
            upg: 'deff',
            yellow: {}
        },
        {
            imageSrc: `${basePath}imgs/shoulder/energoshar.png`,
            stats: { deff: 4, damage: 4, krit: 24, hpmax: 5, armourmax: 27, neoglysh: 10 },
            upg: 'deff',
            yellow: {}
        },
        {
            imageSrc: `${basePath}imgs/shoulder/pexpress.png`,
            stats: { deff: 0, krit: 10, armourmax: 20, oglysh: 4 },
            upg: 'deff',
            yellow: {}
        }
    ],
    'spine': [
        {
            imageSrc: `${basePath}imgs/spine/tor.png`,
            stats: { damage: 4 },
            upg: 'damage',
            yellow: {}
        },
        {
            imageSrc: `${basePath}imgs/spine/rbt.png`,
            stats: { deff: 4 },
            upg: 'deff',
            yellow: {}
        }
    ],
    'armour': [
        {
            imageSrc: `${basePath}imgs/armour/bronik.png`,
            stats: { deff: 2, krit: 1, armourmax: 0 },
            upg: 'armour',
            yellow: {}
        },
        {
            imageSrc: `${basePath}imgs/armour/genbronik.png`,
            stats: { deff: 2, damage: 2, krit: 1, armourmax: 35 },
            upg: 'armour',
            yellow: {}
        }
    ],
    'case': [
        {
            imageSrc: `${basePath}imgs/case/enegrochem.png`,
            stats: { damage: 3, oglysh: 13, neoglysh: 4 },
            upg: '',
            yellow: {}
        },
        {
            imageSrc: `${basePath}imgs/case/chem.png`,
            stats: { oglysh: 6 },
            upg: '',
            yellow: {}
        }
    ]
};

// Русские названия типов статистик
const RuTypes = {
    deff: 'Защита',
    hpmin: 'HP в мин.',
    damage: 'Урон',
    krit: 'Удача',
    hpmax: 'Макс. HP',
    armourmax: 'Макс. Брони',
    oglysh: 'Шанс оглушения',
    opyan: 'Шанс опьянения',
    neoglysh: 'Шанс избежать оглушения',
    otrazh: 'Отражение урона'
};

// Русские названия слотов
const RuSlots = {
    head: 'Голова',
    face: 'Лицо',
    hand: 'Рука',
    breast: 'Грудь',
    shoulder: 'Плечо',
    spine: 'Спина',
    armour: 'Бронежилет',
    case: 'Чемодан'
};

// Функция для обновления статистик персонажа
function updateStats() {
    let stats = {
        deff: 0,
        hpmin: 0,
        damage: 0,
        krit: 0,
        hpmax: 0,
        armourmax: 0,
        oglysh: 0,
        opyan: 0,
        neoglysh: 0,
        otrazh: 0
    };

    // Собираем статистики со всех аксессуаров
    document.querySelectorAll('.grid-item').forEach(item => {
        const img = item.querySelector('img.main');
        if (img) {
            const itemStats = JSON.parse(img.dataset.stats || '{}');
            const yellowStats = JSON.parse(img.dataset.yellow || '{}');
            const nashivkaStats = JSON.parse(img.dataset.nashivka || '{}');
            const upgType = img.dataset.upg;
            const zatochka = parseInt(item.querySelector('.zatochka-value')?.textContent.replace('+', '') || 0);

            // Добавляем базовые статистики
            for (const stat in itemStats) {
                stats[stat] += itemStats[stat] || 0;
            }

            // Добавляем желтые статистики
            for (const stat in yellowStats) {
                stats[stat] += yellowStats[stat] || 0;
            }

            // Добавляем статистики нашивок
            for (const stat in nashivkaStats) {
                stats[stat] += nashivkaStats[stat] || 0;
            }

            // Учитываем заточку
            if (upgType && zatochka > 0) {
                const multiplier = upgType === 'armour' ? 5 : 
                                 upgType === 'deff' ? 2 : 1;
                
                if (upgType === 'armour') {
                    stats.armourmax += zatochka * multiplier;
                } else if (zatochka >= 4) {
                    stats[upgType] += (zatochka - 3) * multiplier;
                    
                    if (zatochka >= 13) {
                        stats.armourmax = (stats.armourmax || 0) + 9;
                        stats.hpmax = (stats.hpmax || 0) + 4;
                    }
                    
                    if (zatochka === 14) {
                        stats.armourmax = (stats.armourmax || 0) + 5;
                        stats.hpmin = (stats.hpmin || 0) + 3;
                        stats.otrazh = (stats.otrazh || 0) + 1;
                    }
                }
            }
        }
    });

    // Ограничения
    stats.armourmax = Math.min(stats.armourmax, 160);
    stats.deff = Math.min(stats.deff, 90);

    // Обновляем отображение статистик
    document.getElementById('deff').textContent = `[-${stats.deff}% урона]`;
    document.getElementById('hpmin').textContent = `[${stats.hpmin} HP в мин.]`;
    document.getElementById('damage').textContent = `[+${stats.damage} урона]`;
    document.getElementById('krit').textContent = `[шанс ${stats.krit}% крит.урона]`;
    document.getElementById('hpmax').textContent = `[+${stats.hpmax} макс. HP]`;
    document.getElementById('armourmax').textContent = `[+${stats.armourmax} макс. Брони]`;
    document.getElementById('oglysh').textContent = `[+${stats.oglysh}%]`;
    document.getElementById('opyan').textContent = `[+${stats.opyan}%]`;
    document.getElementById('neoglysh').textContent = `[+${stats.neoglysh}%]`;
    document.getElementById('otrazh').textContent = `[-${stats.otrazh}%]`;
}

// Функция для открытия модального окна с аксессуарами
function openAccessoryModal(slotName) {
    const modalAccs = document.querySelector('.modal-accs');
    modalAccs.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; margin-bottom: 10px;">
            <h3>Выберите ${RuSlots[slotName].toLowerCase()}</h3>
        </div>`;

    // Добавляем аксессуары для выбранного слота
    accessoriesData[slotName]?.forEach(acc => {
        const accItem = document.createElement('div');
        accItem.className = 'accessory-item';
        
        const img = document.createElement('img');
        img.src = acc.imageSrc;
        img.alt = acc.imageSrc.split('/').pop();
        img.onerror = () => {
            img.src = 'https://via.placeholder.com/100/333333/ffffff?text=No+Image';
        };
        
        const nameDiv = document.createElement('div');
        nameDiv.className = 'accessory-name';
        nameDiv.textContent = acc.imageSrc.split('/').pop().split('.')[0];
        
        accItem.appendChild(img);
        accItem.appendChild(nameDiv);
        
        accItem.addEventListener('click', () => {
            const gridItem = document.querySelector(`.grid-item#${slotName}`);
            if (gridItem) {
                // Удаляем старый аксессуар, если есть
                const oldImg = gridItem.querySelector('img.main');
                if (oldImg) oldImg.remove();
                
                // Создаем новый элемент аксессуара
                const newImg = document.createElement('img');
                newImg.src = acc.imageSrc;
                newImg.className = 'main';
                newImg.draggable = true;
                newImg.dataset.stats = JSON.stringify(acc.stats);
                newImg.dataset.upg = acc.upg;
                newImg.dataset.yellow = JSON.stringify(acc.yellow);
                
                // Добавляем в слот
                gridItem.appendChild(newImg);
                
                // Обновляем статистики
                updateStats();
                
                // Закрываем модальное окно
                document.getElementById('modalOverlay').style.display = 'none';
            }
        });
        
        modalAccs.appendChild(accItem);
    });

    document.getElementById('modalOverlay').style.display = 'flex';
}

// Функция для обработки кликов по кнопкам +/-
function handleZatochkaButtons(e) {
    // Обработка кнопки "+"
    if (e.target.classList.contains('plus')) {
        e.stopPropagation();
        const span = e.target.closest('.grid-text').querySelector('.zatochka-value');
        let value = parseInt(span.textContent.replace('+', '')) || 0;
        if (value < 14) {
            span.textContent = '+' + (value + 1);
            updateStats();
        }
    }
    
    // Обработка кнопки "-"
    if (e.target.classList.contains('minus')) {
        e.stopPropagation();
        const span = e.target.closest('.grid-text').querySelector('.zatochka-value');
        let value = parseInt(span.textContent.replace('+', '')) || 0;
        if (value > 0) {
            span.textContent = '+' + (value - 1);
            updateStats();
        }
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Обработчики для мини-контейнеров (открытие модального окна)
    document.querySelectorAll('.mini-container').forEach(container => {
        container.addEventListener('click', function() {
            const slotName = this.getAttribute('slot-name');
            openAccessoryModal(slotName);
        });
    });

    // Обработчики для кнопок +/- (делегирование событий)
    document.addEventListener('click', handleZatochkaButtons);

    // Обработчики для нашивок (делегирование событий)
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('nashivka')) {
            e.stopPropagation();
            const gridItem = e.target.closest('.grid-item');
            const img = gridItem.querySelector('img.main');
            
            if (img) {
                // Удаляем старое меню, если есть
                const oldMenu = gridItem.querySelector('.nashivka-menu');
                if (oldMenu) oldMenu.remove();
                
                // Создаем новое меню выбора нашивки
                const menu = document.createElement('div');
                menu.className = 'nashivka-menu';
                menu.innerHTML = `
                    <button data-type="deff" data-value="6">ДЕФФ (+6)</button>
                    <button data-type="damage" data-value="3">УРОН (+3)</button>
                    <button data-type="krit" data-value="3">КРИТ (+3)</button>
                    <button data-type="otrazh" data-value="3">ОТРАЖЕНИЕ (+3)</button>
                `;
                
                // Обработчики для кнопок нашивок
                menu.querySelectorAll('button').forEach(menuBtn => {
                    menuBtn.addEventListener('click', function() {
                        const type = this.dataset.type;
                        const value = parseInt(this.dataset.value);
                        
                        img.dataset.nashivka = JSON.stringify({ [type]: value });
                        
                        // Обновляем подсказку
                        const tooltip = gridItem.querySelector('.tooltip');
                        tooltip.innerHTML = `${gridItem.getAttribute('ru-name')}<br>Нашивка: ${RuTypes[type]}`;
                        
                        updateStats();
                        menu.remove();
                    });
                });
                
                gridItem.appendChild(menu);
            }
        }
        
        // Обработчик для нашивки бронежилета
        if (e.target.classList.contains('nashivkabronik')) {
            e.stopPropagation();
            const gridItem = e.target.closest('.grid-item');
            const img = gridItem.querySelector('img.main');
            
            if (img) {
                img.dataset.nashivka = JSON.stringify({ neoglysh: 20 });
                
                // Обновляем подсказку
                const tooltip = gridItem.querySelector('.tooltip');
                tooltip.innerHTML = `${gridItem.getAttribute('ru-name')}<br>Нашивка: Есть`;
                
                updateStats();
            }
        }
    });

    // Инициализация корзины
    const trash = document.querySelector('.trash');
    if (trash) {
        trash.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        trash.addEventListener('drop', (e) => {
            e.preventDefault();
            const imgHtml = e.dataTransfer.getData('img-html');
            
            if (imgHtml) {
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = imgHtml;
                const img = tempDiv.querySelector('img');
                
                if (img) {
                    const gridItem = img.closest('.grid-item');
                    if (gridItem) {
                        img.remove();
                        updateStats();
                    }
                }
            }
        });
    }

    // Инициализация модальных окон
    document.getElementById('closeModal')?.addEventListener('click', () => {
        document.getElementById('modalOverlay').style.display = 'none';
    });

    // Добавляем обработчики для модального окна удаления
    document.getElementById('noDelete')?.addEventListener('click', () => {
        document.getElementById('modalDelete').style.display = 'none';
    });

    document.getElementById('yesDelete')?.addEventListener('click', () => {
        const activeSlot = document.querySelector('.grid-item.active');
        if (activeSlot) {
            const img = activeSlot.querySelector('img.main');
            if (img) img.remove();
            updateStats();
        }
        document.getElementById('modalDelete').style.display = 'none';
    });

    // Обработчик для кнопки аккаунта
    document.getElementById('account-btn')?.addEventListener('click', () => {
        alert('Личный кабинет находится в разработке');
    });

    // Первоначальное обновление статистик
    updateStats();
});

// Делаем данные доступными глобально
window.accessoriesData = accessoriesData;
window.RuTypes = RuTypes;
window.RuSlots = RuSlots;
window.updateStats = updateStats;
