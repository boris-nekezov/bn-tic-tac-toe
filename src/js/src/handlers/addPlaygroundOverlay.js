import SETTINGS from '../SETTINGS';
let { playgroundOverlay, overlayActiveClass } = SETTINGS;

// this overlay stops clicking anymore buttons while winline is animating
const addPlaygroundOverlay = () => {
	playgroundOverlay.classList.add(overlayActiveClass);
	console.log('[ADD PLAYGROUND OVERLAY]');
};

export default addPlaygroundOverlay;
