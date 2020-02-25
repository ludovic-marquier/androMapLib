package com.example.maptest;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;

import com.example.libmap.CustomView.Map;

public class MainActivity extends AppCompatActivity {

    private Map map;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        map = findViewById(R.id.webView);
        map.show();
    }
}
