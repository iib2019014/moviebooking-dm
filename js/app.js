const getEle = (selector) => {
    const ele = document.querySelector(selector)

    if (ele) return ele
    throw Error(
        `Please double check your class names, there is no ${selector} class`
    )
}

const links = getEle('.nav-links')
const navBtnDOM = getEle('.nav-btn')

navBtnDOM.addEventListener('click', () => {
    links.classList.toggle('show-links')
})

const date = getEle('#date')
const year = new Date().getFullYear()
date.textContent = year