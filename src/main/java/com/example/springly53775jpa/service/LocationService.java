package com.example.springly53775jpa.service;

import com.example.springly53775jpa.database.entity.LocationEntity;
import com.example.springly53775jpa.database.repository.LocationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class LocationService {

    private final LocationRepository locationRepository;

    public Page<LocationEntity> findByCountryIgnoreCase(String country, Pageable pageable) {
        Page<LocationEntity> byCountryIgnoreCase = locationRepository.findByCountryIgnoreCase(country, pageable);

        if (byCountryIgnoreCase.getContent().isEmpty()) {
            return Page.empty();
        }

        return byCountryIgnoreCase;
    }

    public LocationEntity findByCity(String city) {
        Optional<LocationEntity> byCity = locationRepository.findByCity(city);
        return byCity.orElse(null);
    }
}
