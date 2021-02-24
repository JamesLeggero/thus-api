CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    username VARCHAR NOT NULL,
    email VARCHAR,
    password VARCHAR NOT NULL
);

CREATE TABLE stocks(
    stock_id SERIAL PRIMARY KEY,
    stock_name TEXT,
    user_id INT REFERENCES users(user_id)
);

CREATE TABLE draws(
    draw_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    drawn_date TIMESTAMP,
    first_rank INT,
    first_rank_reversed BOOLEAN,
    second_rank INT,
    second_rank_reversed BOOLEAN,
    third_rank INT,
    third_rank_reversed BOOLEAN,
    picked_stock TEXT,
    picked_stock_reversed BOOLEAN,
);