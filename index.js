var arr = [];
var algoName = document.getElementById('algoName');
var range = document.getElementById('arrRange');
var srage = document.getElementById('spdRange');
var btn = document.querySelectorAll('.btn');
var size = range.value;
var speed = 703 - srage.value;


// function call when array range input change
function change(val) {
    size = val;
    generateArray();
    btnclk();
}



// function call when speed range input change
function schange(val) {
    speed = 703 - val;
}



function generateArray() {

    // access div, where bars shown
    var container = document.getElementById('container');

    // before generating array empty the div
    container.innerHTML = null;

    // take array size from input[type=range]
    var arrSize = range.value;

    // creating bars
    for (var i = 1; i <= size; i++) {
        let bar = document.createElement("div");
        bar.style.display = 'inline-block';
        var randomHeight = Math.floor(Math.random() * 500) + 100;
        arr[i - 1] = randomHeight;
        bar.classList.add("bar");
        if (arrSize <= 54)
            bar.style.width = '11px';
        else if (arrSize <= 80)
            bar.style.width = '7px';
        bar.style.height = randomHeight + 'px';
        bar.style.borderRadius = '8px';
        container.appendChild(bar);
    } // for loop end

}


// when bottom button click
function btnclk() {

    // Array range enabled 
    range.disabled = false;

    // all upper buttons enabled
    for (var i = 0; i < btn.length; i++) {
        btn[i].disabled = false;
        btn[i].style.backgroundColor = '#1944cf';
        btn[i].style.color = 'white';

    }// for loop end
}



// Selection sorting algorithm
async function selectionSort(delay = 300) {


    //set name of algorithm to h1(id=algoname)
    algoName.innerHTML = document.getElementById('s1').value;

    // Array range disable when sorting algorith run
    range.disabled = true;

    // all upper buttons disabled
    for (var i = 0; i < btn.length; i++) {
        btn[i].disabled = true;
        btn[i].style.backgroundColor = 'lightgray';
        btn[i].style.color = 'gray';
    }// for loop end

    //  return all div array whose class=bar
    let bars = document.querySelectorAll(".bar");


    for (var i = 0; i < bars.length - 1; i++) {

        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, speed)

        );

        bars[i].style.backgroundColor = "rgb(253, 93, 0)";

        for (var j = i + 1; j < bars.length; j++) {

            bars[j].style.backgroundColor = 'rgb(253, 93, 0)';

            //await function to pause for a while
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, speed)

            );
            if (arr[i] > arr[j]) {

                bars[j].style.backgroundColor = "red";

                //await function to pause for a while
                await new Promise((resolve) =>
                    setTimeout(() => {
                        resolve();
                    }, speed)

                );

                var temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
                bars[i].style.height = arr[i] + 'px';
                bars[j].style.height = arr[j] + 'px';
            }

            if (i == bars.length - 2) {

                bars[i].style.transitionProperty = "background-color";
                bars[i].style.transitionDuration = '1s';
                bars[j].style.backgroundColor = "green";
            } 
            else{
                bars[j].style.backgroundColor = "rgb(43, 42, 42)";
            }
            //await function to pause for a while
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, speed)

            );
        } // for loop end

        bars[i].style.transitionProperty = "background-color";
        bars[i].style.transitionDuration = '1s';
        bars[i].style.backgroundColor = "green ";

    } // for loop end

    // Array range enabled after sorting algorith completed
    range.disabled = false;

    //set blank string after sorting algorith completed to h1(id=algoname)
    algoName.innerHTML = "";
}


// BubbleSort Algorithm
async function bubbleSort(delay = 300) {

    //set name of algorithm to h1(id=algoname)
    algoName.innerHTML = document.getElementById('s2').value;

    // Array range disable when sorting algorith run
    range.disabled = true;

    // all upper buttons disabled
    for (var i = 0; i < btn.length; i++) {
        btn[i].disabled = true;
        btn[i].style.backgroundColor = 'lightgray';
        btn[i].style.color = 'gray';
    }// for loop end

    let bars = document.querySelectorAll(".bar");

    for (var i = 1; i < bars.length; i++) {

        //await function to pause for a while
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, speed)

        );

        for (var j = 0; j < bars.length - i; j++) {

            bars[j].style.backgroundColor = 'rgb(253, 93, 0)';
            bars[j + 1].style.backgroundColor = 'rgb(253, 93, 0)';

            //await function to pause for a while
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, speed)

            );
            if (arr[j] > arr[j + 1]) {

                bars[j + 1].style.backgroundColor = 'red';

                //await function to pause for a while
                await new Promise((resolve) =>
                    setTimeout(() => {
                        resolve();
                    }, speed)

                );

                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                bars[j].style.height = arr[j] + 'px';
                bars[j + 1].style.height = arr[j + 1] + 'px';

            }


            bars[j].style.backgroundColor = 'rgb(43, 42, 42)';
            bars[j + 1].style.backgroundColor = 'rgb(43, 42, 42)';

            //await function to pause for a while
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, speed)

            );
        }// for loop end

        bars[bars.length - i].style.transitionProperty = "background-color";
        bars[bars.length - i].style.transitionDuration = '1s';

        if (i == bars.length - 1) {
            bars[0].style.backgroundColor = "green";
        }

        bars[bars.length - i].style.backgroundColor = "green";

    }// for loop end


    // Array range enabled after sorting algorith completed
    range.disabled = false;

    //set blank string after sorting algorith completed to h1(id=algoname)
    algoName.innerHTML = "";
}


// Insertion sort algorithm
async function insertionSort(delay = 300) {

    //set name of algorithm to h1(id=algoname)
    algoName.innerHTML = document.getElementById('s3').value;

    // Array range disable when sorting algorith run
    range.disabled = true;

    // all upper buttons disabled
    for (var i = 0; i < btn.length; i++) {
        btn[i].disabled = true;
        btn[i].style.backgroundColor = 'lightgray';
        btn[i].style.color = 'gray';
    }// for loop end

    let bars = document.querySelectorAll(".bar");

    for (var i = 1; i < bars.length; i++) {

        //await function to pause for a while
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, speed)

        );

        bars[i].style.backgroundColor = "red ";
        var current = arr[i];
        var j = i - 1;

        while (arr[j] > current && j >= 0) {

            //await function to pause for a while
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, speed)

            );
            bars[j].style.backgroundColor = "rgb(253, 93, 0)";

            arr[j + 1] = arr[j];
            bars[j + 1].style.height = arr[j + 1] + 'px';
            j--;

        }// while loop end

        //await function to pause for a while
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, speed)

        );
        arr[j + 1] = current;
        bars[j + 1].style.height = current + 'px';
        bars[j + 1].style.backgroundColor = 'green';
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, speed)

        );


        for (var z = j + 2; z <= i; z++) {
            bars[z].style.backgroundColor = 'green';
        } // for loop end


    }// for loop end


    // Array range enabled after sorting algorith completed
    range.disabled = false;

    //set blank string after sorting algorith completed to h1(id=algoname)
    algoName.innerHTML = "";
}
