<!--
 * @Author: 秦少卫
 * @Date: 2022-09-03 19:16:55
 * @LastEditors: 秦少卫
 * @LastEditTime: 2022-09-05 22:33:57
 * @Description: 插入图片
-->

<template>
  <div style="display: inline-block">
    <Button @click="insert" size="small">插入图片</Button>
    <Modal
      v-model="showModal"
      title="请选择要插入的图片"
      @on-ok="insertImgFile"
      @on-cancel="showModal = false,imgFile = null "
    >
      <div class="img-preview" v-if="imgFile">
        <img :src="imgFile" alt="图片">
      </div>
      <Upload :before-upload="handleUpload" action="#">
        <Button icon="ios-cloud-upload-outline">选择图片文件</Button>
      </Upload>
    </Modal>
  </div>
</template>

<script>
import select from '@/mixins/select'
import { getImgStr } from "@/utils/utils";
import { v4 as uuid } from 'uuid';
export default {
  name: 'ToolBar',
  mixins: [select],
  data() {
    return {
      showModal: false,
      imgFile: null,
    };
  },
  methods: {
    insert() {
      this.imgFile = ''
      this.showModal = true
    },
    insertImgFile() {
      const imgEl = document.createElement('img');
      imgEl.src = this.imgFile
      // 插入页面
      document.body.appendChild(imgEl);
      imgEl.onload = () => {
        // 创建图片对象
        const imgInstance = new this.fabric.Image(imgEl, {
          id: uuid(),
          name: '图片1',
          left: 100, top: 100,
        });
        // 设置缩放
        imgInstance.scale(0.2);
        this.canvas.c.add(imgInstance)
        this.canvas.c.setActiveObject(imgInstance);
        this.canvas.c.renderAll()
        // 删除页面中的图片元素
        imgEl.remove()
      }
    },
    // 选择文件
    handleUpload(file) {
      getImgStr(file).then(res => {
        this.imgFile = res
      })
    },
  }
};
</script>

<style scoped lang="less">
.img-preview{
  margin-bottom: 10px;
  width: 100px;
  height: 100px;
  border-radius: 6px;
  border:1px solid #eee;
  overflow: hidden;
  padding: 5px;
  img{
    width: 100%;
    height: 100%;
  }
}
</style>
