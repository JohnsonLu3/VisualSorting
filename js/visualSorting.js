var items;
var w = 1080;
var barWidth = 5;
var numItems = w/barWidth;
var h = 720;

var sorted;
var start;
var sortNum;

// P5 draw and setup
function setup() {
    start = false;
    sorted = false;
    items = [];

    createCanvas(w,h);
    for (var i = 0; i < numItems; i++) {
        var r = random(5 ,(h - 50));
        items.push(r);
    }
    renderItems();
}

function draw() {

  if(sorted == false && start){
        clear();
        doSorting();
        renderItems();
  }else{
      
  }
}

// END of draw/setup /////////////////////////////////////////

// Sorting utils

function startSort(){
    start = true;
    sortNum = document.getElementById("SortMethod").value;
    
    console.log("SortChoice : " + sortNum);
}

function renderItems(){
    for(var i =0; i < items.length; i++){
            stroke("#FFFFF");
            fill("#e8cedc");
            rect(i*barWidth, h-items[i], barWidth, items[i]);
    }
}

function doSorting(){
    if(sortNum == 1){
        // bubble sort
        sorted = bubbleSort(items);
    }else if(sortNum == 2){
        // merge sort

    }else if(sortNum == 3){
        // quick sort

    }
}


function swap(i, ii){
    var temp = items[i];

    items[i] = items[ii];
    items[ii] = temp;
}


// END of sorting utils /////////////////////////////////////

// Sorting Methods
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


