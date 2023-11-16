import { _decorator, Component, tween, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('AnimationTween')
export class AnimationTween extends Component {


	startAnimation() {
		console.log('s');
		tween(this.node)
			.by(1, {
				position: new Vec3(100, 0, 0)
			}, { easing: 'cubicInOut' })
			.by(1, {
				position: new Vec3(-100, 0, 0)
			}, { easing: 'cubicInOut' })
			// .to(1, {
			// 	position: new Vec3(100, 0, 0)
			// })
			.start()
	}
}


