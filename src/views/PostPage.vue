<template>
  <ion-page>
    <ion-content class="ion-padding">
      <ion-card
          class="ion-no-margin ion-margin-vertical"
      >
        <ion-card-content>
          <ion-img
              :src="post?.photo"
              class="ion-margin-bottom"
          />
          <ion-row>
            <ion-col size="12">
              <ion-row>
                <ion-col size="1" style="display: flex; align-items: center; justify-content: end">
                  <ion-icon
                      :icon="heartOutline"
                  />
                </ion-col>
                <ion-col size="2">
                  <span>
                    {{ post?.likes }}
                  </span>
                </ion-col>
              </ion-row>
            </ion-col>
            <ion-col>
              <p>
                {{ post?.description }}
              </p>
            </ion-col>
          </ion-row>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { userStore } from "@/store/store.js";
import { useRoute } from "vue-router";
import {computed} from "vue";
import { heartOutline } from "ionicons/icons";

const store = userStore()
const route = useRoute()

const post = computed(() => {
  const subscriber = store.userEntity.subscribers.find(sub => Number(sub.profile.id) === Number(route.params.userId))
  return subscriber?.posts.find(post => Number(post.id) === Number(route.params.id))
})

</script>