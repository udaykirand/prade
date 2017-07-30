package com.prade.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.prade.model.User;

/**
 * Created by udayd
 */
public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername( String username );
}

