<template>
  <div class="card xlsx-csv-card">
    <div class="card-header card-header-title">
      XLSX / CSV
    </div>
    <div class="card-body">
      <ul class="nav nav-tabs">
        <template v-for="(xlsxCsc, index) in xlsxCsvList">
          <li class="nav-item" :key="`xlsx_csv_${index}`">
            <div
              class="nav-link link-cursor"
              :class="{
                'active': isCurrentTab(index)
              }"
              aria-current="page"
              @click="onClickTab(index)"
            >
              Tab{{ index + 1 }}
            </div>
          </li>
        </template>
      </ul>
    </div>
    <div class="current-tab">
      <XlsxCsvTable/>
    </div>
  </div>
</template>

<script>
import XlsxCsvTable from '@/components/XlsxCsvTable.vue';

export default {
  components: {
    XlsxCsvTable
  },
  data () {
    return {
      xlsxCsvList: [
        {},
        {}
      ],
      selectedXlsxCsv: {},
      selectedXlsxCsvIndex: 0
    };
  },
  computed: {
    isCurrentTab () {
      return function (index) {
        return this.selectedXlsxCsvIndex === index;
      };
    }
  },
  methods: {
    onClickTab (index) {
      this.selectedXlsxCsvIndex = index;
    }
  }
}
</script>

<style scoped>
.xlsx-csv-card {
  margin-bottom: 20px;
  padding-bottom: 20px;
}
.card-header-title {
  font-family: 'Trattatello';
  font-size: 18px;
  font-weight: bold;
}
.link-cursor {
  cursor: pointer;
}
</style>