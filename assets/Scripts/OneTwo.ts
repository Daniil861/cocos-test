import { _decorator, Component, Node, screen, UITransform, view } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('oneTwo')
export class oneTwo extends Component
{
	start()
	{
		screen.on('window-resize', () =>
		{
			console.log(`------------------> view.getResolutionPolicy(`, view.getResolutionPolicy());
			console.log(`------------------> size`, this.node.getComponent(UITransform).contentSize);
		})
	}

	update(deltaTime: number)
	{

	}
}


