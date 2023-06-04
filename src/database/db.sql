CREATE SCHEMA IF NOT EXISTS `fastnfoodius` DEFAULT CHARACTER SET utf8;
USE `fastnfoodius`;

CREATE TABLE IF NOT EXISTS `fastnfoodius`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
)
ENGINE = InnoDB;

INSERT INTO `fastnfoodius`.`users` (name, email) VALUES ('felipe', 'felipemax.suporteti@gmail.com');
