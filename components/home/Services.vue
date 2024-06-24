<template>
  <section class="pb-20 pt-40 bg-white" id="services">
    <div class="container max-w-8xl mx-auto px-4 md:px-8">
      <h2 class="text-3xl md:text-4xl font-bold text-primary text-center mb-10">
        Naše Služby
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Service Card 1 -->
        <div class="shadow-lg rounded-2xl relative group">
          <div class="overflow-hidden rounded-xl">
            <NuxtImg
              src="/images/renovacia_3_2.webp"
              alt="Wooden Structures Renovation"
              class="w-full h-56 object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-150"
              fit="cover"
              preload
              loading="lazy"
            />
          </div>
          <div class="p-3 lg:p-4">
            <h3 class="text-2xl font-semibold mt-4">Brúsenie podlahy</h3>
            <p class="mt-2 text-slate-700">
              Dôležitou súčasťou renovácie, ako aj pokládky nových parkiet, podláh bez
              povrchovej úpravy, je brúsenie.
            </p>
          </div>
          <div
            class="absolute inset-0 flex justify-center items-center rounded-2xl bg-primary bg-opacity-50 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
          >
            <NuxtLink
              to="/services#sanding_the_floor"
              class="mt-4 bg-primary text-white font-semibold py-3 px-10 rounded-xl shadow-md hover:bg-white hover:text-primary transition-colors duration-300"
            >
              Zistiť viac
            </NuxtLink>
          </div>
        </div>

        <div class="shadow-lg rounded-2xl relative group">
          <div class="overflow-hidden rounded-xl">
            <NuxtImg
              src="/images/polozenie_1_1.jpg"
              alt="Wooden Structures Renovation"
              class="w-full h-56 object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-150"
              fit="cover"
              preload
              loading="lazy"
            />
          </div>
          <div class="p-3 lg:p-4">
            <h3 class="text-2xl font-semibold mt-4">Pokládka podlahy</h3>
            <p class="mt-2 text-slate-700">
              Rôzne spôsoby pokládky podláh: masívne parkety, laminátové parkety,
              veľkoplošné parkety, montované drevené podlahy (dlážkovica).
            </p>
          </div>
          <div
            class="absolute inset-0 flex justify-center items-center rounded-2xl bg-primary bg-opacity-50 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
          >
            <NuxtLink
              to="/services#laying_the_floor"
              class="mt-4 bg-primary text-white font-semibold py-3 px-10 rounded-xl shadow-md hover:bg-white hover:text-primary transition-colors duration-300"
            >
              Zistiť viac
            </NuxtLink>
          </div>
        </div>
        <div class="shadow-lg rounded-2xl relative group">
          <div class="overflow-hidden rounded-xl">
            <NuxtImg
              src="/images/renovacia_9_3.jpg"
              alt="Wooden Structures Renovation"
              class="w-full h-56 object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-150"
              fit="cover"
              preload
              loading="lazy"
            />
          </div>
          <div class="p-3 lg:p-4">
            <h3 class="text-2xl font-semibold mt-4">Povrchová úprava</h3>
            <p class="mt-2 text-slate-700">
              Používame ekologické vodou riediteľné laky Bona pre renováciu podláh, s
              minimálnym zápachom a okamžitou možnosťou použitia renovovaných priestorov.
            </p>
          </div>
          <div
            class="absolute inset-0 flex justify-center items-center rounded-2xl bg-primary bg-opacity-50 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
          >
            <NuxtLink
              to="/services#surface_treatment"
              class="mt-4 bg-primary text-white font-semibold py-3 px-10 rounded-xl shadow-md hover:bg-white hover:text-primary transition-colors duration-300"
            >
              Zistiť viac
            </NuxtLink>
          </div>
        </div>

        <div class="shadow-lg rounded-2xl relative group">
          <div class="overflow-hidden rounded-xl">
            <NuxtImg
              src="/images/renovacia_11_6.jpg"
              alt="Wooden Structures Renovation"
              class="w-full h-56 object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-150"
              fit="cover"
              preload
              loading="lazy"
            />
          </div>
          <div class="p-3 lg:p-4">
            <h3 class="text-2xl font-semibold mt-4">Ostatné renovácie</h3>
            <p class="mt-2 text-slate-700">
              Renovujeme schody, altánky, prístrešky, terasy, drevené ohrady, dvere z
              masívu, čistíme keramickú dlažbu a brúsime základové platne pred pokládkou
              hydroizolácie.
            </p>
          </div>
          <div
            class="absolute inset-0 flex justify-center items-center rounded-2xl bg-primary bg-opacity-50 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
          >
            <NuxtLink
              to="/services#other_renovations"
              class="mt-4 bg-primary text-white font-semibold py-3 px-10 rounded-xl shadow-md hover:bg-white hover:text-primary transition-colors duration-300"
            >
              Zistiť viac
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
