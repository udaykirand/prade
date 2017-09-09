package com.prade.service;

import java.util.List;

import com.prade.model.User;
import com.prade.model.UserBean;

/**
 * Created by udayd
 */
public interface UserService {
    public User findById(Long id);
    public User findByUsername(String username);
    public List<User> findAll ();
	public Long register(UserBean user);
}
