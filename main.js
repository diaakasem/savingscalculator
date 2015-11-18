$(document).ready(function() {

    var outputPercent = $('#output-percent');
    var diffPercent = $('#diff-percent');
    var outputSpend = $('#output-spend');

    var minPercentValue = 10;
    var maxPercentValue = 15;

    var minSpendValue = 0;
    var maxSpendValue = 50;

    var percentValue = 25;
    var spendValue = 25;

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
        outputPercent.text(value + "%");
        var sign = value > 13 ? "+" : "";
        diffPercent.text(sign + (value - 13));
        calculate();
        return value + "%";
    }

    function onSpendSlide(value) {
        spendValue = value;
        outputSpend.text("$" + value + ",000");
        calculate();
        return "$" + value + ",000";
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
