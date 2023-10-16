package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Track;
import com.example.demo.service.AuthenticationService;
import com.example.demo.service.TrackService;

import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class TackController {
	
	@Autowired
	private TrackService ts;
	@GetMapping("/gettrack")
	public List<Track> getting(){
		return ts.getAllTrack();
	}

	@PostMapping("/saveTrack")
	public void saveTrack(@RequestBody Track track) {
		ts.addTrack(track);
	}
	@PutMapping("/updateTrack{id}")
	public void updateTrack(@RequestBody Track track,@PathVariable int id) {
		
		ts.updateTrack(track);
	}
	@DeleteMapping("/deletetrack/{id}")
	public void deleteTrac(@PathVariable int id) {
		ts.deleteTrack(id);
		}
}
