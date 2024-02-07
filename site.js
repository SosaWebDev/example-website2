
const products = [{
        "title": "Nike",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "image": "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
        "color": "#deaf01"
    },{
        "title": "Independent",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "image": "https://images.pexels.com/photos/5657417/pexels-photo-5657417.jpeg",
        "color": "#554a33"
    },{
        "title": "Michael Kors",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "image": "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg",
        "color": "#01322f"
    },{
        "title": "Champion",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "image": "https://images.pexels.com/photos/10435675/pexels-photo-10435675.jpeg",
        "color": "#554a33"
    },{
        "title": "Iphone",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "image": "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg",
        "color": "deaf01"
    },{
        "title": "Car",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "image": "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg",
        "color": "#01322f"
    }
]


const container = document.querySelector('#container')
const previousButton = document.querySelector('button.previous')
const nextButton = document.querySelector('button.next')

container.removeChild(nextButton.parentNode )

const newCard = document.createElement('div')
newCard.id = "card-4"
newCard.classList.add('card')
container.append(newCard)

const infoDiv = document.createElement('div')
newCard.append(infoDiv)

const header  = document.createElement('h1')
infoDiv.append(header)

const paragraph  = document.createElement('p')
infoDiv.append(paragraph)

container.append(nextButton.parentNode)


const displayProduct = (card, { image, title, text, color }) => {

    card.style.backgroundImage = `url(${image}?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`
    card.style.color = color

    const h1 = card.querySelector('h1')
    h1.textContent = title

    const p = card.querySelector('p')
    p.textContent = text
}

const cards = document.querySelectorAll('.card')


let offset = 0

const updateCards = shift => {

    offset += shift || 0
    cards.forEach((card, index) => { 
    const productIndex = (index + offset) % products.length
    displayProduct(card, products[productIndex])
    })

}

updateCards(0)



previousButton.addEventListener('click',() => updateCards(-1))
nextButton.addEventListener('click',() => updateCards(1))



// const greetings = ({name}) => `Hello ${name}!`

// //console.log(greetings({"name": "Julio"}))



// // setTimeout(() => createCard (cards[0], cardInfo1), 3000)

// const names = ["ryan", "marek", "ashton", "aidan"]
// const names2 = ["tevin", ...names.slice(1,4) ]

// const uppercase = text => 
//     `${text.at(0).toUpperCase()}${text.slice(1).toLowerCase()}`

// names2 .forEach(name => console.log(uppercase(name)))

// const input = "Valentines Day"

// if (['Christmas', 'Halloween', 'St. Patricks Day', 'Valentines Day'].includes(input)){
//     console.log("FOUND")
// }

//console.log(names2)

// console.log(names2[names2.length -1])

// const [ least, fav] = names2
// console.log({least, fav})

// const sentence =  'This are words'
// const [first] = sentence.split('')

// console.log({first})

// const printNames = (name1, name2) => {
//     console.log(name1)
//     console.log(name2)
// }

// printNames (...names)