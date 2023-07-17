<template>
  <ion-page>
    <ion-content class="ion-padding">
      <ion-row class="profile-info ion-justify-content-between">
        <ion-col size="8">
          <ion-avatar>
            <ion-img :src='subscriber?.profile?.avatar'  alt="" style="width: 100%"/>
          </ion-avatar>
        </ion-col>
        <ion-col size="12">
          <ion-card class="ion-no-margin">
            <ion-card-header>
              <ion-card-title>
                {{ subscriber?.profile?.name }}
              </ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <p>
                {{ subscriber?.profile?.info }}
              </p>
            </ion-card-content>
          </ion-card>
        </ion-col>
      </ion-row>

      <ion-card class="ion-no-margin ion-no-padding ion-margin-top">
        <ion-card-content class="ion-no-padding">
          <ion-row>
            <ion-col
                size="4"
                v-for="post in subscriber?.posts"
                :key="post.id"
                @click="router.push({ name: 'Post', params: { id: post.id, userId: post.userId } })"
            >
              <ion-img
                  :src="post?.photo"
                  class="ion-margin-bottom"
              />
            </ion-col>
          </ion-row>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { userStore } from "@/store/store.js";
import { useRouter, useRoute } from "vue-router";
import { ref, onMounted } from "vue";

const store = userStore()
const route = useRoute()
const router = useRouter()

const subscriber = ref(null)

onMounted(() => {
  subscriber.value = store.userEntity.subscribers?.find(sub => Number(sub.profile.id) === Number(route.params.id))
})

</script>

<style>
.profile-info {
  flex-direction: column;
  align-items: center;
}

ion-avatar {
  width: 100%;
  height: 100%;
}
</style>