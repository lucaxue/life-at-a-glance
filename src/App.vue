<script setup lang="ts">
import dayjs from "dayjs";

const dateOfBirth = ref<dayjs.Dayjs>(dayjs().subtract(20, "year"));
const dateOfDeath = dayjs(dateOfBirth.value).add(90, "year");

const range = useDateRange({
  start: dateOfBirth.value,
  finish: dateOfDeath,
  intervalUnit: "year",
});
</script>

<template>
  <div>
    <ul class="flex flex-wrap border-black border-2">
      <li
        v-for="date in range"
        :class="{ 'bg-black': date.isBefore(dayjs()) }"
        class="w-20 h-20"
      ></li>
    </ul>
  </div>
</template>
