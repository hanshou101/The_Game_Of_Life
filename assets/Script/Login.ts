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
    login_bgm: cc.AudioClip = null

    @property(cc.Button)
    enter_click: cc.Button = null

    @property(cc.Button)
    exit_click: cc.Button = null

    onLoad() {
        this.enter_click.node.on(
            cc.Node.EventType.TOUCH_END,
            (event) => {
                cc.director.loadScene('choose_role')
            }
        )

        this.exit_click.node.on(
            cc.Node.EventType.TOUCH_END,
            (event) => {
                // alert('吔屎啦，梁非凡！')
                cc.director.loadScene('end_game')
            }
        )

        //预先加载下一场景页面
        //之后两个页面很大，所以提早到  onLoad()来。
        cc.director.preloadScene('choose_role')
        cc.director.preloadScene('end_game')

    }

    start() {

        // 延迟1.5秒，播放背景音乐。
        setTimeout(() => {
            cc.audioEngine.play(this.login_bgm, true, 1)
        }, 1500);

    }

    onDestroy() {
        cc.audioEngine.uncacheAll()
    }

}
