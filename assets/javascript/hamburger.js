var links = document.querySelector("header nav ul li:nth-child(2)"),
    joinLink = document.querySelector("#join_us");


    function goster(){
        links.style.display = "none";
        joinLink.style.width = "60%";
        joinLink.innerHTML = " ";

        
        var div = document.createElement("div");

        div.innerHTML = `
            <span class="span_ham">  </span>
            <span class="span_ham">  </span>
            <span class="span_ham">  </span>
        `

        joinLink.appendChild(div);
    }

    function gosterme(){
        links.style.display = "flex";
        links.style.position = "absolute";
        links.style.top = "44px";
        links.style.margin = "0 auto";
        links.style.width = "110%";
        links.style.columnGap = "5px";
    }



    if(window.screen.width < 1000){
        joinLink.innerHTML = " ";
        goster();
        let a = 1;

        joinLink.onclick = function(){
            console.log(a);
            if(a == 1){
                goster();
                a = 0;
            }else if (a == 0){
                gosterme();
                a = 1;
            }
        }
    }


