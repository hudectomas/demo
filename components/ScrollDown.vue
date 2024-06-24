<template>
  <div class="fixed bottom-5 md:bottom-10 right-0 px-4 md:px-8 z-20">
    <button
      v-if="showScrollToTop"
      @click="$emit('scroll-to-top')"
      id="backToTop"
      title="backToTop"
      class="p-3 flex justify-center items-center text-blackPrimary rounded-full transition-all duration-300 ease-in-out bg-[#210f05] hover:text-gray-900"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        class="w-4 h-4 font-semibold text-white"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
        />
      </svg>
    </button>
  </div>
</template>

<script setup>
defineProps({
  showScrollToTop: {
    type: Boolean,
    required: true,
  },
})
</script>
