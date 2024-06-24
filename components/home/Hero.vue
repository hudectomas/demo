<template>
  <section class="min-h-screen">
    <div
      class="container max-w-8xl lg:px-10 min-h-screen mx-auto flex flex-col lg:flex-row items-center justify-between py-20 px-4 md:px-8 lg:-mt-20"
    >
      <div class="w-full lg:w-1/2 px-3 lg:px-0">
        <h1
          class="text-4xl md:text-5xl text-center lg:text-left lg:text-5xl font-bold text-primary"
        >
          <!-- Revitalize Your Space <br />
          with Expert Parquet and Wood Renovations -->
          Oživte svoj priestor s expertnou renováciou parkiet a drevených podláh
        </h1>
        <p class="lg:text-lg mt-8 text-slate-700">
          <!-- At Chrenovácie, we transform old wooden floors and stairs with precision and
          quality. Don't replace—renew! -->
          Vo firme Chrenovácie transformujeme staré drevené podlahy a schody s precíznosťou a
          kvalitou. Nenahradzujte—obnovte!
        </p>
        <div
          class="mt-14 flex items-center justify-center flex-col md:flex-row lg:justify-start md:space-x-5"
        >
          <NuxtLink
            to="#services"
            class="inline-flex rounded-xl px-10 py-3 bg-primary text-white font-medium text-lg mb-5 md:mb-0"
          >
            Naše Služby
          </NuxtLink>

          <NuxtLink
            to="/contact-us"
            class="inline-flex rounded-xl px-10 py-3 bg-gray-300 text-primary font-medium text-lg"
            >Kontaktujte nás</NuxtLink
          >
        </div>
      </div>
      <div class="w-full lg:w-1/2 lg:pl-20 mt-12 lg:mt-0">
        <NuxtImg
          src="/images/hero-image.webp"
          class="rounded-2xl object-cover lg:h-[500px]"
          fit="cover"
          preload
          loading="lazy"
          alt="CHrenovácie Hero Image"
        />
      </div>
    </div>
  </section>
</template>
