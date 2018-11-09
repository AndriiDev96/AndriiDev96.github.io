function func(n){
  console.log(n);
  if(n == 10){
    return n;
  }else{
    func(n + 1);
  }
}
func(1);