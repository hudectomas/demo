<template>
  <section class="bg-[#ecdfd8] py-20 flex items-center justify-center h-screen -mt-28">
    <div
      class="container max-w-8xl lg:px-10 mx-auto flex items-center justify-center py-20 px-4 md:px-8"
    >
      <div class="w-full mx-auto text-center lg:max-w-3xl px-3 lg:px-0">
        <h1 class="text-4xl md:text-5xl text-center lg:text-5xl font-bold text-primary">
          Galéria Našich Prác
        </h1>
        <p class="lg:text-lg mt-8 text-slate-700">
          Prezrite si výber našich najlepších projektov. Sme hrdý na kvalitu a pozornosť k
          detailom, ktoré vkladáme do každej renovácie.
        </p>
        <div
          class="mt-14 flex items-center justify-center flex-col md:flex-row md:space-x-5"
        >
          <NuxtLink
            to="#gallery"
            class="inline-flex rounded-xl px-10 py-3 bg-primary text-white font-medium text-lg mb-5 md:mb-0"
          >
            Prezrite si viac
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
