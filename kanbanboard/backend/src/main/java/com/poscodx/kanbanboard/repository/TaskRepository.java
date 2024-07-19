package com.poscodx.kanbanboard.repository;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.poscodx.kanbanboard.vo.TaskVo;

@Repository
public class TaskRepository {
	@Autowired
	private SqlSession sqlSession;

	public List<TaskVo> findByCardNo(Integer cardNo) {
		return sqlSession.selectList("kanbanboard.findByCardNo", cardNo);
		
	}

	public List<TaskVo> findAll() {
		return sqlSession.selectList("kanbanboard.findAllTasks");
	}

	public void insert(TaskVo taskVo) {
		sqlSession.insert("kanbanboard.insert",taskVo);
		
	}

	public void delete(int no) {
		sqlSession.delete("kanbanboard.delete",no);
		
	}

	public void update(TaskVo taskVo) {
		sqlSession.update("kanbanboard.update",taskVo);
		
	}

	public int getMaxTaskNo() {
		
		return sqlSession.selectOne("kanbanboard.getMaxTaskNo");
	}

}
