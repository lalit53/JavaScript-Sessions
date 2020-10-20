console.log("This is my script")
alert("I am loaded.....")



var age=prompt('Please enter age')

if(age >=18){
    document.getElementById('voteStatus').innerHTML = 'you are valid to vote'
}else{
    document.getElementById('voteStatus').innerHTML = 'you are not valid to vote'
}