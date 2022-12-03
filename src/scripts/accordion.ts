export function toggleAnswer(event : Event) {
    const clickedQuestion = (event.currentTarget as Element).parentElement

    if(clickedQuestion) {
        if(clickedQuestion.hasAttribute('data-revealed')) {
            clickedQuestion.removeAttribute('data-revealed')
        }
        else if(!clickedQuestion.hasAttribute('data-revealed')) {
            clickedQuestion.setAttribute('data-revealed', '')
        }
    }
}