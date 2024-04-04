import { CCInteger, Color, Component, Graphics, UITransform, _decorator } from "cc";

const { ccclass, property } = _decorator;

@ccclass('Viewport')
export class Viewport extends Component {
	@property(Graphics) nodeGrafics: Graphics = null;

	update() {
		const size = this.node.getComponent(UITransform).contentSize;
		this.nodeGrafics.clear();
		this.nodeGrafics.lineWidth = 6;
		this.nodeGrafics.strokeColor = Color.RED;
		this.nodeGrafics.rect(-size.width * 0.5, -size.height * 0.5, size.width, size.height);
		this.nodeGrafics.stroke();
	}
}