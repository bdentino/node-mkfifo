var binding = require(__dirname + '/build/Release/mkfifo.node');

exports.mkfifoSync = binding.mkfifoSync;
exports.mkfifo = binding.mkfifo;
