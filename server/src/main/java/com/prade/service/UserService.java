package com.prade.service;

import java.util.List;

import com.prade.model.User;

/**
 * Created by udayd
 */
public interface UserService {
    public User findById(Long id);
    public User findByUsername(String username);
    public List<User> findAll ();
}
