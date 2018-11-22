package com.example.teste.simplekeyboard;

import android.content.Intent;
import android.graphics.Color;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.ImageButton;

public class KeyboardView extends  AppCompatActivity{

    ImageButton b1 = (ImageButton) findViewById(R.id.dot1);
    ImageButton b2 = (ImageButton) findViewById(R.id.dot2);
    ImageButton b3 = (ImageButton) findViewById(R.id.dot3);
    ImageButton b4 = (ImageButton) findViewById(R.id.dot4);
    ImageButton b5 = (ImageButton) findViewById(R.id.dot5);
    ImageButton b6 = (ImageButton) findViewById(R.id.dot6);

    ImageButton sendB = (ImageButton) findViewById(R.id.sendButton);
    ImageButton delB = (ImageButton) findViewById(R.id.delButton);

    @Override
    public void onCreate(Bundle savedInstanceState){
        super.onCreate(savedInstanceState);
        setContentView(R.layout.key_view);

    }

    public void dot1Pressed(){
        b1.setBackgroundColor(Color.RED);
    }

    public void dot2Pressed(){
        b2.setBackgroundColor(Color.RED);
    }

    public void dot3Pressed(){
        b3.setBackgroundColor(Color.RED);
    }

    public void dot4Pressed(){
        b4.setBackgroundColor(Color.RED);
    }

    public void dot5Pressed(){
        b5.setBackgroundColor(Color.RED);
    }

    public void dot6Pressed(){
        b6.setBackgroundColor(Color.RED);
    }


}
