const form = document.querySelector(".sign-up");
const success = document.querySelector(".success");
const subBtn = document.getElementById("sub-btn");
const email = document.getElementById("email");
const errorMsg = document.getElementById("error-msg");
const successMsg = document.getElementById("success-msg");
const dismissBtn = document.getElementById("dismiss-btn");

function check(mes){
    const reg = /^(?!.*\.\.)(?!\.)(?!.*\.@)(?!.*\.$)[a-z][\w._-]*@(?!-)(?!.*-\.)([a-z\d-]+\.){1,2}[a-z]{2,}$/i;
    return reg.test(mes);
}

subBtn.addEventListener("click",(e) => {
    e.preventDefault();
    const mailVal = email.value;
    if(check(mailVal)){
        form.classList.toggle("hidden");
        success.classList.toggle("hidden");
        successMsg.textContent = mailVal;
    }
    else{
        errorMsg.classList.remove("hidden");
        email.classList.add("input-error");
    }
})

dismissBtn.addEventListener("click",() => {
    success.classList.add("hidden");
    form.classList.remove("hidden");
    errorMsg.classList.add("hidden");
    email.classList.remove("input-error");
    email.value = "";
})