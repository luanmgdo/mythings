package com.example.teste.simplekeyboard;

public class BrailleParser {
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
            case "15":
                currentCharacter =  "e";
                return currentCharacter;
            case "124":
                currentCharacter =  "f";
                return currentCharacter;
            case "1245":
                currentCharacter =  "g";
                return currentCharacter;
            case "125":
                currentCharacter =  "h";
                return currentCharacter;
            case "24":
                currentCharacter =  "i";
                return currentCharacter;
            case "245":
                currentCharacter =  "j";
                return currentCharacter;
            case "13":
                currentCharacter =  "k";
                return currentCharacter;
            default:
                currentCharacter = "";
                return currentCharacter;

        }
    }

    public void clearString(){
        aux.setLength(0);
    }

    public void deleteString(){
        aux.setLength(aux.length()-1);
    }

}
