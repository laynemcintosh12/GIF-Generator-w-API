console.log("Let's get this party started!");

const $submitBtn = $("#submitBtn");
const $deleteBtn = $("#removeGifs");
const $gifContainer = $("#GIFContainer");


$submitBtn.on('click', async function(e){
    e.preventDefault();

    // generate GIF
    let gif = $("#searchText").val();
    const res = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${gif}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
    generateGIF(res.data);
    $("#searchText").val("");
})


function generateGIF(data){
    let random = Math.floor(Math.random() * data.data.length);
    let url = data.data[random].images.original.url
    let $newImg = $("<img>", {
        src: url
    });
    $gifContainer.append($newImg);
}

$deleteBtn.on('click', removeGifs);

function removeGifs(){
    $gifContainer.empty();
}