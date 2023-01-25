package com.albertbravo.musicmood.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.albertbravo.musicmood.models.Song;
import com.albertbravo.musicmood.repositories.SongRepository;

@Service
public class SongService {
	// adding the song repository as a dependency
	private final SongRepository songRepo;
	
	public SongService(SongRepository songRepo) {
		this.songRepo = songRepo;
	}
	
	// returns all songs
	public List<Song> allSongs() {
		return songRepo.findAll();
	}
	
	// create a song
	public Song createSong(Song s) {
		return songRepo.save(s);
	}
	
	public Song findSong(Long songId) {
		Optional<Song> optionalSong = songRepo.findById(songId);
		if(optionalSong.isPresent()) {
			return optionalSong.get();
		}
		else {
			return null;
		}
	}
	
	public Song updateSong(Song changedSong) {
		return songRepo.save(changedSong);
	}
		
	//Delete a song
	public void deleteSong(Long songId) {
		songRepo.deleteById(songId);
	}
}
