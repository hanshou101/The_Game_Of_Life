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
    role_a_bgm: cc.AudioClip = null

    @property(cc.Node)
    our_hero_a: cc.Node = null

    @property(cc.Node)
    back_bg: cc.Node = null

    onLoad() {

        this.our_hero_a.on(
            cc.Node.EventType.TOUCH_END,
            (event) => {
                cc.director.loadScene('role_A_chapter_1')
            }
        )

        this.back_bg.on(
            cc.Node.EventType.TOUCH_END,
            (event) => {
                cc.director.loadScene('choose_role')
            }
        )
    }

    start() {

        // 延迟1.5秒，播放背景音乐。
        setTimeout(() => {
            cc.audioEngine.play(this.role_a_bgm, true, 1)
        }, 1500);

        //预先加载下一场景页面
        cc.director.preloadScene('role_A_chapter_1')



    }

    onDestroy() {
        cc.audioEngine.uncacheAll()
    }

}
