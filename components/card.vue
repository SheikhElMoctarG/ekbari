<template>
  <div class="p-2 shadow-sm">
    <a :href="link" class="font-bold py-2">{{ title }}</a>
    <div class="flex text-sm py-2 items-center">
      <span class="font-semibold">{{ source }}</span>
      <div class="mx-3 w-1 h-1 bg-slate-300 rounded-full"></div>
      <span class="font-medium text-xs">{{ ago(date) }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["title", "link", "source", "date"],
  methods: {
    calculTimeAgo(target) {
      const currentDate = new Date();
      const targetDateTime = new Date(target);
      const timeDifference = currentDate - targetDateTime;
      const secondsDifference = Math.floor(timeDifference / 1000);
      const minutesDifference = Math.floor(secondsDifference / 60);
      const hoursDifference = Math.floor(minutesDifference / 60);
      const daysDifference = Math.floor(hoursDifference / 24);

      return {
        seconds: secondsDifference,
        minutes: minutesDifference,
        hours: hoursDifference,
        days: daysDifference,
      };
    },
    ago(date) {
      const timeAgo = this.calculTimeAgo(date);

      if (timeAgo.seconds < 60) {
        return `منذ ${timeAgo.seconds} ثانية`;
      } else if (timeAgo.seconds >= 60 && timeAgo.minutes < 60) {
        if(timeAgo.minutes == 1){
            return `منذو دقيقة واحدة`
        }
        return `منذ ${timeAgo.minutes} دقيقة`;
      } else if (timeAgo.minutes >= 60 && timeAgo.hours < 24) {
        if(timeAgo.hours == 1){
            return `منذو ساعة واحدة`
        }
        return `منذ ${timeAgo.hours} ساعات`;
      } else {
        return `منذ ${timeAgo.days} أيام`;
      }
    },
  },
};
</script>

<style></style>
