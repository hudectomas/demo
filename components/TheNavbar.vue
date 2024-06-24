<template>
  <header
    :class="['sticky w-full py-8 inset-0 z-50 border-b bg-transparent backdrop-blur-md']"
  >
    <nav
      class="mx-auto flex items-center justify-between container max-w-8xl gap-8 lg:px-10 px-4 md:px-8 transition-all duration-200 ease-in-out"
    >
      <div class="relative flex items-center">
        <NuxtLink to="/" aria-label="CHrenovácie">
          <img
            src="/logo.png"
            loading="lazy"
            style="color: transparent"
            width="60"
            height="60"
            alt="CHrenovácie Logo"
          />
        </NuxtLink>
      </div>
      <ul :class="['hidden text-lg  items-center justify-center gap-10 lg:flex']">
        <li class="pt-1.5 font-medium text-primary">
          <NuxtLink to="/">Domov</NuxtLink>
        </li>
        <li class="pt-1.5 font-medium text-primary">
          <NuxtLink to="/about-us">O Nás</NuxtLink>
        </li>
        <li class="pt-1.5 font-medium text-primary">
          <NuxtLink to="/services">Naše Služby</NuxtLink>
        </li>
        <li class="pt-1.5 font-medium text-primary">
          <NuxtLink to="/gallery">Galéria</NuxtLink>
        </li>
        <li class="pt-1.5 font-medium text-primary">
          <NuxtLink to="/pricing">Cenník</NuxtLink>
        </li>
      </ul>
      <div class="hidden items-center justify-center gap-6 lg:flex">
        <NuxtLink
          :class="[
            'inline-flex text-lg py-3 rounded-xl px-10  bg-primary text-white font-medium ',
          ]"
          to="/contact-us"
        >
          Kontaktujte nás
        </NuxtLink>
      </div>
      <div class="relative flex items-center justify-center lg:hidden">
        <button
          type="button"
          id="humburger"
          aria-label="Humburger"
          @click="$emit('toggle-sidebar')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
            class="h-6 w-auto text-slate-900"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  </header>

  <!-- Mobile sidenav -->
  <nav
    class="mx-auto h-screen bg-primary flex flex-col items-center justify-between sm:px-16 md:px-28 inset-0 z-[9999999] fixed gap-8 px-4 transition-all duration-300 ease-in-out py-7 origin-right"
    :class="isOpenSidebar ? 'translate-x-0' : 'translate-x-[100%]'"
  >
    <div class="relative flex w-full items-center justify-between">
      <NuxtLink to="/" @click="onToggleSidebar" aria-label="CHrenovácie">
        <img
          src="/logo.png"
          loading="lazy"
          style="color: transparent"
          width="60"
          height="60"
          alt="CHrenovácie Logo"
      /></NuxtLink>
      <button
        id="closeHumburger"
        aria-label="CloseHumburger"
        type="button"
        @click="$emit('toggle-sidebar')"
        class="rounded-full border p-2"
      >
        <Icon name="heroicons:x-mark-16-solid" class="text-white h-6 w-6" />
      </button>
    </div>
    <ul class="items-center justify-center gap-10 flex-col flex">
      <li class="pt-1.5 text-lg font-medium text-white" @click="onToggleSidebar">
        <NuxtLink to="/">Domov</NuxtLink>
      </li>
      <li class="pt-1.5 text-lg font-medium text-white" @click="onToggleSidebar">
        <NuxtLink to="/about-us">O Nás</NuxtLink>
      </li>
      <li class="pt-1.5 text-lg font-medium text-white" @click="onToggleSidebar">
        <NuxtLink to="/services">Nase Služby</NuxtLink>
      </li>
      <li class="pt-1.5 text-lg font-medium text-white" @click="onToggleSidebar">
        <NuxtLink to="/gallery">Galéria</NuxtLink>
      </li>
      <li class="pt-1.5 text-lg font-medium text-white" @click="onToggleSidebar">
        <NuxtLink to="/pricing">Cennik</NuxtLink>
      </li>
    </ul>
    <div class="items-center justify-center gap-6 flex" @click="onToggleSidebar">
      <NuxtLink
        to="/contact-us"
        class="inline-flex rounded-xl px-10 py-3 bg-[#210f05] text-white font-medium text-lg"
        >Kontaktujte nás</NuxtLink
      >
    </div>
  </nav>
</template>

<script setup>
const props = defineProps({
  isOpenSidebar: {
    type: Boolean,
    required: true,
  },
  isScrolled: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['toggle-sidebar'])

const onToggleSidebar = () => {
  emit('toggle-sidebar')
}
</script>

<style scoped>
header {
  transition: all 0.3s ease-in-out;
}
</style>
