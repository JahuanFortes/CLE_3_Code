<?php

/**
 * @return array
 */
function Sport()
{
    return [
        [
            "id" => 1,
            "name" => "Zwemmen"
        ],
        [
            "id" => 2,
            "name" => "Voetbal"
        ],
        [
            "id" => 3,
            "name" => "Tennis"
        ],
        [
            "id" => 4,
            "name" => "Judo"
        ],
        [
            "id" => 5,
            "name" => "Atletiek"
        ],
        [
            "id" => 6,
            "name" => "Boogschieten"
        ],
        [
            "id" => 7,
            "name" => "Blindenvoetbal"
        ],
        [
            "id" => 8,
            "name" => "Roeien"
        ],
        [
            "id" => 9,
            "name" => "Basketbal"
        ],
        [
            "id" => 10,
            "name" => "Bankdrukken"
        ],
    ];
}

/**
 * @param $id
 * @return mixed
 */
function getArticle($id)
{
    $tags = [
        1 => [
            [
                "id" => "1",
                "title" => "game 1",
                "sport" => "test 1",
                "tags" => 'Zwemmen',
                "desription" => "1"
            ],
            [
                "id" => "2",
                "title" => "game 2",
                "sport" => "test 1.1",
                "tags" => 'Zwemmen',
                "desription" => "1"
            ]
        ],
        2 => [
            [
                "id" => "3",
                "title" => "game 1",
                "sport" => "test 2",
                "tags" => 'Voetbal',
                "desription" => "2"
            ]
        ],
        3 => [
            [
                "id" => "4",
                "title" => "game 1",
                "sport" => "test 3",
                "tags" => 'Tennis',
                "desription" => "3"
            ]
        ],
        4 => [
            [
                "id" => "5",
                "title" => "game 1",
                "sport" => "test 4",
                "tags" => 'Judo',
                "desription" => "4"
            ]
        ],
        5 => [
            [
                "id" => "6",
                "title" => "game 1",
                "sport" => "test 5",
                "tags" => 'Atletiek',
                "desription" => "5"
            ]
        ],
        6 => [
            [
                "id" => "7",
                "title" => "game 1",
                "sport" => "test 6",
                "tags" => 'Boogschieten',
                "desription" => "6"
            ]
        ],
        7 => [
            [
                "id" => "8",
                "title" => "game 1",
                "sport" => "test 7",
                "tags" => 'Blindenvoetbal',
                "desription" => "7"
            ]
        ],
        8 => [
            [
                "id" => "9",
                "title" => "game 1",
                "sport" => "test 8",
                "tags" => 'Roeien',
                "desription" => "8"
            ]
        ],
        9 => [
            [
                "id" => "10",
                "title" => "game 1",
                "sport" => "test 9",
                "tags" => 'Basketbal',
                "desription" => "9"
            ]
        ],
        10 => [
            [
                "id" => "11",
                "title" => "game 1",
                "sport" => "test 10",
                "tags" => 'Bankdrukken',
                "desription" => "10"
            ]
        ],
    ];

    return $tags[$id];
}
?>