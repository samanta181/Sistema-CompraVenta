<template>
  <v-app id="app">
   
    <v-navigation-drawer
        v-model="drawer"
        :clipped="$vuetify.breakpoint.lgAndUp"
        app
        v-if="logueado"
      >
        <v-list dense>
         
          <template v-if="esAdministrador || esAlmacenero || esVendedor">

            <v-list-item :to="{name: 'home'}">
              <v-list-item-action>
                <v-icon>mdi-home</v-icon>
              </v-list-item-action>
              <v-list-item-title>
                INICIO
              </v-list-item-title>
           </v-list-item>
          </template>
          <template v-if="esAdministrador || esAlmacenero">

            <v-list-group>
              <v-list-item slot="activator">
                <v-list-item-content>
                  <v-list-item-title>
                    Almacén
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item :to="{name: 'categoria'}">
                <v-list-item-action>
                  <v-icon>mdi-dresser-outline</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>
                    Categorías
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item :to="{name:'articulo'}">
                <v-list-item-action>
                  <v-icon>mdi-dresser-outline</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>
                    Artículos
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
           </v-list-group>
          </template>

          <template v-if="esAdministrador || esAlmacenero">

            <v-list-group>
              <v-list-item slot="activator">
                 <v-list-item-content>
                   <v-list-item-title>
                    Compras
                </v-list-item-title>
             </v-list-item-content>
             </v-list-item>
             <v-list-item :to="{name:'ingreso'}">
               <v-list-item-action>
                      <v-icon>mdi-dresser-outline</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>
                        Ingresos
                      </v-list-item-title>
                    </v-list-item-content>
             </v-list-item>
             <v-list-item :to="{name:'proveedor'}">
                    <v-list-item-action>
                      <v-icon>mdi-dresser-outline</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>
                        Proveedores
                      </v-list-item-title>
                    </v-list-item-content>
              </v-list-item>
            </v-list-group>
         </template>
         <template v-if="esAdministrador || esVendedor">

            <v-list-group>
              <v-list-item slot="activator">
                <v-list-item-content>
                  <v-list-item-title>
                    Ventas
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item :to="{name:'venta'}">
                <v-list-item-action>
                  <v-icon>mdi-dresser-outline</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>
                    Ventas
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item :to="{name:'cliente'}">
                <v-list-item-action>
                  <v-icon>mdi-dresser-outline</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>
                    Clientes
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
        </template>
        <template v-if="esAdministrador">

            <v-list-group>
              <v-list-item slot="activator">
                <v-list-item-content>
                  <v-list-item-title>
                    Accesos
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item :to="{name:'usuario'}">
                <v-list-item-action>
                  <v-icon>mdi-dresser-outline</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>
                    Usuarios
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              
            </v-list-group>
        </template>
      <template v-if="esAdministrador || esAlmacenero ||  esVendedor">

      <v-list-group>
        <v-list-item slot="activator">
          <v-list-item-content>
            <v-list-item-title>
              Consultas
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item :to="{name:''}">
          <v-list-item-action>
            <v-icon>mdi-dresser-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              Consulta Compras
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-dresser-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              Consulta Ventas
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
      </template>

        </v-list>
      </v-navigation-drawer>
  
      <v-app-bar
        :clipped-left="$vuetify.breakpoint.lgAndUp"
        app
        color="blue darken-3"
        dark
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title
          style="width: 300px"
          class="ml-0 pl-4"
        >
          <span class="hidden-sm-and-down">Sistema</span>
        </v-toolbar-title>
       
        <v-spacer></v-spacer>
        <v-btn @click="salir()" icon v-if="logueado">
          <v-icon>mdi-logout</v-icon>Salir
        </v-btn>
        <v-btn :to="{name: 'login'}" icon v-else>
          <v-icon>mdi-apps</v-icon> Login
        </v-btn>
      
      </v-app-bar>
      <v-main>
        <v-container
          class="fill-height"
          fluid
        >
            <v-slide-y-transition mode="out-in">
              <router-view/>
            </v-slide-y-transition>
        </v-container>
      </v-main>
     
      <v-footer
        
        height="auto"
      >
   
      <v-layout justify="center">
       <v-flex text-xs-center>
        <v-card flat tile color="primary" class="white--text">
          <v-card-text class="white-text pt-0">
            IncanatoIt &copy; 2023
          </v-card-text>

        </v-card>
       </v-flex>
      </v-layout>

    
    
  </v-footer>




   
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    drawer: true,
  }),

  computed:{
    logueado(){
      return this.$store.state.usuario;
    },
    esAdministrador(){
      return this.$store.state.usuario && this.$store.state.usuario.rol=='administrador';
    },
    esVendedor(){
      return this.$store.state.usuario && this.$store.state.usuario.rol=='vendedor';
    },
    esAlmacenero(){
      return this.$store.state.usuario && this.$store.state.usuario.rol=='almacenero';
    },

  },

  created(){
    this.$store.dispatch("autoLogin");
  },

  methods:{
    salir(){
      this.$store.dispatch("salir")
    }
  }
};
</script>
