
let str = "GAANDALLLF";
function  maxRepeating(str)  {

let len = str.length;
let count = 0;

let result = str[0];
for (let i = 0; i<len; i++)
{
    let cur_count =1;
    for(let j=i+1; j<len;j++)
    {
        if(str[i] != str[j])
        break;
        cur_count++;

    }
    if (cur_count>count)
    {
        count = cur_count;
        result = str[i];
    }
}
    return result;
    
}
console.log(maxRepeating(str));

    