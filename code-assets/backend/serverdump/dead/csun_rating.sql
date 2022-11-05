CREATE TABLE rating (
    professor_first_name VARCHAR(50) NOT NULL,
    professor_last_name VARCHAR(50) NOT NULL,
    subject VARCHAR(6) NOT NULL,
    catalog_number VARCHAR(10) NOT NULL,
    star_rating DOUBLE(2, 1),
    grade VARCHAR(2),
    difficulty DOUBLE(2, 1),
    retake_professor VARCHAR(4),
    require_textbooks VARCHAR(4),
    mandatory VARCHAR(4),
    review VARCHAR(1000) NOT NULL,
    CONSTRAINT ck_star CHECK (
        0.0 < star_rating
        AND star_rating < 5.0
    ),
    CONSTRAINT ck_difficulty CHECK (
        0.0 < difficulty
        AND difficulty < 5.0
    ),
    CONSTRAINT ck_grade CHECK (
        grade IN (
            'A+',
            'A',
            'A-',
            'B+',
            'B',
            'B-',
            'C+',
            'C',
            'C-',
            'D',
            'D',
            'F'
        )
    ),
    CONSTRAINT ck_retake CHECK (retake_professor IN ('yes', 'no')),
    CONSTRAINT ck_textbooks CHECK (require_textbooks IN ('yes', 'no')),
    CONSTRAINT ck_mandatory CHECK (mandatory IN ('yes', 'no'))
);
CREATE TABLE section (
    class_number INT,
    enrollment_cap INT,
    enrollment_count INT,
    instructor VARCHAR(100),
    days VARCHAR(5),
    location VARCHAR(60),
    start_time CHAR(5),
    end_time CHAR(5),
    catalog_number VARCHAR(10),
    subject VARCHAR(6)
);