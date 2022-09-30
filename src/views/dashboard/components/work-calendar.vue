<template>
  <div>
    <el-row type="flex" justify="end">
      <el-select v-model="currentYear" size="small">
        <el-option v-for="item in yearList" :key="item" :label="item" :value="item"></el-option>
      </el-select>
      <el-select v-model="currentMonth" size="small">
        <el-option v-for="item in 12" :key="item" :label="item" :value="item"></el-option>
      </el-select>
    </el-row>
    <el-calendar v-model="currentDate">
      <template
        #dateCell="{date}"
      >
        <div class="date-content">
          <div class="text">
            {{ date | formatdate('D') }}
          </div>
          <div v-if="[0,6].includes(date.getDay())" class="rest">休
          </div>
        </div>
      </template>
    </el-calendar>

  </div>
</template>
<script>
export default {
  name: 'WorkCalendar',
  data() {
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
    const yearList = []
    for (var i = -5; i <= 5; i++) {
      yearList.push(currentYear + i)
    }
    return {
      // currentDate,
      yearList,
      currentDay: currentDate.getDate(),
      currentYear,
      currentMonth: currentDate.getMonth() + 1
    }
  },
  computed: {
    // currentDate() {
    //   return new Date(this.currentYear + '-' + this.currentMonth)
    // }
    currentDate: {
      get() {
        return new Date(this.currentYear + '-' + this.currentMonth + '-' + this.currentDay)
      },
      set(val) {
        this.currentYear = val.getFullYear()
        this.currentMonth = val.getMonth() + 1
        this.currentDay = val.getDate()
      }

    }
  },
  mounted() {

  },
  methods: {
  }
}
</script>
<style lang="scss"  scoped>
.el-select{
  width: 100px;
  &:last-child{
    margin-left: 10px;
  }
}
::v-deep .el-calendar_header{
  display: none !important;
}
::v-deep .el-calendar-day {
  height:  auto;
 }
 ::v-deep .el-calendar-table__row td,::v-deep .el-calendar-table tr td:first-child,  ::v-deep .el-calendar-table__row td.prev{
  border:none;
 }
.date-content {
  height: 40px;
  text-align: center;
  line-height: 40px;
  font-size: 14px;
}
.date-content .rest {
  color: #fff;
  border-radius: 50%;
  background: rgb(250, 124, 77);
  width: 20px;
  height: 20px;
  line-height: 20px;
  display: inline-block;
  font-size: 12px;
  margin-left: 10px;
}
.date-content .text{
  width: 20px;
  height: 20px;
  line-height: 20px;
 display: inline-block;

}
 ::v-deep .el-calendar-table td.is-selected .text{
   background: #409eff;
   color: #fff;
   border-radius: 50%;
 }
 ::v-deep .el-calendar__header {
   display: none
 }
</style>
