//otak computer
function pilihanComputer(){
    let comp =Math.random();
    if(comp <0.34){
      return'gajah'
    }else if (comp>=0.34 && comp <0.67){
       return'orang'
    }else{
       return 'semut'
    }
}

//aturan
function aturan (comp,player){
    if(player == comp){
        return 'SERI'
    }
    if (player == 'gajah'){
     return(comp == 'orang')? 'WIN!':'LOSS'
    };
    if(player == 'orang'){
    return (comp == 'semut')? 'WIN!':'LOSS'
    };
    if(player =='semut'){
    return(comp =='gajah')? 'WIN!':'LOSS'
    }};


    function putar(){
        const imgcomputer = document.querySelector('.img-komputer')
        const gambar = ['gajah','semut','orang'];
        let i = 0

        const start =new Date().getTime()
    
        setInterval(function(){
            if(new Date().getTime() - start >1000 ){
                clearInterval;
                return
            }
           imgcomputer.setAttribute('src','img/' + gambar[i++] +'.png');
           if(i == gambar.length)(
            i=0
           )
        }, 100)
    }





const Pilihan = document.querySelectorAll('li img')


const winP =document.querySelector('.skorP');
winP.innerHTML = 0;

const winK =document.querySelector('.skorK');
winK.innerHTML = 0;

Pilihan.forEach(function(cos)
{
    
cos.addEventListener('click',function(){

    const pComp = pilihanComputer();
    const PPlayer = cos.className;

    const hasil = aturan(pComp,PPlayer);

    


    putar()

    setTimeout(function(){
        const imgcomp= document.querySelector('.img-komputer');

    
    imgcomp.setAttribute('src','img/' + pComp+ '.png');

    const info = document.querySelector('.info');
    info.innerHTML = hasil;


    
    if(hasil === 'WIN!'){
        return  winP.innerHTML ++
      
    } 
    if(hasil == 'LOSS'){
        return winK.innerHTML++
    }

   

    },1000);

    console.log('computer: '+ pComp);
   console.log('player: '+PPlayer);
   console.log('hasil :'  + hasil);
    });

});






//tidak efektif karena mengulang event 3 kali 


//  const pGajah = document.querySelector('.gajah');
//  pGajah.addEventListener('click',function(){
//    const pComp = pilihanComputer();
//    const PPlayer = pGajah.className;

//     const hasil = aturan(pComp,PPlayer)

//     const imgcomp= document.querySelector('.img-komputer')

//  imgcomp.setAttribute('src','img/' + pComp+ '.png')

// const info = document.querySelector('.info')
// info.innerHTML = hasil

//    console.log('computer: '+ pComp);
//    console.log('player: '+PPlayer)
//    console.log('hasil :'  + hasil)
//  })