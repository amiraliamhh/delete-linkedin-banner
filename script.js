if (window.location.hostname === 'www.linkedin.com') {
    const timeout = setInterval(() => {
        const banner = document.querySelector('.right-rail-container.feed-right-rail__container section')
        if (banner && banner.style) {
            banner.style.display = 'none'
            clearInterval(timeout)
        }
    }, 100)
}