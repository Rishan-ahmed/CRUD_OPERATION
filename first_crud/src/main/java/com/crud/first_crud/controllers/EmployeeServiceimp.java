package com.crud.first_crud.controllers;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.crud.first_crud.Employee_repository.Emp_repository;
import com.crud.first_crud.Entity.Employee_entity;
import com.crud.first_crud.services.EmployeeService;
 

@Service
public class EmployeeServiceimp implements EmployeeService{

    
    @Autowired
    Emp_repository emp_repository;
    List <Employee> allemployees = new ArrayList<>();
    @Override
    public String creatEmployee(Employee employee) {
        Employee_entity employee_entity = new Employee_entity();
        BeanUtils.copyProperties(employee, employee_entity);
        emp_repository.save(employee_entity);
        return "Saved successfully";

    }

    @Override
    public List<Employee_entity> readEmployees() {
        
        List <Employee_entity> employees = emp_repository.findAll();
        return employees;
    }

    @Override
    public boolean deletEmployee(long id) { 
       Employee_entity emp = emp_repository.findById(id).get();

       emp_repository.delete(emp);
       return true;
    }

    @Override
    public String UpdateEmployee(Employee employee, long id) {
        Employee_entity emp = emp_repository.findById(id).get();
        emp.setName(employee.getName());
        emp.setDepartment(employee.getDepartment());
        emp_repository.save(emp);
        return "Updated Successfully";
    }
    

    
}           


                  
