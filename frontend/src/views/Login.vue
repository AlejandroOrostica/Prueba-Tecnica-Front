<template>
   <v-app id="inspire">
      <v-content>
         <v-container fluid fill-height>
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-12">
                     <v-toolbar dark color="indigo darken-2">
                        <v-toolbar-title>Iniciar Sesión</v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                        <v-form>
                           <v-text-field
                              name="login"
                              label="Login"
                              type="text"
                              v-model="email"
                           ></v-text-field>
                           <v-text-field
                              id="password"
                              name="password"
                              label="Password"
                              type="password"
                              v-model="password"
                           ></v-text-field>
                        </v-form>
                     </v-card-text>
                     <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn class="white--text"  color="indigo darken-2"  @click="sendData()">Login</v-btn>
                     </v-card-actions>
                  </v-card>
               </v-flex>
            </v-layout>
         </v-container>
      </v-content>
   </v-app>
</template>

<script>
import LoginService from '@/services/mainServices'

export default {
   name: 'Login',
   data () {
       return {
           email: '',
           password: ''
       }
   },
   methods : {
       sendData() {
           let loginData = {
               email: this.email,
               password: this.password
           }
           console.log(loginData)
           LoginService.login(loginData).then(response => {
               console.log(response.status)
               if(response.status == 200){
                  localStorage.setItem('id', response.data.id )
                  localStorage.setItem('name', response.data.name )
                  localStorage.setItem('email', response.data.email )
                  console.log(localStorage.getItem('name'))

                  this.$router.push('/home')
               }
           }) 
       }
   }
};
</script>

<style></style>
