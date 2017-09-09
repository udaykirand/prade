package com.prade.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.prade.dao.CustomUserDao;
import com.prade.exception.PradeException;
import com.prade.model.User;
import com.prade.model.UserBean;
import com.prade.repository.UserRepository;
import com.prade.service.UserService;

/**
 * Created by udayd
 */

@Service
public class UserServiceImpl implements UserService {
    
	@Autowired
    private UserRepository userRepository;
	
	@Autowired
    private CustomUserDao customUserDao;

    @Override
    @PreAuthorize("hasRole('USER')")
    public User findByUsername( String username ) throws UsernameNotFoundException {
        User u = userRepository.findByUsername( username );
        return u;
    }

    @PreAuthorize("hasRole('ADMIN')")
    public User findById( Long id ) throws AccessDeniedException {
        User u = userRepository.findOne( id );
        return u;
    }

    @PreAuthorize("hasRole('ADMIN')")
    public List<User> findAll() throws AccessDeniedException {
        List<User> result = userRepository.findAll();
        return result;
    }
    
    // By default all users will only have ROLE_USER. Admin users must be created in backend
    public Long register(UserBean userBean) {
    	User userExists = userRepository.findByUsername(userBean.getUsername());
    	if(userExists != null) {
    		throw new PradeException("username.exists");
    	}
    	if(!userBean.getPassword().equals(userBean.getConfirmPassword())) {
    		throw new PradeException("password.doesnt.match");
    	}
    	User user = new User();
    	user.setUsername(userBean.getUsername());
    	user.setPassword(userBean.getPassword());
        User result = userRepository.save(user);
        customUserDao.insertUserRoleMapping(result.getId(), new Long(1));
        return result.getId();
    }
    
}
