<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
    <uploadImage></uploadImage>
    <input ref="fileRef" type="file">
  </div>
</template>

<script>
var COS = require('cos-js-sdk-v5')

// SECRETID 和 SECRETKEY请登录 https://console.cloud.tencent.com/cam/capi 进行查看和管理
var cos = new COS({
  SecretId: 'AKIDykGWWHm1zh9MJ0RcgU2KM7crpXzB6l9I',
  SecretKey: '0lFTR9aljSu74kAKEsHQJwIOKzOXQ3PV'
})
import { mapGetters } from 'vuex'
export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  components: {
  },
  data() {
    return {
    }
  },
  mounted() {
    this.$refs.fileRef.onchange = function(e) {
      const file = this.files[0]
      cos.uploadFile({
        Bucket: 'rzzt-1314095567', /* 填写自己的bucket，必须字段 */
        Region: 'ap-nanjing', /* 存储桶所在地域，必须字段 */
        Key: Date.now() + file.name, /* 存储在桶里的对象键（例如:1.jpg，a/b/test.txt，图片.jpg）支持中文，必须字段 */
        Body: file, // 上传文件对象
        SliceSize: 1024 * 1024 * 5, /* 触发分块上传的阈值，超过5MB使用分块上传，小于5MB使用简单上传。可自行设置，非必须 */
        onProgress: function(progressData) {
          console.log(JSON.stringify(progressData))
        }
      }, function(err, data) {
        if (err) {
          console.log('上传失败', err)
        } else {
          console.log('上传成功', data)
          this.imgUrl = data.Location
        }
      })
    }
  }

}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
