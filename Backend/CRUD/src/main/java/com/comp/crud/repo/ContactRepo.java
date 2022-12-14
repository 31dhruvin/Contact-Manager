package com.comp.crud.repo;

import com.comp.crud.entity.Contact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ContactRepo extends JpaRepository<Contact, Integer> {



    List<Contact> findByUid(Long uid);


}
