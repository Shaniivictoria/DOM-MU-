
   weather = {
    hot: {
        temp: "100",
        url: 'https://media.tenor.com/WnIPBsYYKQgAAAAd/what-a-sunny-day.gif',
        text: 'Woof its shoooo hot'
    },
    rain: {
        temp: "40",
        url: 'https://thumbs.gfycat.com/IndelibleAlienatedBird-size_restricted.gif',
        text: 'Woof my shades are so cool'
    },
    snow: {
        temp: "10",
        url: 'https://media.tenor.com/daW8TX7HTgUAAAAC/dog-puppy.gif',
        text: 'Woof its snowwwww'
    },
    fall: {
        temp: "56",
        url: 'https://media3.giphy.com/media/x96U2VXwZqVxwrUu1H/giphy.gif',
        text: 'Woof I like playing in the leaves'
    },
    cold:{
        temp: "-4",
        url: 'https://media.tenor.com/Ac9FfuAhjAwAAAAM/golden-retriever-pijama.gif',
        text: "Woof its cold."
    }
}

const changeHot = ()=>{
    let firstpic = document.querySelector('.fDogImg')
    firstpic.setAttribute('src', weather.hot.url )
    let blue = document.querySelector('.tempContainer')
    blue.innerHTML = weather.hot.temp
    let green = document.querySelector('.txt')
    green.innerHTML = weather.hot.text
 
}


const changeRain = ()=>{
    let firstpic = document.querySelector('.fDogImg')
    firstpic.setAttribute('src', weather.rain.url )
    let blue = document.querySelector('.tempContainer')
    blue.innerHTML = weather.rain.temp
    let green = document.querySelector('.txt')
    green.innerHTML = weather.rain.text
}

const changeSnow = ()=>{
    let firstpic = document.querySelector('.fDogImg')
    firstpic.setAttribute('src', weather.snow.url )
    let blue = document.querySelector('.tempContainer')
    blue.innerHTML = weather.snow.temp
    let green = document.querySelector('.txt')
    green.innerHTML = weather.snow.text
}

const changeFall = ()=>{
    let firstpic = document.querySelector('.fDogImg')
    firstpic.setAttribute('src', weather.fall.url )
    let blue = document.querySelector('.tempContainer')
    blue.innerHTML = weather.fall.temp
    let green = document.querySelector('.txt')
    green.innerHTML = weather.fall.text
}
    
const changeCold = ()=>{
    let firstpic = document.querySelector('.fDogImg')
    firstpic.setAttribute('src', weather.cold.url )
    let blue = document.querySelector('.tempContainer')
    blue.innerHTML = weather.cold.temp
    let green = document.querySelector('.txt')
    green.innerHTML = weather.cold.text
}