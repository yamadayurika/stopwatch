
$(document).ready(function(){
    // スタートボタン
    $('#Stopwatch #startButton').click(function() {
        // 0:0:0:0からスタート
        $('#Stopwatch .time').html('0:0:0:0');
 
        timer = setInterval("countUp()", 100);
 
        $(this).attr('disabled', 'disabled');
        $('#Stopwatch #stopButton').removeAttr('disabled');
    });
 
 
    // ストップボタン
    $('#Stopwatch #stopButton').click(function() {
        // (一時)停止
        clearInterval(timer);
 
        $(this).attr('disabled', 'disabled');
        $('#Stopwatch #startButton').removeAttr('disabled');
        $('#Stopwatch #resetButton').removeAttr('disabled');
    });
 
 
    // リセットボタン
    $('#Stopwatch #resetButton').click(function() {
 
        msec = 0;
        sec  = 0;
        min  = 0;
        hour = 0;
 
        // 0:0:0:0にリセット
        $('#Stopwatch .time').html('0:0:0:0');
        clearInterval(timer);
 
        $(this).attr('disabled', 'disabled');
        $('#Stopwatch #stopButton').attr('disabled','disabled');
        $('#Stopwatch #startButton').removeAttr('disabled');
    });
});
 
msec = 0;
sec  = 0;
min  = 0;
hour = 0;
 
function countUp ()
{
    msec += 1;
 
    if (msec > 9) {
        msec = 0;
        sec += 1;
    }
 
    if (sec > 59) {
        sec = 0;
        min += 1;
    }
 
    if (min > 59) {
        min = 0;
        hour += 1;
    }
 
    // ミリ秒
    msecNumber = msec;
 
    // 秒
    if (sec < 10) {
        secNumber = '0' + sec.toString();
    } else {
        secNumber = sec;
    }
 
    // 分
    if (min < 10) {
        minNumber = '0' + min.toString();
    } else {
        minNumber = min;
    }
 
    // 時
    if (hour < 10) {
        hourNumber = '0' + hour.toString();
    } else {
        hourNumber = hour;
    }
 
    // 出力
    $('#Stopwatch .time').html(hourNumber + ':' + minNumber + ':' + secNumber + ':' + msecNumber);
}