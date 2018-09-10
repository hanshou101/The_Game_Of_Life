// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.AudioClip)
    end_game_bgm: cc.AudioClip = null

    @property(cc.Label)
    lost_day_1: cc.Label = null

    @property(cc.Label)
    lost_day_2: cc.Label = null

    onLoad() {
        this.lost_day_1.node.on(
            cc.Node.EventType.TOUCH_END,
            (event) => {
                cc.director.loadScene('login')
            }
        )

        this.lost_day_2.node.on(
            cc.Node.EventType.TOUCH_END,
            (event) => {
                cc.director.loadScene('login')
            }
        )

    }

    start() {

        // 延迟1.5秒，播放背景音乐。
        setTimeout(() => {
            cc.audioEngine.play(this.end_game_bgm, true, 1)
        }, 1500);


    }

    onDestroy() {
        cc.audioEngine.uncacheAll()
    }

}
