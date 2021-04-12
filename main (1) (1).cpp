#include <iostream>
#include <math.h>

using namespace std;

const int tam = 20;

int main()
{
    char repetir;
    int vetor[tam], numeros, cont=0, mTam, aux=0;
    
    cout << "Qual a quantidade de numero que você deseja adicionar? " << endl;
    cin >> cont;
    //Adicionar valores ao vetor
    for (int loop = 0; loop < cont; loop++) {
        
        cout << "Coloque um numero para adicionar ao vetor: ";
        cin >> numeros;
        
        if (numeros < 0){
            cout << "Numeros negativos nao podem!\n";
            loop--;
        }
        
        else {
        vetor[loop] = numeros;
        }
    }
    
    //Gerar menor Matriz quadrada
    mTam = sqrt(cont);
    mTam++;
    int matriz[mTam][mTam];
    
    
    //Preenchimento da matriz com os valores do vetor
    for (int i = 0; i < mTam; i++){
        for (int j = 0; j < mTam; j++){
            matriz[i][j] = vetor[aux];
            aux++;
            
            //resetar o vetor para preencher os espaços vazios da matriz
            if (aux >= cont){
                aux = 0;
            }
            
            //impressao
            cout << "Matriz[" << i << "][" << j << "] = " << matriz[i][j] << endl;
        }
    }
    
    return 0;
}