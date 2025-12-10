package com.example.springly53775jpa.service;

import com.example.springly53775jpa.database.entity.Address;
import com.example.springly53775jpa.database.entity.Person;
import com.example.springly53775jpa.database.repository.AddressRepository;
import com.example.springly53775jpa.database.repository.PersonRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class PersonService {

    private final AddressRepository addressRepository;
    private final PersonRepository personRepository;

    @Transactional(readOnly = true)
    public List<Person> getAll() {
        List<Person> all = personRepository.findAll();
        return all;
    }

    public Person getById(Long id) {
        return personRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Person not found: " + id));
    }

    @Transactional
    public Person add(Person person) {

        if (person.getFirstName() == null || person.getFamilyName() == null) {
            throw new IllegalArgumentException("Invalid data: missing basic person fields.");
        }

        Address address = person.getAddress();
        if (address == null) {
            throw new IllegalArgumentException("Invalid data: missing address.");
        }

        if (address.getId() == null) {
            address = addressRepository.save(address);
        }

        person.setAddress(address);
        return personRepository.save(person);
    }

    @Transactional
    public void delete(Long id) {
        if (!personRepository.existsById(id)) {
            throw new RuntimeException("Person not found: " + id);
        }
        personRepository.deleteById(id);
    }
}
