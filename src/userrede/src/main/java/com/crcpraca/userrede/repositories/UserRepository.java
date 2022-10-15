package com.crcpraca.userrede.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.crcpraca.userrede.entitys.User;


public interface UserRepository extends JpaRepository<User, Long> {

}
