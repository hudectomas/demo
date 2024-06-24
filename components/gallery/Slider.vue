<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
const images = ref([
  {
    id: 1,
    src: '/images/polozenie_1_1.jpg',
  },
  {
    id: 2,
    src: '/images/renovacia_8_1.jpg',
  },
  {
    id: 3,
    src: '/images/renovacia_9_2.jpg',
  },
  {
    id: 4,
    src: '/images/polozenie_4_1.jpg',
  },
  {
    id: 5,
    src: '/images/polozenie_4_2.jpg',
  },
  {
    id: 6,
    src: '/images/schody_2_2.jpg',
  },
  {
    id: 7,
    src: '/images/polozenie_4_4.jpg',
  },
  {
    id: 8,
    src: '/images/renovacia_8_1.jpg',
  },
])
const route = useRoute()

const currentSlide = ref(0)
const currentSlideLarge = ref(0)
const showModal = ref(false)
const showModalLarge = ref(false)

const slideTo = (val) => {
  currentSlide.value = val
  showModal.value = true
}

const slideToLarge = (val) => {
  currentSlideLarge.value = val
  showModalLarge.value = true
}

const categories = ref({
  All: [
    {
      id: 1,
      src: '/images/polozenie_1_1.jpg',
    },
    {
      id: 2,
      src: '/images/polozenie_1_2.jpg',
    },
    {
      id: 3,
      src: '/images/polozenie_3_1.jpg',
    },
    {
      id: 4,
      src: '/images/polozenie_4_1.jpg',
    },
    {
      id: 5,
      src: '/images/polozenie_4_2.jpg',
    },
    {
      id: 6,
      src: '/images/polozenie_4_3.jpg',
    },
    {
      id: 7,
      src: '/images/polozenie_4_4.jpg',
    },
    {
      id: 8,
      src: '/images/renovacia_8_1.jpg',
    },
    {
      id: 9,
      src: '/images/renovacia_8_2.jpg',
    },
    {
      id: 10,
      src: '/images/renovacia_8_3.jpg',
    },
    {
      id: 11,
      src: '/images/renovacia_8_4.jpg',
    },
    {
      id: 12,
      src: '/images/renovacia_9_1.jpg',
    },
    {
      id: 13,
      src: '/images/renovacia_9_2.jpg',
    },
    {
      id: 14,
      src: '/images/renovacia_9_3.jpg',
    },
    {
      id: 15,
      src: '/images/renovacia_9_4.jpg',
    },
    {
      id: 16,
      src: '/images/renovacia_9_5.jpg',
    },
    {
      id: 17,
      src: '/images/renovacia_9_3.jpg',
    },
    {
      id: 18,
      src: '/images/renovacia_9_4.jpg',
    },
    {
      id: 19,
      src: '/images/renovacia_9_5.jpg',
    },
    {
      id: 20,
      src: '/images/renovacia_10_1.jpg',
    },
    {
      id: 21,
      src: '/images/renovacia_10_2.jpg',
    },
    {
      id: 22,
      src: '/images/renovacia_11_1.jpg',
    },
    {
      id: 23,
      src: '/images/renovacia_11_2.jpg',
    },
    {
      id: 24,
      src: '/images/renovacia_11_3.jpg',
    },
    {
      id: 25,
      src: '/images/renovacia_11_4.jpg',
    },
    {
      id: 26,
      src: '/images/renovacia_11_5.jpg',
    },
    {
      id: 27,
      src: '/images/renovacia_11_6.jpg',
    },
    {
      id: 28,
      src: '/images/renovacia_11_7.jpg',
    },
    {
      id: 29,
      src: '/images/schody_2_1.jpg',
    },
    {
      id: 30,
      src: '/images/schody_2_2.jpg',
    },
    {
      id: 31,
      src: '/images/schody_2_3.jpg',
    },
    {
      id: 32,
      src: '/images/schody_3_1.jpg',
    },
    {
      id: 33,
      src: '/images/schody_4_2.jpg',
    },
    {
      id: 34,
      src: '/images/schody_4_3.jpg',
    },
    {
      id: 35,
      src: '/images/schody_4_4.jpg',
    },
    {
      id: 36,
      src: '/images/schody_4_5.jpg',
    },
    {
      id: 37,
      src: '/images/schody_4_6.jpg',
    },
  ],
  Renovacia: [
    {
      id: 1,
      src: '/images/renovacia_8_1.jpg',
    },
    {
      id: 2,
      src: '/images/renovacia_8_2.jpg',
    },
    {
      id: 3,
      src: '/images/renovacia_8_3.jpg',
    },
    {
      id: 4,
      src: '/images/renovacia_8_4.jpg',
    },
    {
      id: 5,
      src: '/images/renovacia_9_1.jpg',
    },
    {
      id: 6,
      src: '/images/renovacia_9_2.jpg',
    },
    {
      id: 7,
      src: '/images/renovacia_9_3.jpg',
    },
    {
      id: 8,
      src: '/images/renovacia_9_4.jpg',
    },
    {
      id: 9,
      src: '/images/renovacia_9_5.jpg',
    },
    {
      id: 10,
      src: '/images/renovacia_9_3.jpg',
    },
    {
      id: 11,
      src: '/images/renovacia_9_4.jpg',
    },
    {
      id: 12,
      src: '/images/renovacia_9_5.jpg',
    },
    {
      id: 13,
      src: '/images/renovacia_10_1.jpg',
    },
    {
      id: 14,
      src: '/images/renovacia_10_2.jpg',
    },
    {
      id: 15,
      src: '/images/renovacia_11_1.jpg',
    },
    {
      id: 16,
      src: '/images/renovacia_11_2.jpg',
    },
    {
      id: 17,
      src: '/images/renovacia_11_3.jpg',
    },
    {
      id: 18,
      src: '/images/renovacia_11_4.jpg',
    },
    {
      id: 19,
      src: '/images/renovacia_11_5.jpg',
    },
    {
      id: 20,
      src: '/images/renovacia_11_6.jpg',
    },
    {
      id: 21,
      src: '/images/renovacia_11_7.jpg',
    },
  ],
  Schody: [
    {
      id: 1,
      src: '/images/schody_2_1.jpg',
    },
    {
      id: 2,
      src: '/images/schody_2_2.jpg',
    },
    {
      id: 3,
      src: '/images/schody_2_3.jpg',
    },
    {
      id: 4,
      src: '/images/schody_3_1.jpg',
    },
    {
      id: 5,
      src: '/images/schody_4_2.jpg',
    },
    {
      id: 6,
      src: '/images/schody_4_3.jpg',
    },
    {
      id: 7,
      src: '/images/schody_4_4.jpg',
    },
    {
      id: 8,
      src: '/images/schody_4_5.jpg',
    },
    {
      id: 9,
      src: '/images/schody_4_6.jpg',
    },
  ],
  Polozenie: [
    {
      id: 1,
      src: '/images/polozenie_1_1.jpg',
    },
    {
      id: 2,
      src: '/images/polozenie_1_2.jpg',
    },
    {
      id: 3,
      src: '/images/polozenie_3_1.jpg',
    },
    {
      id: 4,
      src: '/images/polozenie_4_1.jpg',
    },
    {
      id: 5,
      src: '/images/polozenie_4_2.jpg',
    },
    {
      id: 6,
      src: '/images/polozenie_4_3.jpg',
    },
    {
      id: 7,
      src: '/images/polozenie_4_4.jpg',
    },
  ],
})
</script>

<template>
  <TabGroup v-if="route.path.includes('/gallery')">
    <TabList class="flex space-x-1 rounded-xl bg-primary p-1 mb-7">
      <Tab
        v-for="category in Object.keys(categories)"
        as="template"
        :key="category"
        v-slot="{ selected }"
      >
        <button
          :class="[
            'w-full rounded-lg py-2.5 text-sm md:text-base font-semibold leading-5',
            'ring-white/60 ring-offset-2  focus:outline-none focus:ring-2',
            selected
              ? 'bg-white text-primary shadow'
              : 'text-white hover:bg-white/[0.12] hover:text-white',
          ]"
        >
          {{ category }}
        </button>
      </Tab>
    </TabList>

    <TabPanels class="mt-2">
      <TabPanel v-for="(items, index) in Object.values(categories)" :key="index">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8">
          <div v-for="(item, idx) in items" :key="item.id">
            <NuxtImg
              :src="item.src"
              alt="Renovation"
              class="cursor-pointer rounded-md object-cover w-full h-[200px]"
              preload
              loading="lazy"
              @click="slideToLarge(idx)"
            />
          </div>
        </div>
      </TabPanel>
    </TabPanels>
    <Modal :showModal="showModalLarge" @close="showModalLarge = false">
      <template #body>
        <Carousel v-model="currentSlideLarge">
          <Slide v-for="slide in images" :key="slide.id">
            <NuxtImg
              :src="slide.src"
              alt="Renovation"
              class="object-cover w-full rounded-xl max-h-[600px]"
              preload
              loading="lazy"
            />
          </Slide>

          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </template>
    </Modal>
  </TabGroup>

  <div class="relative" v-if="!$route.path.includes('/gallery')">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8">
      <div v-for="(slide, idx) in images" :key="idx">
        <NuxtImg
          :src="slide.src"
          alt="Renovation"
          class="cursor-pointer rounded-md object-cover w-full h-[200px]"
          preload
          loading="lazy"
          @click="slideTo(idx)"
        />
      </div>
    </div>
    <Modal :showModal="showModal" @close="showModal = false">
      <template #body>
        <Carousel v-model="currentSlide">
          <Slide v-for="slide in images" :key="slide.id">
            <NuxtImg
              :src="slide.src"
              alt="Renovation"
              class="lg:object-cover object-contain w-full rounded-xl h-full max-h-[600px]"
              preload
              loading="lazy"
            />
          </Slide>

          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </template>
    </Modal>
    <div class="items-center justify-center mt-20 flex">
      <NuxtLink
        to="/gallery"
        class="inline-flex rounded-xl px-10 py-3 bg-primary text-white font-medium text-lg"
      >
        Viac z našej práce
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 1px solid white;
  border-radius: 100px;
  color: white;
}
</style>
