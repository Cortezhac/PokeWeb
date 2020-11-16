const app = new Vue({
    el: '#app',
    data: {
      nombre: '',
      apellido: '',
      edad : 0,
      nickname : ''
    },
    mounted() {
      if (localStorage.name) {
        this.nombre = localStorage.name;
      }

      if(localStorage.apellido){
        this.apellido = localStorage.apellido;
      }

      if(localStorage.edad){
        this.edad = localStorage.edad;
      }

      if(localStorage.nickname){
        this.nickname = localStorage.nickname;
      }
    },
    watch: {
      nombre(newName) {
        localStorage.name = newName;
      }
    },
    methods: {
        // Guardar datos en local 
        guardar(){
            localStorage.name = this.nombre;
            localStorage.apellido = this.apellido;
            localStorage.edad = this.edad;
            localStorage.nickname = this.nickname;
        }
    }
  });