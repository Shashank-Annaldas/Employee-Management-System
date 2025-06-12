package com.example.demo.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Employees;
import com.example.demo.Repository.EmployeeRepository;

@RestController
@RequestMapping
@CrossOrigin("http://localhost:3000")
public class EmployeeController {
	
	@Autowired
	private EmployeeRepository repository;
	
	
	
	@PostMapping("/employee")
	public Employees newwmployee(@RequestBody Employees emp) {
		return repository.save(emp);
	}
	
	@GetMapping("/employees")
	public List<Employees> getAllEmployees(){
		return repository.findAll();
	}
	
	@GetMapping("/employees/{id}")
	public Employees getEmployeeId(@PathVariable Long id ) {
		return repository.findById(id).orElse(null);
	}
	
	@PutMapping("/employee/{id}")
	public String update(@PathVariable Long id, @RequestBody Employees emp) {
		Optional<Employees> optionalEmployee=repository.findById(id);
		
		if(optionalEmployee.isEmpty()) {
			return "Not found";
		}
		Employees employee=optionalEmployee.get();
		employee.setName(emp.getName());
        employee.setEmail(emp.getEmail());
        employee.setPhone(emp.getPhone());
        employee.setDesignation(emp.getDesignation());
        employee.setDepartment(emp.getDepartment());
        employee.setJoining_date(emp.getJoining_date());
        
        repository.save(employee);
        return "Employee updated successfully";
        
	}
	
	@DeleteMapping("/employee/{id}")
	public String DeleteEmployee(@PathVariable Long id) {
		if(!repository.existsById(id)) {
			return "Not found";
		}
		repository.deleteById(id);
		return "Delete";
	}
}
