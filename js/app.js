funcHome = () => {
	document.querySelector('#mainHome').classList = 'mainShow';
	document.querySelector('#mainAbout').classList = 'mainHidden';
	document.querySelector('#mainCurrent').classList = 'mainHidden';
	document.querySelector('#mainHistory').classList = 'mainHidden';
	document.querySelector('#mainContact').classList = 'mainHidden';
};

funcAbout = () => {
	document.querySelector('#mainHome').classList = 'mainHidden';
	document.querySelector('#mainAbout').classList = 'mainShow';
	document.querySelector('#mainCurrent').classList = 'mainHidden';
	document.querySelector('#mainHistory').classList = 'mainHidden';
	document.querySelector('#mainContact').classList = 'mainHidden';
};

funcCurrent = () => {
	document.querySelector('#mainHome').classList = 'mainHidden';
	document.querySelector('#mainAbout').classList = 'mainHidden';
	document.querySelector('#mainCurrent').classList = 'mainShow';
	document.querySelector('#mainHistory').classList = 'mainHidden';
	document.querySelector('#mainContact').classList = 'mainHidden';
};

funcHistory = () => {
	document.querySelector('#mainHome').classList = 'mainHidden';
	document.querySelector('#mainAbout').classList = 'mainHidden';
	document.querySelector('#mainCurrent').classList = 'mainHidden';
	document.querySelector('#mainHistory').classList = 'mainShow';
	document.querySelector('#mainContact').classList = 'mainHidden';
};

funcContact = () => {
	document.querySelector('#mainHome').classList = 'mainHidden';
	document.querySelector('#mainAbout').classList = 'mainHidden';
	document.querySelector('#mainCurrent').classList = 'mainHidden';
	document.querySelector('#mainHistory').classList = 'mainHidden';
	document.querySelector('#mainContact').classList = 'mainShow';
};

funcEmail = () => {
	window.location = 'mailto:hickingowners@gmail.com';
};

funcFBGroup = () => {
	window.open('https://www.facebook.com/groups/440289294340259/?ref=share');
};

// life cycle
funcHome();

document.querySelector('#homeBTN').addEventListener('click', funcHome);
document.querySelector('#aboutBTN').addEventListener('click', funcAbout);
document.querySelector('#currentBTN').addEventListener('click', funcCurrent);
document.querySelector('#historyBTN').addEventListener('click', funcHistory);
document.querySelector('#contactBTN').addEventListener('click', funcContact);
document.querySelector('#statement0').addEventListener('click', funcFBGroup);
document.querySelector('#statement1').addEventListener('click', funcCurrent);
document.querySelector('#statement2').addEventListener('click', funcEmail);
