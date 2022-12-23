<template>
  <div class="mask-main">
    <div class="tips-box">
      <Alert show-icon>
        为了更好的使用此插件,您必须进行初始化设置:
        <template #desc>首次按照以下步骤设置好之后,后续不必再重复设置啦~</template>
      </Alert>
    </div>
    <div class="tips-box">
      <Alert type="warning">1. 首先,您需要点击右上角插件图标处,【插件应用设置】【开启自动分离窗口】</Alert>
    </div>
    <div class="tips-box">
      <Alert type="warning">2. 然后,点击右上角插件图标处,点击【分离窗口】</Alert>
    </div>
    <div class="tips-box">
      <Alert type="warning">3. 最后,将插件分离出来的插件窗口调整合适的大小以内容完整适配为准</Alert>
    </div>
    <div class="tips-box">
      <Alert type="success">至此,设置完成! 重新打开插件试试吧~</Alert>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyMask"
}
</script>

<style scoped lang="less">
.mask-main{
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.65);
  z-index: 999;
}
.tips-box{
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
</style>
