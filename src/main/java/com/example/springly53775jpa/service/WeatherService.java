package com.example.springly53775jpa.service;

import com.example.springly53775jpa.database.entity.WeatherEntity;
import com.example.springly53775jpa.database.repository.WeatherRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;

@Slf4j
@Service
@RequiredArgsConstructor
public class WeatherService {

    private final WeatherRepository weatherRepository;

    @Transactional(readOnly = true)
    public Page<WeatherEntity> findByDateAndLocation(String locationSearch, LocalDate fromDate, Pageable pageable) {
        log.info("Attempting to find by date {} and location {}",  fromDate, locationSearch);
        Page<WeatherEntity> weatherEntities = weatherRepository.searchWeather(locationSearch, fromDate, pageable);

        if (weatherEntities.getContent().isEmpty()) {
            return Page.empty();
        }

        return weatherEntities;
    }
}
