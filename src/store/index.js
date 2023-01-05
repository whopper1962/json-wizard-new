import Vue from 'vue';
import Vuex from 'vuex';
import test from '@/assets/test.json';

Vue.use(Vuex);

const tabData = {
  fileInputed: false,
  selectedFileName: '',
  xlsxCsvSheets: {},
  sheetNames: [],
  selectedSheet: '',
  currentXlsxCsvContents: {},
  columnOrders: [],
  trashedRows: [],
  isRootArray: false,
  numberOfElements: 1
};

export default new Vuex.Store({
  state: {
    xlsxCsvTabs: [
      {
        fileInputed: false,
        selectedFileName: '',
        xlsxCsvSheets: {},
        sheetNames: [],
        selectedSheet: '',
        currentXlsxCsvContents: test,
        columnOrders: [],
        trashedRows: [],
        isRootArray: false,
        numberOfElements: 1
      }
    ],
    selectedTabIndex: 0,
    currentTabContents: {},
    generatedJson: {}
  },
  getters: {
    getCurrentTabContents (state) {
      return state.xlsxCsvTabs[state.selectedTabIndex];
    },
    getXlsxCsvTabs (state) {
      return state.xlsxCsvTabs;
    },
    getSelectedTabIndex (state) {
      return state.selectedTabIndex;
    },
    getGeneratedJson (state) {
      return state.generatedJson;
    }
  },
  mutations: {
    SET_CURRENT_TAB_CONTENTS (state, selectedTabIndex) {
      state.currentTabContents = state.xlsxCsvTabs[selectedTabIndex];
      state.selectedTabIndex = selectedTabIndex;
    },
    MODIFY_CURRENT_XLSX_CSV_COLUMN_ORDER (state, orders) {
      state.xlsxCsvTabs[state.selectedTabIndex].columnOrders = orders;
    },
    MODIFY_COLUMN_ORDER (state, columnOrders) {
      const currentTabContents = state.xlsxCsvTabs[state.selectedTabIndex];
      currentTabContents.columnOrders = columnOrders;
    },
    SET_GENERATED_JSON (state, json) {
      state.generatedJson = json;
    },
    ADD_TAB (state) {
      state.xlsxCsvTabs.push(tabData);
    },
    SET_ROOT_ARRAY_STATUS (state, status) {
      const currentTabContents = state.xlsxCsvTabs[state.selectedTabIndex];
      currentTabContents.isRootArray = status;
    },
    SET_NUMBER_OF_ARRAY_ELEMENTS (state, num) {
      const currentTabContents = state.xlsxCsvTabs[state.selectedTabIndex];
      currentTabContents.numberOfElements = num;
    },
    SET_SELECTED_SHEET (state, sheetName) {
      const currentTabContents = state.xlsxCsvTabs[state.selectedTabIndex];
      currentTabContents.selectedSheet = sheetName;
    },
    MODIFY_TRASHED_ROWS (state, index) {
      const currentTrashedRows = state.xlsxCsvTabs[state.selectedTabIndex].trashedRows;
      if (currentTrashedRows.includes(index)) {
        const foundIndex = currentTrashedRows.indexOf(index);
        currentTrashedRows.splice(foundIndex, 1);
      } else {
        currentTrashedRows.push(index);
      }
    }
  },
  actions: {
    setCurrentTabContents (context, selectedTabIndex) {
      context.commit('SET_CURRENT_TAB_CONTENTS', selectedTabIndex)
    },
    modifyCurrentXlsxCsvColumnOrder (context, orders) {
      context.commit('MODIFY_CURRENT_XLSX_CSV_COLUMN_ORDER', orders);
    },
    modifyColumnOrder (context, columnOrders) {
      context.commit('MODIFY_COLUMN_ORDER', columnOrders);
    },
    setGeneratedJson (context, json) {
      context.commit('SET_GENERATED_JSON', json);
    },
    setRootArrayStatus (context, status) {
      context.commit('SET_ROOT_ARRAY_STATUS', status);
    },
    setNumberOfArrayElements (context, num) {
      context.commit('SET_NUMBER_OF_ARRAY_ELEMENTS', num);
    },
    setSelectedSheet (context, sheetName) {
      context.commit('SET_SELECTED_SHEET', sheetName);
    },
    modifyTrashedRows (context, index) {
      context.commit('MODIFY_TRASHED_ROWS', index);
    },
    addTab (context) {
      context.commit('ADD_TAB');
    },
  }
});
