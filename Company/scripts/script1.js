function createDB() { 
    var name = document.getElementById('name').value; 
    var surname = document.getElementById('surname').value; 
    var phone = document.getElementById('phone').value; 
    var arrival = document.getElementById('arrival').value; 
    var departure = document.getElementById('departure').value; 
    var city = document.getElementById('city').value; 
    var rooms = document.getElementsByName('room'); 
    var room; 
    for (var i=0;i<rooms.length; i++) { 
        if (rooms[i].checked) 
            room = rooms[i].value; 
    }
    var foods = document.getElementsByName('food');
    var food; 
    for (var i=0;i<foods.length; i++) { 
        if (foods[i].checked) 
            food = foods[i].value; 
    }

    if (typeof food == 'undefined')
        food = "Отсутствует"; 

    var roomNum = document.getElementById('roomNum').value; 
    var wishes = document.getElementById('wishes').value; 

    tryAgain: 
    if(name == "" || surname == "" || phone == "" || arrival == "" || departure == "") 
    {
        alert("Обязательное поле не введено"); 
        tryAgain; 
    }

    var db = openDatabase('orderdb', '1.0', 'Order DB', 2 * 1024 * 1024); 

    createTable(db); 
    insertData(db, name, surname, phone, arrival, departure, city, room, food, roomNum, wishes); 

} 

function createTable(db) { 
    db.transaction(function (t) { 
        t.executeSql("CREATE TABLE IF NOT EXISTS Orders (id INTEGER PRIMARY KEY, name TEXT, surname TEXT, phone TEXT, arrival DATE, departure DATE, city TEXT, room TEXT, food TEXT, roomNum NUM, wishes TEXT)", []);
    });
} 

function insertData(db, name, surname, phone, arrival, departure, city, room, food, roomNum, wishes) { 
    db.transaction(function (e) { 
        e.executeSql("INSERT INTO Orders (name, surname, phone, arrival, departure, city, room, food, roomNum, wishes) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [name, surname, phone, arrival, departure, city, room, food, roomNum, wishes], function(e) { window.location.href="order.html"; }, null);
    });
} 

