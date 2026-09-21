package com.towntreasures.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Landmark {
    private int id;
    private String name;
    private String imageUrl;
    private String description;
}
