#include <stdio.h>

int inversao(int x){
    int numinvertido=0, centena=0, dezena=0, unidade=0;
    centena=x/100;
    dezena=(x%100)/10;
    unidade=(x%100)%10;
    numinvertido=(unidade*100)+(dezena*10)+centena;
    return numinvertido;
}


int main(){
    int x = 0, y = 0; 
    scanf("%d %d", &x, &y);
    if( x != y && x != 0 && y != 0){
        x = inversao(x);
        y = inversao(y);
        if( x > y){
            printf("%d\n", x);
        }
        else{
            printf("%d\n", y);
        }
    }
    return 0;
}