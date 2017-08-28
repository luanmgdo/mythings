#include <stdio.h>
#include <math.h>

int main(){
	int i = 0, tam = 0, num = 0, c = 0; // Valor a ser convertido
	char c[33]; // Onde vou guardar o valor convertido (use o tamanho 33)
    printf("tamanho: ");
    scanf("%d", &tam);
    int resultados[tam];
    for(i = 0;i < tam;i++){
        printf("numero: ");
        scanf("%d", &num);
        printf("oi\n");
	    itoa(num, c, 4);  // converter na base 2, acredito que converta até base 32
        printf("%s\n", c);
        resultados[i] = c;
    }
    printf("resultados\n");
    for(i = 0; i < tam; i++){
        printf("%d ", resultados[i]);
    }
    getchar();
    return 0;
}
// int main(){
//     int tam = 0, i = 0, aux = 0, j = 0, posicao = 0, resultado = 0, limite = 0;
//     printf("digite o numero de testes: ");
//     scanf("%d", &tam);
//     int testes[tam], aux2[10], resultados[tam];
//     // for(i = 0; i < tam; i++){
//     //     printf("teste[%d]: ", i);
//     //     scanf("%d", &testes[i]);
//     // }
//     // printf("\nTestes\n");
//     for(i = 0; i < tam; i++){
//         printf("teste[%d]: ", i);
//         scanf("%d", &testes[i]);
//         aux = testes[i];
//         printf("\naux %d\n", aux);
//         while(aux!=0){
//             printf("entrou, convertendo\n");
//             aux2[j] = aux % 4;
//             aux = aux / 4;
//             j++;
//             limite++;
//             printf("\naux2 %d\n", aux2[j]);
//         }
//         posicao = 1;
//         resultado = 0;
//         printf("limite %d\n", limite);
//         printf("posicao1 %d\n", posicao);        
//         for(j = 0; j < limite; j++){
//             printf("\n\nentrou aqui[%d], multiplicando\n", j);
//             resultado += aux2[j] * posicao;
//             posicao = posicao * 10;
//             printf("resultado[%d]: %d\n", j, resultado);
//             aux2[j] = 0;
//             printf("posicao2 %d\n", posicao);
//             printf("contador %d\n", j);
//             if(j == limite-1){
//                 printf("\noi\n");
//                 posicao = 1;
//             }          
//         }
//         printf("posicao3 %d\n", posicao);
//         resultados[i] = resultado;
//         printf("teste: %d\n", resultados[i]);
//     }
//     printf("\n~~~~resultado 1: %d~~~~\n", resultados[1]);
//     printf("\nresultados\n");
//     for(i=0;i < tam; i++){
//         printf("%d = %d ", i, resultados[i]);
//     }
//     // for(j = 0; j < limite; j++){
//     //     resultado += aux2[j] * posicao;
//     //     printf("[%d]", aux2[j]);
//     //     posicao = posicao * 10;
//     // }
//     // printf("\n");
//     // printf("aux3: %d \n", resultado);
//     return 0;
// }
