import ArrayBufferConverter from '../ArrayBufferConverter';

function getBuffer() {
	const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
	return (input => {
		const buffer = new ArrayBuffer(data.length * 2);
		const bufferView = new Uint16Array(buffer);
		for (let i = 0; i < input.length; i++) {
			bufferView[i] = input.charCodeAt(i);
		}
		return buffer;
	})(data);
}

test('ArrayBufferConverter should convert ArrayBuffer to string', () => {
	const buffer = getBuffer();
	const converter = new ArrayBufferConverter();
	converter.load(buffer);
	expect(converter.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});