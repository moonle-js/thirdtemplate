var joinUs                  =           document.querySelector('#join_us'),
    joinUsText              =           document.querySelector("#join_us_p"),
    joinUsPanel             =           document.querySelector('#join_us_panel'),
    joinButton              =           document.querySelector("#join_button");
var fullName                =           document.querySelector('#fullname'),
    email                   =           document.querySelector('#email'),
    exit                    =           document.querySelector('.exit');


    
    function showNone(){
        email.value = "";
        fullName.value = "";
        joinUsPanel.style.display = "none";
    }
    function show(){
        fullName.value = "";
        email.value = "";
        joinUsPanel.style.display = "flex";
    }

    joinUs.onclick = show;
    joinUsText.onclick = show;
    exit.onclick = showNone;
    joinButton.onclick = showNone;

fullName.style.textTransform = "capitalize";