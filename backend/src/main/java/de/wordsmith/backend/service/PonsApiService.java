package de.wordsmith.backend.service;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

@RequiredArgsConstructor
@Service
public class PonsApiService {

    private final String ponsApi = "https://api.pons.com/v1/dictionary?l=dede&q=";
    private final RestTemplate restTemplate;
    @Value("${secret}")
    private String secret;

    public boolean doesWordExist(String wordText) {
        String requestString = ponsApi + wordText;
        try {
            HttpHeaders httpHeaders = new HttpHeaders();
            httpHeaders.set("X-Secret", secret);
            HttpEntity httpEntity = new HttpEntity(httpHeaders);
            ResponseEntity<Void> response = restTemplate.exchange(requestString, HttpMethod.GET, httpEntity, Void.class);
            HttpStatus statusCode = response.getStatusCode();
            return statusCode.equals(HttpStatus.OK);
        } catch (HttpClientErrorException e) {
            System.out.println(e.getMessage());
            return false;
        }
    }

}
