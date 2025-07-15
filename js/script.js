function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

if (isMobileDevice()) {
    if (!window.location.pathname.includes('/mobile')) {
        window.location.href = '/mobile';
    }
} else {
    if (window.location.pathname.includes('/mobile')) {
        window.location.href = '/';
    }
}

const basePath = window.location.pathname.includes('/mobile/') ? '../' : './';

const items = [
    {
        imageSrc: `${basePath}imgs/face/netri.png`,
        stats: { deff: 2, krit: 25 },
        upg: 'deff',
        yellow: {},
        ru_name: 'Анимированные очки Netrunner'
    },
    {
        imageSrc: `${basePath}imgs/face/cyberpunkvr.png`,
        stats: { deff: 2, krit: 25 },
        upg: 'deff',
        yellow: {},
        ru_name: 'Киберпанковские VR-очки'
    },
    {
        imageSrc: `${basePath}imgs/face/maskinvisible.png`,
        stats: { deff: 0, oglysh: 3 },
        upg: 'deff',
        yellow: {},
        ru_name: 'Маска-невидимка'
    },
    {
        imageSrc: `${basePath}imgs/shoulder/magshar2.png`,
        stats: { deff: 2, damage: 1, krit: 10, armourmax: 25 },
        upg: 'deff',
        yellow: {},
        ru_name: 'Магический воздушный шар #2'
    },
    {
        imageSrc: `${basePath}imgs/shoulder/energoshar.png`,
        stats: { deff: 4, damage: 4, krit: 24, hpmax: 5, armourmax: 27, neoglysh: 10 },
        upg: 'deff',
        yellow: {},
        ru_name: 'Энергетический воздушный шар'
    },
    {
        imageSrc: `${basePath}imgs/case/chem.png`,
        stats: { oglysh: 6 },
        upg: '',
        yellow: {},
        ru_name: 'Дьявольский чемодан'
    },
    {
        imageSrc: `${basePath}imgs/case/enegrochem.png`,
        stats: { damage: 3, oglysh: 13, neoglysh: 4 },
        upg: '',
        yellow: {},
        ru_name: 'Энергетический чемодан'
    },
    {
        imageSrc: `${basePath}imgs/armour/bronik.png`,
        stats: { deff: 2, krit: 1, armourmax: 0 },
        upg: 'armour',
        yellow: {},
        ru_name: 'Бронежилет «Игра в кальмара»'
    },
    {
        imageSrc: `${basePath}imgs/armour/genbronik.png`,
        stats: { deff: 2, damage: 2, krit: 1, armourmax: 35 },
        upg: 'armour',
        yellow: {},
        ru_name: 'Генеральский бронежилет'
    },
    {
        imageSrc: `${basePath}imgs/hand/duff.png`,
        stats: { damage: 4 },
        upg: 'damage',
        yellow: {},
        ru_name: 'Молот «Duff»'
    },
    {
        imageSrc: `${basePath}imgs/hand/fraps.png`,
        stats: { deff: 2, damage: 2, krit: 2 },
        upg: 'damage',
        yellow: {},
        ru_name: 'Табличка «Фрапс пишется»'
    },
    {
        imageSrc: `${basePath}imgs/head/deadinside.png`,
        stats: { damage: 1, krit: 10, oglysh: 1 },
        upg: 'krit',
        yellow: {},
        ru_name: 'Маркер dead inside'
    },
    {
        imageSrc: `${basePath}imgs/head/endercube.png`,
        stats: { damage: 1, krit: 10, oglysh: 1 },
        upg: 'krit',
        yellow: {},
        ru_name: 'Эндер куб'
    },
    {
        imageSrc: `${basePath}imgs/spine/tor.png`,
        stats: { damage: 4 },
        upg: 'damage',
        yellow: {},
        ru_name: 'Молот Тора'
    },
    {
        imageSrc: `${basePath}imgs/spine/jasehummer.png`,
        stats: { damage: 4 },
        upg: 'damage',
        yellow: {},
        ru_name: 'Молот Джейса'
    },
    {
        imageSrc: `${basePath}imgs/spine/rbt.png`,
        stats: { deff: 4 },
        upg: 'deff',
        yellow: {},
        ru_name: 'Русский боевой топор'
    },
    {
        imageSrc: `${basePath}imgs/spine/ka.png`,
        stats: { deff: 4 },
        upg: 'deff',
        yellow: {},
        ru_name: 'Щит Капитана Америки'
    },
    {
        imageSrc: `${basePath}imgs/spine/magmaxe.png`,
        stats: { deff: 4 },
        upg: 'deff',
        yellow: {},
        ru_name: 'Магмовый топор'
    },
    {
        imageSrc: `${basePath}imgs/spine/icesword.png`,
        stats: { deff: 4 },
        upg: 'deff',
        yellow: {},
        ru_name: 'Ледяной меч'
    },
    {
        imageSrc: `${basePath}imgs/spine/energoshield.png`,
        stats: { deff: 4, hpmax: 10, opyan: 2 },
        upg: 'deff',
        yellow: {},
        ru_name: 'Энергетический щит'
    },
    {
        imageSrc: `${basePath}imgs/shoulder/delorean.png`,
        stats: { deff: 0, krit: 10, armourmax: 20, oglysh: 4 },
        upg: 'deff',
        yellow: {},
        ru_name: 'Игрушечный Delorean'
    },
    {
        imageSrc: `${basePath}imgs/shoulder/pexpress.png`,
        stats: { deff: 0, krit: 10, armourmax: 20, oglysh: 4 },
        upg: 'deff',
        yellow: {},
        ru_name: 'Planet Express'
    },
    {
        imageSrc: `${basePath}imgs/breast/mahi.png`,
        stats: { deff: 2, damage: 1, krit: 10, armourmax: 25 },
        upg: 'damage',
        yellow: {},
        ru_name: 'Цепь «Махинатор»'
    },
    {
        imageSrc: `${basePath}imgs/breast/energomahi.png`,
        stats: { deff: 4, damage: 2, krit: 12, armourmax: 25 },
        upg: 'damage',
        yellow: { damage: 2, hpmax: 5 },
        ru_name: 'Энергетический махинатор'
    },
    {
        imageSrc: `${basePath}imgs/head/bad.png`,
        stats: { krit: 10 },
        upg: 'krit',
        yellow: {},
        ru_name: 'Маркер «BAD»'
    },
    {
        imageSrc: `${basePath}imgs/head/ironman.png`,
        stats: { krit: 2 },
        upg: 'krit',
        yellow: {},
        ru_name: 'Шлем железного человека'
    },
    {
        imageSrc: `${basePath}imgs/head/pepe.png`,
        stats: { krit: 1 },
        upg: 'krit',
        yellow: {},
        ru_name: 'Веселый Пепе'
    },
    {
        imageSrc: `${basePath}imgs/head/tikva.png`,
        stats: { deff: 2, damage: 2, krit: 2 },
        upg: 'hpmin',
        yellow: {},
        ru_name: 'Голова Тыква'
    },
    {
        imageSrc: `${basePath}imgs/hand/azinot.png`,
        stats: { deff: 2, damage: 2, krit: 2 },
        upg: 'damage',
        yellow: {},
        ru_name: 'Клинки Аззинота'
    },
    {
        imageSrc: `${basePath}imgs/breast/magsphere.png`,
        stats: { deff: 2, krit: 1 },
        upg: 'krit',
        yellow: {},
        ru_name: 'Магические сфера'
    },
    {
        imageSrc: `${basePath}imgs/face/sphereoverhead.png`,
        stats: { deff: 2, damage: 2, krit: 2 },
        upg: 'deff',
        yellow: {},
        ru_name: 'Сфера над головой'
    },
    {
        imageSrc: `${basePath}imgs/head/jetpack.png`,
        stats: { deff: 2, damage: 2, krit: 2 },
        upg: 'hpmin',
        yellow: {},
        ru_name: 'Джетпак'
    },
    {
        imageSrc: `${basePath}imgs/hand/magaxe.png`,
        stats: { damage: 4 },
        upg: 'damage',
        yellow: {},
        ru_name: 'Магический топор'
    },
    {
        imageSrc: `${basePath}imgs/breast/swag.png`,
        stats: { deff: 2, damage: 1, krit: 10, armourmax: 25 },
        upg: 'damage',
        yellow: {},
        ru_name: 'Цепь SWAG'
    },
    {
        imageSrc: `${basePath}imgs/breast/swaga.png`,
        stats: { deff: 2, damage: 1, krit: 10, armourmax: 25 },
        upg: 'damage',
        yellow: {},
        ru_name: 'Цепь СВАГА'
    },
    {
        imageSrc: `${basePath}imgs/spine/baseballbatcompton.png`,
        stats: { deff: 4, oglysh: 5 },
        upg: 'deff',
        yellow: {},
        ru_name: 'Бейсбольная бита Compton'
    },
    {
        imageSrc: `${basePath}imgs/spine/goldmount.png`,
        stats: { deff: 4, oglysh: 11 },
        upg: 'deff',
        yellow: {},
        ru_name: 'Золотая монтировка'
    },
    {
        imageSrc: `${basePath}imgs/shoulder/piratecompass.png`,
        stats: { deff: 4, damage: 4, krit: 24, hpmax: 5, armourmax: 27, neoglysh: 20 },
        upg: 'deff',
        yellow: {},
        ru_name: 'Пиратский компас'
    },
    {
        imageSrc: `${basePath}imgs/shoulder/flyingdutchman.png`,
        stats: { deff: 4, damage: 4, krit: 24, hpmax: 5, armourmax: 27, neoglysh: 20 },
        upg: 'deff',
        yellow: {},
        ru_name: 'Летучий голландец'
    },
];

const nashivki = [
    {
        imageSrc: `${basePath}imgs/nashivki/deff.png`,
        stats: { deff: 6 },
        ru_name: 'Нашивка на защиту',
        slot: 'all', slot_name: 'Все слоты'
    },
    {
        imageSrc: `${basePath}imgs/nashivki/damage.png`,
        stats: { damage: 3 },
        ru_name: 'Нашивка на урон',
        slot: 'all', slot_name: 'Все слоты'
    },
    {
        imageSrc: `${basePath}imgs/nashivki/hpmin.png`,
        stats: { hpmin: 3 },
        ru_name: 'Нашивка на регенерацию',
        slot: 'all', slot_name: 'Все слоты'
    },
    {
        imageSrc: `${basePath}imgs/nashivki/krit.png`,
        stats: { krit: 3 },
        ru_name: 'Нашивка на удачу',
        slot: 'all', slot_name: 'Все слоты'
    },
    {
        imageSrc: `${basePath}imgs/nashivki/hpmax.png`,
        stats: { hpmax: 8 },
        ru_name: 'Нашивка на макс. хп',
        slot: 'all', slot_name: 'Все слоты'
    },
    {
        imageSrc: `${basePath}imgs/nashivki/otrazh.png`,
        stats: { otrazh: 3 },
        ru_name: 'Нашивка на отражение урона',
        slot: 'all', slot_name: 'Все слоты'
    },
    {
        imageSrc: `${basePath}imgs/nashivki/darkness.png`,
        stats: { deff: 4, damage: 2 },
        ru_name: 'Легендарная нашивка тьмы',
        slot: 'head', slot_name: '1-ый слот'
    },
    {
        imageSrc: `${basePath}imgs/nashivki/monster.png`,
        stats: { deff: 4, damage: 2 },
        ru_name: 'Легендарная нашивка Монстра',
        slot: 'face', slot_name: '2-ой слот'
    },
    {
        imageSrc: `${basePath}imgs/nashivki/energy.png`,
        stats: { deff: 8, damage: 4, oglysh: 3 },
        ru_name: 'Легендарная нашивка Энергии',
        slot: 'hand', slot_name: '3-ий слот'
    },
]

const skins = [
    {
        imageSrc: `${basePath}imgs/skins/ct.png`,
        yellow: { deff: 2, damage: 2, otrazh: 3 },
        ru_name: 'Спецназовец'
    },
    {
        imageSrc: `${basePath}imgs/skins/deadpool.png`,
        yellow: { damage: 2, krit: 2, otrazh: 3 },
        ru_name: 'Дэдпул'
    },
    {
        imageSrc: `${basePath}imgs/skins/denji.png`,
        yellow: { deff: 2, damage: 2, otrazh: 3 },
        ru_name: 'Дэнджи'
    },
    {
        imageSrc: `${basePath}imgs/skins/farmeristoka.png`,
        yellow: { deff: 2, damage: 2, otrazh: 3 },
        ru_name: 'Фермер Истока'
    },
    {
        imageSrc: `${basePath}imgs/skins/grib1.png`,
        yellow: { damage: 2, hpmax: 5, oglysh: 5 },
        ru_name: 'Грибы 1'
    },
    {
        imageSrc: `${basePath}imgs/skins/grib2.png`,
        yellow: { damage: 2, hpmax: 5, oglysh: 5 },
        ru_name: 'Грибы 2'
    },
    {
        imageSrc: `${basePath}imgs/skins/hikkiistoka.png`,
        yellow: { deff: 2, damage: 2, otrazh: 3 },
        ru_name: 'Хикки Истока'
    },
    {
        imageSrc: `${basePath}imgs/skins/invoker.png`,
        yellow: { deff: 2, damage: 2, otrazh: 3 },
        ru_name: 'Инвокер'
    },
    {
        imageSrc: `${basePath}imgs/skins/jackvorobey.png`,
        yellow: { deff: 2, damage: 2, otrazh: 3 },
        ru_name: 'Джек Воробей'
    },
    {
        imageSrc: `${basePath}imgs/skins/makima.png`,
        yellow: { deff: 2, damage: 2, otrazh: 3 },
        ru_name: 'Макима'
    },
    {
        imageSrc: `${basePath}imgs/skins/power.png`,
        yellow: { deff: 2, damage: 2, otrazh: 3 },
        ru_name: 'Пауэр'
    },
    {
        imageSrc: `${basePath}imgs/skins/rilay.png`,
        yellow: { damage: 2, hpmax: 5, oglysh: 5 },
        ru_name: 'Рилай'
    },
    {
        imageSrc: `${basePath}imgs/skins/slavik.png`,
        yellow: { damage: 2, hpmax: 5, oglysh: 5 },
        ru_name: 'Славик'
    },
    {
        imageSrc: `${basePath}imgs/skins/trump.png`,
        yellow: { damage: 2, hpmax: 5, oglysh: 5 },
        ru_name: 'Парадийный Трамп'
    },
    {
        imageSrc: `${basePath}imgs/skins/wolverine.png`,
        yellow: { deff: 2, krit: 1, otrazh: 2 },
        ru_name: 'Росомаха'
    },
    {
        imageSrc: `${basePath}imgs/skins/leorik.png`,
        yellow: { krit: 2 },
        ru_name: 'Леорик'
    },
    {
        imageSrc: `${basePath}imgs/skins/davyjones.png`,
        yellow: { deff: 2, damage: 2, otrazh: 3 },
        ru_name: 'Дейви Джонс'
    },
    {
        imageSrc: `${basePath}imgs/skins/thenotoriousbig.png`,
        yellow: { krit: 2 },
        ru_name: 'THE NOTORIOUS B.I.G'
    },
    {
        imageSrc: `${basePath}imgs/skins/lockdog.png`,
        yellow: { damage: 2, hpmax: 5, krit: 5 },
        ru_name: 'Лок Дог'
    },
    {
        imageSrc: `${basePath}imgs/skins/skuf.png`,
        yellow: { deff: 2, damage: 2, otrazh: 3 },
        ru_name: 'Скуф'
    },
];

var selectedSkin = null;

var RuTypes = {
    deff: 'Защита',
    hpmin: 'HP в мин.',
    damage: 'Урон',
    krit: 'Удача',
    hpmax: 'Макс. HP',
    armourmax: 'Макс. Брони',
    oglysh: 'Шанс оглушения',
    opyan: 'Шанс опьянения',
    neoglysh: 'Шанс избежать оглушения',
    otrazh: 'Отражение урона',
    block: 'Блокировка урона',
    rof: 'Скорострельность',
    recoil: 'Отдача'
};

var RuSlots = {
    head: 'Голова',
    face: 'Лицо',
    hand: 'Рука',
    breast: 'Грудь',
    shoulder: 'Плечо',
    spine: 'Спина',
    armour: 'Бронежилет',
    case: 'Чемодан'
}

function getSlotNameFromItem(item) {
    const match = item.getAttribute('src').match(/\.\/imgs\/([^/]+)\//);
    return match ? match[1] : null;
}

function getSkinNameFromSrc(src) {
    const match = src.match(/\/skins\/([^/.]+)\.png$/);
    return match ? match[1] : null;
}

class ItemPlacer {
    constructor() {

        this.containers = document.querySelectorAll('.mini-container');
    }

    getSlotNameFromSrc(src) {

        const match = src.match(/\.\/imgs\/([^/]+)\//);
        return match ? match[1] : null;
    }

    createItemElement(imageSrc, stats, upg, yellow, ru_name) {

        const img = document.createElement('img');
        img.src = imageSrc;
        img.draggable = true;
        img.className = 'main'
        img.setAttribute('data-stats', JSON.stringify(stats));
        img.setAttribute('data-upg', upg);
        img.setAttribute('data-ru_name', ru_name);
        img.setAttribute('data-yellow', JSON.stringify(yellow));

        return img;
    }

    placeItem(imageSrc, stats, upg, yellow, ru_name) {

        const slotName = this.getSlotNameFromSrc(imageSrc);
        if (!slotName) {
            return;
        }


        const container = Array.from(this.containers).find(
            (el) => el.getAttribute('slot-name') === slotName
        );

        if (container) {

            const img = this.createItemElement(imageSrc, stats, upg, yellow, ru_name);
            container.appendChild(img);
        }
    }
}


const placer = new ItemPlacer();

items.forEach(item => {
    placer.placeItem(item.imageSrc, item.stats, item.upg, item.yellow, item.ru_name);
});

function getMultiplier(type) {
    switch (type) {
        case 'deff':
            return 2;
        case 'armour':
            return 5;
        default:
            return 1;
    }
}

function updateStats() {
    const gridItems = document.querySelectorAll('.grid-item');
    var deff = 0;
    var hpmin = 0;
    var damage = 0;
    var krit = 0;
    var hpmax = 0;
    var armourmax = 0;
    var oglysh = 0;
    var opyan = 0;
    var neoglysh = 0;
    var otrazh = 0;
    var block = 0;
    var rof = 0;
    var recoil = 0;

    if (selectedSkin) {
        deff += 8;
        hpmin += 4;
        damage += 4;
        krit += 4;
        hpmax += 12;
        armourmax += 12;
        if (selectedSkin != 'default') {
            var yellow_skin = selectedSkin.yellow;
            deff += yellow_skin.deff || 0;
            hpmin += yellow_skin.hpmin || 0;
            damage += yellow_skin.damage || 0;
            krit += yellow_skin.krit || 0;
            hpmax += yellow_skin.hpmax || 0;
            armourmax += yellow_skin.armourmax || 0;
            oglysh += yellow_skin.oglysh || 0;
            opyan += yellow_skin.opyan || 0;
            neoglysh += yellow_skin.neoglysh || 0;
            otrazh += yellow_skin.otrazh || 0;
            block += yellow_skin.block || 0;
            rof += yellow_skin.rof || 0;
            recoil += yellow_skin.recoil || 0;
        }
    }

    gridItems.forEach(item => {
        const img = item.querySelector('img.main');
        if (img) {
            const stats = JSON.parse(img.dataset.stats);
            const type = img.dataset.upg;
            const yellow_stats = JSON.parse(img.dataset.yellow);
            const yellow_name = img.dataset.yellow_name
            const ru_name = img.dataset.ru_name;
            if (img.dataset.nashivka == undefined) {
                nashivka = {}
            } else {
                nashivka = JSON.parse(img.dataset.nashivka);
            }

            const upgrader = getMultiplier(type)
            if (type != '') {
                const zatochkaElement = item.querySelector('span');
                const zatochka = parseInt(zatochkaElement.textContent.trim(), 10);

                if (type == 'armour') {
                    stats.armourmax += zatochka * upgrader;
                } else {
                    if (zatochka >= 4) {
                        stats[type] += (zatochka - 3) * upgrader;
                        if (zatochka >= 13) {
                            if (stats.armourmax == undefined) {
                                stats.armourmax = 0;
                            }
                            if (stats.hpmax == undefined) {
                                stats.hpmax = 0;
                            }
                            stats.armourmax += 9;
                            stats.hpmax += 4;
                        }
                        if (zatochka == 14) {
                            if (stats.otrazh == undefined) {
                                stats.otrazh = 0
                            }
                            if (stats.opyan == undefined) {
                                stats.opyan = 0
                            }
                            stats.armourmax += 5;
                            stats.opyan += 2;
                            stats.otrazh += 1;
                        }
                    }
                }
            }

            deff += nashivka.deff || 0;
            hpmin += nashivka.hpmin || 0;
            damage += nashivka.damage || 0;
            krit += nashivka.krit || 0;
            hpmax += nashivka.hpmax || 0;
            otrazh += nashivka.otrazh || 0;
            oglysh += nashivka.oglysh || 0;
            neoglysh += nashivka.neoglysh || 0;

            deff += yellow_stats.deff || 0;
            hpmin += yellow_stats.hpmin || 0;
            damage += yellow_stats.damage || 0;
            krit += yellow_stats.krit || 0;
            hpmax += yellow_stats.hpmax || 0;
            armourmax += yellow_stats.armourmax || 0;
            oglysh += yellow_stats.oglysh || 0;
            opyan += yellow_stats.opyan || 0;
            neoglysh += yellow_stats.neoglysh || 0;
            otrazh += yellow_stats.otrazh || 0;
            block += yellow_stats.block || 0;
            rof += yellow_stats.rof || 0;
            recoil += yellow_stats.recoil || 0;

            deff += stats.deff || 0;
            hpmin += stats.hpmin || 0;
            damage += stats.damage || 0;
            krit += stats.krit || 0;
            hpmax += stats.hpmax || 0;
            armourmax += stats.armourmax || 0;
            oglysh += stats.oglysh || 0;
            opyan += stats.opyan || 0;
            neoglysh += stats.neoglysh || 0;
            otrazh += stats.otrazh || 0;
            block += stats.block || 0;
            rof += stats.rof || 0;
            recoil += stats.recoil || 0;

            if (yellow_name == 'Чемодан криминала') {
                hpmax = Math.round(hpmax * 1.15);
                armourmax = Math.round(armourmax * 1.15);
            }

            if (deff >= 90) {
                deff = 90;
            }
        }
    });
    $('span#deff').text(`[-${deff}% урона]`);
    $('span#hpmin').text(`[${hpmin} HP в мин.]`);
    $('span#damage').text(`[+${damage} урона]`);
    $('span#krit').text(`[шанс ${krit}% крит.урона]`);
    $('span#hpmax').text(`[+${hpmax} макс. HP]`);
    $('span#armourmax').text(`[+${armourmax} макс. Брони]`);
    $('span#oglysh').text(`[+${oglysh}%]`);
    $('span#opyan').text(`[+${opyan}%]`);
    $('span#neoglysh').text(`[+${neoglysh}%]`);
    $('span#otrazh').text(`[-${otrazh}%]`);
    $('span#block').text(`[${block} раз]`);
    $('span#rof').text(`[+${rof}% скорострельности]`);
    $('span#recoil').text(`[-${recoil}% отдачи]`);
}

const gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach(item => {
    const tooltip = item.querySelector('.tooltip');
    const ruName = item.getAttribute('ru-name');

    tooltip.innerHTML = ruName;

    item.addEventListener('mouseover', () => {
        tooltip.style.display = 'block';
    });

    item.addEventListener('mouseout', () => {
        tooltip.style.display = 'none';
    });
});


document.querySelectorAll('.mini-container img').forEach(img => {
    if (!isMobileDevice()) {
        img.setAttribute('draggable', true);
        img.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('slot-name', img.parentElement.getAttribute('slot-name'));
            e.dataTransfer.setData('img-html', img.outerHTML);
            img.classList.add('dragging');
        });

        img.addEventListener('dragend', () => {
            img.classList.remove('dragging');
        });
    } else {
        img.addEventListener('click', function () {
            addAccs(img.parentElement.getAttribute('slot-name'), img.outerHTML)
        })
    }

});

var current_item;
var itemForNashivka;

function addAccs(slot_name, imgHtml) {
    var item = $(`.grid-item#${slot_name}`).get(0);
    if (imgHtml) {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = imgHtml.trim();
        const imgElement = tempDiv.querySelector('img.main');
        if (slot_name == item.getAttribute("id")) {
            if (imgElement) {
                const existingImg = item.querySelector('img.main');
                if (existingImg) {
                    existingImg.outerHTML = imgHtml;
                    $(item).find('img.default-accs').remove();
                } else {
                    item.appendChild(imgElement);
                }
                current_item = $(item).find('img')[0]
                current_item.className = 'main'
                $(item).find('.tooltip').text($(item).attr('ru-name'))
                const slot = getSlotNameFromItem(current_item)
                showPereshiv(slot)
            }
        }
        updateStats();
    }

    const img = item.querySelector('img');
    if (img) {
        img.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('img-html', img.outerHTML);
            e.dataTransfer.effectAllowed = "move";
        });
    }
}

var temp_info = {};

document.querySelectorAll('.grid-item').forEach(item => {
    if (isMobileDevice()) {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            temp_info.html = img.outerHTML
            temp_info.dom = img
            youWannaDelete()
        })
    }
    item.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    item.addEventListener('drop', (e) => {
        e.preventDefault();
        const imgHtml = e.dataTransfer.getData('img-html');
        const slot_name = e.dataTransfer.getData('slot-name');

        if (imgHtml) {

            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = imgHtml.trim();
            const imgElement = tempDiv.querySelector('img.main');
            if (slot_name == item.getAttribute("id")) {
                if (imgElement) {
                    const existingImg = item.querySelector('img.main');
                    if (existingImg) {
                        existingImg.outerHTML = imgHtml;
                        $(item).find('img.default-accs').remove();
                        $(item).find('img.nashivka').remove();
                    } else {
                        item.appendChild(imgElement);
                    }
                    current_item = $(item).find('img')[0]
                    current_item.className = 'main'
                    $(item).find('.tooltip').text($(item).attr('ru-name'))
                    const slot = getSlotNameFromItem(current_item)
                    showPereshiv(slot)
                }
            }
            updateStats();
        }

        const img = item.querySelector('img');
        if (img) {
            img.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('img-html', img.outerHTML);
                e.dataTransfer.effectAllowed = "move";
            });
        }
    });
});

function showPereshiv(slot) {
    var items = [];
    switch (slot) {
        case 'head':
            items = [
                {
                    name: 'nimbgearvlast',
                    ru_name: 'Нимб кольца всевластия',
                    yellow: { deff: 3, damage: 3, krit: 1, hpmax: 19 }
                },
                {
                    name: 'tango',
                    ru_name: 'Танго',
                    yellow: { deff: 2, damage: 1, krit: 1, hpmax: 10 }
                },
                {
                    name: 'shlyapa4',
                    ru_name: 'Эксклюзивная шляпа 4',
                    yellow: { damage: 1, hpmax: 5 }
                },
                {
                    name: 'shlyapa3',
                    ru_name: 'Эксклюзивная шляпа 3',
                    yellow: { deff: 1, hpmax: 5 }
                },
                {
                    name: 'shlyapa2',
                    ru_name: 'Эксклюзивная шляпа 2',
                    yellow: { krit: 1, hpmax: 5 }
                },
                {
                    name: 'shlyapa1',
                    ru_name: 'Эксклюзивная шляпа 1',
                    yellow: { damage: 1, hpmax: 5 }
                },
                {
                    name: 'tact',
                    ru_name: 'Тактический шлем',
                    yellow: { deff: 2, armourmax: 10 }
                },
                {
                    name: 'piratehat1',
                    ru_name: 'Пиратская шляпа №1',
                    yellow: { deff: 1, damage: 1, krit: 1, oglysh: 1 }
                },
                {
                    name: 'piratehat2',
                    ru_name: 'Пиратская шляпа №2',
                    yellow: { deff: 1, damage: 1, krit: 1, oglysh: 1 }
                },
                {
                    name: 'piratehat3',
                    ru_name: 'Пиратская шляпа №3',
                    yellow: { deff: 1, damage: 1, krit: 1, oglysh: 1 }
                },
                {
                    name: 'cherepandkosti',
                    ru_name: 'Череп и кости',
                    yellow: { deff: 1, damage: 1, krit: 1, oglysh: 1 }
                },
                {
                    name: 'crownofpatroni',
                    ru_name: 'Корона из патрон',
                    yellow: { krit: 2, neoglysh: 8, otrazh: 2 }
                },
            ]
            break;
        case 'face':
            items = [
                {
                    name: 'energymaskghost',
                    ru_name: 'Энерго маска Госта',
                    yellow: { deff: 5, damage: 5, hpmax: 20, opyan: 4, block: 4 }
                },
                {
                    name: 'respik',
                    ru_name: 'Респиратор',
                    yellow: { deff: 1, damage: 1 }
                },
                {
                    name: 'cherep',
                    ru_name: 'Маска череп',
                    yellow: { damage: 2, armourmax: 10 }
                },
                {
                    name: 'frontman',
                    ru_name: 'Маска распорядителя',
                    yellow: { damage: 1, hpmax: 5 }
                },
                {
                    name: 'kvadrat',
                    ru_name: 'Маска охранника 1',
                    yellow: { krit: 1, hpmax: 5 }
                },
                {
                    name: 'krug',
                    ru_name: 'Маска охранника 3',
                    yellow: { deff: 1, hpmax: 5 }
                },
                {
                    name: 'treugolnik',
                    ru_name: 'Маска охранника 2',
                    yellow: { damage: 1, hpmax: 5 }
                },
                {
                    name: 'loki',
                    ru_name: 'Маска Локи',
                    yellow: { damage: 1, hpmax: 5 }
                },
                {
                    name: 'wrench',
                    ru_name: 'Маска \'Wrench\'',
                    yellow: { deff: 1, hpmax: 5 }
                },
            ]
            break;
        case 'hand':
            items = [
                {
                    name: 'bumblebee',
                    ru_name: 'Оружие Бамбли Би',
                    yellow: { deff: 1, damage: 1 }
                },
                {
                    name: 'energowatch',
                    ru_name: 'Энергетические часы',
                    yellow: { deff: 2, damage: 2, hpmax: 5, armourmax: 5, otrazh: 6 }
                },
                {
                    name: 'pirateflashlight',
                    ru_name: 'Пиратский фонарь',
                    yellow: { deff: 1, damage: 1, krit: 1, oglysh: 1 }
                },
                {
                    name: 'banditarbalet',
                    ru_name: 'Бандитский арбалет',
                    yellow: { krit: 3, neoglysh: 4, otrazh: 1 }
                },
                {
                    name: 'watch1',
                    ru_name: 'Часы \'Panthere de Cartier\'',
                    yellow: { krit: 1, hpmax: 5 }
                },
                {
                    name: 'watch2',
                    ru_name: 'Часы \'Relogios Casio\'',
                    yellow: { deff: 1, hpmax: 5 }
                },
                {
                    name: 'watch3',
                    ru_name: 'Часы \'Rolex Submariner\'',
                    yellow: { deff: 1, hpmax: 5 }
                },
                {
                    name: 'watch4',
                    ru_name: 'Часы \'Gucci\'',
                    yellow: { damage: 1, hpmax: 5 }
                },
                {
                    name: 'watch5',
                    ru_name: 'Часы \'Patek Philippe Nautilus\'',
                    yellow: { krit: 1, hpmax: 5 }
                },
                {
                    name: 'watch6',
                    ru_name: 'Часы \'Apple Watch\'',
                    yellow: { deff: 1, hpmax: 5 }
                },
                {
                    name: 'watch7',
                    ru_name: 'Часы \'Casio G-SHOCK\'',
                    yellow: { damage: 1, hpmax: 5 }
                },

            ]
            break;
        case 'breast':
            items = [
                {
                    name: 'ilum',
                    ru_name: 'Цепь Иллюмината',
                    yellow: { deff: 1, damage: 1 }
                }
            ]
            break;
        case 'shoulder':
            items = [
                {
                    name: 'arkanaio',
                    ru_name: 'Аркана ИО',
                    yellow: { deff: 2, damage: 1, krit: 1, hpmax: 10 }
                }
            ]
            break;
        case 'spine':
            items = [
                {
                    name: 'bloodywings',
                    ru_name: 'Кровавые крылья',
                    yellow: { deff: 2, damage: 2 }
                },
                {
                    name: 'spiderlegs',
                    ru_name: 'Паучьи лапы',
                    yellow: { deff: 1, damage: 1 }
                },
                {
                    name: 'kosaredrose',
                    ru_name: 'Коса Красной Розы',
                    yellow: { damage: 2, hpmax: 8, armourmax: 8, otrazh: 1 }
                },
                {
                    name: 'poyasbalon',
                    ru_name: 'Пояс с баллончиками',
                    yellow: { armourmax: 50 }
                },
                {
                    name: 'piratesabers',
                    ru_name: 'Пиратские сабли',
                    yellow: { deff: 1, damage: 1, krit: 1, oglysh: 1 }
                },
                {
                    name: 'piratechest',
                    ru_name: 'Пиратский сундук',
                    yellow: { deff: 1, damage: 1, krit: 1, oglysh: 1 }
                },
                {
                    name: 'seaanchor',
                    ru_name: 'Морской якорь',
                    yellow: { deff: 1, damage: 1, krit: 1, oglysh: 1 }
                },
                {
                    name: 'deltik',
                    ru_name: 'Дельтаплан на спину',
                    yellow: { damage: 1, hpmax: 5 }
                },
                {
                    name: 'battlefury',
                    ru_name: 'Батлфьюри',
                    yellow: { deff: 5, krit: 5, hpmax: 5 }
                },
                {
                    name: 'desolator',
                    ru_name: 'Дезолятор',
                    yellow: { damage: 2, krit: 4, neoglysh: 3, otrazh: 1 }
                },
                {
                    name: 'firepickaxe',
                    ru_name: 'Огненная кирка',
                    yellow: { damage: 1, hpmax: 5 }
                },
                {
                    name: 'creeper',
                    ru_name: 'Рюкзак \'Крипер\'',
                    yellow: { deff: 1, hpmax: 5 }
                },
                {
                    name: 'aegis',
                    ru_name: 'Аегис',
                    yellow: { damage: 2, hpmax: 8, armourmax: 8, otrazh: 1 }
                },
                {
                    name: 'trax',
                    ru_name: 'Арбалет Траксы',
                    yellow: { damage: 2, hpmax: 7, armourmax: 7, otrazh: 1 }
                },
            ]
            break;
        case 'armour':
            items = [
                {
                    name: 'tactarmour',
                    ru_name: 'Тактический бронежилет',
                    yellow: { krit: 2, armourmax: 10 }
                },
                {
                    name: 'armourgraffiti',
                    ru_name: 'Бронежилет с граффити',
                    yellow: { armourmax: 50 }
                },
                {
                    name: 'armour1',
                    ru_name: 'Бронежилет #1',
                    yellow: { krit: 1, hpmax: 5 }
                },
                {
                    name: 'armour2',
                    ru_name: 'Бронежилет #2',
                    yellow: { deff: 1, hpmax: 5 }
                },
                {
                    name: 'armour3',
                    ru_name: 'Бронежилет #3',
                    yellow: { damage: 1, hpmax: 5 }
                },
                {
                    name: 'armour4',
                    ru_name: 'Бронежилет #4',
                    yellow: { krit: 1, hpmax: 5 }
                },
                {
                    name: 'armour5',
                    ru_name: 'Бронежилет #5',
                    yellow: { deff: 1, hpmax: 5 }
                },
                {
                    name: 'armour6',
                    ru_name: 'Бронежилет #6',
                    yellow: { deff: 1, hpmax: 5 }
                },
                {
                    name: 'armour7',
                    ru_name: 'Бронежилет #7',
                    yellow: { damage: 1, hpmax: 5 }
                },
                {
                    name: 'armour8',
                    ru_name: 'Бронежилет #8',
                    yellow: { krit: 1, hpmax: 5 }
                },
            ]
            break;
        case 'case':
            items = [
                {
                    name: 'chemcriminal',
                    ru_name: 'Чемодан криминала',
                    yellow: { deff: 2, damage: 6, rof: 10, recoil: 10 },
                    buff: { hpmax: 15, armourmax: 15 }
                },
            ]
        default:
            break;
    }
    if (items.length != 0) {
        var modalAccs = document.querySelector('.modal-accs');

        var tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        modalAccs.appendChild(tooltip);
        items.forEach(item => {
            var img = document.createElement('img');
            img.src = `${basePath}imgs/${slot}/${item.name}.png`;
            img.setAttribute('data-yellow', JSON.stringify(item.yellow));
            if (item.buff) {
                img.setAttribute('data-buff', JSON.stringify(item.buff));
            }
            img.setAttribute('data-runame', JSON.stringify(item.ru_name));
            img.style.position = 'relative';

            img.addEventListener('click', function () {
                current_item.dataset.yellow = this.getAttribute('data-yellow');
                current_item.dataset.buff = this.getAttribute('data-buff');
                current_item.dataset.yellow_name = this.getAttribute('data-runame').replaceAll('"', '');;
                var img_temp = document.createElement('img');
                img_temp.src = current_item.src;
                img_temp.className = "default-accs"
                current_item.src = `${basePath}imgs/${slot}/${item.name}.png`;
                $(current_item).closest('.grid-item').append(img_temp)
                modalOverlay.style.display = 'none';
                tooltip.style.display = 'none';
                updateStats();

                while (modalAccs.firstChild) {
                    modalAccs.removeChild(modalAccs.firstChild);
                }
            });

            img.addEventListener('mouseenter', function (event) {
                var yellowData = JSON.parse(this.getAttribute('data-yellow'));
                var buffData = JSON.parse(this.getAttribute('data-buff'));
                var ru_name = this.getAttribute('data-runame');

                tooltip.innerHTML = '';

                var mainText = document.createElement('div');
                mainText.textContent = ru_name.replaceAll('"', '');
                mainText.style.marginBottom = '10px';
                tooltip.appendChild(mainText);

                var spacer = document.createElement('div');
                spacer.style.marginBottom = '10px';
                tooltip.appendChild(spacer);

                if (buffData) {
                    for (var key in buffData) {
                        if (RuTypes[key]) {
                            var yellowElement = document.createElement('div');
                            yellowElement.textContent = `Предмет даёт +${buffData[key]}% к ${RuTypes[key]}`;
                            yellowElement.style.color = 'yellow';
                            tooltip.appendChild(yellowElement);
                        }
                    }
                    tooltip.appendChild(document.createElement('br'))
                }

                for (var key in yellowData) {
                    if (RuTypes[key]) {
                        var yellowElement = document.createElement('div');
                        yellowElement.textContent = `${RuTypes[key]}: ${yellowData[key]}`;
                        yellowElement.style.color = 'yellow';
                        tooltip.appendChild(yellowElement);
                    }
                }

                tooltip.style.display = 'block';
            });

            img.addEventListener('mouseleave', function () {
                tooltip.style.display = 'none';
            });

            modalAccs.appendChild(img);
        });
        modalOverlay.style.display = 'flex';
    }
}

if (isMobileDevice()) {
    function youWannaDelete() {
        const modalDelete = document.getElementById('modalDelete');
        modalDelete.style.display = 'block'
        const img = temp_info.dom
        const gridItem = $(img).closest('.grid-item')
        $('#modalDelete .modal h2').text(`Вы уверены что хотите удалить аксессуар из слота "${RuSlots[gridItem.attr('id')]}"?`)
    }

    function reallyDelete(imgHtml) {
        if (imgHtml) {
            document.querySelectorAll('.grid-item img').forEach(img => {
                if (img.outerHTML === imgHtml) {
                    var gridItem = $(img).closest('.grid-item');
                    $(gridItem).find('img').remove();
                    $(gridItem).find('.tooltip').text($(gridItem).attr('ru-name'));
                    $(gridItem).find('.tooltip').css('display', 'none');
                }
            });
        }
        updateStats()
    }
} else {
    const trash = document.querySelector('.trash');
    const trashTooltip = document.querySelector('#trashtooltip')

    trash.addEventListener('mouseover', () => {
        trashTooltip.style.display = 'block';

    });

    trash.addEventListener('mouseout', () => {
        trashTooltip.style.display = 'none';
    });
    trash.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    trash.addEventListener('drop', (e) => {
        e.preventDefault();
        const imgHtml = e.dataTransfer.getData('img-html');

        if (imgHtml) {
            document.querySelectorAll('.grid-item img').forEach(img => {
                if (img.outerHTML === imgHtml) {
                    var gridItem = $(img).closest('.grid-item');
                    $(gridItem).find('img').remove();
                    $(gridItem).find('.tooltip').text($(gridItem).attr('ru-name'));
                    $(gridItem).find('.tooltip').css('display', 'none');
                }
            });
        }
        updateStats();
    });
}

function getRandomElement(arr) {
    if (arr.length === 0) {
        throw new Error("Array cannot be empty");
    }
    const randomIndex = window.crypto.getRandomValues(new Uint32Array(1))[0] % arr.length;

    return arr[randomIndex];
}

const myArray = [
    'fenny',
    'pudge',
    'osel',
    'ct',
    'bbt',
    'hitok',
    'homelander',
    'rilay',
    'superman',
    'aura',
    'power',
    'lego',
    'mafia',
    'woozie',
    'yoda'
]

$(document).ready(function () {
    let previousElement = null;

    function renderSkins() {
        const container = $('.modal-skins');
        container.empty();

        skins.forEach((skin, i) => {
            let statsHtml = '';
            for (const stat in skin.yellow) {
                if (RuTypes[stat]) {
                    statsHtml += `<span>${RuTypes[stat]}: ${skin.yellow[stat]}</span>`;
                }
            }

            const skinHtml = `
            <div class="modal-skin" data-index="${i}">
                <img src="${skin.imageSrc}" alt="${skin.ru_name}" />
                <div class="skin-name">${skin.ru_name}</div>
                <div class="skin-stats">${statsHtml}</div>
            </div>
        `;

            container.append(skinHtml);
        });
    }

    renderSkins();

    var character = $('#character')
    var tooltip = character.find('.tooltip');

    character.on('click', function () {
        $('#modalSkinsOverlay').css('display', 'flex').hide().fadeIn(200);
    });
    if (!isMobileDevice()) {
        console.log('not mobile');
        character.on('mouseover', function () {
            tooltip.show();
            console.log('show');
        });

        character.on('mouseout', function () {
            tooltip.hide();
            console.log('hide');
        });
    }

    $('#closeSkinModal').on('click', function () {
        $('#modalSkinsOverlay').fadeOut(200, function () {
            $(this).css('display', 'none');
            selectedSkin = 'default';
            $('#character-image').attr('src', `${basePath}imgs/characters/yoda.png`);
            updateStats();
        });
    });

    $('#closeNoneSkinModal').on('click', function () {
        $('#modalSkinsOverlay').fadeOut(200, function () {
            $(this).css('display', 'none');
            selectedSkin = null;
            $('#character-image').attr('src', `${basePath}imgs/characters/mafia.png`);
            updateStats();
        });
    });

    $('#closeXModalSkin').on('click', function () {
        $('#modalSkinsOverlay').fadeOut(200, function () {
            $(this).css('display', 'none');
            updateStats();
        });
    });


    $('.modal-skin').on('click', function () {
        const index = $(this).data('index');
        const skin = skins[index];
        $('#character-image').attr('src', skin.imageSrc);
        selectedSkin = skin;
        updateStats();
        $('#modalSkinsOverlay').fadeOut(200, function () {
            $(this).css('display', 'none');
        });
    });

    $('.btn.plus').on('click', function (e) {
        if (isMobileDevice()) {
            e.stopPropagation();
        }

        let span = $(this).closest('.grid-text').find('span');
        let currentValue = parseInt(span.text().replace('+', ''));
        if (currentValue < 14) {
            span.text(`+${currentValue + 1}`);
            updateStats();
        }
    });


    $('.btn.minus').on('click', function (e) {
        if (isMobileDevice()) {
            e.stopPropagation();
        }

        let span = $(this).closest('.grid-text').find('span');
        let currentValue = parseInt(span.text().replace('+', ''));
        if (currentValue > 0) {
            span.text(`+${currentValue - 1}`);
            updateStats();
        }
    });

    $('.btn.nashivkabronik').on('click', function (e) {
        if (isMobileDevice()) {
            e.stopPropagation();
        }

        var $gridItem = $(this).closest('.grid-item');
        var item = $gridItem.find('img.main')[0]
        var tooltip = $gridItem.find('.tooltip')[0]
        $($gridItem).find('.tooltip').text($($gridItem).attr('ru-name'))
        if (item != undefined) {
            item.dataset.nashivka = `{"neoglysh": 20}`

            if (item.dataset.nashivka != undefined) {
                tooltip.innerHTML = `${tooltip.innerHTML}<br>Нашивка: Есть`;
            }
            updateStats()
        }
    });

    const closeModalButton = document.getElementById('closeModal');
    const closeModalXButton = document.getElementById('closeXModal');
    const testButton = document.getElementById('addYellowStats');
    const modalOverlay = document.getElementById('modalOverlay');

    if (isMobileDevice()) {
        const modalDelete = document.getElementById('modalDelete');

        const yesDeleteButton = document.getElementById('yesDelete');
        const noDeleteButton = document.getElementById('noDelete');

        yesDeleteButton.addEventListener('click', () => {
            modalDelete.style.display = 'none';
            reallyDelete(temp_info.html)
        });

        noDeleteButton.addEventListener('click', () => {
            modalDelete.style.display = 'none';
        });
    }

    closeModalButton.addEventListener('click', () => {
        modalOverlay.style.display = 'none';

        var modalAccs = document.querySelector('.modal-accs');
        while (modalAccs.firstChild) {
            modalAccs.removeChild(modalAccs.firstChild);
        }
    });

    closeModalXButton.addEventListener('click', () => {
        modalOverlay.style.display = 'none';

        var modalAccs = document.querySelector('.modal-accs');
        while (modalAccs.firstChild) {
            modalAccs.removeChild(modalAccs.firstChild);
        }
    });

    const closeNashivkaModalButton = document.getElementById('closeNashivkaModal');
    const closeNashivkaModalXButton = document.getElementById('closeXModalNashivka');

    const modalNashivkaOverlay = document.getElementById('modalNashivkaOverlay');

    closeNashivkaModalButton.addEventListener('click', () => {
        modalNashivkaOverlay.style.display = 'none';

        var modalNashivki = document.querySelector('.modal-nashivki');
        while (modalNashivki.firstChild) {
            modalNashivki.removeChild(modalNashivki.firstChild);
        }
    });

    closeNashivkaModalXButton.addEventListener('click', () => {
        modalNashivkaOverlay.style.display = 'none';

        var modalNashivki = document.querySelector('.modal-nashivki');
        while (modalNashivki.firstChild) {
            modalNashivki.removeChild(modalNashivki.firstChild);
        }
    });

    $('.btn.nashivka').on('click', function (e) {
        if (isMobileDevice()) {
            e.stopPropagation();
        }
        const container = $('.modal-nashivki');
        container.empty();
        var gridItem = $(this).closest('.grid-item');
        var item_slot = gridItem.attr('id');
        var item_ = gridItem.find('img.main')[0];

        nashivki.forEach((nashivka, i) => {
            if (nashivka.slot == item_slot || nashivka.slot == 'all') {
                let statsHtml = '';
                for (const stat in nashivka.stats) {
                    if (RuTypes[stat]) {
                        statsHtml += `<span>${RuTypes[stat]}: ${nashivka.stats[stat]}</span>`;
                    }
                }

                const nashivkaHtml = `
                    <div class="modal-nashivka" data-index="${i}" data-slot="${item_slot}" data-image="${nashivka.imageSrc}">
                        <img src="${nashivka.imageSrc}" alt="${nashivka.ru_name}" />
                        <div class="nashivka-name">${nashivka.ru_name}</div>
                        <div class="nashivka-name" style="font-size: 12px; color: pink;">${nashivka.slot_name}</div>
                        <div class="nashivka-stats">${statsHtml}</div>
                    </div>
                `;

                container.append(nashivkaHtml);
            }
        });

        container.on('click', '.modal-nashivka', function (e) {
            if (isMobileDevice()) {
                e.stopPropagation();
            }

            container.off('click', '.modal-nashivka');

            const index = $(this).data('index');
            const slot = $(this).data('slot');
            const $gridItem = $(`.grid-item#${slot}`);
            var item = $gridItem.find('img.main')[0];
            var tooltip = $gridItem.find('.tooltip')[0];
            var nashivka = nashivki[index];

            console.log('click: ', nashivka);
            $($gridItem).find('.tooltip').text($($gridItem).attr('ru-name'));
            console.log($gridItem)
            if (item != undefined) {
                item.dataset.nashivka = JSON.stringify(nashivka.stats);
                if (item.dataset.nashivka != undefined) {
                    var ruName = nashivka.ru_name;
                    if (ruName) {
                        tooltip.innerHTML = `${tooltip.innerHTML}<br>${ruName}`;
                    }
                    $gridItem.find('img.nashivka').remove();
                    item.insertAdjacentHTML('afterend', `<img src="${nashivka.imageSrc}" class="nashivka">`);
                }
                updateStats();
            }
            $('#modalNashivkaOverlay').css('display', 'none').hide().fadeOut(200);
        });
        if (item_ != undefined) {
            $('#modalNashivkaOverlay').css('display', 'flex').hide().fadeIn(200);
        }
    });
});
