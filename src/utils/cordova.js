import Vue from 'vue';
// Add to index.js or the first page that loads with your app.
//document.addEventListener('deviceready', OneSignalInit, false);
const push = {
	OneSignalInit() {
		// Uncomment to set OneSignal device logging to VERBOSE
		// window.plugins.OneSignal.setLogLevel(6, 0);

		// NOTE: Update the setAppId value below with your OneSignal AppId.
		//process.env.VUE_APP_
		window.plugins.OneSignal.setAppId(process.env.VUE_APP_MY_APP_ID);
		window.plugins.OneSignal.setNotificationOpenedHandler(function (jsonData) {
			console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
			alert('푸시셋팅~');
		});

		// iOS - Prompts the user for notification permissions.
		//    * Since this shows a generic native prompt, we recommend instead using an In-App Message to prompt for notification permission (See step 6) to better communicate to your users what notifications they will get.
		window.plugins.OneSignal.promptForPushNotificationsWithUserResponse(
			function (accepted) {
				console.log('User accepted notifications: ' + accepted);
			},
		);
	},
};
/**
 * cordova-plugin-camera
 */
const camera = {
	//CAMERA 카메라, 갤러리, 찍은사진만
	takePicture() {
		if (!Vue.cordova.camera) {
			window.alert('카메라 오류!');
			return;
		}
		return new Promise((resolve, reject) => {
			Vue.cordova.camera.getPicture(
				imageURI => {
					window.alert('Photo URI : ' + imageURI);
					resolve(`data:image/jpeg;base64,${imageURI}`);
				},
				message => {
					//window.alert('FAILED : ' + message);
					reject(`FAILED : ${message}`); // 사진선택 취소시에도 동작
				},
				{
					destinationType: Vue.cordova.camera.DestinationType.DATA_URL,
					saveToPhotoAlbum: true, // 이미지 앨범에 저장
				},
			);
		});
	},
	getPicture() {
		if (!Vue.cordova.camera) {
			window.alert('카메라 오류!');
			return;
		}
		return new Promise((resolve, reject) => {
			Vue.cordova.camera.getPicture(
				imageURI => {
					window.alert('Photo URI : ' + imageURI);
					resolve(`data:image/jpeg;base64,${imageURI}`);
				},
				message => {
					//window.alert('FAILED : ' + message);
					reject(`FAILED : ${message}`); // 사진선택 취소시에도 동작
				},
				{
					destinationType: Vue.cordova.camera.DestinationType.DATA_URL,
					sourceType: Vue.cordova.camera.PictureSourceType.PHOTOLIBRARY,
				},
			);
		});
	},
};

const contacts = {
	getContacts(filters) {
		if (!Vue.cordova.contacts) {
			window.alert('연락처 모듈 에러');
			return;
		}
		var options = { ...filters };
		//options.filter = this.name;

		return new Promise((resolve, reject) => {
			Vue.cordova.contacts.find(
				//['displayName'],
				[
					Vue.cordova.contacts.fieldType.displayName,
					Vue.cordova.contacts.fieldType.phoneNumbers,
				],
				contacts => {
					window.alert('Contacts found : ' + contacts.length);
					//this.contacts = contacts;
					resolve(contacts);
				},
				error => {
					//window.alert('FAILED : ' + error.code);
					reject(`FAILED : ${error.code}`);
				},
				options,
			);
		});
	},
};

const device = {
	getDeviceInfo() {
		if (!Vue.cordova.device) {
			window.alert('FAILED : 디바이스 정보 확인 실패');
		} else {
			window.alert(
				'Device : ' +
					Vue.cordova.device.manufacturer +
					' ' +
					Vue.cordova.device.platform +
					' ' +
					Vue.cordova.device.version,
			);
		}
	},
};

const CORDOVA_API = { camera, push, contacts, device };
export default CORDOVA_API;
