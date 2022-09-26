<template>
  <div>
    <el-upload
      class="avatar-uploader"
      :class="{disable: fileList.length>0}"
      action=""
      list-type="picture-card"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
      :file-list="fileList"
      :http-request="onUpload"
      :on-change="onChange"
    >
      <i class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    <el-progress
      v-show="showPercent"
      style="width:198px"
      :text-inside="true"
      :stroke-width="26"
      :percentage="percent"
    ></el-progress>
    <el-dialog
      title="图片预览"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    ><img width="100%" :src="dialogImageUrl" alt=""> </el-dialog>
  </div>
</template>
<script>
// 文件上传关键点
// 选取文文件
// 得到文件对象(钩子函数）
// 使用npm包
var COS = require('cos-js-sdk-v5')

// SECRETID 和 SECRETKEY请登录 https://console.cloud.tencent.com/cam/capi 进行查看和管理
var cos = new COS({
  SecretId: 'AKIDykGWWHm1zh9MJ0RcgU2KM7crpXzB6l9I',
  SecretKey: '0lFTR9aljSu74kAKEsHQJwIOKzOXQ3PV'
})
export default {
  props: {
  },
  data() {
    return {
      fileList: [],
      dialogImageUrl: '',
      dialogVisible: false,
      showPercent: false,
      percent: 0
    }
  },
  computed: {

  },
  mounted() {

  },
  methods: {
    onChange(file, fileList) {
      this.fileList.push({ url: file.url })
    },
    onUpload({ file }) {
      this.showPercent = true
      cos.uploadFile({
        Bucket: 'rzzt-1314095567', /* 填写自己的bucket，必须字段 */
        Region: 'ap-nanjing', /* 存储桶所在地域，必须字段 */
        Key: Date.now() + file.name, /* 存储在桶里的对象键（例如:1.jpg，a/b/test.txt，图片.jpg）支持中文，必须字段 */
        Body: file, // 上传文件对象
        SliceSize: 1024 * 1024 * 5, /* 触发分块上传的阈值，超过5MB使用分块上传，小于5MB使用简单上传。可自行设置，非必须 */
        onProgress: (progressData) => {
          console.log(JSON.stringify(progressData))
          this.percent = progressData.percent * 100
        }
      }, (err, data) => {
        this.showPercent = false
        if (err) {
          console.log('上传失败', err)
        } else {
          console.log('上传成功', data)
          // this.imgUrl = data.Location
          this.fileList[0].url = 'http://' + data.Location
        }
      })
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload({ type, size }) {
      console.log('onBeforeUpload', type, size)
      if (!['image/jpeg', 'image/gif', 'image/bmp', 'image/png'].includes(type)) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
        return false
      }
      if (size > 5 * 1024 * 1024) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
        return false
      }
    },
    handleRemove(file, fileList) {
    //   console.log(file, fileList)
      this.fileList = []
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    handleClose() {
      this.dialogVisible = false
    }
  }
}
</script>
<style lang="scss" scoped>
::v-deep .avatar-uploader.disable .el-upload--picture-card{
    display: none;
}
</style>
