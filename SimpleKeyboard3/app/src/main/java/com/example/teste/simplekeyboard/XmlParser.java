package com.example.teste.simplekeyboard;

import android.content.Context;
import android.util.Log;

import java.io.BufferedReader;
import java.io.File;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.file.Path;
import java.nio.file.Paths;

import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.DocumentBuilder;

import org.w3c.dom.Document;
import org.w3c.dom.NodeList;
import org.w3c.dom.Node;
import org.w3c.dom.Element;
import org.xmlpull.v1.XmlPullParser;
import org.xmlpull.v1.XmlPullParserFactory;
import org.xmlpull.v1.XmlPullParserException;

public class XmlParser {
    private String currentCharacter;
    private String text;

    public String getBrailleCode(Context ctx, String code){
        try{
            InputStream file = ctx.getAssets().open("braillevalues.xml");
            BufferedReader reader = new BufferedReader(new InputStreamReader(file));

            // Factory to build the XMLPullParser
            XmlPullParserFactory factory = XmlPullParserFactory.newInstance();
            XmlPullParser parser = factory.newPullParser();

            parser.setInput(reader);

            int eventType = parser.getEventType();

            while(eventType != XmlPullParser.END_DOCUMENT){
                String tagName = parser.getName();

                switch(eventType){
                    case XmlPullParser.START_TAG:
                        break;
                    case XmlPullParser.TEXT:
                        text = parser.getText();
                        break;
                    case XmlPullParser.END_TAG:
                        if(tagName.equalsIgnoreCase("id")){
                            if(text == code){
                                Log.d("Text ID", text);
                                Log.d("Code", code);
                                currentCharacter = text;
                                Log.d("Char", currentCharacter);
                                break;
                            }

                        }
                        break;
                }

                eventType = parser.next();
            }
        } catch (XmlPullParserException e) {
            e.printStackTrace();
            Log.d("ERRO: ", e.getMessage());
        }catch (Exception e) {
            e.printStackTrace();

            Log.d("ERRO: ", e.getMessage());
        }


        return currentCharacter;
    }





}
