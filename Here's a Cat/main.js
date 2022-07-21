const BREEDS_URL = 'https://api.thecatapi.com/v1/breeds'

const select = document.querySelector('.breeds')

fetch(BREEDS_URL, {headers: {'x-api-key':'bd5efee3-8629-4693-a772-d8c5fe8586e4'}}) 
    .then(res => {
        return res.json();
    })
    .then(data => {
        for(let i=0; i < data.length; i++) {
            const option = document.createElement('option')
            option.value = data[i].name;
            option.innerText = data[i].name;
            select.appendChild(option)
        }
    })
        
        


//     fetch(url, {headers: {'x-api-key':'bd5efee3-8629-4693-a772-d8c5fe8586e4'}})
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//         document.querySelector('img').src = data[0].url;
//     })
//     .catch(console.error)
// }