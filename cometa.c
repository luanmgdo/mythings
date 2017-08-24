#include <stdio.h>
#include <stdlib.h>

#define TEMPO 76
int PANO = 1986;

void proxano(int anoAtual) {
    int prox = 0, aux = 0, aux2 = 0;
    // printf("anoAtual - PANO: %d\n", anoAtual - PANO);
    while(anoAtual - PANO > TEMPO ){
        PANO = PANO + 76;
        // printf("teste 1: %d\n", PANO);
    }
    
    if(anoAtual - PANO == TEMPO){
        prox = anoAtual + TEMPO;
        // printf("anos iguais: %d\n", prox);
    }

    if(anoAtual - PANO < TEMPO){
        aux = anoAtual - PANO;
        aux2 = TEMPO - aux;
        prox = anoAtual + aux2;
        // printf("o proximo ano sera2: %d\n", prox);
        printf("%d\n", prox);
    }
}

int main (){
    int anoAtual = 0;
    // printf("digite o ano atual: ");
    scanf("%d", &anoAtual);
    proxano(anoAtual);
    return 0;
}