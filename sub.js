let choice;
do{
    console.log("1 .add");
    console.log("2 .subtract");
    console.log("3 .multiply");
    console.log("4 . divide");
    console.log("5 .check Even/odd");
    console.log("6 . exit");

 choice=Number(prompt("enter your choice :"));
 switch (choice){
       case 1:
     let  A =Number(prompt("enter your first number,"));
     let  B =Number(prompt("enter your second number'"));
      console.log(A+B);
      break;
      
 case 2:
     let  C =Number(prompt("enter your first number,"));
     let  D =Number(prompt("enter your second number'"));
      console.log(C-D);
      break;
      
case 3:
     let  E =Number(prompt("enter your first number,"));
     let  F =Number(prompt("enter your second number'"));
      console.log(E*F);
      break;
      
case 4:
     let  G =Number(prompt("enter your first number,"));
     let  H =Number(prompt("enter your second number'"));
      console.log(G/H);
case 5:
   let  I =Number(prompt("enter your first number,"));
   if (I%2==0){
       console.log ("even")
   }
   else{
       console.log ("odd")
   }
      break;
case 6:
   let  J=Number(prompt("exist"));
   break;
   default:
   console.log("invalid choice");
      
 }
}
   while(choice!==6);
      
      
     
      
      
      
 