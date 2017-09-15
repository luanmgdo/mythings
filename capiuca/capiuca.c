#include <stdio.h>

int inversao(int x){
    int milhar = 0, centena = 0, dezena = 0, unidade = 0, invertido = 0;    
    if(x > 10)
      {
        milhar = x % 10;
        x = x / 10;
        centena = x % 10;
        x = x / 10;
        dezena = x % 10;
        x = x / 10;
        unidade = x % 10;
      }
    invertido = (milhar*1000) + (centena*100) + (dezena*10) + unidade;
    return invertido;
}

int main (){
    int tam = 0, i = 0, x = 0,j = 0, l = 0, invertido = 0;
    scanf("%d", &tam);
    int aux[tam], aux2[tam];
    for(i=0; i < tam; i++){
        scanf("%d", &x);
        aux[j] = x;
        aux2[l] = inversao(x);

        j++;
        l++;
    }
    j = 0;
    l = 0;
    for(l=0; l < tam; l++){
        if(aux[l] == aux2[j]){
            printf("S\n");
        }
        else{
            printf("N\n");
        }
        j++;
    }
    return 0;
}