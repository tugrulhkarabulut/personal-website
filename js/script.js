    elements = {
        backgroundImage: document.querySelector('.js--bg-img'),
        aboutMe: document.querySelector('.js--about-me'),
        edu: document.querySelector('.js--edu'),
        skills: document.querySelector('.js--skills'),
        dreams: document.querySelector('.js--dreams'),
        header: document.querySelector('.js--top'),
        stickyParent: document.querySelector('.side-menu'),
        stickyNav: document.querySelector('.nav-sticky')
    };

    buttons = {
        menuButton: document.querySelector('.btn-menu'),
        scrollButton: document.querySelector('.js--btn-scroll'),
        aboutButton: document.querySelector('.js--btn-about'),
        aboutButtonSticky: document.querySelector('.js--btn-about-sticky'),
        eduButton: document.querySelector('.js--btn-edu'),
        eduButtonSticky: document.querySelector('.js--btn-edu-sticky'),
        skillsButton: document.querySelector('.js--btn-skills'),
        skillsButtonSticky: document.querySelector('.js--btn-skills-sticky'),
        dreamsButton: document.querySelector('.js--btn-dreams'),
        dreamsButtonSticky: document.querySelector('.js--btn-dreams-sticky'),
        topButton: document.querySelector('.js--btn-top'),
    };

    // ANIMATIONS



    buttons.scrollButton.addEventListener('mouseover', () => {
        elements.backgroundImage.style.animation = 'shine 2s forwards ease-out';
    });
    buttons.scrollButton.addEventListener('mouseleave', () => {
        elements.backgroundImage.style.animation = 'off 2s forwards ease-out';
    });

    window.addEventListener('click', e => {
        if (e.target.matches('.btn-menu, .btn-menu *') || e.target.matches('.nav-sticky, .nav-sticky *')) {
            buttons.menuButton.style.animation = 'disappear 0.4s 0.2s forwards ease-out';
            elements.stickyNav.style.animation = 'appear 0.5s forwards ease-out';
        } else {
            buttons.menuButton.style.animation = 'btn-appear 0.4s 0.2s forwards ease-out';
            elements.stickyNav.style.animation = 'menu-disappear 0.5s forwards ease-out';
        }
    });


    //SMOOTH SCROLLING
    const scrollToEl = (element) => {
        element.scrollIntoView({
            behavior: 'smooth'
        });
    };



    [buttons.scrollButton, buttons.aboutButton]
    .forEach(el => el.addEventListener('click', () => {
        scrollToEl(elements.aboutMe);
    }));
    buttons.aboutButtonSticky.addEventListener('click', e => {
        e.preventDefault();
        scrollToEl(elements.aboutMe);
    });

    buttons.eduButton.addEventListener('click', () => {
        scrollToEl(elements.edu);
    });

    buttons.eduButtonSticky.addEventListener('click', e => {
        e.preventDefault();
        scrollToEl(elements.edu);
    });

    buttons.skillsButton.addEventListener('click', () => {
        scrollToEl(elements.skills);
    });

    buttons.skillsButtonSticky.addEventListener('click', e => {
        e.preventDefault();
        scrollToEl(elements.skills);
    });

    buttons.dreamsButton.addEventListener('click', () => {
        scrollToEl(elements.dreams);
    });

    buttons.dreamsButtonSticky.addEventListener('click', e => {
        e.preventDefault();
        scrollToEl(elements.dreams);
    });

    buttons.topButton.addEventListener('click', e => {
        e.preventDefault();
        scrollToEl(elements.header);
    });

    elements.stickyParent.addEventListener('click', e => {
        e.preventDefault();
    });

    // STICKY NAV HANDLER
    var stickyNavHandler = () => {
        if (window.pageYOffset < window.innerHeight / 2) {
            elements.stickyParent.style.visibility = 'hidden';
            buttons.menuButton.style.visibility = 'hidden';
            elements.stickyNav.style.visibility = 'hidden';
        } else {
            elements.stickyParent.style.visibility = 'visible';
            buttons.menuButton.style.visibility = 'visible';
            elements.stickyNav.style.visibility = 'visible';
        }
    };

    window.addEventListener('scroll', stickyNavHandler);