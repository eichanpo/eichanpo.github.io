// $(document).ready(function() {
chkout();
countqty();
function chkout() {
    let itemStr = localStorage.getItem('shops');
    
        console.log(itemStr);
        if(itemStr) {
            let itemArr = JSON.parse(itemStr);
            let data = '';
            let j = 1;
            let total = 0;
            $.each(itemArr, function (i, v) {  
                data += `
                <tr>
                    <td>${j++}</td>
                    <td>${v.item_name}</td>
                    <td>${v.item_price}</td>
                    <td>
                        <span class="min" data-item_i="${i}"><i class="fa-solid fa-circle-arrow-left"></i></span>
                        &nbsp ${v.qty} &nbsp
                        <span class="max" data-item_i=${i}><i class="fa-solid fa-circle-arrow-right max"></i></span>
                    </td>
                    <td>${v.item_price * v.qty}</td>
                </tr>
                `;
                total += v.item_price * v.qty;
            });
            data += `
                <td colspan="4">Total</td>
                <td>${total}</td>
            `;

            $("#data_body").html(data);
        } else {
            let data = '';
            $("#data_body").html(data);
        }
    }
    $("#data_body").on('click', '.min', function() {
        // alert('hi')
        let item_i = $(this).data('item_i')
        let itemStr = localStorage.getItem('shops');
        // console.log(itemStr);
        if(itemStr) {
            let itemArr = JSON.parse(itemStr);
            $.each(itemArr, function(i, v) {
                if(item_i == i) {
                    v.qty--;
                    if(v.qty <= 0) {
                        itemArr.splice(item_i,1);
                    }
                }
            });
            let itemData = JSON.stringify(itemArr);
            localStorage.setItem('shops', itemData);
            chkout();
            countqty();
        }
    });
    $("#data_body").on('click', '.max', function() {
        // alert('hi');
        let index = $(this).data('item_i')
        let itemStr = localStorage.getItem('shops');
        if(itemStr) {
            let itemArr = JSON.parse(itemStr);
            $.each(itemArr, function(i, v) {
                if(index == i) {
                    v.qty++;
                }
            });
            let itemData = JSON.stringify(itemArr)
            localStorage.setItem('shops', itemData);
            chkout();
            countqty();
        }    
    });
    $("#order").click(function() {
        // e.preventDefault();
        localStorage.clear();
        chkout();
        countqty();
    });


// });