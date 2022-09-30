<template>
  <div>
    <div ref="chartRef" style="width: 600px;height:400px"></div>
  </div>
</template>
<script>
import * as echarts from 'echarts'
import { TitleComponent, LegendComponent } from 'echarts/components'
import { RadarChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
echarts.use([TitleComponent, LegendComponent, RadarChart, CanvasRenderer])
export default {
  data() {
    return {

    }
  },
  computed: {

  },
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(this.$refs.chartRef)
    // 绘制图表
    myChart.setOption({
      title: {
        text: '基础雷达图'
      },
      tooltip: {
        trigger: 'item'
      },
      // legend: {
      //   data: [' Budget']
      // },
      radar: {
        // shape: 'circle',
        indicator: [
          { name: '考勤', max: 6500 },
          { name: '技术', max: 16000 },
          { name: '管理', max: 30000 },
          { name: '分享', max: 38000 },
          { name: 'bug', max: 52000 },
          { name: '助人', max: 25000 }
        ],
        axisName: {
          color: '#fff',
          backgroundColor: '#666',
          borderRadius: 3,
          padding: [3, 5]
        }
      },
      series: [
        {
          name: 'Budget vs spending',
          type: 'radar',
          data: [
            {
              value: [4200, 3000, 20000, 35000, 50000, 18000],
              name: 'Allocated Budget'
            },
            {
              value: [5000, 14000, 28000, 26000, 42000, 21000],
              name: 'Actual Spending'
            }
          ]
        }
      ]
    })
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>

</style>
