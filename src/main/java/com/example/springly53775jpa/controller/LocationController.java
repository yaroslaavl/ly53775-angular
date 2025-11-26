package com.example.springly53775jpa.controller;

import com.example.springly53775jpa.database.entity.LocationEntity;
import com.example.springly53775jpa.database.entity.WeatherEntity;
import com.example.springly53775jpa.service.LocationService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;

@RestController
@RequiredArgsConstructor
@RequestMapping("/location")
public class LocationController {

    private final LocationService locationService;

    @GetMapping("/by-city")
    public ResponseEntity<LocationEntity> getLocationByCity(@RequestParam String city) {
        return ResponseEntity.ok(locationService.findByCity(city));
    }

    @GetMapping
    public ResponseEntity<Page<LocationEntity>> findByLocationAndDate(@RequestParam String locationSearch,
                                                              @RequestParam(defaultValue = "0") int page,
                                                              @RequestParam(defaultValue = "5") int size) {
        Pageable pageable = PageRequest.of(page, size);
        return ResponseEntity.ok(locationService.findByCountryIgnoreCase(locationSearch, pageable));
    }
}
