import { _decorator, Component, Node, tween, Vec3, game, Scheduler } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BallCntr')
export class BallCntr extends Component {
	onLoad() {
		this.node.on(Node.EventType.TOUCH_START, this.touchBall, this);
		game.frameRate = 100;
		console.log(game.frameRate);
		this.schedule(() => {
			console.log('111111111111');
		}, 5)
	}

	touchBall() {
		const h = 300;
		tween(this.node)
			.by(0.5, { position: new Vec3(0, -h, 0) }, { easing: 'quadIn' })
			.by(0.2, { position: new Vec3(0, h / 6, 0) }, { easing: 'quadOut' })
			.by(0.2, { position: new Vec3(0, -h / 6, 0) }, { easing: 'quadIn' })
			.start()
	}
}


