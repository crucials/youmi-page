import { toggleAnswer } from './accordion'
import { openMenu, closeMenu } from './navigation'

document.querySelector('.open-menu-button')?.addEventListener('click', openMenu)
document.querySelector('.close-menu-button')?.addEventListener('click', closeMenu)

document.querySelectorAll('.question-text').forEach(questionText => {
    questionText.addEventListener('click', event => toggleAnswer(event))
})