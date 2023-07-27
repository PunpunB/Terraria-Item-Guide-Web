//Animate Smooth Scroll
$('#scroll-down').on('click', function() {
    const target = $('#database').position().top;

    $('html, body').animate(
        {
            scrollTop: target
        },
        2000
    );
});

let bosspick = document.getElementById('boss-name');
bosspick.onchange = (ev) =>{
console.log("Selected boss is: " + bosspick.value);
}

let classpick = document.getElementById('class-name');
classpick.onchange = (ev) =>{
console.log("Selected class is: " + classpick.value);
}

function changeimg()
{
    var img = document.getElementById('image');
    var chosenclass = document.getElementById('classpick.value');
    var chosenboss = document.getElementById('bosspick.value');
    img.src = 'bg.jpg';
    console.log(chosenclass);
    console.log(chosenboss);
} 