/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    let m=num1.length;
    let n=num2.length;
    let arr=new Array(m+n).fill(0);
    for(let i=m-1;i>=0;i--){
        for(let j=n-1;j>=0;j--){
            let mul=(num1[i]-'0')*(num2[j]-'0');
            let sum=mul+arr[i+j+1];
            arr[i+j]+=Math.floor(sum/10);
            arr[i+j+1]=sum%10;
        }
    }
    let str=arr.reduce((a,b)=>{
        if(a===''&&b===0) return a;
        return a+b;
    },'');
    return str?str:'0';
};
