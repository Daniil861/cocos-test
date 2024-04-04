import { _decorator, Component, Node, Input, Button, native } from 'cc';
const { ccclass, property } = _decorator;
const { zipUtils } = native;
import WindowsController from './WindowsController';

@ccclass('testButton')
export class testButton extends Component {
	@property(Button) btn: Button | null = null;

	controller: WindowsController | null = null;
	onLoad() {
		this.btn.node.on(Input.EventType.TOUCH_END, this.onClick, this);
		this.controller = new WindowsController();
		this.loadRes();
	}

	onClick() {
		this.controller.getWindow('TestWindow', this.node);
	}

	loadRes() {
		console.log('Start Loading zip');
		let zipPath = "resources/zip/123.zip";
		let targetPath = "resources/unZip";
		if (native.fileUtils.isFileExist(zipPath)) {
			console.log('file exist');
			native.fileUtils.createDirectory(targetPath);
			zipUtils.inflateCCZFile(zipPath);
			// native.fileUtils.unzip(zipPath, targetPath);
		} else {
			console.error("Архив не найден!");
		}
	}
}


