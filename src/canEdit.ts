 type Role = "admin" | "editor" | "viewer";
 const canEdit = (role:Role):boolean=>{
    if(role === "admin" || role === "editor"){
        return true;
    }
    else{
        return false;
    }
 }
console.log(canEdit("admin"))
console.log(canEdit("viewer"))
console.log(canEdit("editor"))