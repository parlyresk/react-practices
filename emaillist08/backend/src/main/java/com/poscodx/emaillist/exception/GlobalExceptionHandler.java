package com.poscodx.emaillist.exception;

import java.io.OutputStream;
import java.io.PrintWriter;
import java.io.StringWriter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.NoHandlerFoundException;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.poscodx.emaillist.dto.JsonResult;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@ControllerAdvice
public class GlobalExceptionHandler {
	private static final Log logger = LogFactory.getLog(GlobalExceptionHandler.class);

	@ExceptionHandler(Exception.class)
	public void handler(HttpServletRequest request, HttpServletResponse response, Exception e) throws Exception {
		// 1. 로깅(logging)

		StringWriter errors = new StringWriter();
		e.printStackTrace(new PrintWriter(errors));
		logger.error(errors.toString());

		// 2. 요청을 json으로 줘야하므로 구분해야함
		// json 요청: request header에 application/json(o)
		// html 요청: request header에 application/json(x)
		String accept = request.getHeader("accept");

		if (accept.matches(".*application/json.*")) {
			// 3. json 응답
			JsonResult jsonResult = JsonResult.fail(errors.toString());
			String jsonString = new ObjectMapper().writeValueAsString(jsonResult);

			response.setStatus(HttpServletResponse.SC_OK);
			response.setContentType("application/json; charset=utf-8");
			OutputStream os = response.getOutputStream();
			os.write(jsonString.getBytes("utf-8"));
			os.close();

			return;
		}
		// html request
		if (e instanceof NoHandlerFoundException) {

			request.getRequestDispatcher("/error/404").forward(request, response);
			return;
		} else {
			request.setAttribute("error", errors.toString());

			request.getRequestDispatcher("/error/500").forward(request, response);
		}

	}

}
