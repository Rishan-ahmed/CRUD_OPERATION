package com.crud.first_crud.Employee_repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.crud.first_crud.Entity.Employee_entity;

@Repository
public interface Emp_repository extends JpaRepository <Employee_entity, Long>{

    
}  
