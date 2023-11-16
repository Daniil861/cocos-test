import { _decorator, Component, Node, Input, Button } from 'cc';
const { ccclass, property } = _decorator;
import WindowsController from './WindowsController';

@ccclass('testButton')
export class testButton extends Component {
	@property(Button) btn: Button | null = null;

	controller: WindowsController | null = null;
	onLoad() {
		this.btn.node.on(Input.EventType.TOUCH_END, this.onClick, this);
		this.controller = new WindowsController();
	}

	onClick() {
		this.controller.getWindow('TestWindow', this.node);
	}
}


