未购买正式版frola editor上线使用时会出现红色横条框提示，解决方案如下：
```
div.fr-wrapper > div[style*='9999'] {
  /* display: none !important; */
  //不能使用none,不然十次操作后会出现bug
  position: absolute;
  top: -9999px;
  opacity: 0;
}

div.fr-box.fr-basic .fr-element {
  margin-top: -60px;
}

a#fr-logo {
  display: none !important;
}
```