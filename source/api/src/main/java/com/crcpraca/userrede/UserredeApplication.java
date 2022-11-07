package com.crcpraca.userrede;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.servers.Server;

@SpringBootApplication
@OpenAPIDefinition (
            info = @Info(title = " API CRC-PRACA ", version = "0.0.1", description = "API DO PROJETO PUC MINAS" ),
            servers = {
                    @Server(url = "http://localhost:8080/")
            }
        )
public class UserredeApplication {
    

	public static void main(String[] args) {
		SpringApplication.run(UserredeApplication.class, args);
	}

}
