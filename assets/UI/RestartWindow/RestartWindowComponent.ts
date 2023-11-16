import { _decorator, Component, director, Label } from 'cc';
// import { GameEvent } from "../../GameManagers/GameEvent";
const { ccclass, property } = _decorator;

@ccclass('RestartWindowComponent')
export class RestartWindowComponent extends Component {
	@property(Label)
	readonly InformationLabel: Label;

	@property(Label)
	readonly returnLabel: Label;

	protected onLoad() {
		this.node.active = false;

		//  GameEvent.on('GAME_ENDED', this.show, this);
	}

	private show() {
		this.node.active = true;
	}

	// EDITOR
	private onReturnMap() {
		director.loadScene('MapScene');
	}

	private onRestart() {
		director.loadScene(director.getScene().name);
	}

	protected onDestroy() {
		//  GameEvent.off('GAME_ENDED', this.show, this);
	}
}


