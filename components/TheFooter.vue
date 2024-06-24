<template>
  <footer class="bg-gray-900 text-white py-10">
    <div class="container max-w-8xl mx-auto px-4 md:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Footer Section 1: Logo and About -->
        <div class="mb-4 md:mb-0">
          <h2 class="text-lg font-bold mb-4">
            <NuxtLink to="/" aria-label="CHrenovácie">
              <img
                src="/logo.png"
                loading="lazy"
                style="color: transparent"
                width="60"
                height="60"
                alt="CHrenovácie Logo"
            /></NuxtLink>
          </h2>
          <p class="text-sm">
            Profesionálna renovácia drevených podláh a schodov. Presvedčte sa o našej
            kvalite!
          </p>
        </div>

        <!-- Footer Section 2: Quick Links -->
        <div>
          <h3 class="text-lg font-bold mb-4">Rýchle odkazy</h3>
          <ul class="space-y-2">
            <li><NuxtLink to="/" class="text-sm">Domov</NuxtLink></li>
            <li><NuxtLink to="/about-us" class="text-sm">O nás</NuxtLink></li>
            <li><NuxtLink to="/services" class="text-sm">Naše služby</NuxtLink></li>
            <li><NuxtLink to="/gallery" class="text-sm">Galéria</NuxtLink></li>
            <li><NuxtLink to="/pricing" class="text-sm">Cennik</NuxtLink></li>
            <li><NuxtLink to="/contact-us" class="text-sm">Kontakt</NuxtLink></li>
          </ul>
        </div>

        <!-- Footer Section 3: Contact Information -->
        <div>
          <h3 class="text-lg font-bold mb-4">Kontakt</h3>
          <ul class="space-y-2">
            <li><p class="text-sm">Adresa: Žitavanská 648/38 951 93 Topoľčianky</p></li>
            <li><p class="text-sm">Telefón: +421 908 814 158</p></li>
            <li><p class="text-sm">Email: chren.marek@gmail.com</p></li>
          </ul>
        </div>

        <!-- Footer Section 4: Social Media Links -->
        <div>
          <h3 class="text-lg font-bold mb-4">Sociálne siete</h3>
          <ul class="flex space-x-4">
            <li>
              <a href="https://www.facebook.com/chrenovacie" class="text-sm" aria-label="Facebook">
                <Icon name="bxl:facebook-circle" class="text-white h-6 w-6"
              /></a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=DBqy9ShT_z8" class="text-sm" aria-label="Youtube">
                <Icon name="bxl:youtube" class="text-white h-6 w-6"
              /></a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Copyright -->
      <div class="border-t border-gray-800 mt-8 pt-4 text-sm text-center">
        &copy; 2024 Chrenovácie. Všetky práva vyhradené.
      </div>
    </div>
  </footer>
</template>
