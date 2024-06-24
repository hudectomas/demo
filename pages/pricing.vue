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
                  €{{ item.price }} /m²
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
                  €{{ item.price }} /m²
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="mx-auto">
          <h3 class="text-3xl font-semibold text-primary mb-4">
            Brúsenie základovej platne
          </h3>
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
                  €{{ item.price }} /m²
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
useHead({
  title: 'Cenník',
  meta: [
    {
      name: 'description',
      content:
        'Firma Chrenovácie sa zaoberá renováciou starých drevených podláh a schodísk, ako aj pokládkou nových, lepených, voľne ukladaných a taktiež montovaných podláh.',
    },
  ],
})
const sandingPriceList = ref([
  {
    id: 1,
    name: 'Brúsenie + tmelenie + 3x lak Bona Novia	',
    price: 16,
  },
  {
    id: 2,
    name: 'Brúsenie + tmelenie + 3x lak Bona Mega One (1x Prime + 2x Mega One)		',
    price: 24,
  },
  {
    id: 3,
    name: 'Brúsenie + tmelenie + 3x lak Bona Traffic HD (1x Prime + 2x Traffic)		',
    price: 29,
  },
  {
    id: 4,
    name: 'Brúsenie masívnej podlahy (dlážkovica) + 3x lak Bona Novia	',
    price: 15,
  },
  {
    id: 5,
    name: 'Brúsenie nelakovaných parkiet	',
    price: '9',
  },
  {
    id: 6,
    name: 'Brúsenie lakovaných parkiet lakom na vodnej báze	',
    price: 10.5,
  },
  {
    id: 7,
    name: 'Brúsenie lakovaných parkiet epoxidom		',
    price: 12,
  },
  {
    id: 8,
    name: 'Tmelenie parkiet tmelom na vodnej báze (Bona Mix&Fill)	',
    price: 7,
  },
  {
    id: 9,
    name:
      'Renovácia starých obvodových líšt (demontáž + vybrúsenie + 2x lak + montáž + vytmelenie)',
    price: 5,
  },
  {
    id: 10,
    name: 'Renovácia prahu (90x900mm)	',
    price: 5,
  },
  {
    id: 11,
    name: 'Renovácia schodov ',
    price: 40,
  },
])

const layingPriceList = ref([
  {
    id: 1,
    name: 'Montáž laminátovej podlahy	',
    price: 7,
  },
  {
    id: 2,
    name: 'Montáž veľkoplošných parkiet			',
    price: 8,
  },
  {
    id: 3,
    name: 'Montáž klasických masívnych parkiet do stromčeka			',
    price: 16,
  },
  {
    id: 4,
    name: 'Montáž klasických masívnych parkiet do remeňa	',
    price: 11,
  },
  {
    id: 5,
    name: 'Montáž mozaikových parkiet	',
    price: 7,
  },
  {
    id: 6,
    name:
      'Montáž masívnej podlahy - perodrážka (dlážkovica) (montáž roštu + montáž podlahy)',
    price: 12,
  },
  {
    id: 7,
    name: 'Montáž obvodových líšt (zapílenie + montáž + vytmelenie)	',
    price: 4,
  },
  {
    id: 8,
    name: 'Montáž prechodových líšt	',
    price: 3.5,
  },
  {
    id: 9,
    name: 'Montáž prahu (90x900mm)	',
    price: 5,
  },
  {
    id: 10,
    name: 'Úprava dverí (zrezanie)	',
    price: 10,
  },
])

const grindingPriceList = ref([
  {
    id: 1,
    name:
      'Brúsenie základovej platne pred pokládkou hydroizolácie (zbrúsenie ostrých výstupkov a nerovností - P36)',
    price: 4,
  },
  {
    id: 2,
    name: 'Brúsenie obvodových hrán základovej platne	',
    price: 2,
  },
])
</script>
