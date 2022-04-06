function dataView(db) { 
    var html = document.getElementById("tbody"); 

    db.transaction(function (t) { 
        t.executeSql("SELECT * FROM Orders", [], 
        function(tran, r) { 
            for (var i = 0; i < r.rows.length; i++) 
            {
                var name = r.rows.item(i).name; 
                var surname = r.rows.item(i).surname; 
                var phone = r.rows.item(i).phone; 
                var arrival = r.rows.item(i).arrival; 
                var departure = r.rows.item(i).departure; 
                var city = r.rows.item(i).city; 
                var room = r.rows.item(i).room; 
                var food = r.rows.item(i).food; 
                var roomNum = r.rows.item(i).roomNum; 
                var wishes = r.rows.item(i).wishes; 
                if (html) { 
                    html.innerHTML += "<tr><td>" + name + "</td><td>" + surname + "</td><td>" + phone + "</td><td>" + arrival + "</td><td>" + departure + "</td><td>" + city + "</td><td>" + room + "</td><td>" + food + "</td><td>" + roomNum + "</td><td>" + wishes + "</td>" + "</tr>"; 
                }
            } 
        }, 
        function() { alert("Error");}); 
    });
} 

function dropTable(db) { 
    db.transaction(function (e) {  
        e.executeSql("DROP TABLE Orders");
    });
} 

var db = openDatabase('orderdb', '1.0', 'Order DB', 2 * 1024 * 1024); 
dataView(db); 
dropTable(db); 