const user = document.querySelector("#user");
const pass = document.querySelector("#password");
const btnLogin = document.querySelector("#login-dash");
const alertErr = document.querySelector("#error-login");

btnLogin !== null ? login() : null



// date

$('.datepicker').datepicker()

function login() {
    btnLogin.addEventListener("click", (e) => {
        if (user.value === "" && pass.value === "") {
            alertErr.innerHTML = "Debe ingresar Usuario y Password";
            alertErr.classList.replace("d-none", "d-block");
            user.style.boxShadow = "0 1px 0 0 red";
            pass.style.boxShadow = "0 1px 0 0 red";
            $("#user-icon").css('color', 'red');
            $("#password-icon").css('color', 'red');
        }
        else {
            window.location.href = e.target.getAttribute("href");
        }
    });

    user.addEventListener('blur', ()=>{
        if(user.value === ""){
            user.style.boxShadow = "0 1px 0 0 red";
            $("#user-icon").css('color', 'red');
            alertErr.innerHTML = "Debe ingresar Usuario"
            alertErr.classList.replace("d-none", "d-block")
        }else{
            user.style.boxShadow = "0 1px 0 0 green"
            $("#user-icon").css('color', 'green');
            alertErr.classList.replace("d-block", "d-none")
        }
    })
    
    pass.addEventListener('blur', ()=>{
        if(pass.value === "" && user.value === ""){
            pass.style.boxShadow = "0 1px 0 0 red";
            $("#password-icon").css('color', 'red');
            alertErr.innerHTML = "Debe ingresar Usuario y Password"
            alertErr.classList.replace("d-none", "d-block")
        }else if(pass.value === "" ){
            pass.style.boxShadow = "0 1px 0 0 red";
            $("#password-icon").css('color', 'red');
            alertErr.innerHTML = "Debe ingresar password"
            alertErr.classList.replace("d-none", "d-block")
        }else{
            pass.style.boxShadow = "0 1px 0 0 green"
            $("#user-icon").css('color', 'green');
            $("#password-icon").css('color', 'green');
            alertErr.classList.replace("d-block", "d-none")
        }
    })
}
