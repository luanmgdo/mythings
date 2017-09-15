#include <stdio.h>

int Resultado(int numero){
   if(numero == 1){
       return 1;
   }
   if(numero == 2){
       return 3;
   }
   else{
       return Resultado(numero - 1) - Resultado(numero - 2);
   }
}

int main (){
   int tam = 0, i = 0, aux = 0;
   scanf("%d", &tam);
   int vet[tam];
   for(i = 0; i < tam; i ++){
       scanf("%d", &vet[i]);
   }
   for(i = 0; i < tam; i ++){
       aux += Resultado(vet[i]);
       printf("%d \n", aux);
   }

   return 0;
}