<template>
  <div>
    <v-row>
      <v-col v-for="(day, index) in daysOfWeek" :key="index" :class="getWeekEnd(index)">
        {{ day }}
      </v-col>
    </v-row>
    <v-row v-for="(week, weekIndex) in calendar" :key="weekIndex" class="calendar-row">
      <v-col
        v-for="(date, dateIndex) in week"
        :key="dateIndex"
        class="calendar-cell"
        :class="[getDateClass(date), { 'first-cell': dateIndex === 0 }, { 'last-cell': dateIndex === week.length - 1 }]"
      >
        <div v-if="date">
          <div :class="getDateTextClass(date)">{{ date.getDate() }}</div>
          <v-text-field outlined></v-text-field>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import isJapaneseHoliday  from "japanese-holidays";
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
  methods: {
    getWeekEnd(index){
      if(index == 0 ){
        return "text-center header-cell red"
      }
      else if(index == 6){
        return "text-center header-cell blue"
      }
      else{
        return "text-center header-cell"
      }
    },
    getDateClass(date) {
      if (!date) {
        return '';
      }
      // if (date.getDay() === 0 || isJapaneseHoliday.isHoliday(date)) {
      //   return 'red';
      // } else if (date.getDay() === 6) {
      //   return 'blue';
      // }
      return '';
    },
    getDateTextClass(date) {
      if (!date) {
        return '';
      }
      // if (date.getDay() === 0 || date.getDay() === 6) {
      //   return 'colored-date';
      // }
      if (date.getDay() === 0 || isJapaneseHoliday.isHoliday(date)) {
        return 'red';
      } else if (date.getDay() === 6) {
        return 'blue';
      }
      return '';
    },
  },
};
</script>

<style scoped>
.text-center {
  text-align: center;
}
.header-cell {
  background-color: #f5f5f5;
  font-weight: bold;
}
.calendar-row {
  border-bottom: 1px solid #ddd;
}
.calendar-cell {
  padding: 10px;
  text-align: center;
}
.first-cell {
  border-left: 1px solid #ddd;
}
.last-cell {
  border-right: 1px solid #ddd;
}
.red {
  color: red;
  font-weight: bold;
}
.blue {
  color: blue;
  font-weight: bold;
}
.colored-date {
  font-weight: bold;
}
</style>
