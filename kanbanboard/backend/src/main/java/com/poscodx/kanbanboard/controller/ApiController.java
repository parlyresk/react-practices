package com.poscodx.kanbanboard.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.poscodx.kanbanboard.dto.JsonResult;
import com.poscodx.kanbanboard.repository.CardRepository;
import com.poscodx.kanbanboard.repository.TaskRepository;
import com.poscodx.kanbanboard.vo.CardVo;
import com.poscodx.kanbanboard.vo.TaskVo;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/api")
public class ApiController {
	@Autowired
	private CardRepository cardRepository;

	@Autowired
	private TaskRepository taskRepository;

	// task 관련 작업
	// 전부 보이기
	@GetMapping("/tasks")
	public ResponseEntity<JsonResult> getAllTasks(@RequestParam(value = "cardNo", required = false) Integer cardNo) {
		log.info("Request[GET /api/tasks]");
		List<TaskVo> tasks;
		if (cardNo != null) {
			tasks = taskRepository.findByCardNo(cardNo);
			
		} else {
			tasks = taskRepository.findAll();
			
		}
		return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(tasks));
	}
	
	// 가장 큰 태스크 넘버 찾기
	@GetMapping("/taskno")
	public ResponseEntity<JsonResult> getTaskMaxNo() {
		log.info("Request[GET /api/taskno]");
		int maxTaskNo = taskRepository.getMaxTaskNo();
		return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(maxTaskNo+1));
	}

	// 태스크 생성

	@PostMapping("/tasks")
	public ResponseEntity<JsonResult> createTask(@RequestBody TaskVo taskVo) {
		log.info("Request[POST /api/tasks]: {}", taskVo);
		
		taskRepository.insert(taskVo);
		return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(taskVo));

	}

	// 태스크 삭제
	@DeleteMapping("/tasks/{no}")
	public ResponseEntity<JsonResult> deleteTask(@PathVariable("no") int no) {
		log.info("Request[DELETE /api/tasks/{}]", no);
		taskRepository.delete(no);
		return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(no));
	}

	// done 변경

	@PutMapping("/tasks/{no}")
	public ResponseEntity<JsonResult> updateTask(@PathVariable("no") int no, @RequestBody TaskVo taskVo) {
		log.info("Request[PUT /api/tasks/{}]: {}", no, taskVo);
		taskVo.setNo(no);
		System.out.println(taskVo);
		taskRepository.update(taskVo);
		return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(taskVo));
	}
	
	// 카드 관련 작업

    // 모든 카드 가져오기
	@GetMapping("/cards")
    public ResponseEntity<JsonResult> getAllCards() {
        log.info("Request[GET /api/cards]");
        List<CardVo> cards = cardRepository.findAll();
        return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(cards));
    }

}
