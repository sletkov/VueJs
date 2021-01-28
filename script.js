var title = new Vue ({
    el:'#title',
    data:{
        title: "Список студентов"
    }
})

var info = new Vue({
    el:'#info',
    data: {
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias et esse neque? Expedita natus cupiditate id fuga? Aliquam culpa quo ipsam similique sint incidunt in! Corporis officiis culpa sint sequi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias et esse neque? Expedita natus cupiditate id fuga? Aliquam culpa quo ipsam similique sint incidunt in! Corporis officiis culpa sint sequi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias et esse neque? Expedita natus cupiditate id fuga? Aliquam culpa quo ipsam similique sint incidunt in! Corporis officiis culpa sint sequi."
    }
})

var form = new Vue({
    el:"#form",
    data: {
        formTitle: "Форма",
        surname: "Фамилия",
        name:"Имя",
        phrase1:'',
        phrase2:'',
        isDisabled: true,
        students: [] 
    },
    computed: {
        length: function () {
        return (this.phrase1.length + this.phrase2.length)
        }
    },
    methods: {
        addNewNote() {
            if (this.phrase1 !== "" && this.phrase2 !== "") {
              this.students.push(
                `${cFirstLet(this.phrase1)} ${cFirstLet(
                  this.phrase2
                )}`
              );
              this.phrase1 = "";
              this.phrase2 = "";
              console.log(this.students);
            }
          }
    },
    watch:{
        phrase1(value) {
            if (value.length > 0 && this.phrase2.length > 0) {
              this.isDisabled = false;
            } else {
              this.isDisabled = true;
            }
          },
      
        phrase2(value) {
            if (value.length > 0 && this.phrase1.length > 0) {
              this.isDisabled = false;
            } else {
              this.isDisabled = true;
            }
        },
    }
});

function cFirstLet(word) {
    return word[0].toUpperCase() + word.toLowerCase().slice(1);
  }
  
  