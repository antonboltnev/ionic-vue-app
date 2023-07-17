<template>
  <ion-app>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button
              defaultHref="/"
              v-if="routsToShowBack"
          >
            Back
          </ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-router-outlet />
    </ion-content>
  </ion-app>
</template>

<script setup>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute()

const routsToShowBack = computed(() => {
  return route.name !== 'Home'
})
</script>
