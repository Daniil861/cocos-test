import { resources, Prefab, instantiate, Node, director } from "cc";

export enum IWindowNames {
	VictoryWindow = 'VictoryWindow',
	RestartWindow = 'RestartWindow',
	TestWindow = 'TestWindow'
}

interface IResorcesNodes {
	[key: string]: Node
}

export default class WindowsController {
	constructor() {
		this.getResources();
	}

	private resourcesNames = ['VictoryWindow', 'RestartWindow', 'TestWindow'];

	private resources = {
		VictoryWindow: null,
		RestartWindow: null,
		TestWindow: null,
	}

	private resorcesNodes: IResorcesNodes = {
		VictoryWindow: null,
		RestartWindow: null,
		TestWindow: null,
	}

	// Получается, в этом классе должен быть метод, который вызывается из любой сцены.
	// В метод передается строка - название окна.
	// Метод должен монтировать окно в сцену. А по клику на кнопку - удалять это окно.

	public async getResources() {
		console.log('Начинаем загрузку префабов');
		for (let i = 0; i < this.resourcesNames.length; i++) {
			this.resources[this.resourcesNames[i]] = await this.loadRecources(this.resourcesNames[i]);
			this.resorcesNodes[this.resourcesNames[i]] = instantiate(this.resources[this.resourcesNames[i]]);
		}
	}

	private loadRecources(name: string) {
		return new Promise((resolve, reject) => {
			resources.loadDir('ui/' + name + "/", Prefab, (err, asset) => {
				if (err) reject(err);
				else resolve(asset[0]);
			});
		});
	}

	getWindow(name: keyof typeof IWindowNames, node: Node) {
		console.log(name);
		console.log(this.resorcesNodes[name]);
		// this.resorcesNodes[name].active = true;
		console.log(node);
		console.log(node.children);
		console.log(node.children.length);
		// node.insertChild(this.resorcesNodes[name], node.children.length);
		node.addChild(this.resorcesNodes[name]);
		this.resorcesNodes[name].active = true;
		console.log(node);
		console.log(node.children);
		console.log(node.children.length);
	}

	closeWindow(window: Node) {
		if (window && window.isValid) {
			window.removeFromParent();
			window.destroy();
		}
	}

}