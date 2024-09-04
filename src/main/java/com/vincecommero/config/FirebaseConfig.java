package com.vincecommero.config;

import java.io.FileInputStream;
import java.io.IOException;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;

@Configuration
public class FirebaseConfig {
	@Value("${firebase.serviceAccountKeyPath}")
	private String serviceAccountKeyPath;
	
	@PostConstruct
	public void initialize() throws IOException {
/*
		FileInputStream serviceAccount =
				new FileInputStream(serviceAccountKeyPath);

		FirebaseOptions options = new FirebaseOptions.Builder()
		  .setCredentials(GoogleCredentials.fromStream(serviceAccount))
		  .build();

		FirebaseApp.initializeApp(options);
*/
    }
}
