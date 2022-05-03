funcHome = () => {
	document.querySelector('#mainHome').classList = 'mainShow';
	document.querySelector('#mainAbout').classList = 'mainHidden';
	document.querySelector('#mainCurrent').classList = 'mainHidden';
	document.querySelector('#mainHistory').classList = 'mainHidden';
	document.querySelector('#mainContact').classList = 'mainHidden';
	document.querySelector('#homeBTN').classList.add('active');
	document.querySelector('#aboutBTN').classList.remove('active');
	document.querySelector('#currentBTN').classList.remove('active');
	document.querySelector('#historyBTN').classList.remove('active');
	document.querySelector('#contactBTN').classList.remove('active');
};

funcAbout = () => {
	document.querySelector('#mainHome').classList = 'mainHidden';
	document.querySelector('#mainAbout').classList = 'mainShow';
	document.querySelector('#mainCurrent').classList = 'mainHidden';
	document.querySelector('#mainHistory').classList = 'mainHidden';
	document.querySelector('#mainContact').classList = 'mainHidden';
	document.querySelector('#homeBTN').classList.remove('active');
	document.querySelector('#aboutBTN').classList.add('active');
	document.querySelector('#currentBTN').classList.remove('active');
	document.querySelector('#historyBTN').classList.remove('active');
	document.querySelector('#contactBTN').classList.remove('active');
};

funcCurrent = () => {
	document.querySelector('#mainHome').classList = 'mainHidden';
	document.querySelector('#mainAbout').classList = 'mainHidden';
	document.querySelector('#mainCurrent').classList = 'mainShow';
	document.querySelector('#mainHistory').classList = 'mainHidden';
	document.querySelector('#mainContact').classList = 'mainHidden';
	document.querySelector('#homeBTN').classList.remove('active');
	document.querySelector('#aboutBTN').classList.remove('active');
	document.querySelector('#currentBTN').classList.add('active');
	document.querySelector('#historyBTN').classList.remove('active');
	document.querySelector('#contactBTN').classList.remove('active');
};

funcHistory = () => {
	document.querySelector('#mainHome').classList = 'mainHidden';
	document.querySelector('#mainAbout').classList = 'mainHidden';
	document.querySelector('#mainCurrent').classList = 'mainHidden';
	document.querySelector('#mainHistory').classList = 'mainShow';
	document.querySelector('#mainContact').classList = 'mainHidden';
	document.querySelector('#homeBTN').classList.remove('active');
	document.querySelector('#aboutBTN').classList.remove('active');
	document.querySelector('#currentBTN').classList.remove('active');
	document.querySelector('#historyBTN').classList.add('active');
	document.querySelector('#contactBTN').classList.remove('active');
};

funcContact = () => {
	document.querySelector('#mainHome').classList = 'mainHidden';
	document.querySelector('#mainAbout').classList = 'mainHidden';
	document.querySelector('#mainCurrent').classList = 'mainHidden';
	document.querySelector('#mainHistory').classList = 'mainHidden';
	document.querySelector('#mainContact').classList = 'mainShow';
	document.querySelector('#homeBTN').classList.remove('active');
	document.querySelector('#aboutBTN').classList.remove('active');
	document.querySelector('#currentBTN').classList.remove('active');
	document.querySelector('#historyBTN').classList.remove('active');
	document.querySelector('#contactBTN').classList.add('active');
};

funcEmail = () => {
	window.location = 'mailto:hickingowners@gmail.com';
};

funcFBGroup = () => {
	window.open('https://www.facebook.com/groups/440289294340259/?ref=share');
};

// life cycle
// funcHome();

// document.querySelector('#homeBTN').addEventListener('click', funcHome);
// document.querySelector('#aboutBTN').addEventListener('click', funcAbout);
// document.querySelector('#currentBTN').addEventListener('click', funcCurrent);
// document.querySelector('#historyBTN').addEventListener('click', funcHistory);
// document.querySelector('#contactBTN').addEventListener('click', funcContact);
// document.querySelector('.LinkFB').addEventListener('click', funcFBGroup);
// document.querySelector('.linkCurrent').addEventListener('click', funcCurrent);
// document.querySelector('.linkEmail').addEventListener('click', funcEmail);
