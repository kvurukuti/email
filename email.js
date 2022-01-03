let arr = JSON.parse(localStorage.getItem("arrayObject"))||[];
function checkPass() {
    var x = document.getElementById("pass").value;
    var y = document.getElementById("cpass").value;
    if (x.includes(y) == false) {
        alert("Confirm password wrong");
    }
}
function userExists(User) {
    return arr.some(function (el) {
        return el.username == User;
    });
}
function getPassword(User) {
    var jsonString = localStorage.getItem("arrayObject");
    var retrievedObject = JSON.parse(jsonString);
    let z = [];
    retrievedObject.filter((el) => {
        if(el.username == User)
        {
            let r=el.password;
            z.push(r); 
        }  
    });
    return z;
    
}
function myFunction() {
    var User = document.getElementById("un").value;
    var pass = document.getElementById("pass").value;
    var cpass = document.getElementById("cpass").value;
    const re = /[a-z]\S+@\S+\.(\w{2,3})$/;
    if (re.test(User) == true) {
        console.log(arr);
        let res=arr.findIndex(user=>user.username==User)
        if(res==-1)
        {
            let obj={};
            obj['username']=User;
            obj['password']=pass;
            arr.push(obj);
            localStorage.setItem('arrayObject', JSON.stringify(arr));
        }
    }
    else {
        alert("Enter Valid Email id");
    }
}
function myFunction2() {
    var User = document.getElementById("usermail").value;
    var pass = document.getElementById("pass").value;
    const re = /[a-z]\S+@\S+\.(\w{2,3})$/;
    if (re.test(User) == true) {
        let res=arr.findIndex(user=>user.username==User)
        if(res==-1) {
            alert("No user Found..! please register.");
        }
        else {
            let pas = getPassword(User);
            console.log(pas)
            if(pass==pas)
            {
            var temp = "?" + User;
            window.location.href = "home.html" + temp;
            }
            else
            {
            alert("Password wrong");
            }
        }
    }
    else {
        alert("Enter Valid Email id");
    }
}