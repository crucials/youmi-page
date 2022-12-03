export function initObserver() {
    const stepPictures = document.querySelectorAll('.step-picture')

    const heroSection = document.querySelector('.hero')
    const featuresList = document.querySelector('.features-list')
    const problemsLinks = document.querySelector('.problems-links')
    const qualificationSection = document.querySelector('.qualification')
    const mobileAppInfo = document.querySelector('.mobile-app-info')
    const mobileAppScreens = document.querySelector('.mobile-app-screens')
    
    const elementsToObserve = [heroSection, featuresList, problemsLinks, qualificationSection, mobileAppInfo,
        mobileAppScreens]

    const elementObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                const viewedElement = entry.target

                if(viewedElement == heroSection) {
                    heroSection.querySelector('.hero-illustration')?.classList.add('hero-illustration-viewed')
    
                    if(window.matchMedia('(max-width: 700px)').matches) {
                        heroSection.querySelectorAll('.hero-text').forEach(heroText => {
                            heroText.classList.add('hero-text-viewed')
                        })
                    }
                    else {
                        setTimeout(() => {
                            heroSection.querySelectorAll('.hero-text').forEach(heroText => {
                                heroText.classList.add('hero-text-viewed')
                            })
                        }, 500)
                    }
                }

                else if(viewedElement == featuresList) {
                    featuresList.classList.add('features-list-viewed')
                }

                else if(viewedElement == problemsLinks) {
                    problemsLinks.classList.add('problems-links-viewed')
                }

                else if(viewedElement == qualificationSection) {
                    qualificationSection.classList.add('qualification-viewed')

                    setTimeout(() => {
                        qualificationSection.querySelectorAll('.requirement').forEach(requirement => {
                            requirement.classList.add('requirement-viewed')
                        })
                    }, 450)
                }

                else if(viewedElement.classList.contains('step-picture')) {
                    viewedElement.classList.add('step-picture-viewed') 

                    if(viewedElement.classList.contains('profiles-picture')) {
                        let timeoutCounter = 300
                        viewedElement.querySelectorAll('.profile').forEach(profile => {
                            setTimeout(() => {
                                profile.classList.add('profile-viewed')
                            }, timeoutCounter += 100)
                        })
                    }
                }

                else if(viewedElement == mobileAppInfo) {
                    mobileAppInfo.querySelector('.mobile-app-section-heading')?.classList
                        .add('mobile-app-section-heading-viewed')
                }

                else if(viewedElement == mobileAppScreens) {
                    mobileAppScreens.classList.add('mobile-app-screens-viewed')
                }

                observer.unobserve(viewedElement)
            }
        })
    }, { threshold: 0.25 })
    
    elementsToObserve.forEach(element => {
        if(element) {
            elementObserver.observe(element)        
        }
    })

    stepPictures.forEach(picture => {
        elementObserver.observe(picture)
    })
}