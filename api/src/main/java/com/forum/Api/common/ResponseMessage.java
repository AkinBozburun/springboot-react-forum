package com.forum.Api.common;

import com.forum.Api.business.responses.ResponseType;
import com.forum.Api.business.responses.ResponseWrapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class ResponseMessage {
    public static <T> ResponseEntity<ResponseWrapper<T>> generateResponseMessage(ResponseType responseType, T data, HttpStatus status) {
        ResponseWrapper<T> response = new ResponseWrapper<>(responseType, data);
        return new ResponseEntity<>(response, status);
    }
}
