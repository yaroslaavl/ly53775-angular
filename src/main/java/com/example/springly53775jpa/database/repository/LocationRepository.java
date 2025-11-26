package com.example.springly53775jpa.database.repository;

import com.example.springly53775jpa.database.entity.LocationEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface LocationRepository extends JpaRepository<LocationEntity,Integer> {

    Page<LocationEntity> findByCountryIgnoreCase(String country, Pageable pageable);

    Optional<LocationEntity> findByCity(String city);
}
