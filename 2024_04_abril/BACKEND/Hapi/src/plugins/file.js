const upload = require("../utils/file");

const file = {
    name: "file",
    register: async function (server, options) {
        server.decorate('toolkit', 'file', () => upload.single("img"));
    }
}

module.exports = file;