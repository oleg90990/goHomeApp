
const items = [
    {
        title: "Австралийская овчарка",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/2-5-735x562.png'
    },
    {
        title: "Австралийская пастушья собака",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/3-5-735x602.png'
    },
    {
        title: "Австралийский келпи",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/4-5-735x542.png'
    },
    {
        title: "Австралийский терьер",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/5-5-735x579.png'
    },
    {
        title: "Австрийская гончая",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/6-5-735x508.png'
    },
    {
        title: "Азавак",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/7-5-735x525.png'
    },
    {
        title: "Акита-ину",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/8-5-735x543.png'
    },
    {
        title: "Алано",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/9-5-735x585.png'
    },
    {
        title: "Аляскинский Кли-Кай",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/10-5-735x489.png'
    },
    {
        title: "Аляскинский маламут",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/11-5-735x492.png'
    },
    {
        title: "Американская акита",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/12-2-735x532.png'
    },
    {
        title: "Американский бандог",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/13-1-735x569.png'
    },
    {
        title: "Американский бульдог",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/14-1-735x570.png'
    },
    {
        title: "Американский голый терьер",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/15-1-735x551.png'
    },
    {
        title: "Американский стаффордширский терьер",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/16-735x526.png'
    },
    {
        title: "Анатолийская овчарка",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/17-735x561.png'
    },
    {
        title: "Английская овчарка",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/18-735x546.png'
    },
    {
        title: "Английский бульдог",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/19-735x591.png'
    },
    {
        title: "Английский кокер-спаниель",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/20-735x537.png'
    },
    {
        title: "Английский мастиф",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/21-735x503.png'
    },
    {
        title: "Английский сеттер",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/22-735x527.png'
    },
    {
        title: "Английский той-терьер",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/23-735x532.png'
    },
    {
        title: "Английский фоксхаунд",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/24-735x490.png'
    },
    {
        title: "Аргентинский дог",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/25-735x500.png'
    },
    {
        title: "Афганская борзая",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/26-735x592.png'
    },
    {
        title: "Аффенпинчер",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/27-735x545.png'
    },
    {
        title: "Басенджи",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/28-735x525.png'
    },
    {
        title: "Бассет-хаунд",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/29-735x536.png'
    },
    {
        title: "Бедлингтон-терьер",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/30-735x562.png'
    },
    {
        title: "Белая швейцарская овчарка",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/31-735x552.png'
    },
    {
        title: "Бельгийский гриффон",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/32-735x588.png'
    },
    {
        title: "Бельгийская овчарка",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/1-6-735x506.png'
    },
    {
        title: "Бернский зенненхунд",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/1-7-735x521.png'
    },
    {
        title: "Бивер-йоркширский терьер",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/2-6-735x557.png'
    },
    {
        title: "Бигль",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/3-6-735x603.png'
    },
    {
        title: "Бишон фризе",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/4-6-735x575.png'
    },
    {
        title: "Бладхаунд",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/5-6-735x543.png'
    },
    {
        title: "Бобтейл",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/6-6-735x559.png'
    },
    {
        title: "Болоньез",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/7-6-735x511.png'
    },
    {
        title: "Бордер-колли",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/8-6-735x513.png'
    },
    {
        title: "Бордоский дог",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/9-6-735x582.png'
    },
    {
        title: "Босерон",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/10-6-735x580.png'
    },
    {
        title: "Бостон-терьер",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/11-6-735x545.png'
    },
    {
        title: "Бразильский фила",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/12-3-735x549.png'
    },
    {
        title: "Брюссельский гриффон",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/13-2-735x528.png'
    },
    {
        title: "Бульмастиф",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/14-2-735x555.png'
    },
    {
        title: "Бультерьер",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/15-2-735x547.png'
    },
    {
        title: "Бурбуль",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/16-1-735x596.png'
    },
    {
        title: "Веймаранер",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/17-1-735x599.png'
    },
    {
        title: "Вельш корги кардиган",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/18-1-735x533.png'
    },
    {
        title: "Вельш корги пемброк",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/19-1-735x568.png'
    },
    {
        title: "Венгерская борзая",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/20-1-735x618.png'
    },
    {
        title: "Веттерхун",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/21-1-735x526.png'
    },
    {
        title: "Вольфшпиц",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/22-1-735x640.png'
    },
    {
        title: "Восточносибирская лайка",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/23-1-735x599.png'
    },
    {
        title: "Гампр",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/24-1-735x537.png'
    },
    {
        title: "Голландская овчарка",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/25-1-735x536.png'
    },
    {
        title: "Голландский смаусхонд",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/26-1-735x526.png'
    },
    {
        title: "Гренландская собака",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/27-1-735x578.png'
    },
    {
        title: "Грейхаунд",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/28-1-735x483.png'
    },
    {
        title: "Далматин",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/29-1-735x553.png'
    },
    {
        title: "Джек-Рассел терьер",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/30-1-735x523.png'
    },
    {
        title: "Доберман",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/31-1-735x541.png'
    },
    {
        title: "Дратхаар",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/32-1-735x571.png'
    },
    {
        title: "Древер",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/33-735x564.png'
    },
    {
        title: "Евразиер",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/34-735x483.png'
    },
    {
        title: "Западносибирская лайка",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/35-735x512.png'
    },
    {
        title: "Золотистый ретривер",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/1-8-735x532.png'
    },
    {
        title: "Ирландский волкодав",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/5-735x536.png'
    },
    {
        title: "Ирландский терьер",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/2-7-735x578.png'
    },
    {
        title: "Исландская собака",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/3-7-735x551.png'
    },
    {
        title: "Испанский гальго",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/4-7-735x563.png'
    },
    {
        title: "Йоркширский терьер",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/5-7-735x523.png'
    },
    {
        title: "Кавалер-кинг-чарльз-спаниель",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/6-7-735x545.png'
    },
    {
        title: "Кавказская овчарка",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/7-7-735x517.png'
    },
    {
        title: "Кане-корсо",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/8-7-735x584.png'
    },
    {
        title: "Карело-финская лайка",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/9-7-735x598.png'
    },
    {
        title: "Карликовый пинчер",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/10-7-735x564.png'
    },
    {
        title: "Карликовый шнауцер",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/11-7-735x588.png'
    },
    {
        title: "Керн-терьер",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/12-4-735x603.png'
    },
    {
        title: "Керри-блю-терьер",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/13-3-735x559.png'
    },
    {
        title: "Китайская хохлатая собака",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/14-3-735x595.png'
    },
    {
        title: "Коикерхондье",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/15-3-735x516.png'
    },
    {
        title: "Кромфорлендер",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/16-2-735x479.png'
    },
    {
        title: "Ксолоитцкуинтли",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/17-2-735x532.png'
    },
    {
        title: "Курцхаар",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/18-2-735x567.png'
    },
    {
        title: "Лабрадор-ретривер",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/20-2-735x551.png'
    },
    {
        title: "Лабрадудель",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/21-2-735x461.png'
    },
    {
        title: "Лангхаар",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/22-2-735x546.png'
    },
    {
        title: "Ландсир",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/23-2-735x553.png'
    },
    {
        title: "Левретка",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/24-2-735x509.png'
    },
    {
        title: "Леонбергер",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/25-2-735x590.png'
    },
    {
        title: "Лхаса Апсо",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/26-2-735x568.png'
    },
    {
        title: "Майоркская овчарка",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/27-2-735x700.png'
    },
    {
        title: "Мальтийская болонка",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/28-2-735x559.png'
    },
    {
        title: "Мопс",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/29-2-735x551.png'
    },
    {
        title: "Миттельшнауцер",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/30-2-735x527.png'
    },
    {
        title: "Муди",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/31-2-735x569.png'
    },
    {
        title: "Неаполитанский мастиф",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/33-1-735x494.png'
    },
    {
        title: "Немецкий боксер",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/1-9-735x514.png'
    },
    {
        title: "Немецкий дог",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/2-8-735x557.png'
    },
    {
        title: "Немецкая овчарка",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/3-8-735x511.png'
    },
    {
        title: "Немецкий пинчер",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/4-8-735x615.png'
    },
    {
        title: "Немецкий шпиц",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/5-8-735x551.png'
    },
    {
        title: "Норвежский бухунд",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/6-8-735x572.png'
    },
    {
        title: "Норвич-терьер",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/7-8-735x545.png'
    },
    {
        title: "Ньюфаундленд",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/10-735x576.png'
    },
    {
        title: "Папильон",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/8-8-735x582.png'
    },
    {
        title: "Пекинес",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/9-8-735x546.png'
    },
    {
        title: "Пиренейская овчарка",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/10-8-735x545.png'
    },
    {
        title: "Пиренейский мастиф",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/11-8-735x591.png'
    },
    {
        title: "Пойнтер",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/12-5-735x588.png'
    },
    {
        title: "Померанский шпиц",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/1-4-735x628.png'
    },
    {
        title: "Пражский крысарик",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/13-4-735x572.png'
    },
    {
        title: "Пудель",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/14-4-735x541.png'
    },
    {
        title: "Ризеншнауцер",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/15-4-735x583.png'
    },
    {
        title: "Родезийский риджбек",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/16-3-735x534.png'
    },
    {
        title: "Ротвейлер",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/17-3-735x524.png'
    },
    {
        title: "Русская псовая борзая",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/18-3-735x506.png'
    },
    {
        title: "Русский охотничий спаниель",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/19-2-735x551.png'
    },
    {
        title: "Русский той-терьер",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/20-3-735x630.png'
    },
    {
        title: "Салюки",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/21-3-735x559.png'
    },
    {
        title: "Самоедская собака",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/22-3-735x623.png'
    },
    {
        title: "Сенбернар",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/23-3-735x542.png'
    },
    {
        title: "Сиба-ину",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/24-3-735x535.png'
    },
    {
        title: "Сибирский хаски",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/25-3-735x512.png'
    },
    {
        title: "Среднеазиатская овчарка",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/26-3-735x575.png'
    },
    {
        title: "Тайваньская собака",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/1-10-735x525.png'
    },
    {
        title: "Тибетский терьер",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/2-9-735x541.png'
    },
    {
        title: "Тоса-ину",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/3-9-735x561.png'
    },
    {
        title: "Уиппет",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/4-9-735x578.png'
    },
    {
        title: "Фараонова собака",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/5-9-735x488.png'
    },
    {
        title: "Финская гончая",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/6-9-735x524.png'
    },
    {
        title: "Финский лаппхунд",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/7-9-735x546.png'
    },
    {
        title: "Французский бульдог",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/8-9-735x627.png'
    },
    {
        title: "Ханаанская собака",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/9-9-735x531.png'
    },
    {
        title: "Ховаварт",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/10-9-735x552.png'
    },
    {
        title: "Хорватская овчарка",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/11-9-735x551.png'
    },
    {
        title: "Чау-чау",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/12-6-735x548.png'
    },
    {
        title: "Чинук",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/13-5-735x506.png'
    },
    {
        title: "Чихуахуа",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/14-5-735x588.png'
    },
    {
        title: "Шарпей",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/15-5-735x544.png'
    },
    {
        title: "Шапендуа",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/16-4-735x567.png'
    },
    {
        title: "Шотландская овчарка",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/17-4-735x610.png'
    },
    {
        title: "Шипперке",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/18-4-735x469.png'
    },
    {
        title: "Ши-тцу",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/19-3-735x562.png'
    },
    {
        title: "Эрдельтерьер",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/20-4-735x568.png'
    },
    {
        title: "Эстонская гончая",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/21-4-735x542.png'
    },
    {
        title: "Эштрельская овчарка",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/22-4-735x594.png'
    },
    {
        title: "Ямтхунд",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/24-4-735x552.png'
    },
    {
        title: "Японский хин",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/25-4-735x553.png'
    },
    {
        title: "Японский шпиц",
        img: 'https://penguin-art.ru/storage/app/media/gohome/img/breeds/dogs/26-4-735x551.png'
    }
]

export default items.map((item: any ,k) => {
    item.id = k + 1;
    return item;
});