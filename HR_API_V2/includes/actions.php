<?php
/**
 * @return array
 */
function Dishes()
{
    return [
        [
            "id" => 1,
            "name" => "Rijst"
        ],
        [
            "id" => 2,
            "name" => "Kale"
        ],
        [
            "id" => 3,
            "name" => "Lasagna"
        ],
        [
            "id" => 4,
            "name" => "Kebab"
        ],
        [
            "id" => 5,
            "name" => "Paella"
        ],
        [
            "id" => 6,
            "name" => "Paella"
        ],
        [
            "id" => 7,
            "name" => "Paella"
        ],
        [
            "id" => 8,
            "name" => "Paella"
        ],
        [
            "id" => 9,
            "name" => "Paella"
        ],
        [
            "id" => 10,
            "name" => "Paella"
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
                "title" => "game 1",
                "sport" => "test 1",
                "tags" => 'Zwemmen',
                "desription" => "1"
           ]
        ],
        2 => [
            [

            ]
        ],
        3 => [
            [

            ]
        ],
        4 => [
            [

            ]
        ],
        5 => [
            [

            ]
        ],
        6 => [
            [

            ]
        ],
        7 => [
            [

            ]
        ],
        8 => [
            [

            ]
        ],
        9 => [
            [

            ]
        ],
        10 => [
            [

            ]
        ]
    ];

    return $tags[$id];
}