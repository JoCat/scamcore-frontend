// Dropdowns

// document.querySelectorAll('.js__siblings-dropdown .dropdown-toggle').forEach((el) => {
//     const parent = el.parentElement;
//     document.addEventListener('click', (e) => {
//         if (e.target === el) e.preventDefault();
//         if (
//             e.target === el ||
//             (parent.classList.contains('active') && e.target.parentElement.classList.contains('js__siblings-dropdown'))
//         ) {
//             parent.classList.toggle('active');
//         }
//     })
// })

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
