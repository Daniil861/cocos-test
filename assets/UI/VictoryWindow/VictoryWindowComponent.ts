import { _decorator, Component, director, Label } from 'cc';
// import { GameEvent } from "../../GameManagers/GameEvent";
const { ccclass, property } = _decorator;

@ccclass('VictoryWindowComponent')
export class VictoryWindowComponent extends Component {
	@property(Label)
	readonly rewardLabel: Label;

	@property(Label)
	readonly getLabel: Label;

	protected onLoad() {
		this.node.active = false;
		//  GameEvent.on('LEVEL_COMPLETED', this.show, this);
	}

	private show() {
		this.node.active = true;
	}

	// EDITOR
	private onGetReward() {
		director.loadScene('MapScene');
	}

	protected onDestroy() {
		//  GameEvent.off('LEVEL_COMPLETED', this.show, this);
	}
}