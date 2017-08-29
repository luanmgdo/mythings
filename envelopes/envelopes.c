#include <stdio.h>

int main(){
    int rotulos = 0, balas = 0, i = 0;
    printf("digite a quantidade de rotulos e os tipos das balas: ");
    scanf("%d %d", &rotulos, &balas);
    int qtdRotulos[rotulos], tipoBalas[balas], cont[balas];
    printf("digite seus rotulos\n");
    for(i = 0; i < balas; i++){
        tipoBalas[i] = 0;
    }
    for(i = 0; i < rotulos; i++){
        scanf("%d", &qtdRotulos[i]);
    }
    for(i = 0; i < rotulos; i++){
        if(qtdRotulos[i]-1 == tipoBalas[i]){
            
            cont[i]++;
        }
    }
    for(i = 0; i < rotulos; i++){
        printf("%d ", qtdRotulos[i]);
    }
}
