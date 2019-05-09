module.exports = {
	blocked: false,
	block: function() {
		process.stdin.pause();
		process.stderr.pause();
		this.blocked = true;
	},
	relieve: function() {
		process.stderr.resume();
		process.stdin.resume();
		this.blocked = false;
	}
};
