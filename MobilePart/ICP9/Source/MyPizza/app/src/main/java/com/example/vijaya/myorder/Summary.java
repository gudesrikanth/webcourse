package com.example.vijaya.myorder;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.TextView;

public class Summary extends Activity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.summary);
        Bundle bundle = getIntent().getExtras();
        String message = bundle.getString("message");
        TextView txtView = (TextView) findViewById(R.id.textView);
        txtView.setText(message);
        System.out.print("Text View" + txtView);
    }
    public void homeNav(View v){
        Intent i = new Intent(this,MainActivity.class);
        startActivity(i);
    }
}
