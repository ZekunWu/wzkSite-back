#### 内容改变
将makechange函数暴露到doc
keypress先于change先于cursor触发

#### 选中
contenteditable模式下无法控制选中

onBeforeSelectionChange慢一拍，不能用来监听，需要监听cursor事件 

控制传入getSelection参水来控制获取选中位置信息而不是字符串

#### 光标位置？
（如果是为了记录学生调代码时的行为，该如何记录）

编辑器可以记录到光标所在行列信息

如果直接监听cursor事件，修改内容同样会引发光标变化，通过触发事件的时刻区分内容改变和单纯光标移动？两种事件都在signalLater处理

如果监听点击事件，键盘移动光标无法监听到

readOnly为nocursor下无法设置光标,因而设置一层absolute层避免点击事件

setCursor需要先focus到编辑器
```
this.codemirror.editor.focus()
this.codemirror.editor.setCursor({line: 0, ch: 1})
```

#### 文本拖动？
内容变化：drag+paste
（追踪鼠标轨迹不太可能）
