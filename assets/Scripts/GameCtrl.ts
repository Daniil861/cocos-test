import { _decorator, Component, Node, view, screen, find, UITransform, Size, ResolutionPolicy, input, Input, native, assetManager } from 'cc';
const { ccclass, property } = _decorator;
// const { zipUtils, fileUtils } = native;
import { NATIVE } from 'cc/env';

@ccclass('GameCtrl')
export class GameCtrl extends Component {
	onLoad() {

		this.loadRes();
		// const windowSize = screen.windowSize;
		// console.log(windowSize);
		// console.log(innerWidth);
		// console.log(innerHeight);

		// const designSize = view.getDesignResolutionSize();
		// const designWidth = designSize.width;
		// const designHeight = designSize.height;

		// console.log(designWidth);
		// console.log(designHeight);
		// console.log(view);

		// view.setDesignResolutionSize(innerWidth, innerHeight, 1);

		// const designSize2 = view.getDesignResolutionSize();
		// const designWidth2 = designSize2.width;
		// const designHeight2 = designSize2.height;

		// console.log(designWidth2);
		// console.log(designHeight2);



		// const canvasSize = find('Canvas').getComponent(UITransform);
		// console.log(canvasSize.contentSize);
		// canvasSize.setContentSize(new Size(innerWidth, innerHeight));
		// console.log(canvasSize.contentSize);

		window.addEventListener('resize', this.drawNewGameSize);
		this.drawNewGameSize();
	}

	loadRes() {
		console.log('Start Loading zip');
		// let zipPath = "resources/zip/123.zip";
		let zipPath = "db://assets/resources/zip/123.zip";
		let targetPath = "test/unZip";

		assetManager.loadRemote(zipPath, (err, zipAsset) => {
			if (err) {
				console.error(err);
				return;
			}
			// Архив успешно загружен
			// Теперь вы можете использовать zipAsset в игре
			console.log('zipAsset', zipAsset);
		});


		// console.log(zipPath);
		// // fileUtils.createDirectory(targetPath);
		// console.log('zipUtils ', zipUtils);
		// console.log('native ', native);
		// zipUtils.inflateCCZFile(zipPath);
		// console.log(fileUtils.isFileExist(zipPath));
		// if (fileUtils.isFileExist(zipPath)) {
		// 	console.log('file exist');
		// 	fileUtils.createDirectory(targetPath);
		// 	zipUtils.inflateCCZFile(zipPath);
		// 	// native.fileUtils.unzip(zipPath, targetPath);
		// } else {
		// 	console.error("Архив не найден!");
		// }
	}

	drawNewGameSize() {

		view.setFrameSize(innerWidth, innerHeight);
		view.setDesignResolutionSize(innerWidth, innerHeight, ResolutionPolicy.SHOW_ALL);
		const canvasSize = find('Canvas').getComponent(UITransform);

		console.log(canvasSize.contentSize);
		canvasSize.setContentSize(new Size(innerWidth / 3, innerHeight));
		console.log(canvasSize.contentSize);
	}
}


