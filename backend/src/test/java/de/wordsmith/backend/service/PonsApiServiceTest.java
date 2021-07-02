package de.wordsmith.backend.service;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.web.client.RestTemplate;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.*;

class PonsApiServiceTest {

    private final RestTemplate mockedTemplate = mock(RestTemplate.class);
    private final PonsApiService ponsApiService = new PonsApiService(mockedTemplate);

    @Value("${secret}")
    private String secret;

    @Test
    void doesWordExistShouldReturnTrueIfWordExists() {
        //Given
        String url = "https://api.pons.com/v1/dictionary?l=dede&q=integer";
        HttpHeaders headers = new HttpHeaders();
        headers.set("X-Secret", secret);
        when(mockedTemplate.exchange(url, HttpMethod.GET, new HttpEntity<>(headers), Void.class))
                .thenReturn(ResponseEntity.status(HttpStatus.OK).build());

        //When
        boolean exists = ponsApiService.doesWordExist("integer");

        //Then
        assertTrue(exists);
    }

    @Test
    void doesWordExistShouldReturnFalseIfWordDoesNotExist() {
        //Given
        String url = "https://api.pons.com/v1/dictionary?l=dede&q=intkhbworertkew";
        HttpHeaders headers = new HttpHeaders();
        headers.set("X-Secret", secret);
        when(mockedTemplate.exchange(url, HttpMethod.GET, new HttpEntity<>(headers), Void.class))
                .thenReturn(ResponseEntity.status(HttpStatus.NO_CONTENT).build());

        //When
        boolean exists = ponsApiService.doesWordExist("intkhbworertkew");

        //Then
        assertFalse(exists);
    }

}