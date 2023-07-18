<template>
  <div>
    <v-row>
      <v-col v-for="(day, index) in daysOfWeek" :key="index" class="text-center">
        {{ day }}
      </v-col>
    </v-row>
    <v-row v-for="(week, weekIndex) in calendar" :key="weekIndex">
      <v-col v-for="(date, dateIndex) in week" :key="dateIndex">
        <div v-if="date">
          <div class="date">{{ date.getDate() }}</div>
          <v-text-field outlined></v-text-field>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      daysOfWeek: ['日', '月', '火', '水', '木', '金', '土'],
    };
  },
  computed: {
    calendar() {
      const today = new Date();
      const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
      const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
      const startDate = new Date(firstDayOfMonth);
      startDate.setDate(startDate.getDate() - startDate.getDay()); // 最初の週の日曜日を求める
      const endDate = new Date(lastDayOfMonth);
      endDate.setDate(endDate.getDate() + (6 - endDate.getDay())); // 最後の週の土曜日を求める

      const calendar = [];
      let currentDay = new Date(startDate);
      let week = [];

      while (currentDay <= endDate) {
        if (currentDay >= firstDayOfMonth && currentDay <= lastDayOfMonth) {
          const currentDate = new Date(currentDay);
          week.push(currentDate);
        } else {
          week.push(null);
        }

        if (currentDay.getDay() === 6) {
          calendar.push(week);
          week = [];
        }
        currentDay.setDate(currentDay.getDate() + 1);
      }

      return calendar;
    },
  },
};
</script>

<style scoped>
.text-center {
  text-align: center;
}
.date {
  margin-bottom: 10px;
  font-weight: bold;
}
</style>
