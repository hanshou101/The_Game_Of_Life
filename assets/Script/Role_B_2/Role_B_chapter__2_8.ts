
const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {


    @property(cc.Node)
    main_bg: cc.Node = null

    @property(cc.Node)
    back_bg: cc.Node = null

    onLoad() {

        this.main_bg.on(
            cc.Node.EventType.TOUCH_END,
            (event) => {
                cc.director.loadScene('role_B_chapter_2_9')
            }
        )

        this.back_bg.on(
            cc.Node.EventType.TOUCH_END,
            (event) => {
                cc.director.loadScene('role_B_chapter_2_7')
            }
        )

    }

    start() {

    }

}
