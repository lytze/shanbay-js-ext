## 一些增强扇贝单词网页版的js脚本

### 功能简介

加载该插件后会在浏览器页面右上角显示一个操作框，您可以一边背单词，一边将当前单词添加到插件为您保存的列表中，并随后通过拼写来检查记忆情况

1. 在单词内容页面里按下 `添加` 或者键盘左上 `~` 键，将单词添加入列表
2. 单词词义将以列表的形式出现在操作框里
3. 您可以控制当列表中的单词数超过多少时，以突出的颜色来提示
4. 在拼写框中输入单词拼写后按下 `检查` 或键盘 `ENTER` 键，检查拼写是否正确
5. 每按下一次 `提示` 后，单词会从第一个字母开始为您逐个显示
6. 您还可以在添加单词的同时为单词提供一个一次性的助记提示，当第一次按下 `提示` 时会为您显示
7. 直接按下 `下一个` 或者在拼写已经检查正确后再次按下键盘 `ENTER` 键，跳过当前单词
8. `置顶` 键会将当前单词放回列表顶端再次复习
9. 您可以点击这里跳转到 [WordInfo](http://wordinfo.info) 与 [Etymonline](http://www.etymonline.com) 这两个词根及词源数据库直接检索当前单词

![example](./example.jpg)

### 加载方式

暂时没有打包为浏览器插件，因此需要在背单词页面加载 [www.shanbay.com/bdc/review](https://www.shanbay.com/bdc/review) JavaScript 文件（打开浏览器自带的元素审阅功能，在控制台黏贴全部代码并回车执行）

### 更新日志

#### 17-10-22

1. __键盘控制__ 拼写检查的键盘控制逻辑更新了，现在在输入框敲击一次回车检查拼写，当拼写正确后再敲击一次可以直接跳过；现在使用 `~` 键添加单词到列表；现在还可以按下 `ESC` 键来使光标进入/离开输入框
2. __补正__ 提醒消息出现的时间延长了；修复了单词置顶后再次复习的时候，提示不会从第一个字母开始的问题

#### 17-10-21

1. __键盘控制__ 在拼写输入框中直接回车检查拼写，`SHIFT` + `ENTER` 下一个单词，在页面中输入加号 `+` 直接添加列表
2. __数量提示__ 控制在列表中超过多少个单词后，列表颜色来提示数量，分别会以黑色和红色两个阶段来提示，默认列表中超过 2 个单词后以黑色显示，超过 7 个单词后以红色警示列表过多，及时复习
3. __辅助查询__ 添加前往 [WordInfo](http://wordinfo.info) 与 [Etymonline](http://www.etymonline.com) 的连接，点击后直接跳转到查询当前单词的页面
4. __复习置顶__ 点击 `置顶` 按键后，当前单词会被放置回列表最顶，便于在一次复习
