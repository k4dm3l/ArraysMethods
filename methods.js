import { users } from './users.js';

function mostrarTodos(){
    
    const table = document.getElementById("table-body");
    console.log(table);

    users.forEach(function(user){
        console.log(user.name);
        var string = "<tr>";
        string += "<td>"+ user.name + " " + user.lastname +"</td>";
        string += "<td>"+ user.age +"</td>";
        string += "<td>"+ user.name +"</td>";
        table.innerHTML += string;
    });

}

mostrarTodos();