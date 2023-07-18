<template>
  <v-app>
    <v-card>
      <v-card-title>
        <v-row class="text-center">
          <v-col
            v-for="(day, index) in daysOfWeek"
            :key="index"
            cols="1"
            class="subtitle-1"
          >
            {{ day }}
          </v-col>
        </v-row>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col
            v-for="day in daysWithOffset"
            :key="day"
            cols="1"
          >
            <template v-if="day > 0">
              <v-text-field
                v-model="inputValues[day]"
                label="Input"
                hide-details
              ></v-text-field>
              <div>{{ day }}</div>
            </template>
            <template v-else></template>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      daysOfWeek: [],
      daysInMonth: [],
      inputValues: {}
    };
  },
  created() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // 月の日数を計算してdaysInMonthにセットする
    const daysCount = new Date(year, month + 1, 0).getDate();
    this.daysInMonth = Array.from({ length: daysCount }, (_, index) => index + 1);

    // 曜日の配列を設定する
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    this.daysOfWeek = this.generateDaysOfWeek(firstDayOfMonth);

    // inputValuesオブジェクトを初期化する
    this.daysInMonth.forEach((day) => {
      this.inputValues[day] = '';
    });
  },
  methods: {
    generateDaysOfWeek(firstDay) {
      const daysOfWeek = ['日', '月', '火', '水', '木', '金', '土'];
      const daysShifted = [...daysOfWeek.slice(1), daysOfWeek[0]];
      return daysShifted;
    },
    generateDaysWithOffset() {
      const firstDayOfMonth = new Date().getDay();
      const offset = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1; // 日曜日を0とするための調整
      return [...Array(offset).fill(-1), ...this.daysInMonth];
    }
  },
  computed: {
    daysWithOffset() {
      return this.generateDaysWithOffset();
    }
  }
};
</script>
