

document.querySelector('button').addEventListener('click', getCat)

function getCat() {
    const url = 'https://api.thecatapi.com/v1/images/search'
    
    fetch(url, {headers: {'x-api-key':'bd5efee3-8629-4693-a772-d8c5fe8586e4'}})
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('img').src = data[0].url;
    })
    .catch(console.error)
}