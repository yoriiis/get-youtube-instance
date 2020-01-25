'use strict';

import getYoutubeInstance from '../index';

beforeEach(() => {
	document.body.innerHTML = `
		<iframe id="player-yt" src="https://www.youtube.com/embed/aqz-KE-bpKQ"></iframe>
	`;

	Object.defineProperty(window, 'YT', {
		writable: true,
		value: {
			get: () => true
		}
	});
});

describe('getYoutubeInstance function', () => {
	it('should init the getYoutubeInstance function with HTML element', () => {
		const element = document.querySelector('#player-yt');
		const result = getYoutubeInstance(element);
		expect(result).toBe(true);
	});

	it('should init the getYoutubeInstance function with HTML id', () => {
		const result = getYoutubeInstance('player-yt');
		expect(result).toBe(true);
	});

	it('should init the getYoutubeInstance function with Youtube unavailable', () => {
		window.YT = undefined;
		const result = getYoutubeInstance('player-yt');
		expect(result).toBe(null);
	});

	it('should init the getYoutubeInstance function with boolean as parameter', () => {
		expect(() => {
			getYoutubeInstance(false);
		}).toThrow(
			new Error('The `option` parameter must be an HTML element or a HTML element id')
		);
	});

	it('should init the getYoutubeInstance function with unknown HTML element as parameter', () => {
		expect(() => {
			getYoutubeInstance('player');
		}).toThrow(
			new Error('The `option` parameter must be an HTML element or a HTML element id')
		);
	});
});
