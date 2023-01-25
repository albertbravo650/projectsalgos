package com.albertbravo.musicmood.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import com.albertbravo.musicmood.models.Song;
import com.albertbravo.musicmood.models.User;
import com.albertbravo.musicmood.services.SongService;
import com.albertbravo.musicmood.services.UserService;

@Controller
public class SecondController {
	
	@Autowired
	UserService userServ;
	
	@Autowired
	SongService songServ;
	
	// show one song
	@GetMapping("/songs/{id}")
	public String showOneSong(Model model, @PathVariable("id") Long id, HttpSession session) {
		if(session.getAttribute("userId") == null) {
			return "redirect:/";
		}
		Song song = songServ.findSong(id);
		model.addAttribute("song", song);
		model.addAttribute("loggedUser", userServ.findById((Long) session.getAttribute("userId")));
		return "show.jsp";
	}
	
	// add a song
	@GetMapping("/songs/new")
	public String newSong(@ModelAttribute("song") Song song, Model viewModel,
			HttpSession session) {
		// if not logged in get sent back
		if(session.getAttribute("userId") == null) {
			return "redirect:/";
		}
		User loggedUser = userServ.findById((Long) session.getAttribute("userId"));
		viewModel.addAttribute("loggedUser", loggedUser);
		return "add.jsp";
	}
	
	@PostMapping("/songs/new")
	public String add(
			@Valid @ModelAttribute("song") Song song,
			BindingResult result, Model model, HttpSession session) {
//		if(session.getAttribute("userId") == null) {
//			return "redirect:/";
//		}
		if(result.hasErrors()) {
			return "add.jsp";
		}
		else {
//			if(session.getAttribute("userId") == null) {
//				return "redirect:/";
//			}
			songServ.createSong(song);
			return "redirect:/songs";
		}
	}
			
	@GetMapping("/songs/{id}/edit")
	public String edit(@PathVariable("id") Long id, Model model, HttpSession session) {
		if(session.getAttribute("userId") == null) {
			return "redirect:/";
		}
		Song song = songServ.findSong(id);
		model.addAttribute("song", song);
		return "edit.jsp";
	}
//		
	@PutMapping("/songs/{id}")
	public String update(
			@Valid @ModelAttribute("song") Song song,
			BindingResult result) {
		if(result.hasErrors()) {
			return "edit.jsp";
		}
		else {
			songServ.updateSong(song);
			return "redirect:/songs/{id}";
		}
	}
//			
	@DeleteMapping("/songs/{id}/delete")
	public String destroy(@PathVariable("id") Long id, HttpSession session) {
		if(session.getAttribute("userId") == null) {
			return "redirect:/";
		}
		else {
			songServ.deleteSong(id);
			return "redirect:/songs";
		}
		
	}
}
