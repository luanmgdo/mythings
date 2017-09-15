#include <stdio.h>
int atm(int s,int n2,int n5,int n10,int n20,int n50,int n100,int t);
int main(){
	int s,n2,n5,n10,n20,n50,n100,t=0,soma=0;
	scanf ("%d",&s);
	scanf ("%d %d %d %d %d %d ",&n2,&n5,&n10,&n20,&n50,&n100);
	printf ("%d",atm(s,n2,n5,n10,n20,n50,n100,t));
}
int atm(int s,int n2,int n5,int n10,int n20,int n50,int n100,int t){
	if (t<s){
		return 0;
	}
	if (t==s){
		return 1;
    }
    else{
        return (if (n2>0){atm(s,n2-1,n5,n10,n20,n50,n100,t+2);} + if(n5>0){atm(s,n2,n5-1,n10,n20,n50,n100,t+5);} + if(n10>0){atm(s,n2,n5,n10-1,n20,n50,n100,t+10);} + if(n20>0){atm(s,n2,n5,n10,n20-1,n50,n100,t+20);} + if(n50>0){atm(s,n2,n5,n10,n20,n50-1,n100,t+50);} + if(n100>0){atm(s,n2,n5,n10,n20,n50,n100-1,t+100);});        
    }
}
