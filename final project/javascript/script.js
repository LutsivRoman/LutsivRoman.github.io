const openIcon = document.getElementById('burgerOpen');
const closeIcon = document.getElementById('burgerClose');
const mobMenu = document.getElementById('mobMenu');


document.addEventListener('DOMContentLoaded', () => {
    openIcon.addEventListener('click', () => {
       mobMenu.classList.add('show')
    })
    closeIcon.addEventListener('click', () => {
       mobMenu.classList.remove('show')
    })
})

async function populate() {
    const requestURL = 'https://lutsivroman.github.io/clientsComents.json'
    const request = new Request(requestURL)
   
    const response = await fetch(request)
    const clientComents = await response.json()
   
    populateHeader(clientComents)
    // populateComents(clientComents)
   }
   function populateHeader(obj) {
    const section = document.querySelector('section');
    const myH1 = document.createElement('h1');
     myH1.textContent = obj.title;
     section.appendChild(myH1);
   }
   console.log('section')

   populate()