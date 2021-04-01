<template>
  <v-container>
    <div class="d-flex justify-space-between">
      <div class="d-flex justify-space-between">
        <h2 class="ml-2 main-title">Editar Producto</h2>
      </div>

    </div>

    <!-- table card -->
    <v-card class="mt-5 mb-8 rounded-xl box-shadow">
      <v-card-text>
          <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="product.name"
      disabled
      label="Nombre"
      required
    ></v-text-field>

    <v-text-field
      v-model="product.description"
      label="Descripción"
      disabled
      required
    ></v-text-field>

    <v-select
      data-app
      :items="items"
      label="Estado"
      v-model="product.state"
    ></v-select>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click.native="modifiyProduct"
    >
      Editar Producto
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click.native="eliminateProduct"
    >
      Eliminar Producto
    </v-btn>
    
  </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>

  import ProductService from '@/services/mainServices'

  export default {
    data: () => ({
      valid: true,
      product : {},
      select: 'Ingresado',
      items: [
        'Ingresado',
        'Robado',
        'Perdido',
        'Vendido',
      ],
    }),

    created() {
      console.log(this.$route.params.id)
      ProductService.getProduct(this.$route.params.id).then(response => {
        this.product = response.data
        console.log(response.data)
      })
    },

    methods: {
      modifiyProduct(){
        console.log(this.product)
        ProductService.editProduct(localStorage.getItem('id'), this.product, this.product.id).then(
          response=>{
            console.log(response.data)
          }
        )
      },
      eliminateProduct(){
        ProductService.deleteProduct(localStorage.getItem('id'), this.product.id).then(
          response=>{
            console.log(response.data)
            this.$router.push({ name:'Products' })
          }
        )
      }
    },
  }
</script>