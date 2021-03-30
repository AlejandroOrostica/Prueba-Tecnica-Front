<template>
  <div class="home">
    <shared-toolbar/>
    <v-main>
      <shared-sidebar/>
      <router-view/>
    </v-main>
  </div>
</template>

<script>
import SharedSidebar from '@/components/shared/sidebar'
import SharedToolbar from '@/components/shared/toolbar'

export default {
  name: 'Home',
  components: {
    'shared-sidebar': SharedSidebar,
    'shared-toolbar': SharedToolbar
  },

  data: () => ({
    //
  }),
};
</script>
