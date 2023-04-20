//creating new elements
const div = document.createElement('div')
const button = document.createElement('button')
const p = document.createElement('p')

div.classList.add('hamburger')
button.classList.add('new-button')
button.innerText = 'GET MY COFFEE'
p.innerText = 'O café que fará seu código decolar para o próximo nível.'

//append prepend - add div inside the page
const header = document.querySelector('header')
const title = document.querySelector('.title')

header.append(div)
title.prepend(button)
title.prepend(p)

//hamburger menu functionality
div.addEventListener('click', () => {
    document.body.classList.toggle('open')
})