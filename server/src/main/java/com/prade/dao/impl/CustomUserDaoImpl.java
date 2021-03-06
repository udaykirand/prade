package com.prade.dao.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.prade.dao.CustomUserDao;

@Repository
public class CustomUserDaoImpl implements CustomUserDao {

	@Autowired
	private JdbcTemplate simpleJdbcTemplate;
	
	@Override
	public void insertUserRoleMapping(Long userId, Long authorityId) {
		String sql = "INSERT IGNORE INTO user_authority (user_id, authority_id) VALUES (?, ?)";
		Object[] params = { userId, authorityId };
		simpleJdbcTemplate.update(sql, params);
	}

}
