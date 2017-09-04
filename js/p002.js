
/*

피보나치 수열의 각 항은 바로 앞의 항 두 개를 더한 것이 됩니다. 1과 2로 시작하는 경우 이 수열은 아래와 같습니다.
1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
짝수이면서 4백만 이하인 모든 항을 더하면 얼마가 됩니까?

*/


var p002 = (function(){
    var fibonacci = [1,2];
    var sum = 0;

    while (fibonacci[fibonacci.length-1] < 4000000) {
        var lastIndex = fibonacci.length-1;
        fibonacci.push((fibonacci[lastIndex])+fibonacci[lastIndex-1]);
    }

    for (var i=0; i<fibonacci.length; i++) {
        if ((fibonacci[i]%2 == 0) && (fibonacci[i] < 4000000)) {
            sum += fibonacci[i];
        }
    }

    return sum;
})();