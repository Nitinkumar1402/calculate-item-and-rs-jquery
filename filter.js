var totalprice = 0;
var prices = [];
var selecteditem = [];
var many = 0;
// var html = "<table border ='1'><tr><th>Home</th><th>shurt</th><th>Pant</th><th>Whatch</th><th>Shoes</th></tr>"
// document.write(html);
var list = $('#a1');
list.append("<li data-filter='' data-clicked='' id='tt'>Total Price :<span id='total'></<span> </li>");
list.append("<li data-filter='all' data-clicked=''>ShowAll</li>");
for (var i in products) {
    let li = document.createElement('li');
    li.textContent = i;
    list.append(li);
    li.setAttribute("data-filter", i);
    li.setAttribute("data-clicked", 'false');
    li.classList.add(i);
}
$('li').addClass('list');
var items = $("#items");
var html = "";
for (var i in products) {
    var obj = { type: i };
    var price = 0;
    // console.log(obj, obj.type);
    for (var j in products[i]) {
        totalprice += Number(products[i][j].price);
        price += Number(products[i][j].price);
        // document.write(products[i][j].img);
        html += "<div class='itemBox itembox " + i + "'data-clicked = 'false'><img src='" + products[i][j].img + "'><br><label>" + products[i][j].brand + "</label><br><label class='price'>" + products[i][j].price + "</label></div>";
    }
    obj['p'] = price;
    prices.push(obj);
}
// console.log(prices);
items.append(html);
$("#total").text(totalprice);
$('.list').click(function() {
    const value = $(this).attr('data-filter');
    // .attr('class', 'abcd');
    if (value == 'all') {
        $('.itemBox').show('1000');
        $("#total").text(totalprice);
        $('.list').removeClass('active').attr('data-clicked', 'false');
        $('.itemBox').attr('data-clicked', 'false');
    } else {
        var jai = prices.find(function(e) {
            return e.type == value;
        })
        $("#total").text(jai.p);
        $('li').filter(function() {
            return $(this).attr('data-filter') == value;
        }).addClass('active').filter(function() {
            if ($(this).attr('data-clicked') == "false")
                $(this).attr('data-clicked', "true");
            else $(this).attr('data-clicked', "false");
        });
        $('li').filter(function() {
            return $(this).attr('data-clicked') == 'true';
        }).addClass('active');
        $('li').filter(function() {
            return $(this).attr('data-clicked') == 'false';
        }).removeClass('active');
        // $('li').filter(function() {
        //     return $(this).attr('data-filter') == value && $(this).attr('data-clicked') == "true";
        // }).addClass('active').attr('data-clicked', "false");
        // $('.itemBox').filter('.' + value).addClass("clicked");
        $('.itemBox').filter('.' + value).filter(function() {
            if ($(this).attr('data-clicked') == "false")
                $(this).attr('data-clicked', "true");
            else $(this).attr('data-clicked', "false");
        });
        $('.itemBox').not('.clicked').hide('1000');
        a = $('.itemBox').filter(function() {
            return $(this).attr('data-clicked') == 'true'
        }).show('1000').filter('.price');
        let list = document.getElementsByClassName('list');
        many = 0;
        for (var i = 0; i < list.length; i++) {
            // console.log(list[i].getAttribute('data-filter'));
            // console.log(list[i].getAttribute('data-clicked'));
            if (list[i].getAttribute('data-clicked') == 'true') {
                for (var j in prices) {
                    // console.log(prices[j]);
                    if (prices[j].type == list[i].getAttribute('data-filter')) {
                        many += Number(prices[j].p);
                        console.log(prices[j].p);
                    }
                }
            }
        }
        $('#total').text(many);
    }
});



// var x = document.getElementsByTagName('li');
// for (i in x) {
//     x[i].setAttribute("class", "list");
// }
// var list1 = document.getElementById('itemBox');

// for (var j in products.Shurt) {
//     for (var key in products.Shurt[j]) {
//         let tr1 = document.createElement('div');
//         let image = document.createElement('img');
//         image.setAttribute('src', products.Shurt[j][key]);
//         tr1.append(image);
//         let g1 = document.createElement('label');
//         //label.textContent
//         g1.textContent = products.Shurt[j][key];
//         list1.append(g1);
//         //tr1.innerHTML = products.Shurt[j][key];
//         list1.append(tr1);
//         tr1.setAttribute('class', 'itembox');

// }

// }
// // $('div').addClass('itemBox');
// var list2 = document.getElementById('itemBox');

// for (var j in products.Pant) {
//     for (var key in products.Pant[j]) {
//         let tr2 = document.createElement('div');
//         let image = document.createElement('img');
//         image.setAttribute('src', products.Pant[j][key]);
//         tr2.append(image);
//         let g2 = document.createElement('label');
//         //label.textContent
//         g2.textContent = products.Pant[j][key];
//         list2.append(g2);
//         //tr1.innerHTML = products.Shurt[j][key];
//         list2.append(tr2);
//         tr2.setAttribute('class', 'itembox');

//     }

// }