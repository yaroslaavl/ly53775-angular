package com.example.springly53775jpa.database.repository;

import com.example.springly53775jpa.database.entity.WeatherEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;


@Repository
public interface WeatherRepository extends JpaRepository<WeatherEntity,Integer> {

    @Query("""
        SELECT w
        FROM WeatherEntity w
        JOIN FETCH w.location l
        WHERE (:searchText IS NULL
               OR LOWER(l.city) LIKE LOWER(CONCAT('%', :searchText, '%'))
               OR LOWER(l.country) LIKE LOWER(CONCAT('%', :searchText, '%')))
        AND (w.date > CAST(:fromDate AS date))
    """)
    Page<WeatherEntity> searchWeather(
            @Param("searchText") String searchText,
            @Param("fromDate") LocalDate fromDate,
            Pageable pageable
    );
}
