package de.wordsmith.backend.controller;

import de.wordsmith.backend.service.PointsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/points")
public class PointsController {

    private final PointsService pointsService;

    @Autowired
    public PointsController(PointsService pointsService) {
        this.pointsService = pointsService;
    }

    @PostMapping
    public void reset(){
        pointsService.reset();
    }
}

