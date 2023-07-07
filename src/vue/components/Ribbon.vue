<script setup></script>

<template>
  <!-- <div
    class="bg-secondary origin-top float-right mt-9 mr-9 w-72 text-center"
    style="transform: translateX(50%) rotate(45deg)"
  > -->
  <div class="absolute right-0 top-0">
    <div
      class="bg-secondary font-semibold text-sm py-1 origin-top float-right mt-7 mr-7 w-40 text-center"
      style="transform: translateX(50%) rotate(45deg)"
    >
      <slot />
    </div>
  </div>
</template>
