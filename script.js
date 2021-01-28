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
        phrase2:''  
    },
    computed: {
        length: function () {
        return (this.phrase1.length + this.phrase2.length)
        }
    }
});