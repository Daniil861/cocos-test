import { _decorator, Component, Node, Input } from 'cc';
const { ccclass, property } = _decorator;
import WindowsController from './WindowsController';

@ccclass('testButton')
export class testButton extends Component {

	controller: WindowsController | null = null;
	onLoad() {
		this.node.on(Input.EventType.TOUCH_END, this.onClick, this);
		this.controller = new WindowsController();
	}

	onClick() {
		this.controller.getWindow('TestWindow',)
	}
}


