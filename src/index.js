/**
 * @license MIT
 * @name getYoutubeInstance
 * @version 1.0.0
 * @author: Yoriiis aka Joris DANIEL <joris.daniel@gmail.com>
 * @description: Get Youtube instance of iframe player (selector or id)
 * {@link https://github.com/yoriiis/get-youtube-instance}
 * @copyright 2020 Joris DANIEL
 **/

module.exports = option => {
	let element = null;

	// Detect the type of the option (string or object)
	if (typeof option === 'string') {
		element = document.querySelector(`#${option}`);
	} else if (typeof option === 'object') {
		element = option;
	}

	if (element === null) {
		throw new Error('The `option` parameter must be an HTML element or a HTML element id');
	}

	const elementId = element.getAttribute('id');
	let youtubeInstance = null;

	if (
		typeof window.YT !== 'undefined' &&
		typeof window.YT.get === 'function' &&
		elementId !== null
	) {
		youtubeInstance = window.YT.get(elementId);
	}

	return youtubeInstance;
};
