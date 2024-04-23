// Lambda function trigger for website view counter
const counter = document.querySelector(".counter-number");
async function updateCounter(){
    let response = await fetch("https://lxwjdpybupq66vqac6e7jlgtiu0ckvkz.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` Website views: ${data}`;
}
updateCounter();