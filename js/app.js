const button = document.getElementById('generateButton');
const copyButton = document.getElementById('copyButton');
const copyContent = document.getElementById('clipboard');
let password = document.getElementById('password');



button.addEventListener('click',() => {
    let randomPassword = "";
    for(let i = 0; i < 3; i++){
        let aux = Math.random().toString(36).substring(9);
        randomPassword += aux;
    }
    password.value = randomPassword;
    setTimeout(() => {
        clipboard();
    }, 500);
});

copyButton.addEventListener('click', () => {
    clipboard();
});

function clipboard(){
    if(password.value != ""){
        password.select();
        document.execCommand('copy');
        copyContent.classList.add('active');
        setTimeout(()=>{
            copyContent.classList.remove('active');
        }, 1500);
    }
}