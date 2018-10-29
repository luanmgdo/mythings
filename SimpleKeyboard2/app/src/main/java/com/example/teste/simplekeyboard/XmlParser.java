package com.example.teste.simplekeyboard;

public class XmlParser {
    private String currentCharacter;

    private StringBuilder aux = new StringBuilder();

    public String getBrailleCode(String code){
        aux.append(code);
        code = aux.toString();
        switch (code){
            case "1":
                currentCharacter =  "a";
                return currentCharacter;
            case "12":
                currentCharacter =  "b";
                return currentCharacter;
            case "14":
                currentCharacter =  "c";
                return currentCharacter;
            case "145":
                currentCharacter =  "d";
                return currentCharacter;

        }

        return currentCharacter;

    }
    public void clearString(){
        aux.setLength(0);
    }

    public void deleteString(){
        aux.setLength(aux.length()-1);
    }





}
