import { _decorator, Component, Node, Button, Input } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('TestWindow')
export class TestWindow extends Component {
	@property(Button) public buttonDestroy: Button | null = null;

	onLoad() {
		this.buttonDestroy.node.on(Input.EventType.TOUCH_END, this.onDestroy, this);
	}

	onDestroy() {
		console.log('onDestroy is working');
		this.node.removeFromParent();
		this.node.destroy();
	}
}


