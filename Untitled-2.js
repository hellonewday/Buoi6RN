// Bài 3;
function SNT(N){
    var i;
    if(N == 1){
        return 1;
    }
    else {
        for(i=2;i<N;i++){
            if(N % i == 0)
                return 0;
        }
        return 1;
    }
}
var N=9,sub=1;
 while (N<=0){
       printf("Các sô NT nhỏ hơn", N, "là:");
 }
 for(var i=1;i<=N;i++){
     if(SNT(i)){
         sub*=i;
     }
 }
       console.log("tich:",sub);
