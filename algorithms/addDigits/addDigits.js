/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    var n = 0;
    
    while(num > 9){
        num = (num + '').split('');
        n = 0;
        for(var i=0, len=num.length; i<len; i++){
            n += parseInt(num[i]);
        }
        num = n;
    }
    
    return num;
};