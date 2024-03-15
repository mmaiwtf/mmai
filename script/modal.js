function showMenu() {

    let wrapper = document.createElement('div')
    wrapper.style.backgroundColor = 'rgba(11, 13, 15, 0.8)'
    wrapper.style.width = '100%';
    wrapper.style.height = '100%';
    wrapper.style.position = 'absolute'
    wrapper.style.top = '0'
    wrapper.style.left = '0'

    document.body.style.overflow = 'hidden'
    
    let close = document.createElement('div')
    close.style.color = 'white'
    close.textContent = '+'
    close.style.fontSize = '40px'
    close.style.transform = 'rotate(45deg)'
    close.style.right = '36px'
    close.style.position = 'absolute'
    close.style.top = '7px'
    wrapper.appendChild(close)

    close.onclick = () => {
        document.body.removeChild(wrapper)
        document.body.style.overflow = 'auto'
    }

    let home = createBtn('Home', true)
    home.onclick = () => {
        window.location.href = '/';
    }
    wrapper.appendChild(home)
    wrapper.appendChild(createSeperator())
    let stake = createBtn('Stake', false)
    stake.onclick = () => {
        window.open('../stake/stake.html', '_self')
    }
    wrapper.appendChild(stake)
    wrapper.appendChild(createSeperator())


    document.body.appendChild(wrapper)
}

function createBtn(content, isfirst) {
    let btn = document.createElement('div')
    btn.textContent = content
    btn.style.fontFamily = 'Montserrat'
    btn.style.color = 'white'
    btn.style.fontSize = '16px'
    btn.style.lineHeight = '56px'
    btn.style.height = '56px'
    if (isfirst) {
        btn.style.marginTop = '72px'
    }
    btn.style.marginLeft = 'auto'
    btn.style.marginRight = 'auto'
    btn.style.textAlign = 'center'
    return btn
}

function createSeperator() {
    let seperator = document.createElement('div')
    seperator.style.backgroundColor = 'rgba(102, 102, 102, 0.5)'
    seperator.style.height = '1px'
    seperator.style.marginLeft = '16px'
    seperator.style.marginRight = '16px'
    // seperator.style.marginTop = '1px'
    return seperator
}