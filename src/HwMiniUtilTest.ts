
// import { NTF_SHOW_PROMPT, NTF_WAITING_HIDE } from "../Core/AppEvent";
// import { dispatchEvent } from "../Event/EventWrapper";
// import { base64url } from "../LibraryDef";
// import { WebResult } from "../Net/Web/WebResult";
// import { APP_ID, CP_ID, ERROR_API_COMMON, ERROR_S_API_NOT_SUPPORT, EVT_APP_HIDE, EVT_APP_SHOW, HWSHARETYPE, MINI_VERSION, PAY_ALGORITHM, PAY_PUBLIC_KEY } from "./HwMiniDef";
// import { EVT_LAN_CREATE_ROOM_SUCCESS, EVT_LAN_JOIN_GAME, NTF_LAN_SHOW_RECONNECT_DIALOG, NTF_LAN_DISCONNECT, NTF_LAN_MASTER_INFO, NTF_LAN_PLAYER_INFO, NTF_LAN_SHOW_ERROR_TIP, EVT_AUTO_LOGIN, NTF_LAN_SHOW_GET_LOCATION_PERMISSION, NTF_LAN_SHOW_GET_BULETOOTH_PERMISSION, EVT_LAN_EXIT_LAN_WITH_TIP, EVT_LAN_EXIT_LAN, EVT_LAN_EXIT_LAN_CHECK } from "./HwMiniEvent";

// const QG = window["qg"];

export class HwMiniUtil {
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

    constructor() {
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

    public getInstance() {
        // if (!this._instance) {
        //     this._instance = new HwMiniUtil();
        // }
        // return this._instance;
        console.log("getInstances");
    }

    // public init(): void {
    //     // 可添加数据统计相关初始化逻辑
    // }

    // public tip(message: string): void {
    //     if (message && message.length > 0) {
    //         dispatchEvent(NTF_SHOW_PROMPT, message);
    //     }
    // }
    // //--------------------------------------------------//
    // //                                                  //
    // //                     系统事件                      //
    // //                                                  //
    // //--------------------------------------------------//
    // public onError(message: string): void {
    //     console.log(`HwMiniUtil.onError >>> message=${message}`);
    //     if (!cc.assetManager.getBundle("Sub")) {
    //         return;
    //     }
    //     // 可进行错误信息打点上报
    // }
    // public onAudioInterruptionBegin(): void {
    //     console.log(`HwMiniUtil.onAudioInterruptionBegin`);
    //     if (cc.assetManager.getBundle("Sub")) {
    //         const MusicUtil = require("MusicUtil").default;
    //         MusicUtil.pauseBackgroundMusic();
    //     }
    // }

    // public onAudioInterruptionEnd(): void {
    //     console.log(`HwMiniUtil.onAudioInterruptionEnd`);
    //     if (cc.assetManager.getBundle("Sub")) {
    //         const MusicUtil = require("MusicUtil").default;
    //         MusicUtil.resumeBackgroundMusic();
    //     }
    // }
    // //--------------------------------------------------//
    // //                                                  //
    // //                     生命周期                      //
    // //                                                  //
    // //--------------------------------------------------//
    // public onShow(res: any) {
    //     console.log(`HwMiniUtil.onShow >>> res=${JSON.stringify(res)}`);
    //     // this.initStatistics();
    //     dispatchEvent(EVT_APP_SHOW);
    //     if (this.hasGoToQuickGame) {
    //         this.hasGoToQuickGame = false;
    //         setTimeout(() => {
    //             dispatchEvent(EVT_AUTO_LOGIN);
    //         }, 0.2 * 1000);
    //     }
    // }

    // public onHide() {
    //     console.log(`HwMiniUtil.onHide`);
    //     dispatchEvent(EVT_APP_HIDE);
    // }

    // public exit(): void {
    //     QG.exitApplication({
    //         success: () => {
    //             console.log("HwMiniUtil.exit success");
    //         },
    //         fail: () => {
    //             console.log("HwMiniUtil.exit fail");
    //         },
    //         complete: () => {
    //             console.log("HwMiniUtil.exit complete");
    //         }
    //     });
    // }
    // //--------------------------------------------------//
    // //                                                  //
    // //                     登　　录                      //
    // //                                                  //
    // //--------------------------------------------------//
    // public doLogin(succCall: (res: any) => any, failCall: (code: number, reason: string) => any,): void {
    //     let ret: WebResult = new WebResult();
    //     ret.reason = ERROR_S_API_NOT_SUPPORT;
    //     ret.code = ERROR_API_COMMON;
    //     if (!this.enabled) {
    //         failCall(ret.code, ret.reason);
    //         return;
    //     }

    //     QG.gameLoginWithReal({
    //         forceLogin: 1, // 强制登录，未登录时会弹出登录对话框
    //         appid: APP_ID,
    //         success: (res: any) => {
    //             console.log(`HWMiniAPI.gameLoginWithReal >>> success, ${JSON.stringify(res)}`);
    //             succCall(res);
    //         },
    //         fail: (data: any, code: any) => {
    //             console.log(`HWMiniAPI:gameLoginWithReal >>> fail, data=${data}, code=${code}`);
    //             ret.code = code;
    //             ret.reason = "登录失败，请稍后再试";
    //             failCall(ret.code, ret.reason);
    //         },
    //     });
    // }
    // //--------------------------------------------------//
    // //                                                  //
    // //                     支　　付                      //
    // //                                                  //
    // //--------------------------------------------------//
    // public doSdkPay(
    //     productId: string,
    //     priceType: number,
    //     developerPayload: string,
    //     callback: (msg: string, code: number) => any
    // ): void {
    //     QG.createPurchaseIntent({
    //         purchaseIntentReq: {
    //             "applicationID": APP_ID,
    //             "productId": productId,
    //             "priceType": priceType,
    //             "developerPayload": developerPayload,
    //             "publicKey": PAY_PUBLIC_KEY
    //         },
    //         success: (data: any) => {
    //             console.log(`HwMiniUtil.createPurchaseIntent >>> success, data=${JSON.stringify(data)}`);
    //             let { returnCode, errMsg, inAppDataSignature, inAppPurchaseData } = data;
    //             if (returnCode === 0) {
    //                 this.onPayComplete(inAppPurchaseData, inAppDataSignature);
    //             } else {
    //                 // this.tip(errMsg);
    //                 callback(errMsg, returnCode);
    //             }
    //         },
    //         fail: (data: string, code: number) => {
    //             this.tip("支付失败，请稍后再试");
    //             callback(data, code);
    //         }
    //     });
    // }

    // public doSdkDeliver(purchaseToken: string): void {
    //     QG.consumeOwnedPurchase({
    //         consumeOwnedPurchaseReq: {
    //             "applicationID": APP_ID,
    //             "purchaseToken": purchaseToken,
    //             "publicKey": PAY_PUBLIC_KEY
    //         },
    //         success: (data: any) => {
    //             console.log(`HwMiniUtil.consumeOwnedPurchase >>> success, data=${JSON.stringify(data)}`);
    //         },
    //         fail: (data: string, code: number) => {
    //             console.log(`HwMiniUtil.consumeOwnedPurchase >>> fail, data=${data}, code=${code}`);
    //         }
    //     });
    // }

    // public doSdkRestore(callback:(purchaseData:string) => any): void {
    //     QG.isEnvReady({
    //         isEnvReadyReq: {
    //             "applicationID": APP_ID
    //         },
    //         success: () => {
    //             QG.obtainOwnedPurchases({
    //                 ownedPurchasesReq: {
    //                     "priceType": 0,
    //                     "applicationID": APP_ID,
    //                     "publicKey": PAY_PUBLIC_KEY
    //                 },
    //                 success: (data: any) => {
    //                     console.log(`HWMiniAPI.obtainOwnedPurchases >>> success, data=${JSON.stringify(data)}`);
    //                     let { returnCode, errMsg, itemList, inAppPurchaseDataList, inAppSignature, continuationToken } = data;
    //                     if (returnCode === 0 && inAppPurchaseDataList && inAppSignature) {
    //                         for (let i = 0; i < inAppPurchaseDataList.length; i++) {
    //                             let purchaseData = inAppPurchaseDataList[i];
    //                             let purchaseSign = inAppSignature[i];
    //                             let purchaseState = JSON.parse(purchaseData).purchaseState;
    //                             callback(purchaseData);
    //                             console.log(`HWMiniAPI.obtainOwnedPurchases >>> purchaseData=${purchaseData}`);
    //                             console.log(`HWMiniAPI.obtainOwnedPurchases >>> purchaseSign=${purchaseSign}`);
    //                             console.log(`HWMiniAPI.obtainOwnedPurchases >>> purchaseState=${purchaseState}`);
    //                             if (purchaseState === 0) {
    //                                 this.onPayComplete(purchaseData, purchaseSign);
    //                             }
    //                         }
    //                     } else {
    //                         // this.tip(errMsg);
    //                     }
    //                 },
    //                 fail: (data: string, code: number) => {
    //                     // this.tip(data);
    //                 }
    //             })
    //         },
    //     });
    // }

    // public onPayComplete(data: string, sign: string): void {
    //     let Payment = require("../../Sub/Payment/Payment").default;
    //     data = base64url.encode(data);
    //     Payment.getInstance().verify(data, sign, PAY_ALGORITHM);
    // }
    // //--------------------------------------------------//
    // //                                                  //
    // //                     分　　享                      //
    // //                                                  //
    // //--------------------------------------------------//
    // public shareText(title: string, text: string, event: string = ""): void {
    //     this.eventOnShareFinish = event;
    //     QG.serviceShare({
    //         shareType: HWSHARETYPE.TEXT,
    //         title: title,
    //         summary: text,
    //         platforms: ["WEIXIN"],
    //         fail: (data: string, code: number) => {
    //             console.log(`HwMiniUtil.shareText >>> fail: code=${code}, data=${data}`);
    //             this.eventOnShareFinish = "";
    //         },
    //         cancel: () => {
    //             console.log(`HwMiniUtil.shareText >>> cancel`);
    //             this.eventOnShareFinish = "";
    //         },
    //         success: () => {
    //             console.log(`HwMiniUtil.shareText >>> success`);
    //             if (this.eventOnShareFinish) {
    //                 dispatchEvent(this.eventOnShareFinish)
    //             }
    //             this.eventOnShareFinish = "";
    //         }
    //     })
    // }

    // public sharePage(text: string, title: string = "", url: string = "", event: string = ""): void {
    //     this.eventOnShareFinish = event;
    //     QG.serviceShare({
    //         shareType: HWSHARETYPE.PAGE,
    //         title: title,
    //         summary: text,
    //         targetUrl: url,
    //         platforms: ["WEIXIN"],
    //         imagePath: "/image/icon.png",
    //         fail: (data: string, code: number) => {
    //             console.log(`HwMiniUtil.sharePage >>> fail: code=${code}, data=${data}`);
    //             this.eventOnShareFinish = "";
    //         },
    //         cancel: () => {
    //             console.log(`HwMiniUtil.sharePage >>> cancel`);
    //             this.eventOnShareFinish = "";
    //         },
    //         success: () => {
    //             console.log(`HwMiniUtil.sharePage >>> success`);
    //             if (this.eventOnShareFinish) {
    //                 dispatchEvent(this.eventOnShareFinish)
    //             }
    //             this.eventOnShareFinish = "";
    //         }
    //     });
    // }
    // //--------------------------------------------------//
    // //                                                  //
    // //                     其他接口                      //
    // //                                                  //
    // //--------------------------------------------------//
    // public openUrl(uri: string): void {
    //     console.log(`HwMiniUtil.openUrl >>> uri:` + uri);
    //     if (this.enabled) {
    //         QG.openDeeplink({
    //             uri
    //         });
    //     }
    // }

    // public getBatteryInfo(callback: (level: number) => any): void {
    //     QG.getBatteryInfo({
    //         success(res: any) {
    //             let { level } = res;
    //             console.log(`HwMiniUtil.getBatteryInfo >>> level:` + level);
    //             callback(level);
    //         },
    //     });
    // }

    // public copyText(text: string, callback: (result:boolean) => any) {
    //     console.log(`HwMiniUtil.copyText >>> text:` + text);
    //     QG.setClipboardData({
    //         data: text,
    //         success() {
    //             console.log("HwMiniUtil.copyText success");
    //             callback(true);
    //         },
    //         fail:function(){
    //             callback(false);
    //             console.log("HwMiniUtil.copyText fail");
    //         },
    //     });
    // }

    // public getCopyText(callback: (text: string) => any) {
    //     QG.getClipboardData({
    //         success(res: any) {
    //             console.log(`HwMiniUtil.getCopyText >>> res.data:` + res.data);
    //             callback(res.data);
    //         },
    //         fail(res: any) {
    //             callback("");
    //         },
    //     });
    // }
    // //--------------------------------------------------//
    // //                                                  //
    // //                     文件操作                      //
    // //                                                  //
    // //--------------------------------------------------//
    // public readFile(filePath: string) {
    //     const fs = QG.getFileSystemManager();
    //     let resFile: string = "";
    //     try {
    //         resFile = fs.readFileSync(filePath, "base64");
    //     } catch (e) {
    //         console.error(e);
    //     }
    //     return resFile;
    // }

    // public readFileBuffer(filePath: string) {
    //     const fs = QG.getFileSystemManager();
    //     let byteArray = null;
    //     try {
    //         let arrayBuffer = fs.readFileSync(filePath);
    //         byteArray = new Uint8Array(arrayBuffer);
    //     } catch (e) {
    //         console.error(e);
    //     }
    //     return byteArray;
    // }

    // public accessSync(filePath: string): boolean {
    //     const fs = QG.getFileSystemManager();
    //     let res: boolean = true;
    //     try {
    //         fs.accessSync(filePath);
    //     } catch (e) {
    //         res = false;
    //         console.error(e)
    //     }
    //     return res;
    // }

    // public getWritablePath(): string {
    //     return QG.env.USER_DATA_PATH;
    // }

    // public makeDirSync(dir: string, recursive: boolean) {
    //     const fs = QG.getFileSystemManager();
    //     try {
    //         fs.mkdirSync(dir, recursive);
    //     } catch (e) {
    //         console.error(e);
    //     }
    // }

    // public writeFileSync(filePath: string, data: ArrayBuffer) {
    //     const fs = QG.getFileSystemManager();
    //     try {
    //         fs.writeFileSync(filePath, data, "binary");
    //     } catch (e) {
    //         console.error(e);
    //     }
    // }

    // public removeFileSync(filePath: string) {
    //     const fs = QG.getFileSystemManager();
    //     try {
    //         const res = fs.unlinkSync(filePath)
    //     } catch (e) {
    //         console.error(e)
    //     }
    // }

    // public goHwOnlineGame(): void {
    //     QG.navigateToQuickApp({
    //         packageName: "com.duole.guandan.mini.huawei",
    //         success: () => {
    //             console.log("navigateToQuickApp success");
    //             this.hasGoToQuickGame = true;
    //         },
    //         fail: () => {
    //             console.log("navigateToQuickApp fail");
    //         }
    //     });
    // }
    // //--------------------------------------------------//
    // //                                                  //
    // //                     其他方法                      //
    // //                                                  //
    // //--------------------------------------------------//
    // public isSupportBusinessView(): boolean {
    //     return false;
    // }

    // public getDeviceId(): string {
    //     if (this.deviceId && this.deviceId !== "") {
    //         return this.deviceId;
    //     } else if (localStorage.getItem("DEVICEID") !== null) {
    //         this.deviceId = localStorage.getItem("DEVICEID");
    //         return this.deviceId;
    //     } else {
    //         let startStr = ["A", "B", "C", "D", "E", "F", "Q", "W", "E", "R"];
    //         let deviceId =
    //             startStr[Math.floor(Math.random() * startStr.length)] +
    //             startStr[Math.floor(Math.random() * startStr.length)] +
    //             Math.floor(Math.random() * 10000000000);
    //         localStorage.setItem("DEVICEID", deviceId);
    //         this.deviceId = deviceId;
    //         return deviceId;
    //     }
    // }
    // //--------------------------------------------------//
    // //                                                  //
    // //                     近场联机对战                   //
    // //                                                  //
    // //--------------------------------------------------//
    // public initGameNearbyPlayingManager(userId: number, initCallback?: () => void) {
    //     console.log("HwMiniUtil::initGameNearbyPlayingManager >>>")
    //     if (!this.isSupportGameNear()) {
    //         console.log(`HwMiniUtil::initGameNearbyPlayingManager >>> version = ${this.sdkVersion}`);
    //         return;
    //     }
    //     if (this.gameNearbyManager) {
    //         console.log("HwMiniUtil::initGameNearbyPlayingManager >>> manager already exists")
    //         return;
    //     }
    //     let manager = QG.createGameNearbyPlayingManager();
    //     manager.onInit((res: any) => {
    //         console.log(`HwMiniUtil::onInit >>> res.code = ${res.code}, res.reason = ${res.reason}`);
    //         dispatchEvent(NTF_WAITING_HIDE);
    //         if (res.code === 0) {
    //             this.gameNearbyManager = manager;
    //             if (initCallback) {
    //                 initCallback();
    //             }
    //             return;
    //         } else if (res.code === 1001) {
    //             dispatchEvent(NTF_LAN_SHOW_GET_LOCATION_PERMISSION);
    //         } else if (res.code === 1008 || res.code === 1009) {
    //             dispatchEvent(NTF_LAN_SHOW_GET_BULETOOTH_PERMISSION);
    //         } else {
    //             dispatchEvent(NTF_LAN_SHOW_ERROR_TIP, res.code);
    //         }
    //         manager.destroy();
    //         this.gameNearbyManager = null;
    //     });
    //     manager.onDestroy((res: any) => {
    //         console.log(`HwMiniUtil::onDestroy >>> res.code = ${res.code}, res.reason = ${res.reason}`);
    //         if (res.code === 1009 || res.code === 1004) {
    //             dispatchEvent(EVT_LAN_EXIT_LAN_WITH_TIP);
    //         }
    //     });
    //     manager.onError((res: any) => {
    //         console.log(`HwMiniUtil::onError >>> res.code = ${res.code}, res.reason = ${res.reason}`);
    //     });
    //     manager.onConnectionChanged((res: any) => {
    //         console.log(`HwMiniUtil::onConnectionChanged >>> res.status = ${res.status}, res.reason = ${res.reason}`);
    //         if (res.status === 0) {
    //             this.destroy();
    //             dispatchEvent(NTF_LAN_SHOW_RECONNECT_DIALOG);
    //         }
    //     });
    //     manager.onCreateRoom((res: any) => {
    //         console.log(`HwMiniUtil::onCreateRoom >>> res.code = ${res.code}, res.reason = ${res.reason}, res.roomId = ${res.roomId}, res.roomName = ${res.roomName}`);
    //         if (res.code === 0) {
    //             dispatchEvent(EVT_LAN_CREATE_ROOM_SUCCESS, res.roomId);
    //         } else if (res.code === 1001) {
    //             dispatchEvent(NTF_LAN_SHOW_GET_LOCATION_PERMISSION);
    //         } else if (res.code === 1008 || res.code === 1009) {
    //             dispatchEvent(NTF_LAN_SHOW_GET_BULETOOTH_PERMISSION);
    //         } else {
    //             dispatchEvent(NTF_LAN_SHOW_ERROR_TIP, res.code);
    //         }
    //     })
    //     manager.onGetRoom((res: any) => {
    //         console.log(`HwMiniUtil::onGetRoom >>> res.code = ${res.code}, res.reason = ${res.reason}, res.roomId = ${res.roomId}, res.roomName = ${res.roomName}`);
    //     })
    //     manager.onJoinRoom((res: any) => {
    //         console.log(`HwMiniUtil::onJoinRoom >>> res.code = ${res.code}, res.reason = ${res.reason}, res.roomId = ${res.roomId}`);
    //         dispatchEvent(NTF_WAITING_HIDE);
    //         if (res.code !== 0 && res.reason !== "") {
    //             if (res.code === 2003) { // 房间已加入
    //                 dispatchEvent(EVT_LAN_JOIN_GAME);
    //             } else if (res.code === 1001) { // 位置开关未开启，会影响BLE蓝牙扫描功能
    //                 dispatchEvent(NTF_LAN_SHOW_GET_LOCATION_PERMISSION);
    //             } else if (res.code === 1008 || res.code === 1009) { // BLE Gatt Server启动失败 || BLE 蓝牙未开启或者不支持
    //                 dispatchEvent(NTF_LAN_SHOW_GET_BULETOOTH_PERMISSION);
    //             } else if (res.code === 2002) { // 房间不存在
    //                 dispatchEvent(NTF_SHOW_PROMPT, "房间不存在");
    //                 dispatchEvent(EVT_LAN_EXIT_LAN_CHECK);
    //             } else if (res.code === 1004) { // 连接未建立
    //                 dispatchEvent(NTF_SHOW_PROMPT, "连接未建立");
    //                 dispatchEvent(EVT_LAN_EXIT_LAN_CHECK);
    //             } else {
    //                 dispatchEvent(NTF_LAN_SHOW_ERROR_TIP, res.code);
    //             }                
    //         }
    //     })
    //     manager.onLeaveRoom((res: any) => {
    //         console.log(`HwMiniUtil::onLeaveRoom >>> res.code = ${res.code}, res.reason = ${res.reason}, res.roomId = ${res.roomId}`);
    //     })
    //     manager.onJoinRoomNotify((res: any) => {
    //         console.log(`HwMiniUtil::onJoinRoomNotify >>> res.roomId = ${res.roomId}, res.openId = ${res.openId}, myOpenId = ${this.myOpenId}`);
    //         if (Number(res.openId) === this.myOpenId) {
    //             dispatchEvent(NTF_WAITING_HIDE);
    //             dispatchEvent(EVT_LAN_JOIN_GAME);
    //         }
    //     })
    //     manager.onLeaveRoomNotify((res: any) => {
    //         console.log(`HwMiniUtil::onLeaveRoomNotify >>> res.roomId = ${res.roomId}, res.openId = ${res.openId}, res.leaveType = ${res.leaveType}`);
    //         if (res.openId) {
    //             dispatchEvent(NTF_LAN_DISCONNECT, Number(res.openId));
    //         }
    //     })
    //     manager.onDismissRoomNotify((res: any) => {
    //         console.log(`HwMiniUtil::onDismissRoomNotify >>> res.roomId = ${res.roomId}, res.openId = ${res.openId}`);
    //         if (Number(res.openId) !== this.myOpenId) {
    //             dispatchEvent(EVT_LAN_EXIT_LAN_WITH_TIP);
    //         }
    //     })
    //     manager.onUpdatePlayerNotify((res: any) => {
    //         console.log(`HwMiniUtil::onUpdatePlayerNotify >>> res.roomId = ${res.roomId}, res.openId = ${res.openId}, res.status = ${res.status}`);
    //     })
    //     manager.onUpdateRoomNotify((res: any) => {
    //         console.log(`HwMiniUtil::onUpdateRoomNotify >>> res.roomId = ${res.roomId}, res.openId = ${res.openId}, res.status = ${res.status}`);
    //     })

    //     manager.onUpdateRoom((res: any) => {
    //         console.log(`HwMiniUtil::onUpdateRoom >>> res.code = ${res.code}, res.reason = ${res.reason}, res.roomId = ${res.roomId}`);
    //     })

    //     manager.onSendToMaster((res: any) => {
    //         console.log(`HwMiniUtil::onSendToMaster >>> res.code = ${res.code}, res.reason = ${res.reason}, res.roomId = ${res.roomId}`);
    //         if (res.code === 0) {
    //             return;
    //         }
    //         if (res.code === 1005) {
    //             dispatchEvent(NTF_LAN_SHOW_RECONNECT_DIALOG);
    //         } else {
    //             dispatchEvent(NTF_LAN_SHOW_ERROR_TIP, res.code);
    //         }
    //     })
    //     manager.onSendToPlayer((res: any) => {
    //         console.log(`HwMiniUtil::onSendToPlayer >>> res.code = ${res.code}, res.reason = ${res.reason}, res.roomId = ${res.roomId}`);
    //     })

    //     manager.onReceiveFromMaster((res: any) => {
    //         console.log(`HwMiniUtil::onReceiveFromMaster >>> res.roomId = ${res.roomId}, res.openId = ${res.openId}, res.message = ${res.message}`);
    //         dispatchEvent(NTF_LAN_MASTER_INFO, res);
    //     })
    //     manager.onReceiveFromPlayer((res: any) => {
    //         console.log(`HwMiniUtil::onReceiveFromPlayer >>> res.roomId = ${res.roomId}, res.openId = ${res.openId}, res.message = ${res.message}`);
    //         dispatchEvent(NTF_LAN_PLAYER_INFO, res);
    //     })

    //     this.myOpenId = userId;
    //     manager.init({
    //         openId: userId.toString()
    //     });
    // }

    // public createRoom(roomName: string, minPlayerNum: number, maxPlayerNum: number) {
    //     console.log(`HwMiniUtil::createRoom >>> roomName = ${roomName}, gameNearbyManager = ${this.gameNearbyManager}`)
    //     if (!this.gameNearbyManager) {
    //         console.log(`HwMiniUtil::createRoom >>> manager is null`);
    //         this.initGameNearbyPlayingManager(this.myOpenId, () => {
    //             this.gameNearbyManager.createRoom({
    //                 roomName: roomName,
    //                 minPlayerNum: minPlayerNum,
    //                 maxPlayerNum: maxPlayerNum,
    //             })
    //         });
    //         return;
    //     }
    //     this.gameNearbyManager.createRoom({
    //         roomName: roomName,
    //         minPlayerNum: minPlayerNum,
    //         maxPlayerNum: maxPlayerNum,
    //     });
    // }

    // public joinRoom(data: number): void {
    //     console.log(`HwMiniUtil::joinRoom >>> roomId = ${data}`)
    //     if (!this.gameNearbyManager) {
    //         this.initGameNearbyPlayingManager(this.myOpenId, () => {
    //             this.gameNearbyManager.joinRoom({
    //                 roomId: data.toString()
    //             })
    //         });
    //         return;
    //     }
    //     this.gameNearbyManager.joinRoom({
    //         roomId: data.toString()
    //     })
    // }

    // public leaveRoom(data: number): void {
    //     console.log(`HwMiniUtil::leaveRoom >>> roomId = ${data}`);
    //     if (this.gameNearbyManager === null) {
    //         console.log(`HwMiniUtil::leaveRoom >>> this.gameNearbyManager === null `);
    //         return;
    //     }
    //     this.gameNearbyManager.leaveRoom({
    //         roomId: data.toString()
    //     })
    // }

    // public destroy(): void {
    //     console.log(`HwMiniUtil::destroy >>>`);
    //     if (this.gameNearbyManager === null) {
    //         console.log(`HwMiniUtil::destroy >>> this.gameNearbyManager === null `);
    //         return;
    //     }
    //     this.gameNearbyManager.destroy();
    //     this.gameNearbyManager = null;
    // }

    // public sendToMaster(message: string): void {
    //     console.log(`HwMiniUtil::sendToMaster >>> message = ${message}`)
    //     if (this.gameNearbyManager === null) {
    //         console.log(`HwMiniUtil::sendToMaster >>> this.gameNearbyManager === null `);
    //         return;
    //     }
    //     this.gameNearbyManager.sendToMaster({
    //         message: message
    //     });
    // }

    // public sendToPlayer(message: string, userIds: number[] = []): void {
    //     console.log(`HwMiniUtil::sendToPlayer >>> message = ${message}, userIds = ${userIds}`)
    //     if (this.gameNearbyManager === null) {
    //         console.log(`HwMiniUtil::sendToPlayer >>> this.gameNearbyManager === null `);
    //         return;
    //     }
    //     if (userIds.length > 0) {
    //         this.gameNearbyManager.sendToPlayer({
    //             message: message,
    //             openIds: userIds.map(num => num.toString()),
    //         });
    //     }
    // }

    // /**
    // * 更新房间信息
    // * @param action - 1：开始游戏，2：结束游戏
    // */
    // public updateRoom(action: number): void {
    //     console.log(`HwMiniUtil::updateRoom >>> action = ${action}`)
    //     if (this.gameNearbyManager === null) {
    //         console.log(`HwMiniUtil::updateRoom >>> this.gameNearbyManager === null `);
    //         return;
    //     }
    //     this.gameNearbyManager.updateRoom({
    //         action: action
    //     });
    // }

    // /**
    // * 更新玩家信息
    // * @param action - 1：准备，2：取消准备
    // */
    // public updatePlayer(action: number): void {
    //     console.log(`HwMiniUtil::updatePlayer >>> action = ${action}`)
    //     if (this.gameNearbyManager === null) {
    //         console.log(`HwMiniUtil::updatePlayer >>> this.gameNearbyManager === null `);
    //         return;
    //     }
    //     this.gameNearbyManager.updatePlayer({
    //         action: action
    //     });
    // }

    // public getSDKVersion() {
    //     return this.sdkVersion;
    // } 

    // public isSupportGameNear() {
    //     if (!this.enabled || this.sdkVersion < 1120) {
    //         return false;
    //     }
    //     return true;
    // }

    // //展示系统弹框
    // public showModal(sTitle: string = "", sContentStr: string = "", sConfirmText: string = "确认", bShowCancel: boolean = false, confirmCallback: any = null, sCancleText: string = "取消", cancleCallback: any = null): void {
    //     QG.showModal({
    //         title: sTitle,
    //         content: sContentStr,
    //         showCancel: bShowCancel,
    //         cancelText: sCancleText,
    //         cancelColor: "#000000",
    //         confirmText: sConfirmText,
    //         confirmColor: "#576B95",
    //         success: (res: any) => {
    //             console.log("HwMiniUtil::showModal >>>", res);
    //             if (res.confirm && confirmCallback) {
    //                 confirmCallback();
    //             } else if (res.cancel && cancleCallback) {
    //                 cancleCallback();
    //             }
    //         },
    //     });
    // }

    // public showToast(title: string = '', duration: number = 0, icon: string = 'none'): void {
    //     QG.showToast({ title, duration, icon })
    // }

    // // 震动
    // public shake() {
    //     QG.vibrateLong({
    //         success : function () {
    //             console.log("vibrateLong success" );
    //         },
    //         fail:function(){
    //             console.log("vibrateLong fail");
    //         },
    //         complete:function() {
    //             console.log("vibrateLong complete");
    //         }
    //     });
    // }
}