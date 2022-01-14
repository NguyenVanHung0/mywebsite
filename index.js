var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

var arrayLocal = []

var wish;
var money;


function runApp(){

    var sentBtn = $('.preface button');
    var receiveLuckyBtn = $('.review button');
    var turnBtn = $('.rotation-luck button');
    var confirmBtn = $('.method-receive-gift button')


    sentBtn.onclick = () => {
        wish = $('.preface textarea').value;
        if(!wish){
           $('.preface span').style = "display: block;"
        }
        else{
            var preface = $('.preface');
            var review = $('.review');
            preface.style = "display: none;"
            review.style = "display: block;"
            $('.preface span').style = "display: none;"
        }
        
    }

    receiveLuckyBtn.onclick = () => {
        var review = $('.review');
        var rotationLuck =$('.rotation-luck')
        review.style = "display: none;"
        rotationLuck.style = "display: block;"
    }

    turnBtn.onclick = () => {
        var i = 0;
            var runBox = setInterval(() => {
                if(i < 6){
                    document.querySelector('#box1').innerHTML = i;
                    document.querySelector('#box2').innerHTML = i+1;
                    document.querySelector('#box3').innerHTML = i+2;
                    document.querySelector('#box4').innerHTML = i+3;
                    document.querySelector('#box5').innerHTML = i+4;
                    i++;
                }
                else{
                    i=0
                }
            }, 100)
        
        setTimeout(() => {
            clearInterval(runBox);
            var number = Math.floor(Math.random()*3);
            if(number > 0){
                document.querySelector('#box1').innerHTML = number;
            }
            else{
                document.querySelector('#box1').innerHTML = number + 1;
            }
            document.querySelector('#box2').innerHTML = Math.floor(Math.random()*9);
            document.querySelector('#box3').innerHTML = Math.floor(Math.random()*9);
            document.querySelector('#box4').innerHTML = Math.floor(Math.random()*9);
            document.querySelector('#box5').innerHTML = Math.floor(Math.random()*9);
            var a = $('#box1').innerHTML;
            var b = $('#box2').innerHTML;
            var c = $('#box3').innerHTML;
            var d = $('#box4').innerHTML;
            var e = $('#box5').innerHTML;
            money = a + b + c + d + e;
            $('.congratulation-receive-gift').innerHTML = `Chúc mừng bạn đã nhận được lì xì ${parseInt(money).toLocaleString()}đ`
        }, 4000)

        setTimeout(() => {
            var methodReceiveGift = $('.method-receive-gift');
            var rotationLuck =$('.rotation-luck')
            methodReceiveGift.style = "display: flex;"
            rotationLuck.style = "display: none;"
        }, 5000)
        
    }

    confirmBtn.onclick = () => {
        
        var nameBank = $('.method-receive-gift table #name-bank').value;
        var numberAccount = $('.method-receive-gift table #number').value;
        var nameAccount = $('.method-receive-gift table #name').value;
        var inputArray = `uoc: ${wish},nameBank: ${nameBank},numberAccount: ${numberAccount},nameAccount: ${nameAccount},money: ${money}`
        
        var local = localStorage.getItem('array');
        arrayLocal.push(local);
        arrayLocal.push(inputArray)
        localStorage.setItem('array', JSON.stringify(arrayLocal));


        var methodReceiveGift = $('.method-receive-gift');
        var endWord =$('.end-word')
        methodReceiveGift.style = "display: none;"
        endWord.style = "display: flex;"
    }
    
}

runApp()


