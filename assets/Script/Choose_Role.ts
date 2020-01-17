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
    choose_role_bgm: string = null;     // api上，略有差别

    @property(cc.Node)
    role_A_click: cc.Node = null;

    @property(cc.Node)
    role_B_click: cc.Node = null;

    @property(cc.Node)
    back_bg: cc.Node = null;

    onLoad() {
        this.role_A_click.on(
            cc.Node.EventType.TOUCH_END,
            (event) => {
                cc.director.loadScene('role_A')
            }
        );

        this.role_B_click.on(
            cc.Node.EventType.TOUCH_END,
            (event) => {
                cc.director.loadScene('role_B')
            }
        );

        this.back_bg.on(
            cc.Node.EventType.TOUCH_END,
            (event) => {
                cc.director.loadScene('login')
            }
        )

    }
    start() {

        // 延迟1.5秒，播放背景音乐。
        setTimeout(() => {
            cc.audioEngine.play(this.choose_role_bgm, true, 1)
        }, 1500);


        //预先加载下一场景页面
        cc.director.preloadScene('role_A');
        cc.director.preloadScene('role_B')

    }

    onDestroy() {
        cc.audioEngine.uncacheAll()
    }

}
