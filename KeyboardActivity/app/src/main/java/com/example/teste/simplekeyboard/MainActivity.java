package com.example.teste.simplekeyboard;

import android.graphics.Color;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;



public class MainActivity extends AppCompatActivity {

    Button b1;
    Button b2;
    Button b3;
    Button b4;
    Button b5;
    Button b6;
    Button send;

    private Boolean dot1 = false;
    private Boolean dot2 = false;
    private Boolean dot3 = false;
    private Boolean dot4 = false;
    private Boolean dot5 = false;
    private Boolean dot6 = false;

    private String texto = "";


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.key_view);

        b1 = (Button) findViewById(R.id.dot1);
        b2 = (Button) findViewById(R.id.dot2);
        b3 = (Button) findViewById(R.id.dot3);
        b4 = (Button) findViewById(R.id.dot4);
        b5 = (Button) findViewById(R.id.dot5);
        b6 = (Button) findViewById(R.id.dot6);
        send = (Button) findViewById(R.id.sendButton);

        b1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                dot1Pressed(view);
            }
        });

        b2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                dot2Pressed(view);
            }
        });

        b3.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                dot3Pressed(view);
            }
        });

        b4.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                dot4Pressed(view);
            }
        });

        b5.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                dot5Pressed(view);
            }
        });

        b6.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                dot6Pressed(view);
            }
        });

        send.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
//                sendMessage(view);
            }
        });


    }

    public void dot1Pressed(View v){
        dot1 = !dot1;
        pressed(dot1, v);
    }

    public void dot2Pressed(View v){
        dot2 = !dot2;
        pressed(dot2, v);
    }

    public void dot3Pressed(View v){
        dot3 = !dot3;
        pressed(dot3, v);
    }

    public void dot4Pressed(View v){
        dot4 = !dot4;
        pressed(dot4, v);
    }

    public void dot5Pressed(View v){
        dot5 = !dot5;
        pressed(dot5, v);
    }

    public void dot6Pressed(View v){
        dot6 = !dot6;
        pressed(dot6, v);
    }

    public void pressed(Boolean status, View v){
        if(status){
            v.setBackgroundColor(Color.RED);
        }else{
            v.setBackgroundColor(Color.BLACK);
        }
        textChanged();

    }

    public void textChanged(){
        int state = 0;
        if(dot1) {
            state += 0x1;
        }
        if(dot2){
            state += 0x2;
        }
        if(dot3){
            state += 0x4;
        }
        if(dot4){
            state += 0x8;
        }
        if(dot5){
            state += 0x10;
        }
        if(dot6){
            state += 0x20;
        }

        Log.d("state", String.valueOf(state));

        switch (state) {
//            case 0x0:
//                Log.d("Texto: ", " ");
//                texto = " ";
//                break;
            case 0x1:
                Log.d("Texto: ", "a");
                texto = "a";
                break;
            case 0x3:
                Log.d("Texto: ", "b");
                texto = "b";
                break;
            case 0x9:
                Log.d("Texto: ", "c");
                texto = "c";
                break;
            case 0x19:
                Log.d("Texto: ", "d");
                texto = "d";
                break;
            case 0x11:
                Log.d("Texto: ", "e");
                texto = "e";
                break;
            case 0xB:
                Log.d("Texto: ", "f");
                texto = "f";
                break;
            default:
                Log.d("Texto: ", "?");
                texto = "?";
                break;
        }
        sendMessage(texto);
    }

    public void sendMessage(String t){
        Log.d("message " , t);
    }



}
