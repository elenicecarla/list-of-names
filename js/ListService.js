var ListService = {
    
    names: [],
    
    getList: function(){
        return ListService.names;
    },
    
    addName: function (name) {
        ListService.names.push(nome);
    }
    
};

//execute
var names = ListService.getList();
console.log('Nomes: ' + names);

ListService.addName('Wellinton Braga');
ListService.addName('Sabrina');
ListService.addName('Fabiano');

var names  = ListService.getList();
console.log('Nomes: ' + names);