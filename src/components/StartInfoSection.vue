<template>
  <div class="content">
    <div class="start-info-container">
      <InfoSection
        fullName="Dawid Kula"
        email="dawid3104@onet.pl"
        phone="782503000"
        profileLinkedIn="https://www.linkedin.com/in/dawid-kula-97256623b/"
      >
        <template #heading>Zadania rekrutacyjne - Informacje </template>
        <template #default>
          <p>
            Dziękuję za możliwość udziału w procesie rekrutacyjnym i wykazania
            się swoimi umiejętnościami. W odpowiedzi na zadania rekrutacyjne
            stworzyłem prostą stronę internetową, w której każda podstrona
            odpowiada jednemu z zadań. Projekt zbudowałem przy użyciu Vue 3 i
            wykorzystałem Composition API do zarządzania stanem i logiką
            komponentów. Do wykonywania żądań HTTP korzystam z Axiosa, a za
            nawigację odpowiada Vue Router. Dodatkowo, zaimplementowałem ESLinta
            i Prettiera, aby zapewnić spójność i czytelność kodu. Link do
            repozytorium na GitHubie z pełnym projektem oraz rozwiązaniami
            poszczególnych zadań znajdziecie tutaj:
            <a
              href="https://github.com/KULAQ123?tab=repositories"
              target="_blank"
              >GitHub</a
            >.
          </p>
        </template>
      </InfoSection>
    </div>
  </div>
</template>

<script setup>
import InfoSection from "@/components/InfoSection.vue";
</script>
