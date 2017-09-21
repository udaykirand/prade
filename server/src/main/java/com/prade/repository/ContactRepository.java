package com.prade.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.prade.model.QuoteRequest;

public interface ContactRepository extends JpaRepository<QuoteRequest, Long> {

}
