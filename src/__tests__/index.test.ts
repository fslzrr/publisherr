import publisherr from '../index';

describe('index module', () => {
	it('default export is a function', () => {
		expect(typeof publisherr).toBe('function');
	});
});
