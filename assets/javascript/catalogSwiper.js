var array = [
    {
        'link'      :   "../assets/images/book_1.png",
        'name'      :   "Konstantin",
        'index'     :   0,
    },
    {
        'link'      :   "../assets/images/boook_2.png",
        'name'      :   "Mehemmed",
        'index'     :   1,
    },
    {
        'link'      :   "../assets/images/image 4book_3.png",
        'name'      :   "Nihad",
        'index'     :   2,
    },
    {
        'link'      :   "../assets/images/book_4.png",
        'name'      :   "Xeyyam",
        'index'     :   3,
    },
    {
        'link'      :   "../assets/images/book_5.png",
        'name'      :   "Aygun",
        'index'     :   4,
    },
]
var firstMessage = array.filter(a => a.index < 3).map( a => `
        <div class="book">
        <img class='book_image' src="${a.link}" alt="book_one">
        <p class="book_name">
            ${a.name}
        </p>
        <button>
            Read more
        </button>
        </div>
`).join('');

var message = array.filter(a => a.index < 3).map( a => `
        <div class="book">
        <img class='book_image' src="${a.link}" alt="book_one">
        <p class="book_name">
            ${a.name}
        </p>
        <button>
            Read more
        </button>
        </div>
`).join('');

document.querySelector('#secondCatalog').innerHTML = message;
document.querySelector('#firstCatalog').innerHTML = message;


var newArr = array.filter(a => a.index < 3).map(a => a);
var firstnewArr = array.filter(a => a.index < 3).map(a => a);

document.querySelector('#firstCatalogLeft').onclick = function(){
    if((firstnewArr[firstnewArr.length-1].index) !== array[array.length - 1].index){
        firstnewArr.shift();
        firstnewArr.push(array[firstnewArr[firstnewArr.length-1].index+1]);
    }

    // ------------------
    var firstMessage = firstnewArr.map( a => `
        <div class="book">
        <img class='book_image' src="${a.link}" alt="book_one">
        <p class="book_name">
            ${a.name}
        </p>
        <button>
            Read more
        </button>
        </div>
`).join('');


document.querySelector('#firstCatalog').innerHTML = firstMessage;
}

document.querySelector('#firstCatalogRight').onclick = function(){
    if(firstnewArr[0].index !== array[0].index){
        firstnewArr.pop();
        firstnewArr.unshift(array[firstnewArr[0].index-1]);
    }

    // -----------------
    var firstMessage = firstnewArr.map( a => `
        <div class="book">
        <img class="book_image" src="${a.link}" alt="book_one">
        <p class="book_name">
            ${a.name}
        </p>
        <button>
            Read more
        </button>
        </div>
`).join('');


document.querySelector('#firstCatalog').innerHTML = firstMessage;
}









// Onclick when clicking left

document.querySelector('#secondCatalogLeft').onclick = function(){
    if((newArr[newArr.length-1].index) !== array[array.length - 1].index){
        newArr.shift();
        newArr.push(array[newArr[newArr.length-1].index+1]);
    }

    // ------------------
    var message = newArr.map( a => `
        <div class="book">
        <img class='book_image' src="${a.link}" alt="book_one">
        <p class="book_name">
            ${a.name}
        </p>
        <button>
            Read more
        </button>
        </div>
`).join('');


document.querySelector('#secondCatalog').innerHTML = message;
}

// Onclick function when pressing right button

document.querySelector('#secondCatalogRight').onclick = function(){
    if(newArr[0].index !== array[0].index){
        newArr.pop();
        newArr.unshift(array[newArr[0].index-1]);
    }

    // -----------------
    var message = newArr.map( a => `
        <div class="book">
        <img class="book_image" src="${a.link}" alt="book_one">
        <p class="book_name">
            ${a.name}
        </p>
        <button>
            Read more
        </button>
        </div>
`).join('');


document.querySelector('#secondCatalog').innerHTML = message;
}