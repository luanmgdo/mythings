#include <stdio.h>

int main(){
    int maiorNum = 0, x = 0, y = 0, result = 0;
    char operacao[2]; 
    
    printf("Digite o maior numero que o consegue representar: ");
    scanf("%d", &maiorNum);
    printf("digite dois numeros e o caractere de operacao entre os numeros: ");
    scanf("%d %c %d ", &x, &operacao, &y);
    getchar();
    // printf("%d %d\n", x, y);
    printf(" '%c'\n", operacao);
    if(operacao == "+"){
        result = x + y;
        printf("resultado: %d", result);
    }
    if(operacao == "*"){
        result = x * y;
        printf("resultado: %d", result);
    }

    return 0;
}