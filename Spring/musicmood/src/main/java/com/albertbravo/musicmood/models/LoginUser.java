package com.albertbravo.musicmood.models;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

public class LoginUser {
    @NotEmpty(message="Email is required!")
    @Email(message="Please enter a valid email!")
    private String loginEmail;
    
    @NotEmpty(message="Password is required!")
    @Size(min=8, max=128, message="Password must be between 8 and 128 characters")
    private String loginPassword;
    
    public LoginUser() {}

	public String getLoginEmail() {
		return loginEmail;
	}

	public void setLoginEmail(String email) {
		this.loginEmail = email;
	}

	public String getLoginPassword() {
		return loginPassword;
	}

	public void setLoginPassword(String password) {
		this.loginPassword = password;
	}
    
}
