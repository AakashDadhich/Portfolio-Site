// Lambda function trigger for website view counter
const counter = document.querySelector(".counter-number");
async function updateCounter(){
    let response = await fetch("https://lxwjdpybupq66vqac6e7jlgtiu0ckvkz.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` Website views: ${data}`;
}
updateCounter();

// Controlling the behaviour of the HTML dialogue elements in the Projects tab
const crcDialog = document.getElementById('sampleDialog');
const openButton = document.getElementById('openDialog');
const closeButton = document.getElementById('closeDialog');

// Event listener to open the dialog
openButton.addEventListener('click', () => {
  crcDialog.showModal();
});

// Event listener to close the dialog
closeButton.addEventListener('click', () => {
  crcDialog.close();
});