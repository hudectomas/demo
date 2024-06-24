<template>
  <div>
    <TheNavbar
      @toggle-sidebar="handleToggleSidebar"
      :is-open-sidebar="isOpenSidebar"
      :isScrolled="isScrolled"
    />
    <slot />
    <ScrollDown @scrollToTop="scrollToTop" :show-scroll-to-top="showScrollButton" />
    <TheFooter />
  </div>
</template>

<script setup>
const showScrollButton = ref(false)
const isOpenSidebar = ref(false)
const isScrolled = ref(false)

const handleToggleSidebar = () => {
  isOpenSidebar.value = !isOpenSidebar.value
}

const checkScrollTop = () => {
  showScrollButton.value = window.pageYOffset > 100 // Adjust 100 to the scroll position where you want to show the button
  isScrolled.value = window.scrollY > 50
}

const scrollToTop = () => {
  console.log('ss')
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

onMounted(() => {
  window.addEventListener('scroll', checkScrollTop)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScrollTop)
})
</script>
