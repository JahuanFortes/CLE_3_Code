<?php
/**
 * @return array
 */
function Dishes()
{
    return [
        [
            "id" => 1,
            "name" => "Rijst",
            "image" => "/img/shutterstock_660137851.jpg"
        ],
        [
            "id" => 2,
            "name" => "Kale",
            "image" => "/img/B685CC43-D01C-4A43-90CD-DAF49C92E16A.jpeg"
        ],
        [
            "id" => 3,
            "name" => "Lasagna",
            "image" => "/img/shutterstock_558677326_0.jpg"

        ],
        [
            "id" => 4,
            "name" => "Kebab",
            "image" => "/img/pbj-baycare-clinic-blog.jpg"
        ],
        [
            "id" => 5,
            "name" => "Paella",
            "image" => "/img/pristine-sunny-side-up-eggs-8031221-dba532694b054bfb9de2da42bb6f87e7.jpg"
        ],
        [
            "id" => 6,
            "name" => "Paella",
            "image" => "/img/20210919052613-breakfast-toast-topper-1030x687.jpg"
        ],
        [
            "id" => 7,
            "name" => "Paella",
            "image" => "/img/20210919052613-breakfast-toast-topper-1030x687.jpg"
        ],
        [
            "id" => 8,
            "name" => "Paella",
            "image" => "/img/20210919052613-breakfast-toast-topper-1030x687.jpg"
        ],
        [
            "id" => 9,
            "name" => "Paella",
            "image" => "/img/20210919052613-breakfast-toast-topper-1030x687.jpg"
        ],
        [
            "id" => 10,
            "name" => "Paella",
            "image" => "/img/20210919052613-breakfast-toast-topper-1030x687.jpg"
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
                "title" => "food 1",
                "time" => "60 min",
                "require" => "pot",
                "image" => "/img/20210919052613-breakfast-toast-topper-1030x687.jpg"

            ]
        ],
        2 => [
            [
                "id" => "2",
                "title" => "food 1",
                "time" => "60 min",
                "require" => "pot",
                "image" => "/img/20210919052613-breakfast-toast-topper-1030x687.jpg"

            ]
        ],
        3 => [
            [
                "id" => "3",
                "title" => "food 1",
                "time" => "60 min",
                "require" => "pot",
                "image" => "/img/20210919052613-breakfast-toast-topper-1030x687.jpg"

            ]
        ],
        4 => [
            [
                "id" => "4",
                "title" => "food 1",
                "time" => "60 min",
                "require" => "pot",
                "image" => "/img/20210919052613-breakfast-toast-topper-1030x687.jpg"

            ]
        ],
        5 => [
            [
                "id" => "5",
                "title" => "food 1",
                "time" => "60 min",
                "require" => "pot",
                "image" => "/img/20210919052613-breakfast-toast-topper-1030x687.jpg"

            ]
        ],
        6 => [
            [
                "id" => "6",
                "title" => "food 1",
                "time" => "60 min",
                "require" => "pot",
                "image" => "/img/20210919052613-breakfast-toast-topper-1030x687.jpg"
            ]
        ],
        7 => [
            [
                "id" => "7",
                "title" => "food 1",
                "time" => "60 min",
                "require" => "pot",
                "image" => "/img/20210919052613-breakfast-toast-topper-1030x687.jpg"

            ]
        ],
        8 => [
            [
                "id" => "8",
                "title" => "food 1",
                "time" => "60 min",
                "require" => "pot",
                "image" => "/img/20210919052613-breakfast-toast-topper-1030x687.jpg"

            ]
        ],
        9 => [
            [
                "id" => "9",
                "title" => "food 1",
                "time" => "60 min",
                "require" => "pot",
                "image" => "/img/20210919052613-breakfast-toast-topper-1030x687.jpg"

            ]
        ],
        10 => [
            [
                "id" => "10",
                "title" => "food 10",
                "time" => "60 min",
                "require" => "pot",
                "image" => "/img/20210919052613-breakfast-toast-topper-1030x687.jpg"

            ]
        ]
    ];

    return $tags[$id];
}