$(document).ready(function() {

var form = $('#calc');

// When the button is pressed on the calculator or someone presses enter!
var one = $('input[name="one"]').click(function() {
    console.log('pressed!');
    var currentValue = $('#calc-value').val();
    $('#calc-value').val(currentValue + this.value);
});
var two = $('input[name="two"]').click(function() {
    var currentValue = $('#calc-value').val();
    $('#calc-value').val(currentValue + this.value);
});
var three = $('input[name="three"]').click(function() {
    var currentValue = $('#calc-value').val();
    $('#calc-value').val(currentValue + this.value);
});
var plus = $('input[name="plus"]').click(function() {
    var currentValue = $('#calc-value').val();
    $('#calc-value').val(currentValue + this.value);
});
var four = $('input[name="four"]').click(function() {
    var currentValue = $('#calc-value').val();
    $('#calc-value').val(currentValue + this.value);
});
var five = $('input[name="five"]').click(function() {
    var currentValue = $('#calc-value').val();
    $('#calc-value').val(currentValue + this.value);
});
var six = $('input[name="six"]').click(function() {
    var currentValue = $('#calc-value').val();
    $('#calc-value').val(currentValue + this.value);
});
var minus = $('input[name="minus"]').click(function() {
    var currentValue = $('#calc-value').val();
    $('#calc-value').val(currentValue + this.value);
});
var seven = $('input[name="seven"]').click(function() {
    var currentValue = $('#calc-value').val();
    $('#calc-value').val(currentValue + this.value);
});
var eight = $('input[name="eight"]').click(function() {
    var currentValue = $('#calc-value').val();
    $('#calc-value').val(currentValue + this.value);
});
var nine = $('input[name="nine"]').click(function() {
    var currentValue = $('#calc-value').val();
    $('#calc-value').val(currentValue + this.value);
});
var times = $('input[name="times"]').click(function() {
    var currentValue = $('#calc-value').val();
    $('#calc-value').val(currentValue + this.value);
});
var clear = $('input[name="clear"]').click(function() {
    var currentValue = $('#calc-value').val();
    $('#calc-value').val('');
});

form.submit(function(e) {
    e.preventDefault();
    var calculator = $('#calc-value');
    var calculatorValue = calculator.val();
    
    var sendData = {
        expression: calculatorValue
    };
    
    // Send some data to the server!
    // When we get a response back from the php,
    // The function inside will get called!
    $.post("./calc.php", sendData, function(data) {
        // Set the calculator display to be the new value from the server.
        var target = data.indexOf('int(');
        data = data.slice(target, data.length);
    /* data.match(/(?int\()/i)*/;
        console.log(data);
        calculator.val(data);
    });
    return false;
});
});
