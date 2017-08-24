#include <stdio.h>

int inversao(int x){
    int numinvertido=0, centena=0, dezena=0, unidade=0;
    printf("oi\n");
    centena=x/100;
    dezena=(x%100)/10;
    unidade=(x%100)%10;
    numinvertido=(unidade*100)+(dezena*10)+centena;
    printf("numero: %d\n", numinvertido);
    return numinvertido;
}

int main (){
    int tam = 0, i = 0, x = 0, invertido = 0;
    printf("digite quantas vezes vc quer testar: ");
    scanf("%d", &tam);
    for(i=0; i != tam; i++){
        printf("digite o numero: ");
        scanf("%d", x);
        invertido = inversao(x);
        printf("invertido: %d\n", invertido);
        // if(num == invertido){
        //     printf("S\n");
        // }
        // else{
        //     printf("N\n");
        // }
    }
    return 0;
}