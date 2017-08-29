#include <stdio.h>

void comparando(int maiorNum, int result){
    if(result <= maiorNum){
        printf("OK\n");
    }
    else{
        printf("OVERFLOW\n");
    }
}

int main(){
    int maiorNum = 0, x = 0, y = 0, result = 0;
    char operacao; 
    
    scanf("%d", &maiorNum);
    scanf("%d %c %d", &x, &operacao, &y);
    
    if(operacao == '+'){
        result = x + y;
        comparando(maiorNum, result);
    }
    
    if(operacao == '*'){
        result = x * y;
        comparando(maiorNum, result);
    }

    return 0;
}