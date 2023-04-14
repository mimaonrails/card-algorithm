const { QMainWindow } = require("@nodegui/nodegui");

const win = new QMainWindow();
win.setWindowTitle("Card Algorithm")
win.show();

global.win = win;