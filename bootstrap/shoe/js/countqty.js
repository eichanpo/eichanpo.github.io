function countqty() {
    let itemString = localStorage.getItem('shops');
    if(itemString) {
        let itemArray = JSON.parse(itemString);
        if(itemArray != 0) {
            // let count = itemArray.length; <-- item count
            let count=0;
            $.each(itemArray, function (i, v) { //qty count
                count+= v.qty;
              });
            $("#count_number").text(count);
        }
    }
}