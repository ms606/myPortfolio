// let toggler = document.getElementsByClassName('toggler')
//let shortButton = document.getElementById('short')

// (function () {
// 	setBioEventListener();
// })();

setBioEventListener();

/* Bio toggles */
function setBioEventListener() {
	Array.from(document.getElementsByTagName("button")).forEach((e) => {
     e.addEventListener("click", bioToggle);
	});
}

function bioToggle(e){
    //console.log(e.target);
    let bioType = e.target;
   // let element = document.getElementById("bio-short");
   off();
    let bioTypeElement = document.getElementsByClassName(bioType.id)[0];
    //console.log(bioTypeElement,'1');
    
    //console.log(document.getElementsByClassName(bioType.id));    
   
    if (bioTypeElement !== undefined) bioTypeElement.classList.add("show");
}

function off(){
    Array.from(document.getElementsByClassName('bio')).forEach((e) => {
        e.classList.remove('show');
    })
}



setBioEventListener();


