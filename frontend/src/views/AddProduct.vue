<template>
  <v-container>
    <div class="d-flex justify-space-between">
      <div class="d-flex justify-space-between">
        <h2 class="ml-2 main-title">Agregar Producto</h2>
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
      v-model="name"
      label="Nombre"
      required
    ></v-text-field>

    <v-text-field
      v-model="description"
      label="Descripción"
      required
    ></v-text-field>

    <v-select
      data-app
      :items="items"
      label="Estado"
      v-model="state"
      disabled
    ></v-select>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click.native="createProduct"
    >
      Crear Producto
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Limpiar Formulario
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
      name: '',
      description: '',
      state: 'Ingresado',
      select: 'Ingresado',
      items: [
        'Ingresado',
        'Robado',
        'Perdido',
        'Vendido',
      ],
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },

      createProduct (){
          let productData = {
              name: this.name,
              description : this.description,
              state:this.state
          }
          console.log(productData)
          ProductService.addProduct(localStorage.getItem('id'), productData).then(
              response =>{
                  console.log(response.data)
              }
          )
      } 
    },
  }
</script>