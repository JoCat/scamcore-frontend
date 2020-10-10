// Dropdowns

document.querySelectorAll('.js__siblings-dropdown .dropdown-toggle').forEach((el) => {
    const parent = el.parentElement;
    document.addEventListener('click', (e) => {
        if (e.target === el) e.preventDefault();
        if (
            e.target === el ||
            (parent.classList.contains('active') && e.target.parentElement.classList.contains('js__siblings-dropdown'))
        ) {
            parent.classList.toggle('active');
        }
    })
})

// Sliders
function createSlider(name, settings, suffix = '') {
    const slider = document.getElementById(name + '-slider');
    noUiSlider.create(slider, Object.assign(settings, {
        connect: true,
        tooltips: true,
        format: {
            to: value =>  value.toFixed(name == 'frequency' ? 2 : 0),
            from: value => value
        }
    }));

    const min = document.createElement('div');
    min.className = 'slider-value-min';
    slider.appendChild(min);
    const max = document.createElement('div');
    max.className = 'slider-value-max';
    slider.appendChild(max);

    // Сбрасывать слайдеры до дефолтных значений пир сбросе формы
    document.querySelector('.filter').addEventListener('reset', () => {
        slider.noUiSlider.set(settings.start)
    });

    slider.noUiSlider.on('update', (values, handle) => {
        [min, max][handle].innerHTML = values[handle] + suffix;
        document.querySelector(`[name=${name}_min]`).value = values[0];
        document.querySelector(`[name=${name}_max]`).value = values[1];
    });

    // Если при измененим значений будут уходить запросы на бэкенд, то лучше сделать так
    // slider.noUiSlider.on('update', (values, handle) => {
    //     [min, max][handle].innerHTML = values[handle] + suffix;
    // });
    // slider.noUiSlider.on('set', (values, handle) => {
    //     document.querySelector(`[name=${name}_min]`).value = values[0];
    //     document.querySelector(`[name=${name}_max]`).value = values[1];
    // });
}

const hamburger = document.querySelector('.offcanvas-btn')
if (hamburger !== null) {
    document.addEventListener('click', (e) => {
        if (
            (e.target === hamburger || hamburger.contains(e.target)) || // Если нажатие срабатывает на элементе
            (hamburger.classList.contains('is-active') && !document.querySelector('.offcanvas-menu').contains(e.target)) // Вне элемента когда открыто меню
        ) {
            hamburger.classList.toggle('is-active');
        }
    })
}

document.addEventListener('DOMContentLoaded', () => {
    const geekbenchs = document.querySelectorAll('.geekbench')
    if (geekbenchs.length == 0) return
    geekbenchs.forEach((el) => {
        const percent = (el.dataset.geekbench / el.dataset.geekbenchMax) * 100

        const deg = 238 * percent / 100
        el.querySelector('.speedometer__arrow').style.transform = `rotate(${deg}deg)`

        const size = (87.4986 - 87.4986 * percent / 100).toFixed(4)
        el.querySelector('.speedometer__speed').style.strokeDashoffset = `${size}px`

        const scoreEl = el.querySelector('.speedometer__score')
        for (let index = 0; index < 100; index++) {
            setTimeout(() => {
                scoreEl.innerHTML = (el.dataset.geekbench / 100 * index).toFixed(0)
            }, index * 10)
        }
        setTimeout(() => {scoreEl.innerHTML = el.dataset.geekbench}, 1000)
    })
})
