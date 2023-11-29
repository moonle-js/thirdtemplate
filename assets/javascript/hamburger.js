var links = document.querySelector('#links'),
    hamburger = document.querySelector('#hamburger'),
    sectionOne = document.querySelector('.sec_1');



    hamburger.onclick = function() {
    
        if(sectionOne.style.marginTop === "180px"){
            sectionOne.style.marginTop = "50px";
        }else{
            sectionOne.style.marginTop = "180px";
        }

        links.classList.toggle('enable');
        console.log(links.classList)

    };