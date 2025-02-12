// import { NTF_SHOW_PROMPT, NTF_WAITING_HIDE } from "../Core/AppEvent";
// import { dispatchEvent } from "../Event/EventWrapper";
// import { base64url } from "../LibraryDef";
// import { WebResult } from "../Net/Web/WebResult";
// import { APP_ID, CP_ID, ERROR_API_COMMON, ERROR_S_API_NOT_SUPPORT, EVT_APP_HIDE, EVT_APP_SHOW, HWSHARETYPE, MINI_VERSION, PAY_ALGORITHM, PAY_PUBLIC_KEY } from "./HwMiniDef";
// import { EVT_LAN_CREATE_ROOM_SUCCESS, EVT_LAN_JOIN_GAME, NTF_LAN_SHOW_RECONNECT_DIALOG, NTF_LAN_DISCONNECT, NTF_LAN_MASTER_INFO, NTF_LAN_PLAYER_INFO, NTF_LAN_SHOW_ERROR_TIP, EVT_AUTO_LOGIN, NTF_LAN_SHOW_GET_LOCATION_PERMISSION, NTF_LAN_SHOW_GET_BULETOOTH_PERMISSION, EVT_LAN_EXIT_LAN_WITH_TIP, EVT_LAN_EXIT_LAN, EVT_LAN_EXIT_LAN_CHECK } from "./HwMiniEvent";
// const QG = window["qg"];
var HwMiniUtil = /** @class */ (function () {
    // private static _instance: HwMiniUtil = null;
    // private enabled: boolean = false;
    // private sysInfo: any = undefined;
    // private deviceId: string = "";
    // private launchQuery: string = ""; // 启动快游戏时携带的参数
    // private launchReferrerInfo: object = null; // 来源信息
    // private eventOnShareFinish: string = "";
    // private gameNearbyManager: any = null;
    // private myOpenId: number = 0;
    // private hasGoToQuickGame: boolean = false;
    // private sdkVersion: number = -1;
    function HwMiniUtil() {
        //     if (QG) {
        //         this.enabled = true;
        //         // 系统事件
        //         QG.onError((res: any) => this.onError(res.message));
        //         QG.onAudioInterruptionBegin(() => this.onAudioInterruptionBegin());
        //         QG.onAudioInterruptionEnd(() => this.onAudioInterruptionEnd());
        //         // 生命周期
        //         QG.onShow((res: any) => this.onShow(res));
        //         QG.onHide(() => this.onHide());
        //         // 系统信息
        //         this.sysInfo = QG.getSystemInfoSync();
        //         console.log(`HwMiniUtil.constructor >>> sysInfo=${JSON.stringify(this.sysInfo)}`);
        //         // 获取启动参数
        //         let { query, referrerInfo } = QG.getLaunchOptionsSync();
        //         this.launchQuery = query;
        //         this.launchReferrerInfo = referrerInfo;
        //         console.log(`HwMiniUtil.constructor >>> query=${this.launchQuery}`);
        //         console.log(`HwMiniUtil.constructor >>> referrerInfo=${JSON.stringify(this.launchReferrerInfo)}`);
        //         let { platformVersionCode, version, system, platform, screenWidth, screenHeight, model } = this.sysInfo;
        //         this.sdkVersion = platformVersionCode || -1;
        //     }
    }
    HwMiniUtil.prototype.getInstance = function () {
        // if (!this._instance) {
        //     this._instance = new HwMiniUtil();
        // }
        // return this._instance;
        console.log("getInstances");
    };
    return HwMiniUtil;
}());
export { HwMiniUtil };
