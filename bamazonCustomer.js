var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');

//<<<<<Mysql Connection
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "abc1234567!",
    database: "bamazon_DB"
})

connection.connect(function(err){
    if(err) throw err;

    start();
});

//<<<<<Start Ordering
function start() {
    connection.query("SELECT * FROM products", function(err,res) {
        var table = new Table({
            head: ['ID', 'Product Name', 'Department', 'Price', 'Stock Quantity']
        });
        console.log("Bamazon")
        for (i = 0; i<res.length; i++) {
            table.push([res[i].item_id, res[i].product_name, res[i].deparment_name, res[i].price, res[i].stock_quantity])
        }
        orderList();
    });

}
//<<<<<Prompts for ordering
function orderList() {
    inquirer.prompt([{
        name:"item_id",
        type: "input",
        message: "Enter item ID you would like to buy."
    },{
        name:"quantity",
        type:"input",
        message: "How many of that item would you like to buy."
    }
    //<<<<<Done with ordering
    ]).then(function(purchaseOrder){
        connection.query("SELECT * FROM products WHERE item_id=?", userPurchase.inputId, function(err,res){
            for(var i = 0; i < res.length; i++) {
                if (purchaseOrder.inputNumber > res[i].stock_quantity) {
                    console.log("Sorry, there is insufficent quantities!")
                    start();
                }
                else{
                    console.log("Thank you for your purchase!")
                    var newStock = (res[i].stock_quantity - purchaseOrder.inputNumber);
                    var purchaseItem = (purchaseOrder.inputId);

                    confirmation(newStock, purchaseItem);
                };
            };
        });
    };
