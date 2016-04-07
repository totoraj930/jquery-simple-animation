/*
 jQuery Simple Animation v0.0.1
 https://github.com/totoraj930/jquery-SimpleAnimation
 (c) 2016 Reona Oshima (totoraj).
 License: MIT
 http://opensource.org/licenses/mit-license.php
*/
$.fn.s_animation = function (options) {
	// 設定を作成
	var setting = $.extend({
		mode: "reset",// アニメーションモード
		duration: 400,// animation-duration(ミリ秒)
		easing: "linear",// animation-timing-function
		remove: false,// 要素を削除するか
		callback: function () {}// コールバック
	}, options);

	// durationが異常だったらデフォルトに戻す
	if (!isFinite(setting.duration) || setting.duration < 100) {
		setting.duration = 400;
	}
	console.log(setting.duration);


	// 定数定義
	var SHOW_MODES = [
			"fadeIn",
			"fadeIn-up",
			"fadeIn-down",
			"zoomIn-show",
			"zoomOut-show"
		],
		HIDE_MODES = [
			"fadeOut",
			"fadeOut-up",
			"fadeOut-down",
			"zoomIn-hide",
			"zoomOut-hide"
		],
		PREFIX = "sa-",
		MODES_CLASS =
			PREFIX+SHOW_MODES.join(" "+PREFIX)+" "+
			PREFIX+HIDE_MODES.join(" "+PREFIX),
		ADD_STYLES = {
			"-webkit-animation-duration": setting.duration+"ms",
			"-moz-animation-duration":  setting.duration+"ms",
			"-ms-animation-duration":  setting.duration+"ms",
			"-o-animation-duration":  setting.duration+"ms",
			"animation-duration":  setting.duration+"ms",
			"-webkit-animation-timing-function": setting.easing,
			"-moz-animation-timing-function": setting.easing,
			"-ms-animation-timing-function": setting.easing,
			"-o-animation-timing-function": setting.easing,
			"animation-timing-function": setting.easing
		},
		REMOVE_STYLES = {
			"-webkit-animation-duration": "",
			"-moz-animation-duration": "",
			"-ms-animation-duration": "",
			"-o-animation-duration": "",
			"animation-duration": "",
			"-webkit-animation-timing-function": "",
			"-moz-animation-timing-function": "",
			"-ms-animation-timing-function": "",
			"-o-animation-timing-function": "",
			"animation-timing-function": ""
		};


	// タイプ判定
	var type;// [show | hide]
	if (SHOW_MODES.indexOf(setting.mode) >= 0) {
		type = "show";
	}
	else if (HIDE_MODES.indexOf(setting.mode) >= 0) {
		type = "hide";
	}
	else if (setting.mode == "reset") {
		// resetなら初期化して終わり
		// class削除
		$(this).removeClass(MODES_CLASS);
		// css削除
		$(this).css(REMOVE_STYLES);
		return this;
	}
	else {
		throw new Error("\""+setting.mode+"\" is a not exist.");
	}

	// ターゲットのcssを設定
	$(this).css(ADD_STYLES);

	// ターゲットにclassを追加
	$(this).removeClass(MODES_CLASS);
	$(this).addClass(PREFIX+setting.mode);


	// コールバックとclass削除処理
	// this = that
	var that = this;
	setTimeout(function () {
		if (type == "show") {
			// タイプがshowならclassを削除
			$(that).removeClass(MODES_CLASS);
		}
		else if (setting.remove) {
			// タイプがhideでremoveが有効なら要素を削除
			$(that).remove();
		}

		// css削除
		$(that).css(REMOVE_STYLES);

		// コールバックを呼び出し
		setting.callback();

		// タイマーを未定義にする
		_s_animation_timer = undefined;
	}, (setting.duration<600)?600:setting.duration);

	return this;
}
