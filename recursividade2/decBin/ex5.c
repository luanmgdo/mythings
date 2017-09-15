#include <stdio.h>

int conversao(int decimal);
int posicao = 1;
int main (){
    int decimal = 0;
    scanf("%d", &decimal);
    printf("%d\n", conversao(decimal));
    return 0;
}

int conversao(int decimal){
    int aux = 0;
    if(decimal == 0){
        return 0;
    }
    if(decimal == 1){
        return 1;
    }
    else{
        return (decimal % 2 + 10 * conversao(decimal/2));
    }
}