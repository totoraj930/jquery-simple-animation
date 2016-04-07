# Simple Animation

超シンプルなページアニメーションを行うjQueryプラグインです。

アニメーションといっても表示と非表示を切り替えるものだけです。

[Demo](http://totoraj930.github.io/jquery-simple-animation)

[Download](http://totoraj930.github.io/jquery-simple-animation/)

## 使い方(How to use)

下記のファイルを読み込んでください。

* jquery.sanimation.min.css
* jquery.sanimation.min.js

```html
<link rel="stylesheet" href="jquery.sanimation.min.css">
<script type="text/javascript" src="jquery.sanimation.min.js"></script>
```

もちろんjQueryの後ろで読み込んでくださいね！

### 基本的な使い方

```javascript
$("body").s_animation({
	mode: "fadeOut"
});
```

### 高度？な使い方
```javascript
$(".info").s_animation({
	mode: "fadeOut-up",
	remove: true,
	callback: function (){
		// コールバック
	}
});
```


### オプション(Option)

|キー|説明|初期値|
|-------|-------|-------|
|`mode`|アニメーションのモード設定です。<br>モード一覧を参照してください。|`"reset"`|
|`duration`|アニメーションの継続時間の設定です。(ミリ秒)|`400`|
|`easing`|アニメーションの継続時間の設定です。|`"linear"`|
|`remove`|アニメーションの処理終了後に要素を削除するかの設定です。|`false`|
|`callback`|アニメーションの処理終了後に呼ばれるメソッドです。|`function(){}`|

#### 仕様

`duration`はCSS3のプロパティ`animation-duration`にミリ秒(ms)として設定されます。

**`duration`が`500`未満の場合、`animation-duration`には`duration`が設定されますが、処理終了時間は`500`ミリ秒後になります。**

`easing`はCSS3のプロパティ`animation-timing-function`にそのまま設定されます。  

#### 参考

* [animation-duration－CSS3リファレンス](http://www.htmq.com/css3/animation-duration.shtml)
* [animation-timing-function－CSS3リファレンス](http://www.htmq.com/css3/animation-timing-function.shtml)

#### モード(Mode List)

##### 表示(Show)

* fadeIn
* fadeIn-up
* fadeIn-down
* zoomIn-show
* zoomOut-show

##### 非表示(Hide)

* fadeOut
* fadeOut-up
* fadeOut-down
* zoomIn-hide
* zoomOut-hide

##### その他(Other)

* reset
  - 要素についているSimple Animation用のclassをすべて削除する


#### 継続時間(Duration Time)

* slow
* normal
* fast

## 著者(Author)
**Reona Oshima (totoraj)**
* [http://totoraj.net](http://totoraj.net/)
* [Twitter: @totoraj930](https://twitter.com/totoraj930/)


## ライセンス(License)
Copyright &copy; 2015 Reona Oshima (totoraj)  
This work is released  under the MIT License.  
<http://opensource.org/licenses/mit-license.php>