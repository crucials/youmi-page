import './index.html'
import '@splidejs/splide/css/core'
import './index.scss'

import Splide from '@splidejs/splide'

import { initObserver } from './scripts/animations'

window.addEventListener('load', () => {
    import('./scripts/event-handler');
    initObserver()

    new Splide('.features-section .splide', {
        perPage: 3,
        gap: 20,
        drag: false,
        breakpoints: {
            900:{
                perPage: 2,
                drag: 'free',
                snap: true
            },
            550: {
                perPage: 1
            }
        },
    }).mount()

    new Splide('.qualification .splide', {
        perPage: 1,
        gap: 20,
    }).mount()
})