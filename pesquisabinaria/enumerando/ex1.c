#include <stdio.h>

int main (){
    int i = 0, j = 0, numero = 0, maior = 0;
    do{
        scanf("%d", &numero);
        for(i = 1; i < numero;i++){
            if(i % numero == 0){
                if(i > maior){
                    maior = i;
                }
            }
        }
        printf("%d/%d\n", maior, numero);

    }while(numero != 0);
    return 0;
}