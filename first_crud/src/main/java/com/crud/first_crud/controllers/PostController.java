package com.crud.first_crud.controllers;

import org.springframework.web.bind.annotation.RestController;
import com.crud.first_crud.Entity.Employee_entity;
import com.crud.first_crud.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import java.util.List;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;

 

@RestController

public class PostController {
    @Autowired
    private EmployeeService employeeService;
    @PostMapping("employee")
    public String postMethodName(@RequestBody Employee employee) {
        
       return employeeService.creatEmployee(employee);
        
    }
    @GetMapping("employee")
    public List<Employee_entity> getEmployees() {
        
        return employeeService.readEmployees();
    }
    @DeleteMapping ("employee/{id}")
        public String deleteEmployee(@PathVariable long id){
            if (employeeService.deletEmployee(id)){
                return "deleted successfully";
            }
            else{
                return "Not Found";
            }
             
    }

    @PutMapping("employee/{id}")
    public String putMethodName(@RequestBody Employee employee,@PathVariable long id) {
       
        return employeeService.UpdateEmployee(employee, id);
    }
}
   
    

