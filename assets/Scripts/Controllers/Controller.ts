import { _decorator, Component, EventTarget } from 'cc';
const { ccclass, property } = _decorator;

if (!window.SocketHub) window.SocketHub = new EventTarget();

@ccclass('Controller')
export class Controller extends Component {
	store: any;
	state: any;
	_clientData: any;
	_gameData: any;
	_socketData: any;

	onEnable() {
		this.inirControllers();
	}

	inirControllers() {
		// this.store = Store;
		// if (!window.Store) window.Store = this.store;
		this.state = this.store.state;
		// this._clientData = this.store.state.clientData;
		// this._gameData = this.store.state.gameData;
		// this._socketData = this.store.state.sockets;
	}

}


