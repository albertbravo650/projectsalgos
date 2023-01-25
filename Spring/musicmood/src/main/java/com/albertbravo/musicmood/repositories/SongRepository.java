package com.albertbravo.musicmood.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.albertbravo.musicmood.models.Song;

public interface SongRepository extends CrudRepository<Song, Long> {
	List<Song> findAll();
}
