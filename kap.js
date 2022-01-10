var arr=[];
var size;
var als = document.getElementById('algo');
var di = document.getElementById('kap');
var range  = document.getElementById('in');
var srage = document.getElementById('in1');
var bt =document.querySelectorAll('.ii');
size = range.value;
var  spd =730-srage.value;
function change(val){
    size = val;
    gen();
}
function schange(val){
    spd = 730-val;
}
function gen() {
    
    var c = document.getElementById('co');
    c.innerHTML = null;

    var k = document.getElementById('in').value;
    for (i = 1; i <=size; i++) {
        let bar = document.createElement("div");
        bar.style.display = 'inline-block';
        var v = Math.floor(Math.random() *500) + 100;
        arr[i-1]=v;
        bar.classList.add("bar");
        if(k<=54)
            bar.style.width = '11px';
        else if(k<=80)
            bar.style.width='7px';
        bar.style.height = v + 'px';
        bar.style.borderRadius =  '8px';
        c.appendChild(bar);
    }
    
}

function btclk(){
    range.disabled = false;
    for(var i=0;i<bt.length;i++){
        bt[i].disabled=false;
        bt[i].style.backgroundColor='#1944cf';
        bt[i].style.color = 'white';
        
    }
}
async  function sort(delay = 300) {
    als.innerHTML = document.getElementById('s1').value;
    range.disabled = true;
    for(var i=0;i<bt.length;i++){
        bt[i].disabled=true;
        bt[i].style.backgroundColor='lightgray';
        bt[i].style.color = 'gray';
    }
    let gg2 = document.querySelectorAll(".bar");
    for (var y = 0; y < gg2.length-1; y++) {
        
        await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, spd)

    );

        gg2[y].style.backgroundColor =  "rgb(253, 93, 0)";
    
        for (var z = y + 1; z < gg2.length; z++) {
            gg2[z].style.backgroundColor = 'rgb(253, 93, 0)';
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, spd)
        
            );
            if(arr[y]>arr[z]){
                gg2[z].style.backgroundColor = "red";
                await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                },spd)
        
            );
                
                var temp = arr[z];
                arr[z] = arr[y];
                arr[y] = temp;
                gg2[y].style.height = arr[y] +'px';
                gg2[z].style.height = arr[z] +'px';
            }
            
            if(y==gg2.length-2){
                gg2[y].style.transitionProperty = "background-color";
                gg2[y].style.transitionDuration='1s';
                gg2[z].style.backgroundColor = "green";
            }else
                gg2[z].style.backgroundColor = "rgb(43, 42, 42)";
                await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, spd)
        
            );
        }
        gg2[y].style.transitionProperty = "background-color";
        gg2[y].style.transitionDuration='1s';
        gg2[y].style.backgroundColor =  "green ";
    }
   
    range.disabled = false;
    als.innerHTML ="";
}

async function sort2()
{
    als.innerHTML = document.getElementById('s2').value;
    range.disabled = true;
    for(var i=0;i<bt.length;i++){
        bt[i].disabled=true;
        bt[i].style.backgroundColor='lightgray';
        bt[i].style.color = 'gray';
    }
    let gg2 = document.querySelectorAll(".bar");
    for(var i=1;i<gg2.length;i++){
    
        await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, spd)

    );
            
        for(var j=0;j<gg2.length-i;j++){
            gg2[j].style.backgroundColor = 'rgb(253, 93, 0)';
            gg2[j+1].style.backgroundColor = 'rgb(253, 93, 0)';
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, spd)
        
            );
            if(arr[j]>arr[j+1]){
                gg2[j+1].style.backgroundColor = 'red';
                await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                },spd)
        
            );
                
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
               
                gg2[j].style.height = arr[j] +'px';
                gg2[j+1].style.height = arr[j+1] +'px';

            }
           
           
            gg2[j].style.backgroundColor = 'rgb(43, 42, 42)';
            gg2[j+1].style.backgroundColor = 'rgb(43, 42, 42)';
            // await new Promise((resolve) =>
            //     setTimeout(() => {
            //         resolve();
            //     },700)
        
            // );
            await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, spd)
    
        );
        }
           gg2[gg2.length-i].style.transitionProperty = "background-color";
        gg2[gg2.length-i].style.transitionDuration='1s';
        if(i==gg2.length-1){
            gg2[0].style.backgroundColor =  "green";
        }
        gg2[gg2.length-i].style.backgroundColor =  "green";
       
    }
    range.disabled =false;
    als.innerHTML ="";
}
async  function sort3(delay = 300) {
    als.innerHTML = document.getElementById('s3').value;
    range.disabled = true;
    for(var i=0;i<bt.length;i++){
        bt[i].disabled=true;
        bt[i].style.backgroundColor='lightgray';
        bt[i].style.color = 'gray';
    }
    let gg2 = document.querySelectorAll(".bar");
    for(var i=1;i<gg2.length;i++){
        await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, spd)

    );
        gg2[i].style.backgroundColor = "red ";
        var current  = arr[i];
        var j=i-1;
        while(arr[j]>current && j>=0){
            await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, spd)
    
        );
            gg2[j].style.backgroundColor  = "rgb(253, 93, 0)";
           
			arr[j+1]=arr[j];
            gg2[j+1].style.height=arr[j+1]+'px';
			j--;
            
		}
        await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, spd)

    );
		arr[j+1] = current;
        gg2[j+1].style.height = current+'px';
        gg2[j+1].style.backgroundColor = 'green';
        await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, spd)

    );
    for(var z=j+2;z<=i;z++){
        gg2[z].style.backgroundColor = 'green';
    }
        
        // gg2[i].style.backgroundColor='black';
    }
    range.disabled = false;
    als.innerHTML ="";
}
