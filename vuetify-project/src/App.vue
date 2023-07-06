<template>
  <v-app>
    <header>
      <v-app-bar color="#FFD180" app dark>
        <v-app-bar-nav-icon @click="clickSideBar"></v-app-bar-nav-icon>
        <v-toolbar-title>タイトル</v-toolbar-title>
      </v-app-bar>
    </header>
    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list v-for="(navItem, index) in navItems" :key="index">
        <div v-if="navItem.icon === undefined || navItem.icon === null ">
          <v-list-sub-header class="sub-header">{{ navItem.name }}</v-list-sub-header>
        </div>
        <div v-else>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>{{ navItem.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="inline">{{ navItem.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>

    <v-footer color="#FFD180" dark app> 
      <v-btn text rounded class="my-2">戻る</v-btn>
    </v-footer>
  </v-app>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import navItemList from './common/navItem'
  import type { navItem } from './common/navItem'
  const drawer = ref<Boolean>(false);
  const navItems = ref<navItem[]>(navItemList.list);

  function clickSideBar(){
    drawer.value = !(drawer.value);
  }
</script>

<style scoped>
.sub-header {
  margin-left: 10px;
  font-weight: bold;
}
.inline {
  display: inline;
  margin-left: 10px;
}
</style>