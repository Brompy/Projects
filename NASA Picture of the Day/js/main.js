//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=DuqrL1XzDT7H5lEcfqKecpsaSuwMDU0lYZqcdk5U&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if(data.media_type === 'image'){
        document.querySelector('img').src = data.url;
        document.querySelector('iframe').style.display = 'none';
      } else if(data.media_type === 'video') {
        document.querySelector('iframe').src = data.url;
        document.querySelector('img').style.display = 'none';
        document.querySelector('h2').innerText = 'Video Of The Day:';
      }
        document.querySelector('h3').innerText = data.explanation;
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

