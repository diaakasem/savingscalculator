$(document).ready(function() {

    var outputPercent = $('#output-percent');
    var outputSpend = $('#output-spend');

    var minPercentValue = 10;
    var maxPercentValue = 15;

    var minSpendValue = 1;
    var maxSpendValue = 10;

    var percentValue = 13;
    var spendValue = 5;

    function money(value) {
        return accounting.formatMoney(parseInt(value), "$", 0);
    }

    function calcMinSavings() {
        var value = spendValue * 1000 * minPercentValue / 100;
        $('#minEstimatedSaving').text(money(value));
        return value;
    }

    function calcMaxSavings() {
        var value = spendValue * 1000 * maxPercentValue / 100;
        $('#maxEstimatedSaving').text(money(value));
        return value;
    }

    function calcMinBilling() {
        var value = calcMinSavings() / (percentValue / 100);
        $('#minBilling').text(money(value));
        return value;
    }

    function calcMaxBilling() {
        var value = calcMaxSavings() / (percentValue / 100);
        $('#maxBilling').text(money(value));
        return value;
    }

    function calculate() {
        calcMinBilling();
        calcMaxBilling();
    }

    function onPercentSlide(value) {
        percentValue = value;
        outputPercent.text(value);
        calculate();
        return value + "%";
    }

    function onSpendSlide(value) {
        spendValue = value;
        outputSpend.text(value);
        calculate();
        return value + "K";
    }

    function initPercent() {
        $('#input-percent').slider({ formatter: onPercentSlide });
    }

    function initSpend() {
        $('#input-spend').slider({ formatter: onSpendSlide });
    }
    initPercent();
    initSpend();

    calculate();
});
