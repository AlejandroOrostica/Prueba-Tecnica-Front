<template>
   <v-app id="inspire">
      <v-content>
         <v-container fluid fill-height>
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-12">
                     <v-toolbar dark color="primary">
                        <v-toolbar-title>Login form</v-toolbar-title>
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
                        <v-btn color="primary" @click="sendData()">Login</v-btn>
                     </v-card-actions>
                  </v-card>
               </v-flex>
            </v-layout>
         </v-container>
      </v-content>
   </v-app>
</template>

<script>
import LoginService from '@/services/loginService'

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
                   this.$router.push('/home')
               }
           }) 
       }
   }
};
</script>

<style></style>
