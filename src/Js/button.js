function show() {
    // var a = document.querySelectorAll(".how-it-works-img-container")
    // for (var i = 1; i < a.length; i++) {
    //     a[i].style.display = "none";
    // }

    var a = document.querySelectorAll(".common-how-it-work-class");
    for (var i = 0; i < a.length; i++) {
        a[i].style.border = "0.1rem solid red";
    }

    var a = document.querySelectorAll(".common-how-it-work-class .number");
    a.forEach((ele) => {
        ele.style.fontSize = "1.5rem";
        ele.style.color = "var(--bright-blue)";
    })


    var a = document.querySelectorAll(".common-how-it-work-class .text");
    a.forEach((ele) => {
        ele.style.fontSize = "1.3rem";
        ele.style.color = "var(--dark-blue)";
    })
}


//works in all border when button click
// var a=document.querySelectorAll(".common-how-it-work-class");
// for(var i=0;i<a.length;i++){
// a[i].style.border="0.1rem solid red";
// }

