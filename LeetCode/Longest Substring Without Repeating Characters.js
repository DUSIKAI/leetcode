/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var str='';
    var res=0;
    for(var i=0;i<s.length;i++){
        var char=s.charAt(i);
        var index=str.indexOf(char);
        if(index===-1){
            str+=char;
            res=res<str.length?str.length:res;
        }else {
        str = str.substr(index + 1) + char;
      }
    }
    return res;
};