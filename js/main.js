const app = new Vue({
    el: '#app',
    data: {
        usuario : {
            nombre: '',
            apellido: '',
            edad : 0,
            nickname : ''
        }
    },
    // Si existen los datos guardarlos en el obj data
    mounted() {
      if (localStorage.name) {
        this.usuario.nombre = localStorage.name;
      }

      if(localStorage.apellido){
        this.usuario.apellido = localStorage.apellido;
      }

      if(localStorage.edad){
        this.usuario.edad = localStorage.edad;
      }

      if(localStorage.nickname){
        this.usuario.nickname = localStorage.nickname;
      }
    },
    methods: {
        // Guardar datos en local con el evento onclick
        guardar(){
            localStorage.name = this.usuario.nombre;
            localStorage.apellido = this.usuario.apellido;
            localStorage.edad = this.usuario.edad;
            localStorage.nickname = this.usuario.nickname;
        },
        eliminar(){
          localStorage.clear();
          this.usuario.nombre = "";
          this.usuario.apellido = "";
          this.usuario.edad = 0;
          this.usuario.nickname = "";
        }
    }
  });