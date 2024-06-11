// Lambda function trigger for website view counter
const counter = document.querySelector(".counter-number");
async function updateCounter(){
    let response = await fetch("https://lxwjdpybupq66vqac6e7jlgtiu0ckvkz.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` Website views: ${data}`;
}
updateCounter();

// Controlling the behaviour of the HTML dialogue elements in the Projects tab
// Cloud Resume Challenge modal (CRCDialog)
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

// Python & Bash Scripting modal (PBSDialog)
const pbsDialog = document.getElementById('PBSDialog');
const openPBSButton = document.getElementById('openPBSDialog');
const closePBSButton = document.getElementById('closePBSDialog');
// Event listener to open the PBS dialog
openPBSButton.addEventListener('click', () => {
  pbsDialog.showModal();
});
// Event listener to close the PBS dialog
closePBSButton.addEventListener('click', () => {
  pbsDialog.close();
});


// Discord Dungeon Crawler Modal (DDCDialog)
const ddcDialog = document.getElementById('DDCDialog');
const openDDCButton = document.getElementById('openDDCDialog');
const closeDDCButton = document.getElementById('closeDDCDialog');
// Event listener to open the DDC dialog
openDDCButton.addEventListener('click', () => {
  ddcDialog.showModal();
});
// Event listener to close the DDC dialog
closeDDCButton.addEventListener('click', () => {
  ddcDialog.close();
});