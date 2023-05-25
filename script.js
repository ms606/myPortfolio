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
    let element = document.getElementsByClassName("bio short");
    console.log(element);
    element.classList.add('show')
}

setBioEventListener();


