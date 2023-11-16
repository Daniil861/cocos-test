import { _decorator, Component, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ErrorWindowComponent')
export class ErrorWindowComponent extends Component {
  @property(Label)
  readonly titleLabel: Label;

  @property(Label)
  readonly messageLabel: Label;

  protected onLoad() {
    this.node.active = false;
  }

  private show() {
    this.node.active = true;
  }

  // EDITOR
  private onClose() {
  }

  private onRefresh() {
  }

  // CLEAR
  protected onDestroy() {
  }
}