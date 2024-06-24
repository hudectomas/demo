<template>
  <section class="py-20 bg-gray-100">
    <div class="container max-w-8xl mx-auto px-4 md:px-8">
      <h2 class="text-4xl md:text-5xl text-center font-bold text-primary mb-6">Cenník</h2>
      <div class="grid grid-cols-1 gap-8">
        <!-- Brúsenie parkiet Section -->
        <div class="mx-auto">
          <h3 class="text-3xl font-semibold text-primary mb-4">Brúsenie parkiet</h3>
          <table class="min-w-full bg-white rounded-xl shadow-lg">
            <thead class="rounded-xl">
              <tr>
                <th class="py-3 px-4 bg-primary text-white">Popis</th>
                <th class="py-3 px-4 bg-primary text-white">Cena</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in sandingPriceList" :key="item.id">
                <td class="border px-5 lg:w-[700px] py-3">
                  {{ item.name }}
                </td>
                <td class="border px-5 w-[140px] md:min-w-[180px] text-center py-3">
                  {{ item.price }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- Pokládka podlahy Section -->
        <div class="mx-auto">
          <h3 class="text-3xl font-semibold text-primary mb-4">Pokládka podlahy</h3>
          <table class="min-w-full bg-white rounded-xl shadow-lg">
            <thead class="rounded-xl">
              <tr>
                <th class="py-3 px-4 bg-primary text-white">Popis</th>
                <th class="py-3 px-4 bg-primary text-white">Cena</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in layingPriceList" :key="item.id">
                <td class="border lg:w-[700px] px-5 py-3">
                  {{ item.name }}
                </td>
                <td class="border px-5 w-[140px] md:min-w-[180px] text-center py-3">
                  {{ item.price }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Brúsenie základovej platne Section -->
        <div class="mx-auto">
          <h3 class="text-3xl font-semibold text-primary mb-4">Brúsenie základovej platne</h3>
          <table class="min-w-full bg-white rounded-xl shadow-lg">
            <thead class="rounded-xl">
              <tr>
                <th class="py-3 px-4 bg-primary text-white">Popis</th>
                <th class="py-3 px-4 bg-primary text-white">Cena</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in grindingPriceList" :key="item.id">
                <td class="border px-5 lg:w-[700px] py-3">
                  {{ item.name }}
                </td>
                <td class="border px-5 w-[140px] md:min-w-[180px] text-center py-3">
                  {{ item.price }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const sandingPriceList = ref([]);
const layingPriceList = ref([]);
const grindingPriceList = ref([]);

onMounted(async () => {
  try {
    const response = await fetch('http://localhost/cennik/fetch_prices.php');
    const data = await response.json();
    sandingPriceList.value = data.sandingPrices;
    layingPriceList.value = data.layingPrices;
    grindingPriceList.value = data.grindingPrices;
  } catch (error) {
    console.error('Chyba pri načítaní cien:', error.message);
  }
});
</script>
