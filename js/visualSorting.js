var items = [];
var w = 1080;
var barWidth = 5;
var numItems = w/barWidth;
var h = 720;

var sorted = false;

function setup() {
    createCanvas(w,h);
    for (var i = 0; i < numItems; i++) {
        var r = random(5 ,(h - 50));
        items.push(r);
    }

    console.log("Number of Items to Sort : "  + numItems);
    console.log(items);
}

function draw() {

  if(sorted == false){
        clear();
        doSorting();
        renderItems();
  }else{
      
  }
}


function renderItems(){
    for(var i =0; i < items.length; i++){
            stroke("#FFFFF");
            fill("#e8cedc");
            rect(i*barWidth, h-items[i], barWidth, items[i]);
    }
}

function doSorting(){
    // Later pull from a combo box
    var sortNum = 1;

    if(sortNum === 1){
        // bubble sort
        sorted = bubbleSort(items);
    }else if(sortNum === 2){
        // merge sort

    }else if(sortNum === 3){
        // quick sort

    }
}

function bubbleSort(){
    var size = items.length;
    var isSorted = true;
    
    for(var i =0; i < size-1; i++){
        if(items[i] > items[i+1]){
            swap(i, i+1 )
            isSorted = false;
        }
    }

    return isSorted;
}

function swap(i, ii){
    var temp = items[i];

    items[i] = items[ii];
    items[ii] = temp;
}