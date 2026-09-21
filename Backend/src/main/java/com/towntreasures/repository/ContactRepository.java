package com.towntreasures.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.towntreasures.models.ContactModel;


@Repository
public interface ContactRepository extends JpaRepository<ContactModel,Integer> {

}
