<template>
  <v-container>
    <div class="header-container">
      <div class="header-container">
        <h2 class="ml-2 main-title">Registros</h2>
      </div>
    </div>

    <!-- table card -->
    <v-card class="mt-5 mb-8 rounded-xl box-shadow">
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Buscar"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="logs"
        :search="search"
        @click:row = 'toDetail'
      ></v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import ProductService from '@/services/mainServices'
export default {
  transition: 'fade',
  data() {
    return {
      search: '',
      headers: [
        {
          text: 'Registro',
          align: 'start',
          filterable: true,
          value: 'log',
        },
        { text: 'Fecha', value: 'created_at' },
      ],
      logs: [

      ],
    }
  },
  created(){
      this.getLogs()
  },
  methods: {
    getLogs() {
        ProductService.getLogs().then(response => {
            console.log(response)
            for (const log in response.data) {
                console.log(response.data[log])
                this.logs.push(response.data[log])
            }
        })
    },
    toDetail(row){
      // console.log(row)
      this.$root.$emit('eventing', row);
      let data = {
        id: row.id
      }
      // let path = '/edit/' + row.id
      // console.log(path)
      this.$router.push({ name:'Edit', params: data })

    }
  },
}
</script>

<style lang="scss" scoped>


.main-title {
  color: black;
  margin-left: 1rem;
}

.new-button {
  background-color: #0FF431 !important;
  color: white;
  text-transform: capitalize;
}

.header-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

}
</style>