CREATE TABLE media (
  id INT PRIMARY KEY,
  url VARCHAR(255),
  type ENUM('video', 'image'),
  movie_id INT,
  FOREIGN KEY (movie_id) REFERENCES movies(id)
);

CREATE TABLE genres (
  id INT PRIMARY KEY,
  name VARCHAR(255)
);

CREATE TABLE movies (
  id INT PRIMARY KEY,
  title VARCHAR(255),
  description TEXT,
  release_date DATE,
  duration INT,
  rating DECIMAL(3, 1)
);

CREATE TABLE movies_genres (
  movie_id INT,
  genre_id INT,
  PRIMARY KEY (movie_id, genre_id),
  FOREIGN KEY (movie_id) REFERENCES movies(id),
  FOREIGN KEY (genre_id) REFERENCES genres(id)
);

CREATE TABLE reviews (
  id INT PRIMARY KEY,
  movie_id INT,
  user_id INT,
  rating INT,
  comment TEXT,
  FOREIGN KEY (movie_id) REFERENCES movies(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255)
);

CREATE TABLE artist_skills (
  artist_id INT,
  skill VARCHAR(255),
  PRIMARY KEY (artist_id, skill),
  FOREIGN KEY (artist_id) REFERENCES artists(id)
);

CREATE TABLE artists (
  id INT PRIMARY KEY,
  name VARCHAR(255),
  gender ENUM('male', 'female', 'non-binary'),
  birth_date DATE
);

CREATE TABLE performances (
  id INT PRIMARY KEY,
  artist_id INT,
  movie_id INT,
  role VARCHAR(255),
  FOREIGN KEY (artist_id) REFERENCES artists(id),
  FOREIGN KEY (movie_id) REFERENCES movies(id)
);
