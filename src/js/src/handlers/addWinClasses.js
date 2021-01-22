import SETTINGS from '../SETTINGS';
let { durration, winLine } = SETTINGS;

const addWinClasses = (className, classNameActive) => {
	// add type of win class
	winLine.classList.add(className);
	// add active class for animation
	setTimeout(() => {
		console.log('add active');
		winLine.classList.add(classNameActive);
	}, durration);
};

export default addWinClasses;
