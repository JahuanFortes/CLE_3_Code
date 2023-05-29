<?php
/**
 * @return array
 */
function Dishes()
{
    return [
        [
            "id" => 1,
            "name" => "Rice",
            "image" => "/img/shutterstock_660137851.jpg",
            "details" => "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur ullam, minima unde magni magnam provident."
        ],
        [
            "id" => 2,
            "name" => "Cake",
            "image" => "/img/B685CC43-D01C-4A43-90CD-DAF49C92E16A.jpeg",
            "details" => "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur ullam, minima unde magni magnam provident."
        ],
        [
            "id" => 3,
            "name" => "Pancake",
            "image" => "/img/shutterstock_558677326_0.jpg",
            "details" => "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur ullam, minima unde magni magnam provident."

        ],
        [
            "id" => 4,
            "name" => "PBJ",
            "image" => "/img/pbj-baycare-clinic-blog.jpg",
            "details" => "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur ullam, minima unde magni magnam provident."
        ],
        [
            "id" => 5,
            "name" => "Eggs",
            "image" => "/img/pristine-sunny-side-up-eggs-8031221-dba532694b054bfb9de2da42bb6f87e7.jpg",
            "details" => "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur ullam, minima unde magni magnam provident."
        ],
        [
            "id" => 6,
            "name" => "Burger",
            "image" => "/img/Cheeseburger-3d7c922.jpg",
            "details" => "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur ullam, minima unde magni magnam provident."
        ],
        [
            "id" => 7,
            "name" => "Chicken",
            "image" => "/img/Crispy-Oven-Baked-Chicken-Wings-feat2.jpg",
            "details" => "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur ullam, minima unde magni magnam provident."
        ],
        [
            "id" => 8,
            "name" => "BreadSticks",
            "image" => "/img/GrissiniBreadSticks-3.jpg",
            "details" => "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur ullam, minima unde magni magnam provident."
        ],
        [
            "id" => 9,
            "name" => "Steak",
            "image" => "/img/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__05__Anova-Steak-Guide-Sous-Vide-Photos15-beauty-159b7038c56a4e7685b57f478ca3e4c8.jpg",
            "details" => "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur ullam, minima unde magni magnam provident."
        ],
        [
            "id" => 10,
            "name" => "Toast",
            "image" => "/img/20210919052613-breakfast-toast-topper-1030x687.jpg",
            "details" => "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur ullam, minima unde magni magnam provident."
        ],
    ];
}

/**
 * @param $id
 * @return mixed
 */
function getDish($id)
{
    $tags = [
        1 => [
            [
                "id" => "1",
                "name" => "Rice",
                "time" => "60 min",
                "require" => "pot",
                "image" => "/img/shutterstock_660137851.jpg",
                "details" => "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur ullam, minima unde magni magnam provident."
            ]
        ],
        2 => [
            [
                "id" => "2",
                "name" => "Cake",
                "time" => "60 min",
                "require" => "pot",
                "image" => "/img/B685CC43-D01C-4A43-90CD-DAF49C92E16A.jpeg",
                "details" => "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur ullam, minima unde magni magnam provident."
            ]
        ],
        3 => [
            [
                "id" => "3",
                "name" => "Pancake",
                "time" => "60 min",
                "require" => "pot",
                "image" => "/img/shutterstock_558677326_0.jpg",
                "details" => "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur ullam, minima unde magni magnam provident."
            ]
        ],
        4 => [
            [
                "id" => "4",
                "name" => "PBJ",
                "time" => "60 min",
                "require" => "pot",
                "image" => "/img/pbj-baycare-clinic-blog.jpg",
                "details" => "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur ullam, minima unde magni magnam provident."
            ]
        ],
        5 => [
            [
                "id" => "5",
                "name" => "Eggs",
                "time" => "60 min",
                "require" => "pot",
                "image" => "/img/pristine-sunny-side-up-eggs-8031221-dba532694b054bfb9de2da42bb6f87e7.jpg",
                "details" => "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur ullam, minima unde magni magnam provident."
            ]
        ],
        6 => [
            [
                "id" => "6",
                "name" => "Burger",
                "time" => "60 min",
                "require" => "pot",
                "image" => "/img/Cheeseburger-3d7c922.jpg",
                "details" => "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur ullam, minima unde magni magnam provident."
            ]
        ],
        7 => [
            [
                "id" => "7",
                "name" => "Chicken",
                "time" => "60 min",
                "require" => "pot",
                "image" => "/img/Crispy-Oven-Baked-Chicken-Wings-feat2.jpg",
                "details" => "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur ullam, minima unde magni magnam provident."
            ]
        ],
        8 => [
            [
                "id" => "8",
                "name" => "BreadSticks",
                "time" => "60 min",
                "require" => "pot",
                "image" => "/img/GrissiniBreadSticks-3.jpg",
                "details" => "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur ullam, minima unde magni magnam provident."
            ]
        ],
        9 => [
            [
                "id" => "9",
                "name" => "Steak",
                "time" => "60 min",
                "require" => "pot",
                "image" => "/img/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__05__Anova-Steak-Guide-Sous-Vide-Photos15-beauty-159b7038c56a4e7685b57f478ca3e4c8.jpg",
                "details" => "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur ullam, minima unde magni magnam provident."
            ]
        ],
        10 => [
            [
                "id" => "10",
                "name" => "Toast",
                "time" => "60 min",
                "require" => "pot",
                "image" => "/img/20210919052613-breakfast-toast-topper-1030x687.jpg",
                "details" => "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur ullam, minima unde magni magnam provident."
            ]
        ]
    ];

    return $tags[$id];
}