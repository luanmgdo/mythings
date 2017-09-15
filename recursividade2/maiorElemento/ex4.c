#include <stdio.h>

int maiorElemento(int tam, int vet[]);

int main(){
    int tam = 0, i = 0;
    scanf("%d", &tam);
    int vet[tam];
    for(i=0;i < tam; i++){
        scanf("%d", &vet[i]);
    }
    printf("%d\n", maiorElemento(tam, vet));
    return 0;
}

int maiorElemento(int tam, int vet[]){
    int maior;
    if (tam == 1){
        maior = vet[0];
    }
    else{
        maior = maiorElemento(tam - 1, vet);
        if(maior < vet[tam-1]){
            maior = vet[tam-1];
        }
    }
    return maior;
}