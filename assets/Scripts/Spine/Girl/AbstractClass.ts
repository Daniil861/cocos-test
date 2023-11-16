import { _decorator, Component, Node, sp } from 'cc';
const { ccclass, property } = _decorator;


@ccclass('SpineSkin') export abstract class AbstractClass extends Component {

	private _nameMy = '12345';
	// constructor(_name: string = '12344') {
	// 	super();
	// }

	show() {
		return this._nameMy;
	}
}