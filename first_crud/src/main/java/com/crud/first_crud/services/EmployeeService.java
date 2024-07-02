package com.crud.first_crud.services;

import com.crud.first_crud.Entity.Employee_entity;
import com.crud.first_crud.controllers.Employee;
import java.util.List;

public interface EmployeeService {
    String creatEmployee(Employee employee);
    List<Employee_entity> readEmployees ();
    boolean deletEmployee (long id);
    String UpdateEmployee(Employee employee, long id);
}
