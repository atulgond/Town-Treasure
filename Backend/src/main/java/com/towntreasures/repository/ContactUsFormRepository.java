package com.towntreasures.repository;



import com.towntreasures.models.ContactUsForm;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactUsFormRepository extends JpaRepository<ContactUsForm,Integer> {

    Optional<ContactUsForm> findByEmail(String email);
}
