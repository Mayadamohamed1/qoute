var qoutes=[
    {
        qoute:"“Be yourself; everyone else is already taken.” ",
        auther:"Oscar Wilde"
    },
    {
        qoute:" “So many books, so little time.”",
        auther:" Frank Zappa"
    },
    {
        qoute:"“A room without books is like a body without a soul.” ",
        auther:" Marcus Tullius Cicero"
    },
    {
        qoute:"“Be the change that you wish to see in the world.” ",
        auther:" Mahatma Gandhi"
    },
    {
        qoute:" “In three words I can sum up everything I've learned about life: it goes on.”",
        auther:"Robert Frost"
    },
    {
        qoute:"“If you tell the truth, you don't have to remember anything.”",
        auther:"Robert Frost"
    },
    {
        qoute:"“A friend is someone who knows all about you and still loves you.”",
        auther:"Elbert Hubbard"
    },
];
var lastNum;
var storeNum=[];
function getQoute(){
    if(qoutes.length==storeNum.length){
        storeNum=[];
    }
    do{
        var num=Math.trunc(Math.random()*qoutes.length);
    }while(lastNum==num || storeNum.includes(num) )
    lastNum=num;
    storeNum.push(num);
    console.log(num);
    document.getElementById("writeQoute").innerHTML=qoutes[num].qoute;
    document.getElementById("author").innerHTML=qoutes[num].auther;
}