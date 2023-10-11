package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Track;
import com.example.demo.repository.TrackRepoInt;

@Service
public class TrackService {
	
    @Autowired
	public TrackRepoInt tr;
	
	public List<Track> getAllTrack(){
		return tr.findAll();
	}
	
	public void addTrack(Track track){
		 tr.save(track);
	}
	public  void updateTrack(Track track) {
		tr.save(track);
	}
	public void deleteTrack(int id) {
		tr.deleteById(id);
	}
}
