export default class ArrayBufferConverter {
	load(buffer) {
		this.buffer = buffer;
	}

	toString() {
		const bufferView = new Uint16Array(this.buffer);
		let result = '';
		for (let i = 0; i < bufferView.length; i++) {
			result += String.fromCharCode(bufferView[i]);
		}
		return result;
	}
}