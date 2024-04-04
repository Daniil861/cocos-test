export const listenEvent = (eventName: string, callback: Function) => {
	SocketHub.off(eventName);
	SocketHub.on(eventName, (event) => {
		callback(event);
	})
}