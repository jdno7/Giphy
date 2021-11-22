// console.log("Let's get this party started!");
$('form').on('submit', function(e){
    e.preventDefault();
    const search = $('input').val()
    getGiph(search)
    $('input').val('')
})

$('#remove').on('click', function(e){
    $('img').remove()
})

 async function getGiph(search){
    const key = 'Cyr5LwCsIiHopr41O1ASikCUHp53Z9u4'
     const response = await axios.get(`https://api.giphy.com/v1/gifs/search?&q=${search}&api_key=${key}`);
     const randomGiph = getRandom(response.data.data);
    
     console.log(randomGiph.images.fixed_height.url)

    appendGif(randomGiph.images.fixed_height.url)
}
    
function getRandom (arr){
    rand = Math.floor(Math.random() * arr.length)
    const res = arr[rand]
    return res
}

function appendGif(url){
    const img = document.createElement('img');
    img.src = url;
    document.querySelector('#giphy-container').append(img)
}

