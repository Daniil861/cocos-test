import { _decorator, Component, Node, view, screen, find, UITransform, Size, ResolutionPolicy, input, Input } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameCtrl')
export class GameCtrl extends Component {
	onLoad() {
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

	drawNewGameSize() {

		view.setFrameSize(innerWidth, innerHeight);
		view.setDesignResolutionSize(innerWidth, innerHeight, ResolutionPolicy.SHOW_ALL);
		const canvasSize = find('Canvas').getComponent(UITransform);

		console.log(canvasSize.contentSize);
		canvasSize.setContentSize(new Size(innerWidth / 3, innerHeight));
		console.log(canvasSize.contentSize);
	}
}


