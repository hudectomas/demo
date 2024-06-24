<template>
  <section class="min-h-screen">
    <div
      class="container max-w-8xl lg:px-10 min-h-screen mx-auto flex flex-col lg:flex-row items-center justify-between py-8 lg:py-20 px-4 md:px-8 lg:-mt-20"
    >
      <div class="w-full lg:w-1/2 px-3 lg:px-0">
        <h1
          class="text-4xl md:text-5xl text-left lg:text-5xl font-bold text-primary lg:mt-14"
        >
          O Nás
        </h1>
        <p class="uppercase mt-5 text-slate-700 text-lg font-medium">
          Renovácia parkiet - brúsenie, lakovanie parkiet, drevených podláh, schodov a iné
          služby
        </p>
        <p class="lg:text-lg mt-8 text-slate-700">
          Firma Chrenovácie sa zaoberá renováciou starých drevených podláh a schodísk, ako
          aj pokládkou nových, lepených, voľne ukladaných a taktiež montovaných podláh.
          Ale vieme zrenovovať všetko od dreva: altánky, prístrešky, terasy, drevenné
          ohrady, masívne drevené dvere a podobne.
          <br /><br />
          Hlavnou výsadou našej firmy je kvalita práce, precíznosť, no v neposlednom rade
          dochvíľnosť. Keďže v dnešnej uponáhlanej dobe je problém nájsť spoľahlivého
          majstra, ktorý hlavne dodrží, čo sľúbi - či je to už presný čas, kvalita alebo
          cena práce - naša firma Vám garantuje naozaj seriózny a profesionálny prístup.

          <br /><br />
          Nevyhadzujte staré parkety, ale presvedčte sa o tom, že aj zo starej zájdenej
          podlahy sa dá vykúzliť krásna podlaha, ako nová.
        </p>
        <div
          class="mt-14 flex items-center justify-center flex-col md:flex-row lg:justify-start md:space-x-5"
        >
          <NuxtLink
            to="/services"
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
        <img
          src="https://images.unsplash.com/photo-1520540601586-7c43223bd69b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          class="rounded-2xl object-cover lg:h-[500px]"
        />
      </div>
    </div>
  </section>
</template>
