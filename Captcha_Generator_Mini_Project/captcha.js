const subBtn = document.getElementById("btn1");

let captchaText = "";


function generateCaptcha() {
    let charsArray = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lengthOtp = 6;
    let captcha = [];
     for (let i = 0; i < lengthOtp; i++) {
       let index = Math.floor(Math.random() * charsArray.length);
        captcha.push(charsArray[index]);
    }
    captchaText = captcha.join("");
    document.getElementById("cap").innerText = captchaText;
}
    subBtn.addEventListener("click",validateCaptcha)

    function validateCaptcha() {
        let userCaptchaInput = document.getElementById("input").value;
        if (userCaptchaInput === captchaText) {
            document.getElementById("result").innerText = "Correct!";
                document.getElementById("result").style.color = "green";
        } else {
            document.getElementById("result").innerText = "Incorrect, try again.";
            document.getElementById("result").style.color = "red";
            generateCaptcha();
        }
        }

        generateCaptcha();
