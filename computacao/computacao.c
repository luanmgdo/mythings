#include <stdio.h>

void conversao(int x){
    int aux = 0, posicao = 1, resultado = 0;
    aux = x;
    while(aux/4!=0){
        resultado += (aux % 4) * posicao;
        aux = aux / 4;
        posicao = posicao * 10;
    }

    resultado += (aux % 4) * posicao;
    printf("%d", resultado);
}

int main (){
    int tam = 0 , i = 0;
    scanf("%d", &tam);
    int numeros[tam];

    for(i = 0; i < tam; i++){
        scanf("%d", &numeros[i]);
    }

    for(i = 0; i < tam; i++){
        conversao(numeros[i]);
        printf("\n");
    }

    return 0;
}
