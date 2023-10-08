// import store from './assets/scripts/store/store';

import { EventTarget } from "cc";

declare global {
	interface Window {
		Pusher: any,
		// Store: store,
		Socket: any,
		SocketHub: any
	}
}

declare global {
	let SocketHub: any; // в глобальной области объявляем переменную и далее ее создаем в контроллерах
	// const Store: any = window.Store;
}
// SocketHub = new EventTarget(); // мы глобально задекларировали переменную SocketHub и теперь можем ее вызвать где угодно.
// как правило этот вызов нужно сделать где-нибудь в контроллере игры.

export { };