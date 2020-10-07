module.exports = function toReadable (number) {
  let num = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let dec = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let ten= ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let result='';
    let arr= number.toString();
  for(let i=0; i<arr.length; i++){
      if(arr.length == 1){
        result= num[+arr[0]];
      }else if(arr.length == 2){
          if(+arr[0] == 1){
               result = dec[+arr-10];
          }else if(+arr[1] == 0){

                result = ten[+arr[0]-2];
          }else{
                result = `${ten[+arr[0]-2]} ${num[+arr[1]]}`;
          };
     }else if(arr.length == 3){
       if (+arr[1] == 0 && +arr[2] == 0){
           result = `${num[+arr[0]]} hundred`;

       }else if (+arr[1] >1 && +arr[2] == 0){
           result = `${num[+arr[0]]} hundred ${ten[+arr[1]-2]}`;
       }else if (+arr[1] == 0 && +arr[2] > 0){
           result = `${num[+arr[0]]} hundred ${num[+arr[2]]}`;
        }else if (+arr[1] == 1){
            result = `${num[+arr[0]]} hundred ${dec[+arr[2]]}`;
       }else{
           result = `${num[+arr[0]]} hundred ${ten[+arr[1]-2]} ${num[+arr[2]]}`;
       }

      }
    }
    return result;
}