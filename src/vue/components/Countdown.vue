<script setup>
import { ref, computed } from "vue";

const { deadline, showbeforedays } = defineProps({
  deadline: String,
  showbeforedays: Number,
});

const displayDays = ref(0);
const displayHours = ref(0);
const displayMinutes = ref(0);
const displaySeconds = ref(0);
const isOver = ref(false);
const isLoaded = ref(false);

const _seconds = 1000;
const _minutes = _seconds * 60;
const _hours = _minutes * 60;
const _days = _hours * 24;

const isShown = computed(() => {
  const now = new Date();
  const dateToDisplayCountdown = new Date(deadlineForIos.value);
  dateToDisplayCountdown.setDate(
    dateToDisplayCountdown.getDate() - showbeforedays
  );
  return now >= dateToDisplayCountdown;
});

const deadlineForIos = computed(() => {
  const t = deadline.split(/[- :]/);
  const d = new Date(t[0], t[1] - 1, t[2], t[3], t[4], t[5]);
  return new Date(d);
});

const formatNum = (num) => {
  return num < 10 ? "0" + num : num;
};

const showRemaining = () => {
  const timer = setInterval(() => {
    const now = new Date();
    const end = new Date(deadlineForIos.value);

    const distance = end.getTime() - now.getTime();

    if (distance < 0) {
      clearInterval(timer);
      isOver.value = true;
      return;
    }

    const days = Math.floor(distance / _days);
    const hours = Math.floor((distance % _days) / _hours);
    const minutes = Math.floor((distance % _hours) / _minutes);
    const seconds = Math.floor((distance % _minutes) / _seconds);

    displayMinutes.value = formatNum(minutes);
    displaySeconds.value = formatNum(seconds);
    displayHours.value = formatNum(hours);
    displayDays.value = formatNum(days);

    isLoaded.value = true;
  }, _seconds);
};

showRemaining();
</script>

<template>
  <div class="my-8 text-dark" v-if="isShown && !isOver && isLoaded">
    <h3 class="text-2xl md:text-3xl mb-4 text-center"><slot></slot></h3>

    <div class="flex text-center justify-center">
      <div class="days countdown-element">
        <div class="p-2 md:p-6 countdown-number bg-dark text-secondary">
          {{ displayDays }}
        </div>
        <div class="countdown-text">Jours</div>
      </div>
      <div class="countdown-dots mt-2 md:mt-5 text-4xl mx-2">:</div>
      <div class="hours countdown-element">
        <div class="p-2 md:p-6 countdown-number bg-dark text-secondary">
          {{ displayHours }}
        </div>
        <div class="countdown-text">Heures</div>
      </div>
      <div class="countdown-dots mt-2 md:mt-5 text-4xl mx-2">:</div>
      <div class="minutes countdown-element">
        <div class="p-2 md:p-6 countdown-number bg-dark text-secondary">
          {{ displayMinutes }}
        </div>
        <div class="countdown-text">Minutes</div>
      </div>
      <div class="countdown-dots text-4xl mx-3"></div>
      <div class="seconds countdown-element">
        <div class="p-2 md:p-6 countdown-number bg-dark text-secondary">
          {{ displaySeconds }}
        </div>
        <div class="countdown-text">Secondes</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.countdown {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

.countdown-number {
  font-size: 2em;
  border-radius: 20px;
}

.countdown-element {
  text-align: center;
}

.countdown-text {
  font-size: 1.2em;
  color: rgb(58, 58, 58);
}
</style>
