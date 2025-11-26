package com.example.springly53775jpa.controller;

import com.example.springly53775jpa.database.entity.WeatherEntity;
import com.example.springly53775jpa.database.repository.WeatherRepository;
import com.example.springly53775jpa.service.WeatherService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;

@RestController
@RequiredArgsConstructor
@RequestMapping("/measurement")
public class WeatherController {

    private final WeatherService weatherService;

    @GetMapping
    public ResponseEntity<Page<WeatherEntity>> findByLocationAndDate(@RequestParam(required = false, defaultValue = "") String locationSearch,
                                                              @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate fromDate,
                                                              @RequestParam(defaultValue = "0") int page,
                                                              @RequestParam(defaultValue = "5") int size) {
        Pageable pageable = PageRequest.of(page, size);
        return ResponseEntity.ok(weatherService.findByDateAndLocation(locationSearch, fromDate, pageable));
    }
}
