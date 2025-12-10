package com.example.springly53775jpa.service;

import com.example.springly53775jpa.database.repository.AddressRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class AddressService {

    private  final AddressRepository addressRepository;
}
