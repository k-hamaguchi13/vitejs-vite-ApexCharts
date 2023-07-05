<template>
  <!-- <v-app>
    <header>
      <v-app-bar color="#FFD180" app dark>
        <v-app-bar-nav-icon @click="clickSideBar"></v-app-bar-nav-icon>
        <v-toolbar-title>タイトル</v-toolbar-title>
      </v-app-bar>
    </header>
    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list nav>
        <v-list-item-group>
          <v-list-item v-for="(navItem, index) in navItems" :key="index" :prepend-icon="navItem.icon" :title="navItem.name" link></v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>

    <v-footer color="#FFD180" dark app> 
      <v-btn text rounded class="my-2">戻る</v-btn>
    </v-footer>
  </v-app> -->
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import navItemList from '../../common/navItem'
  import type { navItem } from '../../common/navItem'
  const drawer = ref<Boolean>(false);
  const navItems = ref<navItem[]>(navItemList.list);

  function clickSideBar(){
    drawer.value = !(drawer.value);
  }
</script>
