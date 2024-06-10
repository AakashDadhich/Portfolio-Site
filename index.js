// Lambda function trigger for website view counter
const counter = document.querySelector(".counter-number");
async function updateCounter(){
    let response = await fetch("https://lxwjdpybupq66vqac6e7jlgtiu0ckvkz.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` Website views: ${data}`;
}
updateCounter();

// Controlling the behaviour of the HTML dialogue elements in the Projects tab
// Cloud Resume Challenge (CRC) modal
const crcDialog = document.getElementById('CRCDialog');
const openCRCButton = document.getElementById('openCRCDialog');
const closeCRCButton = document.getElementById('closeCRCDialog');
// Event listener to open the CRC dialog
openCRCButton.addEventListener('click', () => {
  crcDialog.showModal();
});
// Event listener to close the CRC dialog
closeCRCButton.addEventListener('click', () => {
  crcDialog.close();
});


// XYZ Modal
const xyzDialog = document.getElementById('XYZDialog');
const openXYZButton = document.getElementById('openXYZDialog');
const closeXYZButton = document.getElementById('closeXYZDialog');
// Event listener to open the XYZ dialog
openXYZButton.addEventListener('click', () => {
  xyzDialog.showModal();
});
// Event listener to close the XYZ dialog
closeXYZButton.addEventListener('click', () => {
  xyzDialog.close();
});