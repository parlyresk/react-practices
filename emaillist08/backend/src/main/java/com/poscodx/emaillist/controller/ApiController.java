package com.poscodx.emaillist.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.poscodx.emaillist.dto.JsonResult;
import com.poscodx.emaillist.repository.EmaillistRepository;
import com.poscodx.emaillist.vo.EmaillistVo;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
public class ApiController {
	@Autowired
	private EmaillistRepository emaillistRepository;
	
	@GetMapping("/api")
	public ResponseEntity<JsonResult> read(@RequestParam(value="kw", required=true, defaultValue="") String keyword) {
		log.info("Request[GET /api]:" + keyword);
		
		return ResponseEntity
					.status(HttpStatus.OK)
					.body(JsonResult.success(emaillistRepository.findAll(keyword)));
	}
	
	@PostMapping("/api")
	public ResponseEntity<JsonResult> create(@RequestBody EmaillistVo vo) {
		log.info("Request[POST /api]:" + vo);
		
		emaillistRepository.insert(vo);
		
		return ResponseEntity
					.status(HttpStatus.OK)
					.body(JsonResult.success(vo));
	}
	
	@DeleteMapping("/api/delete/{no}")
	public ResponseEntity<JsonResult> delete(@PathVariable("no") int no) {
	    log.info("Request[DELETE /api/delete/{}]", no);
	    emaillistRepository.delete(no);
	    
	    return ResponseEntity
	            .status(HttpStatus.OK)
	            .body(JsonResult.success(no));
	}
	
}
