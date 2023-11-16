import { _decorator, Component, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('InfoWindowComponent')
export class InfoWindowComponent extends Component {
  @property(Label)
  readonly informationLabel: Label;

  @property(Label)
  readonly aboutLabel: Label;
}