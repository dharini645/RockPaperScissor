let data1 = document.getElementById("coun0")
    let data2 = document.getElementById("coun")
    let resul = document.getElementById("res")
    function user(point){
        if(userscore==10){
            resul.innerHTML="User wins the overall match"
            userscore=0
            compscore=0
            data1.innerHTML=userscore
            data2.innerHTML=compscore
        }
    }
    function comp1(point){
        if(compscore==10){
            resul.innerHTML="Computer wins the overall match"
            userscore=0
            compscore=0
            data1.innerHTML=userscore
            data2.innerHTML=compscore
        }
    }
    let userscore=0
    let compscore=0
        function Rock(){
        let comp=" "
        let num=(Math.round(Math.random()*100))
        console.log(num)
        if(num>=0 && num<=33){
            comp="Rock"
        }
        else if(num>=34 && num<=66){
            comp="Paper"
        }
        else{
            comp="Scissor"
        }
        console.log(comp)
        //Comparison between user and computer ROCK
        let result=" "
        if(comp==="Rock"){
            result="Draw"
            resul.innerHTML=result
        }
        else if(comp==="Scissor"){
            result="You win"
            userscore++
            data2.innerHTML=userscore
            resul.innerHTML=result
            user(userscore)
        }
        else{
            result="Computer wins"
            compscore++
            data1.innerHTML=compscore
            resul.innerHTML=result
            comp1(compscore)
        }
        // alert(`User choosed Rock, Computer choosed ${comp} Result ${result}`)
        console.log("Computerscore",compscore)
        console.log("Userscore",userscore)
    }

        // Comparison PAPER
    function user(point){
        if(userscore==10){
            resul.innerHTML="User wins the overall match"
            userscore=0
            compscore=0
            data1.innerHTML=userscore
            data2.innerHTML=compscore
        }
    }
    function comp1(point){
        if(compscore==10){
            resul.innerHTML="Computer wins the overall match"
            userscore=0
            compscore=0
            data1.innerHTML=userscore
            data2.innerHTML=compscore
        }
    }
        function Paper(){
        let comp=" "
        let num=(Math.round(Math.random()*100))
        console.log(num)
        if(num>=0 && num<=33){
            comp="Rock"
        }
        else if(num>=34 && num<=66){
            comp="Paper"
        }
        else{
            comp="Scissor"
        }
        console.log(comp)
        let result1=" "
        if(comp==="Rock"){
            result1="You win"
            userscore++
            data2.innerHTML=userscore
            resul.innerHTML=result1
        }
        else if(comp==="Scissor"){
            result1="Computer win"
            compscore++
            data1.innerHTML=compscore
            resul.innerHTML=result1
        }
        else{
            result1="Draw"
            resul.innerHTML=result1
        }
        // alert(`User choosed Paper, Computer choosed ${comp} Result ${result1}`)
        console.log("Computer Score",compscore)
        console.log("Userscore",userscore)
        }
        //Comparison SCISSOR
        function user(point){
        if(userscore==10){
            resul.innerHTML="User wins the overall match"
            userscore=0
            compscore=0
            data1.innerHTML=userscore
            data2.innerHTML=compscore
        }
    }
    function comp1(point){
        if(compscore==10){
            resul.innerHTML="Computer wins the overall match"
            userscore=0
            compscore=0
            data1.innerHTML=userscore
            data2.innerHTML=compscore
        }
    }
        function Scissor(){
        let comp=" "
        const num=(Math.round(Math.random()*100))
        console.log(num)
        if(num>=0 && num<=33){
            comp="Rock"
        }
        else if(num>=34 && num<=66){
            comp="Paper"
        }
        else{
            comp="Scissor"
        }
        console.log(comp)
        let result2=" "
        if(comp==="Rock"){
            result2="Computer Wins"
            compscore++
            data1.innerHTML=compscore
            resul.innerHTML=result2
        }
        else if(comp==="Scissor"){
            result2="Draw"
            resul.innerHTML=result2
        }
        else{
            result2="You Wins"
            userscore++
            data2.innerHTML=userscore
            resul.innerHTML=result2
        }
        // alert(`User choosed Scissor, Computer choosed ${comp} Result ${result2}`)
        console.log("Computer Score",compscore)
        console.log("Userscore",userscore)
        }