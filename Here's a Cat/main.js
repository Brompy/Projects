const BREEDS_URL = 'https://api.thecatapi.com/v1/breeds'

const select = document.querySelector('.breeds')

fetch(BREEDS_URL) 
    .then(res => {
        return res.json();
    })
    .then(data => {
        data = data.filter(img => img.image?.url!=null)
        breeds = data;
        for(let i=0; i < data.length; i++) {
            const option = document.createElement('option')
            option.value = data[i].name;
            option.innerText = data[i].name;
            select.appendChild(option)
        }

    })
select.addEventListener('change', showBreed)
function showBreed(event) {
    console.log(event.target.value)
    index = document.querySelector('select').selectedIndex - 1;
    document.querySelector('img').src=breeds[index].image.url;
    document.querySelector('h1').innerText=breeds[index].name;
    document.getElementById('origin').innerText=breeds[index].origin;
    document.getElementById('description').innerText=breeds[index].description;
    document.getElementById('temperament').innerText=breeds[index].temperament;
    // document.querySelector('.origin .description .temperament').removeAttribute('hidden');

}

        
// select.addEventListener('change', event => {
//     let url  = `https://api.thecatapi.com/v1/breeds`
    
// }) //when option changes, then load different cat image

//data[i].image.url -> get cat picture of breed

//     fetch(url)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//         document.querySelector('img').src = data[0].url;
//     })
//     .catch(console.error)
// }