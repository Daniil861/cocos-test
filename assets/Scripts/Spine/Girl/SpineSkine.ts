import { _decorator, Component, Node, sp } from 'cc';
import { AbstractClass } from './AbstractClass';
const { ccclass, property } = _decorator;

@ccclass('SpineSkin')
export class SpineSkin extends AbstractClass {

	@property({ type: sp.Skeleton }) spine: sp.Skeleton | null = null;

	skinId: number = 0;

	onLoad() {
		console.log(this.show());

	}

	start() {
		// Your initialization goes here.
		sp.Skeleton
	}

	change() {
		const skins = ['girl', 'boy', 'girl-blue-cape', 'girl-spring-dress'].map(x => `full-skins/${x}`);
		this.skinId = (this.skinId + 1) % skins.length;
		this.spine.setSkin(skins[this.skinId]);
	}

}