import { _decorator, Component, Node, input, Input, tween, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

import { listenEvent } from './services/utils';

@ccclass('Button')
export class Button extends Component {

	private a: number = 73;
	private secret: string = 'it is friday today';

	onLoad() {
		this.initListeners();
		console.log('New comment 2');
		console.log('Add pyramid');
	}

	initListeners() {
		// Слушаем наведение мыши
		this.node.on(Node.EventType.MOUSE_ENTER, () => {
			console.log('Навели на кнопку');
			this.hoverEffectIn();

			// Так мы объявляем кастомное событие
			// SocketHub.emit('MOUSE_ENTER-CUSTOM', 'my info - today is friday');
			SocketHub.emit('MOUSE_ENTER-CUSTOM', { a: this.a, secret: this.secret });
		})

		// так слушаем кастомное событие
		listenEvent('MOUSE_ENTER-CUSTOM', ({ a, secret }) => {
			console.log(`Выводим этот текст - ${a} ${secret}`);
		})

		// Слушаем и клик на всех устройствах
		this.node.on(Node.EventType.TOUCH_END, () => {
			console.log('Нажали и отпустили кнопку');
			this.clickHandlerAnimation();
		})

		// Слушаем потерю фокуса
		this.node.on(Node.EventType.MOUSE_LEAVE, () => {
			console.log('Отвели мышку');
			this.hoverEffectOut();
		})
		this.node.on(Node.EventType.TOUCH_CANCEL, () => {
			console.log('Кликнули на экран и увели палец за пределы экрана. Так не сработает TOUCH_END - но это событие сработает');
		})
	}

	hoverEffectIn() {
		tween(this.node)
			.to(
				0.2,
				{ scale: new Vec3(1.1, 1.1, 1) },
				{ easing: "fade" }
			)
			.start()
	}

	hoverEffectOut() {
		tween(this.node)
			.to(
				0.2,
				{ scale: new Vec3(1, 1, 1) },
				{
					easing: "fade",
				},

			)

			.start()
	}

	clickHandlerAnimation() {
		tween(this.node)
			.to(
				0.2,
				{ scale: new Vec3(0.9, 0.9, 1) },
				{ easing: "fade" }
			)
			.call(() => this.hoverEffectIn())
			.start()
	}

	// Когда мы уходим с сцены, где объевлен слушатель - мы должны удалить слушатель, иначе при повторном входе на сцену - слушатель
	// будет объявлен повторно, работать будет некорректно. 
	onDestroy() {
		this.node.off(Node.EventType.MOUSE_ENTER);
		this.node.off(Node.EventType.TOUCH_END);
		this.node.off(Node.EventType.MOUSE_LEAVE);
		this.node.off(Node.EventType.TOUCH_CANCEL);
	}
}


