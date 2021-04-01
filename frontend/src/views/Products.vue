<template>
  <v-container>
    <div class="header-container">
      <div class="header-container">
        <h2 class="ml-2 main-title">Productos</h2>
      </div>
      <v-btn
        color="success"
        class="new-button mr-4 rounded-lg box-shadow"
        to="/home/add"
      >
        <v-icon dense class="mr-1"> mdi-plus-circle </v-icon>
        Agregar
      </v-btn>
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
        :items="products"
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
          text: 'Nombre',
          align: 'start',
          filterable: true,
          value: 'name',
        },
        { text: 'Descripción', value: 'description' },
        { text: 'Estado', value: 'state' },
      ],
      products: [

      ],
    }
  },
  created(){
      this.getProducts()
  },
  methods: {
    getProducts() {
        ProductService.getProducts().then(response => {
            console.log(response)
            for (const product in response.data) {
                console.log(response.data[product])
                this.products.push(response.data[product])
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