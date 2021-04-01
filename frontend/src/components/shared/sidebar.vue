<template>
  
      <v-navigation-drawer
        app
        fixed
        permanent
        expand-on-hover
      >
        <v-list>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="title">
                {{name}}
              </v-list-item-title>
              <v-list-item-subtitle>{{email}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list
          nav
          dense
        >
          <v-list-item link to="/home/products">
            <v-list-item-icon>
              <v-icon>mdi-format-list-bulleted-square</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Productos</v-list-item-title>
          </v-list-item>
          <v-list-item link to="/home/add">
            <v-list-item-icon>
              <v-icon>mdi-file-plus</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Agregar Item</v-list-item-title>
          </v-list-item>
          <v-list-item link to="/home/logs">
            <v-list-item-icon>
              <v-icon>mdi-account-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Historial</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
</template>

<script>
export default {
  data(){
    return {
      id: localStorage.getItem('id') || 0,
      name: localStorage.getItem('name') || '',
      email: localStorage.getItem('email') || '',
    }
  }
}
</script>