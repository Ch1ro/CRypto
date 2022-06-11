let data ={
    lists:[]
};


singUp.onclick = () =>{
 let user = {};
 user.name = firstName.value;
 user.Lastname = lastName.value;
 user.userName = userName.value;
 user.email = email.value;
 user.birthday = bdate.value;


if(password.value==confirPassword.value){
user.password=password.value;
data.lists.push(user);
console.log(data);
alert('Sing up success');
user.AllVisits=[];
user.countVisit=0;
user.statistic=[3,4,1,5,9];
}else{
    alert('confirm password fals');
    password.value='';
    confirPassword.value='z'
}

}
singIn.onclick = () => {
    let candidateConfirm = false;
    let candidate = {
        name:userName.value,
        password:password.value,
    }
    console.log(candidate);
    for(let i = 0; i< data.lists.length; i++){
        if(data.lists[i].userName==candidate.name&&data.lists[i].password==candidate.password){
            candidateConfirm = true;
        }else{
            candidateConfirm = false;
        }
    }
    if(candidateConfirm){
        alert('success');
    }else{
        alert('false');
    }
}
