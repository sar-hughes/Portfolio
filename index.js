let email = "hughes.sar25@gmail.com"

function copyEmail(){
    navigator.clipboard.writeText(email);
}

const secondPage = document.getElementById("overlap-2").offsetTop;
function onScroll(){
       // window.scrollTo({top: secondPage, behavior: "smooth"});
       document.querySelector('.overlap-2').scrollIntoView({
        behavior: "smooth"
       });
}