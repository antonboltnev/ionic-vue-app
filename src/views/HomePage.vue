<template>
  <ion-page>
    <ion-content :fullscreen="true" class="ion-padding ion-margin">
      <ion-row>
        <ion-col
            size="12"
        >
          <ion-card
              v-for="post in mergedPosts"
              :key="post.id"
              class="ion-no-margin ion-margin-vertical"
          >
            <ion-card-header
                @click="router.push({ name: 'Profile', params: { id: post.userId } })"
            >
              <ion-card-subtitle>
                {{ new Date(post.date).toDateString() }}
              </ion-card-subtitle>
              <ion-card-title>
                {{ getSubByPostId(post.userId).profile.name }}
              </ion-card-title>
            </ion-card-header>
            <ion-card-content >
              <ion-img
                  :src='post.photo'
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
                      <span>{{ post.likes }}</span>
                    </ion-col>
                  </ion-row>
                </ion-col>
                <ion-col>
                  <p>
                    {{ post.description }}
                  </p>
                </ion-col>
              </ion-row>
            </ion-card-content>
          </ion-card>
        </ion-col>
      </ion-row>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { userStore } from "@/store/store.js";
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import { heartOutline } from "ionicons/icons";

const store = userStore()
const router = useRouter()
const mergedPosts = ref([])

const mergePosts = () => {
  if (store.userEntity.subscribers) {
    return store.userEntity.subscribers.forEach(sub => {
      mergedPosts.value.push(...sub.posts)
    })
  }
}

const getSubByPostId = (id) => {
  return store.userEntity.subscribers.find(sub => sub.profile.id === id)
}

onMounted(async () => {
  await store.fetchUserFromDB()
  mergePosts()

  mergedPosts.value.sort((a,b) => {
    return new Date(a.date) - new Date(b.date)
  })
})

</script>
