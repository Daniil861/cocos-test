import { _decorator, Component, Node, sp } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('SpineTest')
export class SpineTest extends Component {




	changeAnim() {
		this.node.children.forEach(child => {
			const anim = child.getComponent(sp.Skeleton);
			anim.setAnimation(0, 'vertically_Static', true);
		})
	}
}


