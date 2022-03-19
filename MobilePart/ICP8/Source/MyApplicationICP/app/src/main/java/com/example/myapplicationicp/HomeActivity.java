package com.example.myapplicationicp;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;

public class HomeActivity extends MainActivity {


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);
    }

    public void onLogoutClick(View v){
        if(v.getId() == R.id.logoutButton)
        {
            Intent i = new Intent(HomeActivity.this,MainActivity.class);
            startActivity(i);
        }
    }
}